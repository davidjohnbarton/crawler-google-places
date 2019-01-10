# Crawler Google Places
Get data from Google Places, which official [Google Maps Places API](https://developers.google.com/places/web-service/search) does not provide.

## Why?
You can use official [Google Maps Places API](https://developers.google.com/places/web-service/search), it is better way for the most use cases.

Unlike Google Maps Places API, you can get from crawler:

- Popular place times histogram (There is no data for that in official API)
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

Example results item:

```text
{
  "title": "Scotiabank",
  "totalScore": 3.7,
  "categoryName": "Bank",
  "address": "201 Bishopsgate, London EC2M 3NS, UK",
  "plusCode": "GWCC+75 City of London, London, UK",
  "popularTimesHistogram": {
    "Su": [],
    "Mo": [
      {
        "hour": 6,
        "occupancyPercent": 0
      },
      {
        "hour": 7,
        "occupancyPercent": 0
      },
      {
        "hour": 8,
        "occupancyPercent": 0
      },
      {
        "hour": 9,
        "occupancyPercent": 75
      },
      {
        "hour": 10,
        "occupancyPercent": 73
      },
      {
        "hour": 11,
        "occupancyPercent": 60
      },
      {
        "hour": 12,
        "occupancyPercent": 57
      },
      {
        "hour": 13,
        "occupancyPercent": 56
      },
      {
        "hour": 14,
        "occupancyPercent": 56
      },
      {
        "hour": 15,
        "occupancyPercent": 57
      },
      {
        "hour": 16,
        "occupancyPercent": 50
      },
      {
        "hour": 17,
        "occupancyPercent": 33
      },
      {
        "hour": 18,
        "occupancyPercent": 14
      },
      {
        "hour": 19,
        "occupancyPercent": 4
      },
      {
        "hour": 20,
        "occupancyPercent": 1
      },
      {
        "hour": 21,
        "occupancyPercent": 0
      },
      {
        "hour": 22,
        "occupancyPercent": 0
      },
      {
        "hour": 23,
        "occupancyPercent": 0
      }
    ],
    ...
  },
  "reviews": [
    {
      "name": "NELLORE BALA NAVEEN REDDY",
      "text": "nice  bank in london",
      "stars": "5 stars",
      "publishAt": "2 months ago",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    ...
  ],
  "reviewsCount": 6,
  "imageUrls": [
    "https://lh5.googleusercontent.com/p/AF1QipPvm-rzo7_mlLRmctQwDJV6agVGHZMUJYLinU_t=s508-k-no",
    ...
    ],
  "url": "https://www.google.com/maps/place/Scotiabank/@51.5258542,-0.335595,11z/data=!4m8!1m2!2m1!1sbanks+london!3m4!1s0x48761cb181573665:0x5fce6a25f2e99723!8m2!3d51.5206306!4d-0.0795672"
}
```
