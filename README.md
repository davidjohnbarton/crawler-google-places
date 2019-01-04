# Crawler Google Places
Get data from Google Places, which official [Google Maps Places API](https://developers.google.com/places/web-service/search) does not provide.

## Why?
You can use official [Google Maps Places API](https://developers.google.com/places/web-service/search), it is better way for the most use cases.
But API doesn't provide everything:

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
- `lat` - Viewport latitude
- `lng` - Viewport longitude
- `zoom` - Viewport zoom, e.g zoom: 10 -> https://www.google.com/maps/@50.0860729,14.4135326,10z vs zoom: 1 -> https://www.google.com/maps/@50.0860729,14.4135326,10z
- `maxCrawledPlaces` - Limit places you want to get from crawler

## OUTPUT
Once the actor finishes, it outputs results to actor default dataset.

Example output for place
```json
{
  "title": "Československá obchodní banka, a.s., pobočka Praha 5",
  "totalScore": "1,7",
  "categoryName": "Banka",
  "address": "Arbesovo nám. 257/7, 150 00 Praha-Smíchov, Česko",
  "plusCode": "3CG3+FQ Praha, Česko",
  "url": "https://www.google.com/maps/place/%C4%8Ceskoslovensk%C3%A1+obchodn%C3%AD+banka,+a.s.,+pobo%C4%8Dka+Praha+5/@50.057267,14.4057479,12z/data=!4m8!1m2!2m1!1s%C4%8CSOB+near+prague!3m4!1s0x470bbe214008b6b3:0xcfe23567651c421!8m2!3d50.0762085!4d14.4044139",
  "reviews": [
    {
      "name": "Anton Vasilyev",
      "text": "V této pobočce pracuji vážená paní Alena Ladrova, která je prý odborníkem a na kterou jsem se musel obrátit třikrát. Vážená paní Ladrova si dovoluje nepřípustnou komunikaci se zákazníky, vyjadřuje svůj osobní názor na situaci, která musí být vyřešena. Několikrát řekla, že mi nesmí sloužit, protože na to nemá čas, a poradila mi, abych se obrátil na jiné oddělení. S tou zaměstnankyní jsem velmi nespokojený a jsem si jistý, že se s ní nikdy příště nechci nic řešit.",
      "stars": "1 hvězdička",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Beneš III.",
      "text": "Fronta, otevřená jen jedna přepážka ze čtyř. Takhle se má chovat správce mých peněz?",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Roman Pauler",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    }
  ],
  "reviewsCount": "3",
  "imageUrls": [
    "https://lh5.googleusercontent.com/p/AF1QipPyQSZsrNgb21kyUhOtIZyh2oZfm6W9L39bjgnF=s790-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipM4GBWM4A8vl11qB4TSkRMACIPZ_hDDdY2NpXzo=s1056-k-no-pi-2.9338646-ya349.5-ro0-fo100",
    "https://lh5.googleusercontent.com/p/AF1QipO3_cyeFWmGgxGF8No4FA1GtjXRMhxhwWeyzDo8=s555-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMZ6UMzgg9NOfZNqgkbpfpBQlL6sqJi7p4WCAk=s312-k-no",
    "https://geo1.ggpht.com/cbk?output=thumbnail&panoid=kq0AYAuZW_FmNyOro5nAfQ&minw=1071&minh=528&thumb=2&yaw=258.04102&pitch=0"
  ]
}
```
