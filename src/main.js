const Apify = require('apify');
const placesCrawler = require('./places_crawler');
const { proxyCheck } = require('./proxy_check');
const { log } = Apify.utils;

Apify.main(async () => {
    const input = await Apify.getValue('INPUT');
    const { searchString, proxyConfig, lat, lng, maxCrawledPlaces } = input;

    if (!searchString) throw new Error('Attribute searchString missing in input.');

    const proxyCheckResult = await proxyCheck(proxyConfig);
    if (!proxyCheckResult.isPass) {
        throw new Error(`Proxy error: ${proxyCheckResult.message}`);
    }

    log.info('Scraping Google Places for search string:', searchString);

    let startUrl;
    if (lat || lng) {
        const { zoom = 10 } = input;
        if (!lat || !lng) throw new Error('You have to defined lat and lng!');
        startUrl = `https://www.google.com/maps/@${lat},${lng},${zoom}z/search`;
    } else {
        startUrl = 'https://www.google.com/maps/search/';
    }

    log.info('Start url is', startUrl);
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({ url: startUrl, userData: { label: 'startUrl', searchString } });

    const launchPuppeteerOptions = {};
    if (proxyConfig) Object.assign(launchPuppeteerOptions, proxyConfig);

    // Create and run crawler
    const crawler = placesCrawler.setUpCrawler(launchPuppeteerOptions, requestQueue, maxCrawledPlaces);
    await crawler.run();

    log.info('Done!');
});
