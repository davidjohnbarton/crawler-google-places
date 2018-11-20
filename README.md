# Crawler Google Places

## Work in progress, TODOs:
- Input schema
- Proxy groups on input
- ESlint code
- Improve enqueuing details pages from listing

## How to use

Example input:
```json
{
  "searchString": "ČSOB",
  "searchViewport": {
    "lat": "50.0860729",
    "lng": "14.4135326",
    "zoom": 10
  }
}
```
On this input actor searches places on this start url: https://www.google.com/maps/search/%C4%8Dsob/@50.0860729,14.4135326,10z

- `searchString` - String will be search on Google maps
- `searchViewport` - Object where user can define start view port for searching (Google will search places in this area)
- `searchViewport.lat` - Viewport latitude
- `searchViewport.lng` - Viewport longitude
- `searchViewport.zoom` - Viewport zoom, e.g zoom: 10 -> https://www.google.com/maps/@50.0860729,14.4135326,10z vs zoom: 1 -> https://www.google.com/maps/@50.0860729,14.4135326,10z
