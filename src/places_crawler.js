const Apify = require('apify');
const { sleep } = Apify.utils;
const infiniteScroll = require('./infinite_scroll');
const { injectJQuery } = Apify.utils.puppeteer;
const { MAX_PAGE_RETRIES, DEFAULT_TIMEOUT } = require('./consts');

/**
 * Method to set up crawler to get all place details and save them to default dataset
 * @param launchPuppeteerOptions
 * @param requestQueue
 * @return {Apify.PuppeteerCrawler}
 */
const setUpCrawler = (launchPuppeteerOptions, requestQueue) => {
    return new Apify.PuppeteerCrawler({
        launchPuppeteerOptions,
        requestQueue,
        maxRequestRetries: MAX_PAGE_RETRIES,
        retireInstanceAfterRequestCount: 10,
        handlePageTimeoutSecs: 600,
        maxConcurrency: 1,
        gotoFunction: async ({ request, page }) => {
            await page._client.send('Emulation.clearDeviceMetricsOverride');
            await page.goto(request.url, { timeout: 60000 });
        },
        handlePageFunction: async ({ request, page }) => {
            const { label } = request.userData;
            console.log(`Open ${request.url} with label: ${label}`);
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
                    const numberReviewsText = $('button.section-reviewchart-numreviews').text().trim();
                    return (numberReviewsText) ? numberReviewsText.match(/\d+/)[0] : null;
                });
                // Get all reviews
                await page.click('button.section-reviewchart-numreviews');
                await page.waitForSelector('.section-star-display', { timeout: DEFAULT_TIMEOUT });
                await sleep(2000);
                // Sort reviews by newest
                await page.waitForSelector('.section-tab-info-stats-button-flex');
                await page.click('.section-tab-info-stats-button-flex .maps-sprite-reviews-expand-more');
                await page.waitForSelector('.context-menu-entry[data-index="1"]');
                await page.click('.context-menu-entry[data-index="1"]');
                await infiniteScroll(page, 99999999999, '.section-scrollbox.section-listbox');
                const reviewEls = await page.$$('div.section-review');
                for (const reviewEl of reviewEls) {
                    const moreButton = await reviewEl.$('.section-expand-review');
                    if (moreButton) {
                        await moreButton.click();
                        await sleep(1000);
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

            console.log(request.url, 'Done');
        },
        handleFailedRequestFunction: async ({ request }) => {
            // This function is called when crawling of a request failed too many time
            await Apify.pushData({
                url: request.url,
                succeeded: false,
                errors: request.errorMessages,
            });
        },
    });
};

module.exports = { setUpCrawler };
