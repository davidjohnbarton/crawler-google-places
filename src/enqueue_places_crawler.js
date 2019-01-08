const Apify = require('apify');

const { sleep, log } = Apify.utils;
const { DEFAULT_TIMEOUT, LISTING_PAGINATION_KEY } = require('./consts');

const waitForGoogleMapLoader = (page) => page.waitFor(() => !document.querySelector('#searchbox')
    .classList.contains('loading'), { timeout: DEFAULT_TIMEOUT });

const enqueueAllUrlsFromPagination = async (page, requestQueue, paginationFrom, maxPlacesPerCrawl) => {
    let results = await page.$$('.section-result');
    const resultsCount = results.length;

    for (let resultIndex = 0; resultIndex < resultsCount; resultIndex++) {
        // Need to get results again, pupptr lost context..
        await page.waitForSelector('.searchbox', { timeout: DEFAULT_TIMEOUT });
        await waitForGoogleMapLoader(page);
        await page.waitFor((resultIndex) => {
            return document.querySelectorAll('.section-result h3').length >= resultIndex + 1;
        }, { timeout: DEFAULT_TIMEOUT }, resultIndex);
        results = await page.$$('.section-result');
        const link = await results[resultIndex].$('h3');
        await link.click();
        await waitForGoogleMapLoader(page);
        await page.waitForSelector('.section-back-to-list-button', { timeout: DEFAULT_TIMEOUT });
        // After redirection to detail page, save the URL to Request queue to process it later
        const url = page.url();
        await requestQueue.addRequest({ url, userData: { label: 'detail' } });
        log.info(`Added to queue ${url}`);
        if (maxPlacesPerCrawl && paginationFrom + resultIndex + 1 > maxPlacesPerCrawl) {
            log.info(`Reach max places per crawl ${maxPlacesPerCrawl}, stopped enqueuing new places.`);
            return true;
        }

        await page.click('.section-back-to-list-button');
    }
};

/**
 * Adds all places from listing to queue
 * @param page
 * @param searchString
 * @param requestQueue
 * @param maxPlacesPerCrawl
 */
const enqueueAllPlaceDetails = async (page, searchString, requestQueue, maxPlacesPerCrawl) => {
    // Save state of listing pagination
    // NOTE: If pageFunction failed crawler skipped already scraped pagination
    const listingPagination = await Apify.getValue(LISTING_PAGINATION_KEY) || {};

    await page.type('#searchboxinput', searchString);
    await sleep(5000);
    await page.click('#searchbox-searchbutton');
    await sleep(5000);
    await waitForGoogleMapLoader(page);
    try {
        await page.waitForSelector('h1.section-hero-header-title');
    } catch (e) {
        // It can happen, if there are listing, not just detail page
    }

    // In case there is no listing, put just detail page to queue
    const maybeDetailPlace = await page.$('h1.section-hero-header-title');
    if (maybeDetailPlace) {
        const url = page.url();
        await requestQueue.addRequest({ url, userData: { label: 'detail' } });
        return;
    }

    // In case there is listing, go through all details, limits with maxPlacesPerCrawl
    const nextButtonSelector = '[jsaction="pane.paginationSection.nextPage"]';
    let isFinished;
    while (true) {
        await page.waitForSelector(nextButtonSelector, { timeout: DEFAULT_TIMEOUT });
        const paginationText = await page.$eval('.n7lv7yjyC35__right', (el) => el.innerText);
        const [fromString, toString] = paginationText.match(/\d+/g);
        const from = parseInt(fromString);
        const to = parseInt(toString);
        if (listingPagination.from && from <= listingPagination.from) {
            log.debug(`Skiped pagination ${from} - ${to}, already done!`);
        } else {
            log.debug(`Added links from pagination ${from} - ${to}`);
            isFinished = await enqueueAllUrlsFromPagination(page, requestQueue, from, maxPlacesPerCrawl);
            listingPagination.from = from;
            listingPagination.to = to;
            await Apify.setValue(LISTING_PAGINATION_KEY, listingPagination);
        }
        if (!isFinished) await page.waitForSelector(nextButtonSelector, { timeout: DEFAULT_TIMEOUT });
        const isNextPaginationDisabled = await page.evaluate((nextButtonSelector) => {
            return !!$(nextButtonSelector).attr('disabled');
        }, nextButtonSelector);
        const noResultsEl = await page.$('.section-no-result-title');
        if (isNextPaginationDisabled || noResultsEl || (maxPlacesPerCrawl && maxPlacesPerCrawl <= to) || isFinished) {
            break;
        } else {
            // NOTE: puppeteer API click() didn't work :|
            await page.evaluate((sel) => $(sel).click(), nextButtonSelector);
            await waitForGoogleMapLoader(page);
        }
    }

    listingPagination.isFinish = true;
    await Apify.setValue(LISTING_PAGINATION_KEY, listingPagination);
};

module.exports = { enqueueAllPlaceDetails };
