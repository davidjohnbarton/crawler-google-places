# Crawler Google Places
This crawler search string on input on [google maps](https://www.google.com/maps) and returns all information about found places.

## How to use through API
How to use Actor from Apify UI see [actor detail page](https://www.apify.com/drobnikj/crawler-google-places).

Example input:
```json
{
  "searchString": "ČSOB",
  "lat": "50.0860729",
  "lng": "14.4135326",
  "zoom": 10
}
```
On this input actor searches places on this start url: https://www.google.com/maps/search/%C4%8Dsob/@50.0860729,14.4135326,10z

- `searchString` - String will be search on Google maps
- `proxyConfig` - Apify proxy configuration
- `lat` - Viewport latitude
- `lng` - Viewport longitude
- `zoom` - Viewport zoom, e.g zoom: 10 -> https://www.google.com/maps/@50.0860729,14.4135326,10z vs zoom: 1 -> https://www.google.com/maps/@50.0860729,14.4135326,10z
