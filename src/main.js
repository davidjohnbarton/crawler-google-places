/**
 * Run the following example to perform a recursive crawl of a website using Puppeteer.
 */
const Apify = require('apify');
const infiniteScroll = require('./infinite_scroll');

const { sleep } = Apify.utils;
const { injectJQuery } = Apify.utils.puppeteer;

const DEFAULT_TIMEOUT = 60 * 1000; // 60 sec
const LISTING_PAGINATION_KEY = 'listingState';

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
        console.log(`Added to queue ${url}`);
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
        const { lat, lng, zoom = 10 } = searchViewport;
        if (!lat || !lng) throw new Error('You have to defined lat and lng for searchViewport!');
        startUrl = `https://www.google.com/maps/@${lat},${lng},${zoom}z/search`;
    } else {
        startUrl = 'https://www.google.com/maps/search/';
    }

    console.log('Start url is ', startUrl);

    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: startUrl, userData: { label: 'startUrl' } });

    // Store state of listing pagination
    // NOTE: Ensured - If pageFunction failed crawler skipped already scraped pagination
    let listingPagination = await Apify.getValue(LISTING_PAGINATION_KEY) || {};

    const crawler = new Apify.PuppeteerCrawler({
        launchPuppeteerOptions: {
            useApifyProxy: true,
            // useChrome: true,
            apifyProxyGroups: ['CZECH_LUMINATI'],
            // liveView: Apify.isAtHome(),
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
                    await page.waitForSelector('#section-pagination-button-next', { timeout: DEFAULT_TIMEOUT });
                    const paginationText = await page.$eval('.section-pagination-right', el => el.innerText);
                    const [fromString , toString] = paginationText.match(/\d+/g);
                    const from = parseInt(fromString);
                    const to = parseInt(toString);
                    if (listingPagination.to && to <= listingPagination.to) {
                        console.log(`Skiped pagination ${from} - ${to}, already done!`);
                    } else {
                        console.log(`Added links from pagination ${from} - ${to}`);
                        await enqueueAllUrlsFromPagination(page, requestQueue);
                    }
                    listingPagination = { from, to };
                    await Apify.setValue(LISTING_PAGINATION_KEY, listingPagination);
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
                        categoryName: $('[jsaction="pane.rating.category"]').text().trim(),
                        address: $('[data-section-id="ad"] .widget-pane-link').text().trim(),
                        plusCode: $('[data-section-id="ol"] .widget-pane-link').text().trim(),
                    };
                });
                placeDetail.url = request.url;
                placeDetail.reviews = [];
                if (placeDetail.totalScore) {
                    placeDetail.reviewsCount = await page.evaluate(() => {
                        const numberReviewsText = $('button.section-reviewchart-numreviews').text().trim()
                        return (numberReviewsText) ? numberReviewsText.match(/\d+/)[0] : null;
                    });
                    // Get all reviews
                    await page.click('button.section-reviewchart-numreviews');
                    await page.waitForSelector('.section-star-display');
                    await infiniteScroll(page, 99999999999, '.section-scrollbox');
                    sleep(2000);
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
                }
                await Apify.pushData(placeDetail);
            }
            console.log(request.url, 'Done');
        },
    });

    await crawler.run();
});
