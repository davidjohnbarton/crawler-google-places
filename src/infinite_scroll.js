const Apify = require('apify');

const { sleep, log } = Apify.utils;

const logError = (msg, e) => log.exception(e, msg);
const logInfo = (msg) => log.info(msg);
const logDebug = (msg) => log.debug(msg);

/**
 * Method scrolls page to xpos, ypos.
 */
const scrollTo = (page, elementToScroll, scrollToHeight) => page.evaluate((elementToScroll, scrollToHeight) => {
    const scrollable = document.querySelector(elementToScroll);
    scrollable.scrollTop = scrollToHeight;
}, elementToScroll, scrollToHeight);

/**
 * Method returns info about page scroll
 */
const getPageScrollInfo = (page, elementToScroll) => page.evaluate((elementToScroll) => {
    return {
        scrollHeight: document.querySelector(elementToScroll).scrollHeight,
        scrollTop: document.querySelector(elementToScroll).scrollTop,
        clientHeight: document.querySelector(elementToScroll).clientHeight,
    };
}, elementToScroll);

/**
 * Scroll to down page until infinite scroll ends or reaches maxHeight
 * @param page - instance of crawled page
 * @param maxHeight - max height of document to scrollHeight
 * @param elementToScroll - CSS selector of element where we want to scroll, default is 'body'
 * @return {Promise.<void>}
 */
module.exports = async (page, maxHeight, elementToScroll = 'body') => {
    const maybeResourceTypesInfiniteScroll = ['xhr', 'fetch', 'websocket', 'other'];
    const stringifyScrollInfo = (scrollInfo) => {
        return `scrollTop=${scrollInfo.scrollTop}, ` +
            `clientHeight=${scrollInfo.clientHeight}, ` +
            `scrollHeight=${scrollInfo.scrollHeight}, ` +
            `maxHeight=${maxHeight}`;
    };
    const defaultScrollDelay = 3000;
    const defaultElementTimeout = 60000;

    // Catch and count all pages request for resources
    const resourcesStats = {
        requested: 0,
        finished: 0,
        failed: 0,
        forgotten: 0,
    };
    const pendingRequests = {};
    await page.setRequestInterception(true);
    page.on('request', (interceptedRequest) => {
        if (maybeResourceTypesInfiniteScroll.includes(interceptedRequest.resourceType())) {
            pendingRequests[interceptedRequest._requestId] = Date.now();
            ++resourcesStats.requested;
        }
        interceptedRequest.continue();
    });
    page.on('requestfailed', (interceptedRequest) => {
        if (pendingRequests[interceptedRequest._requestId]) {
            delete pendingRequests[interceptedRequest._requestId];
            ++resourcesStats.failed;
        }
    });
    page.on('requestfinished', (interceptedRequest) => {
        if (pendingRequests[interceptedRequest._requestId]) {
            delete pendingRequests[interceptedRequest._requestId];
            ++resourcesStats.finished;
        }
    });

    try {
        await page.waitForSelector(elementToScroll, { timeout: defaultElementTimeout });
        let scrollInfo = await getPageScrollInfo(page, elementToScroll);
        logInfo(`Infinite scroll started (${stringifyScrollInfo(scrollInfo)}).`);

        let previosReviewsCount = 0;
        while (true) {
            scrollInfo = await getPageScrollInfo(page, elementToScroll);

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

            // We have to wait if all xhrs are finished
            if (pendingRequestsCount === 0) {
                const isLoaderOnPage = await page.evaluate(() => {
                    const loader = $('.section-loading-spinner');
                    if (loader) return loader.parent().attr('style') !== 'display: none;';
                });

                const reviewsCount = await page.evaluate(() => $('div.section-review').length);
                /**
                 *  If the page is scrolled to the very bottom or beyond
                 *  maximum height and loader is not displayed and we don't find new reviews, we are done.
                 */
                if (reviewsCount === previosReviewsCount
                    && (scrollInfo.scrollTop + scrollInfo.clientHeight >= Math.min(scrollInfo.scrollHeight, maxHeight))
                    && !isLoaderOnPage
                ) break;
                previosReviewsCount = reviewsCount;

                // Otherwise we try to scroll down
                await scrollTo(page, elementToScroll, maxHeight);
            }
            await sleep(defaultScrollDelay);
        }
        page.removeAllListeners('request');
        logInfo(`Infinite scroll finished (${stringifyScrollInfo(scrollInfo)} resourcesStats=${JSON.stringify(resourcesStats)})`);
    } catch (err) {
        logError('An exception thrown in infiniteScroll()', err);
    }
};
