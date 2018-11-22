const Apify = require('apify');
const placesCrawler = require('./places_crawler');
const enqueueAllPlaceDetailsCrawler = require('./enqueue_places_crawler');
const { LISTING_PAGINATION_KEY } = require('./consts');

Apify.main(async () => {
    const input = await Apify.getValue('INPUT');
    const { searchString, proxyConfig, lat, lng } = input;

    if (!searchString) throw new Error('Attribute searchString missing in input.');

    console.log('Scraping Google Places for search string:', searchString);

    let startUrl;
    if (lat || lng) {
        const { zoom = 10 } = input;
        if (!lat || !lng) throw new Error('You have to defined lat and lng!');
        startUrl = `https://www.google.com/maps/@${lat},${lng},${zoom}z/search`;
    } else {
        startUrl = 'https://www.google.com/maps/search/';
    }

    console.log('Start url is', startUrl);
    const requestQueue = await Apify.openRequestQueue();

    // Store state of listing pagination
    // NOTE: Ensured - If pageFunction failed crawler skipped already scraped pagination
    const listingPagination = await Apify.getValue(LISTING_PAGINATION_KEY) || {};
    const launchPuppeteerOptions = {};
    if (proxyConfig) Object.assign(launchPuppeteerOptions, proxyConfig);

    // Enqueue all links to scrape from listings
    if (!listingPagination.isFinish) {
        console.log(`Start enqueuing place details for search: ${searchString}`);
        await enqueueAllPlaceDetailsCrawler.run(startUrl, searchString, launchPuppeteerOptions, requestQueue, listingPagination);
        listingPagination.isFinish = true;
        await Apify.setValue(LISTING_PAGINATION_KEY, listingPagination);
    }

    // Scrape all place detail links
    const crawler = placesCrawler.setUpCrawler(launchPuppeteerOptions, requestQueue);
    await crawler.run();

    console.log('Done!');
});
