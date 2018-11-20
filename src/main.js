/**
 * Run the following example to perform a recursive crawl of a website using Puppeteer.
 */
const Apify = require('apify');

const { sleep } = Apify.utils;
const { injectJQuery } = Apify.utils.puppeteer;

const DEFAULT_TIMEOUT = 60 * 1000; // 60 sec

const sleepPromised = ms => new Promise(resolve => setTimeout(resolve, ms));

const logError = (msg, e) => {
    console.log(`ERROR: ${msg}`);
    console.error(e);
};
const logInfo = (msg) => console.log(`INFO: ${msg}`);
const logDebug = (msg) => console.log(`DEBUG: ${msg}`);

/**
 * Method scrolls page to xpos, ypos.
 */
const scrollTo = (page, xpos, ypos) => page.evaluate((x, y) => window.scrollTo(x, y), xpos, ypos);

/**
 * Method returns info about page scroll
 */
const getPageScrollInfo = page => page.evaluate(() => {
    return {
        scrollHeight: document.documentElement.scrollHeight,
        scrollTop: document.documentElement.scrollTop,
        clientHeight: document.documentElement.clientHeight,
    };
});

/**
 * Scroll to down page until infinite scroll ends or reaches maxHeight
 * @param page - instance of crawled page
 * @param maxHeight - max height of document to scroll
 * @return {Promise.<void>}
 */
const infiniteScroll = async (page, maxHeight) => {
    const maybeResourceTypesInfiniteScroll = ['xhr', 'fetch', 'websocket', 'other'];
    const stringifyScrollInfo = (scrollInfo) => {
        return `scrollTop=${scrollInfo.scrollTop}, ` +
            `clientHeight=${scrollInfo.clientHeight}, ` +
            `scrollHeight=${scrollInfo.scrollHeight}, ` +
            `maxHeight=${maxHeight}`;
    };
    const defaultScrollDelay = 500;

    // Catch and count all pages request for resources
    const resourcesStats = {
        requested: 0,
        finished: 0,
        failed: 0,
        forgotten: 0,
    };
    const pendingRequests = {};
    page.on('request', (msg) => {
        if (maybeResourceTypesInfiniteScroll.includes(msg.resourceType)) {
            pendingRequests[msg._requestId] = Date.now();
            resourcesStats.requested++;
        }
    });
    page.on('requestfailed', (msg) => {
        if (maybeResourceTypesInfiniteScroll.includes(msg.resourceType)) {
            if (pendingRequests[msg._requestId]) {
                delete pendingRequests[msg._requestId];
                resourcesStats.failed++;
            }

        }
    });
    page.on('requestfinished', (msg) => {
        if (maybeResourceTypesInfiniteScroll.includes(msg.resourceType)) {
            if (pendingRequests[msg._requestId]) {
                delete pendingRequests[msg._requestId];
                resourcesStats.finished++;
            }
        }
    });

    try {
        let scrollInfo = await getPageScrollInfo(page);
        logInfo(`Infinite scroll started (${stringifyScrollInfo(scrollInfo)}).`);

        while (true) {
            scrollInfo = await getPageScrollInfo(page);

            // Forget pending resources that didn't finish loading in time
            const now = Date.now();
            const timeout = 30000; // TODO: use resourceTimeout
            Object.keys(pendingRequests)
            .forEach((requestId) => {
                if (pendingRequests[requestId] + timeout < now) {
                    delete pendingRequests[requestId];
                    resourcesStats.forgotten++;
                }
            });

            logDebug(`Infinite scroll stats (${stringifyScrollInfo(scrollInfo)} resourcesStats=${JSON.stringify(resourcesStats)}).`);

            const pendingRequestsCount = resourcesStats.requested - (resourcesStats.finished + resourcesStats.failed + resourcesStats.forgotten);
            if (pendingRequestsCount === 0) {
                // If the page is scrolled to the very bottom or beyond maximum height, we are done
                if (scrollInfo.scrollTop + scrollInfo.clientHeight >= Math.min(scrollInfo.scrollHeight, maxHeight)) break;
                // Otherwise we try to scroll down
                await scrollTo(page, 0, scrollInfo.scrollHeight);
            }

            await sleepPromised(defaultScrollDelay);
        }
        // Scroll back up, otherwise the screenshot of the browser would only show the bottom of
        // the page
        await scrollTo(page, 0, 0);

        logInfo(`Infinite scroll finished (${stringifyScrollInfo(scrollInfo)} resourcesStats=${JSON.stringify(resourcesStats)})`);
    } catch (err) {
        logError('An exception thrown in infiniteScroll()', err);
    }
};

const enqueueAllUrlsFromPagination = async (page, requestQueue) => {
    const detailLinks = [];
    let results = await page.$$('.section-result');
    const resultsCount = results.length;
    for (let resultIndex = 0; resultIndex < resultsCount; resultIndex++) {
        // Need to get results again, pupptr lost context..
        results = await page.$$('.section-result');
        const link = await results[resultIndex].$('h3');
        await link.click();
        await page.waitForSelector('.section-back-to-list-button');
        const url = page.url();
        await requestQueue.addRequest({ url, userData: { label: 'detail' } });
        await page.click('.section-back-to-list-button');
        await sleep(5000);
    }
    return detailLinks;
};

Apify.main(async () => {
    const { searchString, searchViewport } = await Apify.getValue('INPUT');

    if (!searchString) throw new Error('Attribute searchString missing in input.');

    console.log('Scraping Google Places for search string:', searchString);

    let startUrl;
    if (searchViewport) {
        const { lat, lng, zoom = 10 } = searchViewport
        if (!lat || !lng) throw new Error('You have to defined lat and lng for searchViewport!');
        startUrl = `https://www.google.com/maps/@${lat},${lng},${zoom}z/search`;
    } else {
        startUrl = 'https://www.google.com/maps/search/';
    }

    console.log('Start url is ', startUrl);

    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: startUrl, userData: { label: 'startUrl' } });

    const crawler = new Apify.PuppeteerCrawler({
        launchPuppeteerOptions: {
            useApifyProxy: true,
            useChrome: true,
            apifyProxyGroups: ['CZECH_LUMINATI'],
            liveView: Apify.isAtHome(),
        },
        requestQueue,
        handlePageTimeoutSecs: 1800, // We are adding all links to queue on startUrl
        handlePageFunction: async ({ request, page }) => {
            const { label } = request.userData;
            console.log(`Open ${request.url} with label: ${label}`);

            if (label === 'startUrl') {
                // Enqueue all urls for place detail
                await page.type('#searchboxinput', searchString);
                await sleep(5000);
                await page.click('#searchbox-searchbutton');
                await sleep(5000);
                while(true) {
                    const paginationText = await page.$eval('.section-pagination-right', el => el.innerText);
                    console.log(`Added links from pagination: ${paginationText}`);
                    await page.waitForSelector('#section-pagination-button-next', { timeout: DEFAULT_TIMEOUT });
                    await enqueueAllUrlsFromPagination(page, requestQueue);
                    const nextButton = await page.$('#section-pagination-button-next');
                    const isNextPaginationDisabled = (await nextButton.getProperty('disabled') === 'true');
                    if (isNextPaginationDisabled) {
                        break;
                    } else {
                        await nextButton.click();
                    }
                    await sleep(5000);
                }
            } else {
                // Get data from review
                await injectJQuery(page);
                await page.waitForSelector('h1.section-hero-header-title', { timeout: DEFAULT_TIMEOUT });
                const placeDetail = await page.evaluate(() => {
                    return {
                        title: $('h1.section-hero-header-title').text().trim(),
                        totalScore: $('span.section-star-display').eq(0).text().trim(),
                        reviewsCount: $('button.section-reviewchart-numreviews').text().trim().match(/\d+/)[0],
                        categoryName: $('[jsaction="pane.rating.category"]').text().trim(),
                        address: $('[data-section-id="ad"] .widget-pane-link').text().trim(),
                        plusCode: $('[data-section-id="ol"] .widget-pane-link').text().trim(),
                    };
                });
                placeDetail.url = request.url;
                placeDetail.reviews = [];
                console.log(placeDetail);
                // Get all reviews
                await page.click('button.section-reviewchart-numreviews');
                await infiniteScroll(page, 99999999999);
                const reviewEls = await page.$$('div.section-review');
                for (const reviewEl of reviewEls) {
                    const moreButton = await reviewEl.$('.section-expand-review');
                    if (moreButton) {
                        await moreButton.click();
                        sleep(1000);
                    }
                    const review = await page.evaluate((reviewEl) => {
                        const $review = $(reviewEl);
                        return {
                            name: $review.find('.section-review-title').text().trim(),
                            text: $review.find('.section-review-text').text(),
                            stars: $review.find('.section-review-stars').attr('aria-label').trim(),
                            publishAt: $review.find('.section-review-publish-date').text().trim(),
                            likesCount: $review.find('.section-review-thumbs-up-count').text().trim(),
                        };
                    }, reviewEl);
                    placeDetail.reviews.push(review);
                }
                await Apify.pushData(placeDetail);
            }
            console.log('Done ', request.url);
        },
    });

    await crawler.run();
});
