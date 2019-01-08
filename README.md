# Crawler Google Places
Get data from Google Places, which official [Google Maps Places API](https://developers.google.com/places/web-service/search) does not provide.

## Why?
You can use official [Google Maps Places API](https://developers.google.com/places/web-service/search), it is better way for the most use cases.
But API doesn't provide:

- Popular place times histogram
- Place reviews (you can get up to 5 reviews from official API)
- Place photos (you can can up to 10 photos from official API)

## INPUT
Follow guide on [actor detail page](https://www.apify.com/drobnikj/crawler-google-places) to see how it works.

Example input:
```json
{
  "searchString": "pubs near prague",
  "lat": "50.0860729",
  "lng": "14.4135326",
  "zoom": 10
}
```
On this input actor searches places on this start url: https://www.google.com/maps/search/pubs+near+prague/@50.0860729,14.4135326,10z

- `searchString` - String will be search on Google maps
- `proxyConfig` - Apify proxy configuration
- `lat` - Use it with combination with longitude and zoom to set up viewport to search on.
- `lng` - Use it with combination with latitude and zoom to set up viewport to search on.
- `zoom` - Viewport zoom, e.g zoom: 10 -> https://www.google.com/maps/@50.0860729,14.4135326,10z vs zoom: 1 -> https://www.google.com/maps/@50.0860729,14.4135326,10z
- `maxCrawledPlaces` - Limit places you want to get from crawler

## OUTPUT
Once the actor finishes, it outputs results to actor default dataset.
