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
- `lat` - Viewport latitude
- `lng` - Viewport longitude
- `zoom` - Viewport zoom, e.g zoom: 10 -> https://www.google.com/maps/@50.0860729,14.4135326,10z vs zoom: 1 -> https://www.google.com/maps/@50.0860729,14.4135326,10z
- `maxCrawledPlaces` - Limit places you want to get from crawler

## OUTPUT
Once the actor finishes, it outputs results to actor default dataset.

Example output for place
```json
{
  "title": "The PUB Praha 2",
  "totalScore": "4,0",
  "categoryName": "Restaurace",
  "address": "Hálkova 6, 120 00 Nové Město, Česko",
  "plusCode": "3CGH+F8 Praha, Česko",
  "url": "https://www.google.com/maps/place/The+PUB+Praha+2/@50.0710201,14.4222523,15z/data=!4m8!1m2!2m1!1spubs+near+Prague+2!3m4!1s0x470b948c5e25145d:0x152b4a14387894ab!8m2!3d50.0761791!4d14.4283676",
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
        "occupancyPercent": 0
      },
      {
        "hour": 10,
        "occupancyPercent": 0
      },
      {
        "hour": 11,
        "occupancyPercent": 39
      },
      {
        "hour": 12,
        "occupancyPercent": 42
      },
      {
        "hour": 13,
        "occupancyPercent": 27
      },
      {
        "hour": 14,
        "occupancyPercent": 12
      },
      {
        "hour": 15,
        "occupancyPercent": 10
      },
      {
        "hour": 16,
        "occupancyPercent": 17
      },
      {
        "hour": 17,
        "occupancyPercent": 28
      },
      {
        "hour": 18,
        "occupancyPercent": 39
      },
      {
        "hour": 19,
        "occupancyPercent": 47
      },
      {
        "hour": 20,
        "occupancyPercent": 50
      },
      {
        "hour": 21,
        "occupancyPercent": 47
      },
      {
        "hour": 22,
        "occupancyPercent": 37
      },
      {
        "hour": 23,
        "occupancyPercent": 22
      },
      {
        "hour": 24,
        "occupancyPercent": 9
      },
      {
        "hour": 1,
        "occupancyPercent": 3
      }
    ],
    ...
    ]
  },
  "reviews": [
    {
      "name": "Roland Lehner",
      "text": "Essen gut es muss nicht unbedingt bier getrunken werden",
      "stars": "5 hvězdiček",
      "publishAt": "včera",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Vojtěch Marvan",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 3 dny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Trooper 84",
      "text": "The food was good. The Beer was good. IT was Clean and the Decoration was OK.",
      "stars": "4 hvězdičky",
      "publishAt": "před 4 dny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lubomír Benák",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 5 dny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr J",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před týdnem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tim Scheible",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před týdnem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "jasmin prediger",
      "text": "Unfreundliches Personal auf das man ewig warten muss. Kein Essen mehr, nichtmal mehr Machos. Man wird hier wegen jeden spass angekackt, auch die nachbartische... Wenn dann Prag 1, wesentlich besser.",
      "stars": "2 hvězdičky",
      "publishAt": "před týdnem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michael Rixner",
      "text": "Schade dass es nicht null Sterne gibt!! In einem leeren Lokal für 2 kein Platz bekommen da nicht reserviert!! Lächerlich",
      "stars": "1 hvězdička",
      "publishAt": "před týdnem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Torsten Schaefer",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před týdnem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michaela Pelikánová",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před týdnem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lenka Vomočilová",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před týdnem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jiri Beran",
      "text": "",
      "stars": "2 hvězdičky",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "caEts123 Ets",
      "text": "(Přeloženo pomocí Google) Zaměstnanci byli bohužel pro nás opravdu nevlídní a během večera se chovali neslušně (často mluvili česky než anglicky, abychom pochopili a měli pocit, že mluvili špatně o Němcích). Nezískali jsme 2 stoly, které jsme rezervovali u telefonu .. Opravdu škoda, nedali jsme žádné tipy.\n\n(Původní text)\nThe staff was unfortunately really ungentle to us and behaved disrespectful during the evening (spoke often Czech instead of English so that we could understood and we had the feeling they spoke badly about us Germans). We did not get they 2 tables we reserved at the telephone.. Really a pity, we did not give any tips.",
      "stars": "1 hvězdička",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Timon Dichter",
      "text": "(Přeloženo pomocí Google) Nejvíce nepřátelský personál, který jsem kdy v životě potkal. Zaměstnanec většinu času mluvil s námi v rodném jazyce a choval se velmi nečekaně vůči zákazníkovi. Pro mě velké zklamání.\n0 z 10 bodů.\n\n(Původní text)\nThe most unfriendly staff which I've ever met in my life.. The staffcrew spoke most of the time with us in the native language and behaved very disrespectfully to the customer. For me a big disappointment.\n0 of 10 points.",
      "stars": "1 hvězdička",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Simona Kovaříčková",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Kh ai",
      "text": "Příjemná obsluha, dobré jídlo i pivo.. :)",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lena Smikina",
      "text": "(Přeloženo pomocí Google) Chladné místo. Velmi čisté\n\n(Původní text)\nПрикольное место . Вкусная еда .приветливый персонал .очень чисто",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Maria Melikhova",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Machaj",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Markus Hefele",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tomáš Sobotka",
      "text": "Do schodů na cigaro",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jennifer Lackie",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Slavík",
      "text": "V pubu se mi líbí vždy, hlavně pivní souboj na obrazovce. Připomene vám to vypít hrnek a natočit si novej. Při této konkrétní návštěvě mi přišlo že pivo bylo teplejší než by mělo a to nejsem priznivec toho aby pivo bylo extra ledový.",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Dirk Wanst",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Filip Lebeda",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jiří Müller",
      "text": "(Přeloženo pomocí Google) Dobré jídlo, dobré pivo a personál. Vrátíme se...\n\n(Původní text)\nGood food, good beer and the staff as well. We'll be back...",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jaroslav Borovský",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 3 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Václav Starý",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 3 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Oldřich Šeler",
      "text": "Super",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ferenc Dudas",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 týdny",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Daniel Šafařík",
      "text": "Odpoledne téměř prázdná hospoda, večer není slyšet vlastního slova. Jídlo skvostné, burger za 9,5 * z 10. A za rozumnou cenu.",
      "stars": "5 hvězdiček",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tomáš Nytra",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ricky Reimer",
      "text": "(Přeloženo pomocí Google) Skvělá nálada pro skupiny\n\n(Původní text)\nEcht gute Stimmung für Gruppen",
      "stars": "5 hvězdiček",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Kateřina Boháčová",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lewis Woodward",
      "text": "(Přeloženo pomocí Google) vyhnout za každou cenu.\n\n(Původní text)\navoid at all costs.",
      "stars": "2 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Raper",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondrej Kucera",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Vera Pavelkova",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Balázs Nagy",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Stanislav Ulmer",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Daniel Vollmer",
      "text": "",
      "stars": "1 hvězdička",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Šustr",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Danner",
      "text": "(Přeloženo pomocí Google) Systém byl dole! Takže jsme nemohli porovnat naše statistiky s ostatními tabulkami ...\n\n(Původní text)\nThe System was down! So we couldn't compare our stats to the other tables...",
      "stars": "2 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": "(Přeloženo pomocí Google) Drahý David,\n\nje nám líto, že jste nemohli porovnat své statistiky. Měli jsme nějaké technické problémy. Je to stále jen počítač ...\n\nDoufáme, že během vaší příští návštěvy bude v pořádku!\n\nTěšíme se na další návštěvu ...\n\nTým PUB Praha 2\n\n(Původní text)\nDear David,\n\nwe are sorry, that you couldn´t compare your stats. We had some technical problems. It is still just a computer...\n\nWe hope that during your next visit it will be all right!\n\nWe are looking forward to your next visit...\n\nThe PUB Prague 2 team"
    },
    {
      "name": "Ulrich Hellmann",
      "text": "(Přeloženo pomocí Google) Největší obchod v Praze\n\n(Původní text)\nGeilster Laden in Prag",
      "stars": "5 hvězdiček",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petter Klægstad",
      "text": "(Přeloženo pomocí Google) Fun koncept, ale věž v samostatném stole.\n\n(Původní text)\nMorsomt konsept men tappetårn i eget bord.",
      "stars": "4 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michal Vanžura",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Milan Liber",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Stephen Brown",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jonatan Folkver",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před měsícem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ales Komurka",
      "text": "Nemá chybu,obsluha bez problémů a prostředí perfektní.",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Paulo Sousa",
      "text": "(Přeloženo pomocí Google) Perfektní pro pivo (nebo více) :)\n\n(Původní text)\nPerfect for a beer (or more) :)",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Josef Rosol",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Šátek",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jiří Fröhlich",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Týnka B.",
      "text": "Do Pubu chodím často na polední menu a beru si obědy často sebou do práce. Ale i tak jsem velmi spokojená s obsluhou. Jídlo mi z 90% velmi chutná a ráda chodím pravidelně na jejich výborné velké burgery jen hranolky by mohli dělat k lepší. Taky oceňuji výběr 4 jídel na jeden den v poledním menu.",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "serge Humbert",
      "text": "(Přeloženo pomocí Google) dělat\n\n(Původní text)\nÀ faire",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Monika Peňáková",
      "text": "(Přeloženo pomocí Google) Prijemna restaurace, zákazník si cepuje pivo sam, super\n\n(Původní text)\nPrijemna restaurace, zakaznik si cepuje pivo sam, super",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Neil Hutchinson",
      "text": "(Přeloženo pomocí Google) Skvělý sloužit baru. Velmi levné, ale návrh je dobrý a jídlo je vynikající. Během našeho pobytu budeme několikrát navštěvovat! Stojí za návštěvu nebo dvě!\n\n(Původní text)\nGreat serve yourself bar. Very cheap but the draught is good and the food is delicious. Will be visiting a few more times during our stay! Worth a visit or two!",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Alexey Popov",
      "text": "(Přeloženo pomocí Google) polévka\n\n(Původní text)\nСуп",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lesley Behan",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "marek kovar",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Geoffrey Clive Hogben",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "николай михайлец",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Gustav Saitz",
      "text": "Do The PUB chodím od samého začátku, navštívil jsem většinu pražských a to několikrát, většinou bylo všechno ok. O konceptu atd se dnes zmiňovat nebudu, vyjádřím se ke včerejší návštěvě celkově.  Vchod do podniku je skvěle označen, nemůžete ho minout, podnik jako takový je čistý a působí příjemně. Obsluha byla super, i přes postupně 100% obsazenost se nám věnovali přesně podle našich představ, když jsme něco chtěli tak jsme nečekali, a zbytečně nás obsluha neotravovala. Tak proč tedy hvězdy dolů? Dali jsme si Burgery, ty zhruba odpovídali ceně, takže za ně dobrý, ale co ty hranolky?  Byly vychladlé a evidentně levnější, ne moc kvalitní a hlavně hodně jich bylo jen 1-2cm :( , k takovým to burgerům by se hodilo dávat hranolky steakové, navíc když tatarská omáčka k nim byla vážně super. Další věc, která mě totálně odrovnala, bohužel negativně, byly horké \"karamelizované\" maliny s vanilkovou zmrzlinou a šlehačkou, přinesli mi je totiž v hlubokém talíři (to jako fakt), kde v nich plavali kopečky zmrzliny, takže jsem měl v podstatě vanilkovo-malinovou polívku ... tohle jako vážně už příště nene, děkuji. Poslední vzkaz vedení provozovny, pánské toalety by potřebovaly lepší servis, podívejte se na strop k ventilaci.",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "TheToniStoney",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukas Geisinger",
      "text": "(Přeloženo pomocí Google) Dobré prostředí, ale podmínky byly pro hosty velice hrubé. Myšlenka s dávkovačem je dobře provedena a zajišťuje příjemný večer.\n\n(Původní text)\nGutes Ambiente, jedoch waren die Bedingungen sehr unfreundlich gegenüber den Gästen. Die Idee mit der Zapfanlage ist gut umgesetzt und sorgt für einen schönen Abend.",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Neil Aspinall",
      "text": "(Přeloženo pomocí Google) Miloval to!! Vytáhněte své vlastní pivo, zatímco seděl u stolu.\n\n(Původní text)\nLoved it!! Pull your own beers whilst sat at the table.",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukáš Kraft",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Joel Breguet",
      "text": "(Přeloženo pomocí Google) Nejlepší volba pro skupinu! Podávejte si vlastní pivo z kohoutku postaveného v stolu! Velký plus, pokud považujete pražské číšníky za přívětivé haha\n\n(Původní text)\nBest option for a group! Serve your own beer from the tap built in the table! A big plus if you consider Prague's waiters amiability haha",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "1",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jar Zap",
      "text": "Super",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "adam morgan",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Kotek",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Primas",
      "text": "Točit si pivo je stále celkem dobrá zábava.",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Vit Hubeny",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Torodd J. Rønning",
      "text": "(Přeloženo pomocí Google) Velmi zajímavý koncept, miloval jsem to :)\n\n(Původní text)\nVery interesting concept, loved it :)",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "robbschen",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Philippe Müller",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Maximus Tadeski",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ashwilailanel Ashwík",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "TýnkaLúcia Rydlová",
      "text": "Supr",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Aleš Najmann",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "The RawDown",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Filip Forrai",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Milan Franz",
      "text": "Dobré jídlo, rychlá obsluha, pípy na stolech",
      "stars": "4 hvězdičky",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Frieder Binder",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "jinDre1",
      "text": "Moc dobre jidlo a vybikajici pivo",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Přemysl Plachý",
      "text": "Se spolužáky vždy spokojeni.",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Krojidlo",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Marc Linbrunner",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Marian Boubel",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Pawel Langner",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Vicente Borges",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Velvethy",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tobias Heinze",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Lesnak",
      "text": "(Přeloženo pomocí Google) pivo\n\n(Původní text)\nPivo",
      "stars": "1 hvězdička",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "AR drone",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Simon Peters",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jesse Wallin",
      "text": "",
      "stars": "2 hvězdičky",
      "publishAt": "před 4 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "gabriela vahalikova",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Laszlo Hegedus",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Daniel Keeble",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jiří Brůžek",
      "text": "2017 Hezka hospoda ****\n2018/08 Pivo mi přišlo hodně ošklivé. Divná chuť. Kamarád to vyřešil lahví vína. Já to ráno vyřešil na záchodě.",
      "stars": "2 hvězdičky",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Zikmund",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Dima Lutaienko",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Paulina Szmigiel",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Radek Novotný",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Dennis Karphammar",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Čepelák",
      "text": "Skvělý pub nejen na večerní tahy, ale skvěle se zde i majitel v rámci poledních menu. Výborné burgery, obsluha friendly a usměvavá.",
      "stars": "5 hvězdiček",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Swamp Safari",
      "text": "Když si chcete natočit pivo sami...",
      "stars": "4 hvězdičky",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jiří Kadlčík",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Mirek Sedlmajer",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Stefan Kuhn",
      "text": "(Přeloženo pomocí Google) Funny nápad, ale personál nebyl tak přátelský.\n\n(Původní text)\nFunny idea, but staff wasn't that friendly.",
      "stars": "2 hvězdičky",
      "publishAt": "před 5 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jot DB",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Natasa Kostic",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Daniel DanTe Těžký",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ben L",
      "text": "(Přeloženo pomocí Google) Zajímavý koncept, na co se můžete podívat. V podstatě více mužů na cestě tam, v naší době jen dvě ženy. Bohužel jen velmi tichá hudba. Po chvíli převážně z jakýchkoli skupin (fotbalových týmů nebo podobných) hlasitých písní. Od 4 osob můžete strávit večer. S menší skupinou bych raději chodil do typického baru.\n\n(Původní text)\nInteressantes Konzept was man sich mal angucken kann. Grundsätzlich eher Männer dort unterwegs, zu unserer Zeit nur zwei Frauen. Leider nur extrem leise Musik. Dafür nach einer Weile meistens von irgendwelchen Gruppen (Fusballmannschaften oder ähnliches) laute Gesänge. Ab 4 Personen kann man dort mal einen Abend verbringen. Mit kleineren Gruppe würde ich eher in eine typische Bar gehen.",
      "stars": "3 hvězdičky",
      "publishAt": "před 6 měsíci",
      "likesCount": "1",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tvrdy Milan",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Joe Lawman",
      "text": "",
      "stars": "1 hvězdička",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Shai Nave",
      "text": "(Přeloženo pomocí Google) Velmi chutné a levné a trochu hlučné\n\n(Původní text)\nטעים מאוד ולא יקר קצת רועש",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Eduard Muřický",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "crazypaddyhhcity",
      "text": "(Přeloženo pomocí Google) Dobrý příběh s kužely a především levný. Může mít trochu více hudební nálady.\n\n(Původní text)\nGute Geschichte mit dem Zapfen und vor allem günstig. Könnte ein wenig mehr musikalische Stimmung haben.",
      "stars": "4 hvězdičky",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Karim El Sherif",
      "text": "(Přeloženo pomocí Google) Dobré jídlo\nDobré služby přátelské\nDobré pro skupiny\nCeny jsou dobré pro turisty\n\n(Původní text)\nNice food\nGood friendly service\nGood for groups\nPrices ok for tourists",
      "stars": "4 hvězdičky",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David tryzubský",
      "text": "Vyborny tatarak, pivko by mohlo byt lepsi,kluci na baru super! Diky",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Veronika Nováková",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Katerina Loukotova",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukáš Bauer",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Christine Dvořáková",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tereza Pokorná",
      "text": "Chodím sem hodně často a mám to tady moc ráda. Zatím jsem tu byla vždy jen na polední nabídku a byla jsem vždy se vším spokojena - jak skvělé jídlo, tak příjemná obsluha. Když máte věrnostní kartičku, 10. oběd máte zdarma. Určitě doporučuji!",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tobias Kramer",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Marek Havlíček",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Veronika K",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Simon Rügamer",
      "text": "(Přeloženo pomocí Google) Potraviny se dají dobře, ale počkáte alespoň 2 hodiny, dokud nebudete mít v očích své jídlo, jen levné peníze\n\n(Původní text)\nEssen vestekkkungeht gut durch aber du wartest Minimum 2 Stunden bis du dein Essen hast in meinem Augen nur eine billige Geldmacherei",
      "stars": "2 hvězdičky",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": "(Přeloženo pomocí Google) Drahý Simon,\n\nje nám velmi líto, že jste nebyli spokojeni s našimi službami. Pokud nás navštívíte znovu, věříme, že budete spokojeni.\n\nTým PUB Praha 2\n\n(Původní text)\nDear Simon,\n\nwe are very sorry, that you were not satisfied with our services. If you visit us again, we believe you will be satisfied.\n\nThe PUB Prague 2 team"
    },
    {
      "name": "Ondřej Moravec",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 6 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Julia",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Henrik Mäule",
      "text": "",
      "stars": "1 hvězdička",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Małgosia Papież",
      "text": "(Přeloženo pomocí Google) Typické české místo s pivem, které můžete nalít. Služba je i přes velký počet lidí velmi efektivní a je velmi pěkná.\n\n(Původní text)\nTypowy czeski lokal z piwem, które można samemu nalewać. Obsługa mimo dużej ilości ludzi bardzo sprawnie obsługuje i jest bardzo miła.",
      "stars": "4 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Nektarios Anagnostopoulos",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Sebastian Ufer",
      "text": "(Přeloženo pomocí Google) Provoz problematický, přehledová tabulka byla pozdě, koncept cool\n\n(Původní text)\nBedienung problematisch, Scoreboard erst spät angeschaltet, Konzept geil",
      "stars": "4 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ján Pravda",
      "text": "(Přeloženo pomocí Google) Můžete si zde vychutnat pivo. Cena je o něco vyšší, ale stojí za to. Můžete dokonce soutěžit s jinými hospodami.\n\n(Původní text)\nYou can enjoy beer tapped by yourself here. The price is a bit higher, but it's worth the experience. You can even compete with other pubs.",
      "stars": "4 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Massimiliano Danner",
      "text": "(Přeloženo pomocí Google) Skvělý nápad, ale špatná atmosféra\n\n(Původní text)\nCoole Idee, aber schlechte Atmosphäre",
      "stars": "3 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Rouven West",
      "text": "(Přeloženo pomocí Google) Nejhorší místo v Praque. Nechoď!\nJsou to opravdu rasismus a lidé jsou ohroženi jako žalostné peníze. Pokud u pijete trochu u bude vykopnut\n\n(Původní text)\nWorst place to be in Praque. Don't go in!\nThey are really racism and the peoole are threated by the waitor like money. If u drink a bit u will be kicked out",
      "stars": "1 hvězdička",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "petr danek",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jakob",
      "text": "(Přeloženo pomocí Google) Jídlo OK, ceny jsou v pořádku. Personál není příliš přátelský, jen velmi tichá hudba, žádná nálada. Na požádání, proč hudba je tak tichá, přišla jen: promluvit tiše nebo poslouchat na toaletu.\n\n(Původní text)\nEssen ok, Preise in Ordnung. Personal nicht besonders freundlich, nur sehr leise Musik, keine Stimmung. Auf Nachfrage, warum die Musik so leise ist  kam nur : redet leiser oder hört es euch auf der Toilette an.",
      "stars": "3 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tobias M.",
      "text": "(Přeloženo pomocí Google) V této hospodě máte klepnutí přímo u stolu. Mezi tabulky a dokonce i jinými místy se koná soutěž pro většinu opilých piv. Hamburger také chutná skvěle.\n\n(Původní text)\nIn diesem Pub hat man einen Zapfhahn direkt am Tisch. Unter den Tischen und sogar anderen Standorten gibt es einen Wettkampf um die am meisten getrunkenen Biere. Die Burger schmecken auch hervorragend.",
      "stars": "4 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lucie Řezníčková",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Šajner",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michael 1",
      "text": "(Přeloženo pomocí Google) lahodné. dobré pivo. je lepší, když přijde velká společnost\n\n(Původní text)\nвкусно. хорошее пиво. лучше приходить большой компанией",
      "stars": "5 hvězdiček",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Kateřina Birko",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "matej kinovic",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "František Tyl",
      "text": "Parádní plznička!",
      "stars": "5 hvězdiček",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Aaa232aaa232aaa232 Aaa",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "adela lada",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "lada aada",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tomáš Procházka",
      "text": "(Přeloženo pomocí Google) Moc příjemná obsluha.\n\n(Původní text)\nMoc prijemna obsluha.",
      "stars": "4 hvězdičky",
      "publishAt": "před 7 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Laura B.",
      "text": "Vždy výborné jídlo a příjemná obsluha.",
      "stars": "5 hvězdiček",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Sabína Zavarská",
      "text": "",
      "stars": "2 hvězdičky",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jenik Trmi",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Clive Chittenden",
      "text": "(Přeloženo pomocí Google) Odlišný zážitek!\n\n(Původní text)\nDifferent experience!",
      "stars": "5 hvězdiček",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Romancik",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Andy P.",
      "text": "(Přeloženo pomocí Google) Zaměstnanci pouze projíždí a hosté sotva přijdou.\nJídlo (XXL vepřový řízek) bylo velmi špatné! Příliš hustá (1-3 cm) a nevařená rovnoměrně. Kuchař se mi snažil vysvětlit, že by to mělo být tak :(\nAtmosféra je v pořádku a pivo pro české podmínky je normální a levné, ale nic zvláštního.\nZa zmínku stojí: Můžete si klepnout na své pivo sami u stolu.\n\n(Původní text)\nPersonal hetzt nur vorbei und nimmt Gäste kaum war.\nDas Essen (XXL Schweineschnitzel) war sehr schlecht! Viel zu dick (von 1-3 cm) und nicht gleichmäßig gegart. Der Koch hat mir versucht zu erklären, dass das so sein soll :(\nDie Atmosphäre ist ok und das Bier für tschechische Verhältnisse normal und günstig, aber nichts besonderes.\nErwähnenswert: Man kann sein Bier am Tisch selbst zapfen.",
      "stars": "2 hvězdičky",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tomas Bilek",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Adeline Duff",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Evča Ježdíková",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Miloslav Lebeda",
      "text": "Rychlá obsluha",
      "stars": "4 hvězdičky",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Dan Johansson",
      "text": "(Přeloženo pomocí Google) Vynikající služby. Pěkná hospoda se samoobsluhou.\n\n(Původní text)\nSuperbra service. Trevlig pub med självservering.",
      "stars": "4 hvězdičky",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lucie Čečrdlová",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 8 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lech Kliś",
      "text": "(Přeloženo pomocí Google) Zajímavé místo pro výlet na pivo\n\n(Původní text)\nCiekawe miejsce na wypad na Piwo",
      "stars": "5 hvězdiček",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Pierluigi Patuelli",
      "text": "(Přeloženo pomocí Google) Normální hospoda pro spoustu piva\n\n(Původní text)\nNormale pub per abbondanti bevute di birra",
      "stars": "3 hvězdičky",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Pavel Svoboda",
      "text": "Za nas velka spokojenost. Plzeň vyborna, k jidlu jsme si dali kureci křídla a hamburgery a vsechno bylo v poradku. (Ke kridlum maji opravdu vybornou omacku). Ceny jsou umerne mistu a kvalite. Obsluha příjemná. Cely koncept je  velmi zajimavy a musim rict ze i dost efektivni:D neustale jsme bojovali se stolem cislo 8, kdy vypije vic:D ( progress v piti je mozne sledovat na obrazovce)",
      "stars": "5 hvězdiček",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "LePombaer",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukáš Kundrát",
      "text": "Výborné pivo, posezení, jídlo i obsluha. Člověka vždy strhne soutěživost a na popovídání to tu není...",
      "stars": "4 hvězdičky",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Andro Jelinek",
      "text": "V poměru cena výkon velmi slušné. Obsluha fajn, jídlo, porce, adresa, prostředí čisté, i když s lepší vzduchotechnikou by to bylo výrazně lepší.",
      "stars": "5 hvězdiček",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Roman Kolář",
      "text": "(Přeloženo pomocí Google) Skvělé jídlo a fantastické pivo.\n\n(Původní text)\nGreat food and fantastic beer.",
      "stars": "5 hvězdiček",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Krchnak",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Rafal Kohut",
      "text": "(Přeloženo pomocí Google) Skvělý nápad na bar, který si vyléváte pivo. Jednoduché a chutné menu\n\n(Původní text)\nŚwietna idea baru sam sobie nalewasz piwo.   Menu proste i smaczne",
      "stars": "5 hvězdiček",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Maryna Vradii",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "petr kazimour",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jana Leitgebová",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Viktor Pacholík",
      "text": "Dobré jídlo za přiměřené ceny. Pípa i každého stolu. Příjemný, ochotný personál.",
      "stars": "4 hvězdičky",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Mr GoodByte",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Valeš",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Reitinger",
      "text": "Velmi útulné.",
      "stars": "5 hvězdiček",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Březina",
      "text": "Staré, nuzné.",
      "stars": "3 hvězdičky",
      "publishAt": "před 9 měsíci",
      "likesCount": "",
      "responseFromOwnerText": "Dobrý den, Petře, je nám líto, že máte na naši provozovnu takový názor. Můžete být prosím konkrétnější? Děkujeme za Vaši zpětnou vazbu. The PUB Praha 2"
    },
    {
      "name": "Dominika Čejková",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Markéta Procházková",
      "text": "(Přeloženo pomocí Google) srdcovka\n\n(Původní text)\nSrdcovka",
      "stars": "5 hvězdiček",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Andrej Alfonso",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Dénes Tanczer",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Sándor Kothencz",
      "text": "(Přeloženo pomocí Google) Nové brunch pro mladé lidi v Praze. Je to skutečné místo pro oslavu.\n\n(Původní text)\nÚj, szép fiataloknak való söröző Prágában. Igazi buli hely.",
      "stars": "4 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "andy jones",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michal Poslušný",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Radka Jerabkova",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Svetlana Pepic",
      "text": "(Přeloženo pomocí Google) Dobrý nápad pro hospodu. Rude personál. Velmi nepříjemný výskyt.\n\n(Původní text)\nGood idea for pub. Rude staff. Very unpleasant expirience.",
      "stars": "1 hvězdička",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": "(Přeloženo pomocí Google) Drahá Svetlana, je nám velmi líto za špatné zkušenosti. Mohl byste popsat, prosím, co je v zaměstnání zvlášť špatné? Děkuji. Tým PUB Praha 2\n\n(Původní text)\nDear Svetlana, we are very sorry for your bad experience. Could you please describe what in particular was wrong with the staff? Thank you. The PUB Prague 2 team"
    },
    {
      "name": "Jan Zíta",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "slavista 1",
      "text": "Každý stůl má vlastní pípu, kde si zákazníci mohou natočil libovolné množství piva. Jinak skvělá obsluha, dobře uvařené jídlo a prostředí.",
      "stars": "5 hvězdiček",
      "publishAt": "před 10 měsíci",
      "likesCount": "2",
      "responseFromOwnerText": ""
    },
    {
      "name": "Axnar Thema",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Pascal Plavec",
      "text": "(Přeloženo pomocí Google) Dobré pivo za spravedlivé ceny, jak můžete s radostí cestovat do Prahy\n\n(Původní text)\nGute Bier zu fairen Preisen, da lässt sich gerne nach Prag reisen",
      "stars": "5 hvězdiček",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Moje Petr",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "micah plourd",
      "text": "",
      "stars": "2 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Viktoriya Oliynyk",
      "text": "(Přeloženo pomocí Google) Nalijte pivo k sobě a soutěžíte s dalšími stoly, kteří pijí víc :) chlapci jsou nadšení\n\n(Původní text)\nНаливай пиво себе сам и соревнуйся с другими столами, кто больше выпил :) ребята в восторге",
      "stars": "3 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "1",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Novák",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Glogar",
      "text": "Velmi dobře vaří.",
      "stars": "5 hvězdiček",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jakub Němec",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 10 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lýdie Petrová",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Gale Zaza",
      "text": "(Přeloženo pomocí Google) Pěkné pivo zde\n\n(Původní text)\nNice beer here",
      "stars": "4 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Janina",
      "text": "(Přeloženo pomocí Google) Samo o sobě chladný koncept, ale špatná služba a ještě horší jídlo. Nejhorší burger, co jsem kdy snědla.\n\n(Původní text)\nAn sich cooles Konzept, aber schlechter Service und noch schlechteres Essen. Schlimmster Burger, den ich je gegessen habe.",
      "stars": "1 hvězdička",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Peter Oremusz",
      "text": "(Přeloženo pomocí Google) Zajímavý způsob vlastního čepování piva. Pivo výborné, jídlo skvělé.\n\n(Původní text)\nZaujímavý spôsob vlastného čapovania piva. Pivo výborné, jedlo skvelé.",
      "stars": "5 hvězdiček",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Vasil Tričkov",
      "text": "Výborná atmosféra, pro soutěživé",
      "stars": "4 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "ondřej kaštovský",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Matějašek",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Laura Beinschrodt",
      "text": "",
      "stars": "2 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Nečesal",
      "text": "(Přeloženo pomocí Google) Je to v pořádku, prostě nic zvláštního ...\n\n(Původní text)\nIt is OK, just nothing special...",
      "stars": "4 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Kolankiewicz",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "colin vandenbogaerde",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Filip Floder",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Yong Jiang",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Marek Sušický",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Олег Чебаненко",
      "text": "(Přeloženo pomocí Google) Je to zábavné a hlučné. Na stolech jsou sloupy piva s čítačkami. Kolik je pili, tolik a zaplatili.\n\n(Původní text)\nЗдесь весело и шумно. На столах стоят пивные колонки со счетчиками. Сколько выпили, столько и заплатили.",
      "stars": "4 hvězdičky",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Julien",
      "text": "",
      "stars": "1 hvězdička",
      "publishAt": "před 11 měsíci",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Rudik Kunik",
      "text": "Tip top",
      "stars": "5 hvězdiček",
      "publishAt": "před 11 měsíci",
      "likesCount": "1",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jakub Krs",
      "text": "(Přeloženo pomocí Google) průměrného příjmu potravy\n\n(Původní text)\nAverage food",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Gian Marco Fusaro",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Zdeněk Veselý",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Miroslav Sedlmajer",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Štěpánka Koutníková",
      "text": "Velmi dobrá obsluha, jídlo dobré, ale nic pro vegetariány nebo dokonce vegany.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Giorgi Shartava",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Krasicky",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petra Rambousková",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ольга Вдовина",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Roman Nedelka",
      "text": "Super",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michaela Satrapova",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Bradley Colman",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Павел Горлов",
      "text": "(Přeloženo pomocí Google) Chutné, cenově dostupné! Předpoklad v přízemí je hlučný. Ideální pro společnost několika lidí 👍\n\n(Původní text)\nВкусно, доступно! Помещение на цокольном этаже, шумновато. Идеально для компании из нескольких человек 👍",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lauren Evans",
      "text": "(Přeloženo pomocí Google) Docela zklamání. Viděl jsem na internetu, že tu byla ta hospůdka a ve skutečnosti se těším na příjezd do Prahy. Zůstává otevřená pouze do půlnoci, trochu hrubá služba, málo lidí a nulová pivovarnická odrůda.\n\n(Původní text)\nAbbastanza una delusione. Avevo visto su internet che c'era questo pub e infatti non vedevo l'ora di arrivare a Praga per andarci. Rimane aperto solo fino a mezzanotte, servizio un po' maleducato, poca gente, e zero varietà nei tipi di birra.",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tereza Svobodova",
      "text": "Dobré pivo a příjemná obsluha,  bylo plno, k pípě jsme se bez rezervace nedostali.  I tak to byl příjemný večer,  díky,  přijdeme zase!",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Christian Nägelein",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Markvart",
      "text": "The PUB má u každého stolu pípu, takže si každý host načepuje pivo úplně sám. U stolu si také můžete opláchnout sklenici. Je to zábava a tankové pivo Pilsner Urquell více chutná. Vaří tu celkem dobře. Obsluha byla celkem příjemná a vstřícná. Doporučuji zajít v pracovni dny na polední menu, kdy jsou výhodné ceny jídla.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lucie Egertová",
      "text": "Dovbe pivo, zabavny zpusob cepovani si sami u stolu",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Chudek",
      "text": "Prostředí nic moc. Obsluha v pohodě.",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Karol Filo",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Henrico Gouvêa",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Feřtek",
      "text": "Rychlá obsluha, rozumné ceny a přes obědy hotovky. Mohu jen doporučit. V centru Prahy výjimka 👍",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Luboš Červ",
      "text": "Dobrá hospoda na oběd, právě proto tu bývá někdy dost plno. Je z čeho vybrat, jen lépe přijít před 12h.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Alejandro Márquez",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Benjamin Evans",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Stanislav Rohel",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukas Patera",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Артем Герцен",
      "text": "(Přeloženo pomocí Google) Dobré místo, trochu hlučné, mírné ceny, je menu v ruštině\n\n(Původní text)\nХорошее место, немного шумновато, цены умеренные, есть меню на русском",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Modora Pal",
      "text": "(Přeloženo pomocí Google) Americký pocit. Není to velká česká hospůdka, jsem příliš moderní, ale mladí lidé ji milují. Pivo a klouby jsou vynikající, strana má příliš mastný a jantarový vkus.\n\n(Původní text)\nAmerikai feeling. Nem a hgyomanyos cseh kocsma, nekem túl modern, de a fiatalok imádják. A sör és a csülök finom, az oldalas túl zsíros és amcsi ízvilág.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michal Ambrož",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ladislav Sýkorovský",
      "text": "(Přeloženo pomocí Google) Prijemna obsluha, dobry vyber jidla a ještě si k tomu natočit pivo :-)\n\n(Původní text)\nPrijemna obsluha, dobry vyber jidla a jeste si k tomu natocite pivo :-)",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tereza Rimnacova",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Arcimovič",
      "text": "Hospoda, která čistotou a personálem konkuruje zavedenějším podnikům v okolí.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Aneta Neu",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martina Hurtikova",
      "text": "Velmi prijemna a rychla obsluha, jidlovelmi dobre, ze skupinky 15 osob nebyl nikdo nespokojeny. Porce byly obrovske. Pivari si uzili osobni toceni piva a pri myti sklenic si vsichni uzili decentni sprsku. Velka spokojenost. Jen prostor je to velky a pri naplnene kapacite tim padem trochu moc hluku, ale dalo se to zvladnout! ;-)",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Matěj Kratochvíl",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Miroslav Koláček",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Fabian B",
      "text": "",
      "stars": "2 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Nico Nickmania",
      "text": "(Přeloženo pomocí Google) Vidí themselfes spíš jako restaurace než jako hospodě. To je to, co nás majitel řekl. Majitel také zakázáno, abychom byli hlasité nebo rušený právě poté, co jsme vstoupili do hospody, dokonce jsme mluvili mezi sebou v pravidelném objemu. To bylo opravdu divné. Naše rezervace dvou tabulek nefungoval stejně naše skupina, museli sedět na jednom pravidelném stole a na jiném opravdu malý. Tam byl žádná kompenzace za to. V neposlední řadě hudba tam bylo opravdu tichý, takže jsme se rozhodli opustit místo po několika minutách.\n\n(Původní text)\nThey see themselfes more like a restaurant than like a pub. That's what the owner told us. The owner also has forbidden us to be loud or noisy just right after we entered the pub, even we have been talking to each other in regular volume. That was really strange. Our reservation of two tables didn't work as well, our group had to sit on one regular table and on another really small one. There was no compensation for that. Last but not least the music there was really quiet, so we decided to leave the place after a couple of minutes.",
      "stars": "2 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "4",
      "responseFromOwnerText": ""
    },
    {
      "name": "Oliver Berger",
      "text": "",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Peter W",
      "text": "(Přeloženo pomocí Google) Bohužel, tato služba nebyla nijak zvlášť přátelský.\n\n(Původní text)\nLeider war der Service nicht besonders freundlich.",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "fred kathe",
      "text": "",
      "stars": "2 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Barášek",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Filip Rydlo",
      "text": "Supr.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Selina Frank",
      "text": "(Přeloženo pomocí Google) Služba byla v pořádku. Bohužel, jídlo bylo špatné a teprve zrušena nás byly také žádná kompenzace.\nKoncepce kohoutku sám o sobě je stále dobrá.\n\n(Původní text)\nService war ganz ok. Essen war leider schlecht und wurde uns lediglich storniert, gab auch keinerlei Entschädigung. \nDas Konzept zum selber zapfen ist an sich trotzdem gut.",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Milan Zapach",
      "text": "Tento retezec hospod mam velmi rad. Sranda je sem brat kolegy z jinych zemi",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Verena Meyer",
      "text": "(Přeloženo pomocí Google) Nicméně, v samotném chladném hospody s pivem pro sebe klepnutím na kuřecí křidélka byly staré a špinavé - číšníci mají také přidány. Byli jsme pouze kuřecí křidélka opět zrušen ... ale je možná něco jiného.\n\n(Původní text)\nAn sich cooler Pub mit Bier zum selber zapfen jedoch waren die Chicken wings alt und vergammelt - die Kellner haben das auch zugegeben. Uns wurden lediglich die Chicken Wings wieder storniert... Service ist doch evtl was anderes.",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Stefan Frauenknecht",
      "text": "(Přeloženo pomocí Google) Přátelský servis, shnilé potraviny\n\n(Původní text)\nFreundliche Bedienung, vergammeltes Essen",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Piotr Bartosik",
      "text": "(Přeloženo pomocí Google) Dobrým místem pro Beer nad Hamburgery\n\n(Původní text)\nGood place for Beer nad Burgers",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Yunus Türk",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jiří Svoboda",
      "text": "Opravdu zajímavá hospoda. Točit si pivo sám, to se jen tak nevidí, konečně člověk nedostane podmirak! 😄\nJídlo také naprosto v pořádku, za mě naprostá spokojenost.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Patrick Wagner",
      "text": "(Přeloženo pomocí Google) Nejlepší koncept v Praze! Kdo chce pít, nenajdete lepší místo.\n\n(Původní text)\nDas beste Konzept in Prag! Wer saufen will, wird keinen besseren Ort finden.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Juraj Laurinec",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Cervenak",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Ch.",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Fabian Kalisch",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "pavel cervenka",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Hofferberth",
      "text": "(Přeloženo pomocí Google) Pokusil vstoupit do hospody na víkend a orgánem vykonávajícím dohled nám lhal o plných výhrady, které jsme kontrolovaných osobně - více než 50% z tabulek byli svobodní. On v podstatě ukázal jasný signál k naší skupině, že cizinci nejsou vítány! Naštěstí existují i ​​další místa v Praze, který přivítá non občané České republiky.\n\n(Původní text)\nTried to enter the Pub on the weekend and the supervisor lied to us concerning full reservations which we checked personally - more than 50% of the tables were free. He basically showed a clear sign to our group that foreigners are not welcomed! Fortunately there are other places in Prague which welcome non Czech nationals.",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Filip Simsa",
      "text": "Zážitek s točením piva z pípy u stolu, ale vyšší cena.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lucie Karvanová",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Vojtech Kantor",
      "text": "Skvele pivo. Doporucuju zkusit jejich kureci rizek",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Dorota Piačeková",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Krajča",
      "text": "Velmi doporucuji. Pohodove misto!",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Nicolas Hoffmann",
      "text": "(Přeloženo pomocí Google) Skvělé jídlo, dobrá cena, příjemná obsluha upřímně těžko stěžovat.\n\n(Původní text)\nGreat food, good price, friendly service honestly hard to complain.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Gennady Eremenko",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Thomas Devriese",
      "text": "(Přeloženo pomocí Google) Představa, pivo a jídlo byly pěkné, ale my jsme měli opravdu špatnou zkušenost s personálem. Když jsme zaplatili, jsme napočítali penězi 3x, ale ten chlap řekl, že jsme zaplatili 100 Kč krátký, ve skutečnosti nepřátelským způsobem. 100 Kč není mnoho, ale aspoň to mohl říci nám pěkně.\n\nTaké, když jsme se naše sklenice z chladničky (šli jsme tam den předtím a člen personálu, že bychom mohli jen vzít naše sklenice z chladničky a nemusel se ptát), dívka k nám přišel a řekl \" to není obchod, nemůžete prostě brát věci“.\nKdyž jsme jí o den dříve, ona také reagovala v nepřátelským způsobem.\n\nTo je důvod, proč nemůžeme dát více než 2 hvězdy.\n\n(Původní text)\nThe concept, beer and food were nice, but we had a really bad experience with the staff. When we paid, we counted the money 3 times, but still the guy said we paid 100 czk short, in a really unfriendly way. 100 czk isn't a lot, but at least they could say it to us nicely.\n\nAlso, when we took our glasses from the refrigerator (we went there the day before and a member of the staff said we could just take our glasses from the refrigerator and didn't have to ask), the girl came to us and said \"this isn't a store, you can't just take things\".\nWhen we told her about the day before, she also responded in an unfriendly way.\n\nThat's why we can't give more than 2 stars.",
      "stars": "2 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "1",
      "responseFromOwnerText": ""
    },
    {
      "name": "Carlos",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Bruno Jönsson",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Miroslav Žemlička",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Taška",
      "text": "Dobrý přístup, dobré pití",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": "Děkujeme za váš názor, příště vás zkusíme nadchnout skvělým přístupem i pitím a budeme doufat i v pátou hvězdu :-)"
    },
    {
      "name": "Евгений Шеин",
      "text": "(Přeloženo pomocí Google) Již podruhé v Praze a podruhé jsme se jít do této restaurace, nejlepší vepřové koleno se najím kdekoliv pivo je také nejvyšší třídy!\nVizuálně nebo něco zvláštního toto není hospoda, dřevěné stoly a lavice v suterénu, ale v kuchyni je 5 +!\nChcete-li jíst, pít chutné pivo, a to vše za málo peněz (co jiného je plus), pak neváhejte a jděte na tuto restauraci!\n\n(Původní text)\nВторой раз в Праге и второй раз идём в данное заведение, лучше свиной рульки я ни ел ни где, пиво также высший класс!\nВизуально ни чего особенного данный PUB не представляет, деревянные столы и лавки в подвальном помещении, но Кухня на 5+!\nЕсли хотите вкусно поесть, выпить вкусного пива и все это за небольшие деньги ( что ещё является одним из плюсов) тогда смело идите в данное заведение!",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Hans Petter Gjerde",
      "text": "(Přeloženo pomocí Google) To je v pořádku, ale žádná hudba a zařízení je trochu zastaralý\n\n(Původní text)\nIt's okay, but no music and the facility is a bit outdated ",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": "(Přeloženo pomocí Google) Dobrý den, někdy je pravý čas pro zastaralé zařízení. Ne, jen jsme si legraci, redesign našeho PUB je na cestě.\n\n(Původní text)\nHello, sometimes is a right time for an outdated facility. No, we just joking, the redesign of our PUB is on the way."
    },
    {
      "name": "Ondřej Karnet",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Novotný",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petra Lišková",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Александра Лунева",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Marek Pechar",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Daniel Kubat",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Eduard Steško",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Barbora Navrátilová",
      "text": "Obsluha: dlouho jsem neviděla protivnější a otrávenější servírku. Jídlo: hranolky byly přesolené, houska od burgeru tvrdá, vhodná tak pro kachny.",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": "Dobrý den, věřte, že velice dbáme na čerstvost a kvalitu každého jídla, které podáváme. Určitě prověříme, jak se vám na stůl mohla dostat tvrdá houska a zjednáme opatření, aby se to nestalo. Ohledně receptur máme přesně určeno množství ingrediencí. Sice nemáme odezvu, že by je náš kuchař nedodržoval, ale i tak provedeme kontrolu. Protože chceme vařit pro lidi, ne pro kachny 😀"
    },
    {
      "name": "Martin Malečík",
      "text": "Neprijemna obsluha, tvrda bulka od hamburgeru, presolene hranolky. Pri dalsi navsteve jsme museli jit po 10 min poprosit na bar, aby obsluha vůbec prisla k nasemu stolu.  ",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": "Dobrý den, to nás velmi mrzí. S personálem jsme na toto téma hovořili a budeme si na to dávat pozor. Doufáme, že budete mít chuť zkusit, za jsme se v tomto ohledu zlepšili."
    },
    {
      "name": "Gen Eizenberg",
      "text": "Top misto. Plzen mi chutna jenom tady, primo z tanku. Jidlo dobre, ikdyz sdileji kuchyn s u havranu",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Andrej Zykov",
      "text": "(Přeloženo pomocí Google) Buď barman pro sebe - cool! Dobré jídlo, ale ceny příliš vysoké pro tento druh kvality.\n\n(Původní text)\nBe the bartender for yourself  - cool! Good food, but prices a bit too high for such kind of quality.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Zdeněk Svoboda",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Maly",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Brabec",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Müller",
      "text": "Skvela obsluha. Pivo tankove, ktere si tocite sami z pipy. Vecer bych nechodil bez rezervace. Doporucuji. ",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "1",
      "responseFromOwnerText": ""
    },
    {
      "name": "Duncan Wick",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr",
      "text": "Mé chuťové pohárky na jazýčku poskakují radostí. Obsluha skvělá. Porce by mohli být větší (hlavně tedy přílohy). Hranolky na talíři člověk pomalu hledá. ",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Marek Balej",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Can Whittaker",
      "text": "(Přeloženo pomocí Google) Pravděpodobně jeden z nejlepších „v hospodě“ lokalit v Praze. Je skryta z prostého místě, které dělá to ještě lepší. V závislosti na denní době jdete, může to být buď zticha, nebo jam balena. Opravdu doporučuji toto místo, pokud chcete kopat zpět s pár piv doprovázených chuťovek. Jsem vysadil jednu hvězdu, protože se domnívám, že jsou poněkud nedostatečný. Tento přehled není odrazem služby, ale spíše pro horní vedení vzít na vědomí.\n\n(Původní text)\nProbably one of the best \"The Pub\" locations in Prague. It is hidden out of plain site which makes it even better. Depending on the time of day you go, it can either be quiet or jam packed. Really recommend this place if you want to kick back with a few beers accompanied by finger foods. I have dropped off one star since I believe they are somewhat understaffed. This review is no reflection of the service, but more for the upper management to take note.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "1",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ivan Novotny",
      "text": "(Přeloženo pomocí Google) Skvělý tatarák, super Plzeň. Akorát trochu hlučné prostředí, ale věřím, že časem nainstalujte pohlcovače hluku 👍\n\n(Původní text)\nSkvelý tatarák, super Plzeň. Akurát trochu hlučné prostredie, ale verím, že časom nainštalujtú pohlcovače hluku 👍",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Viktor Veselý",
      "text": "Měl jsem zde úplně úžasný hamburger, byl tak moc dobrý, že jsem si jej za chvilku musel dát ještě jednou. Jen škoda, že to pivo ze samovýčepu není trošku lepší. Bohužel Plzeň už dlouho nepatří mezi mé favority. ",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Výborný",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Дмитрий Кащенко",
      "text": "(Přeloženo pomocí Google) dostatečně prostorná pub. Stoly jsou vybaveny kohoutky s různými pivy. Ceny nejsou nejnižší. Je možné jíst.\n\n(Původní text)\nДостаточно просторный паб. Столы оборудованы кранами с разными сортами пива. Цены не самые низкие. Есть возможность перекусить.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Patrik Timura",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Moritz Dust",
      "text": "(Přeloženo pomocí Google) Přestože ‚The Pub‘ měla být otevřena až do 5AM v sobotu, byli jsme poslali immideately v extrémně způsobem. Bych nedoporučoval.\n\n(Původní text)\nEven though 'The Pub' was supposed to be open until 5AM on Saturday, we were sent off immideately in an extremely fashion. Would not recommend.",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "לידיה זבזנוב",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Radek Carda",
      "text": "Pivo dobré, obsluha Ok.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Fabio Tani",
      "text": "(Přeloženo pomocí Google) Skvělé místo, kam jít s přáteli se výčepní na stole je opravdu hezké, si můžete objednat jídlo a pak stačí použít volbu samoobslužné pít vše, co chcete. K dispozici je také bar soutěž ve všech hospodách v Praze a ve střední Evropě.\n\n(Původní text)\nGreat place to go with friends, the beer tap on the table is a really nice touch, you can order food and then just use the self service option to drink all you want to. There's also a bar competition across all the pubs in Prague and Central Europe.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Евгений Габидулин",
      "text": "(Přeloženo pomocí Google) To je ale hezká restaurace.\n\n(Původní text)\nОтличный ресторан. ",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tim S.",
      "text": "",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Simone Garavaglia",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Valeria Bretas",
      "text": "(Přeloženo pomocí Google) Bar jiný otimo místo pít pivo! Porce jsou taky dobrý\n\n(Původní text)\nBar diferente, otimo lugar para beber cerveja! Porções são boas também",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "I'm Iain",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tereza Chvojková",
      "text": "Výborné jídlo, skvělý personál, denní menu je rozmanité a vybere si tady každý. ",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Šárka Beznosková",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "martin mourek",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tom Schmitt",
      "text": "(Přeloženo pomocí Google) Klepnout u stolu, jídlo bylo chutné - a jinak nic negativní.\n\n(Původní text)\nZapfhahn am Tisch, Essen war lecker - und auch sonst gab es nichts negatives.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "1",
      "responseFromOwnerText": ""
    },
    {
      "name": "Chris Stafford",
      "text": "(Přeloženo pomocí Google) vynikajícího piva, špatná atmosféra, průběžně stále vynadal za zpěvu v konkurenčním pití bar ........\n\n(Původní text)\ngreat beer, poor atmosphere, kept getting told off for singing in a competitive drinking bar........ ",
      "stars": "2 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "2",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michal Malý",
      "text": "Pěkný koncept a prostředí, skvělé, že si můžete točit pivo sami, dobrá kuchyně. Co mne opravdu zklamalo, byla kvalita piva. Pivo bylo do 20 sekund bez pěny, nekroužkovalo, prostě jedná z nejhorších Plzní, co jsem kdy pil. V restauraci se kouří ",
      "stars": "2 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukáš Šálek",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Spáčil",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ivan Helcelet",
      "text": "Standard, nezklame, nešokuje.\nNeobvyklá svým konceptem, ale to je zajímavé spíš večer při posezení.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Robin Jambor",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "main account",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Matthias Berger",
      "text": "(Přeloženo pomocí Google) Výčepní sám .. Interaktivní žebříčku na stěnu promítá, že pořadí v restauraci, v Budapešti a zobrazuje informace o ostatních městech.\nPersonál byl bohužel docela nepřátelský k nám a stroze ..\nJídlo bylo funkční\n\n(Původní text)\nBier zum selbst zapfen.. interaktives leaderboard an die wand projeziert, welches den rang im Lokal, in Budapest und über weitere Städte anzeigt.\nPersonal war bei uns leider recht unfreundlich und kurz angebunden.. \nDas essen war funktional ",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "jasminka alić",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Smillow Chiller",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tomáš Kelnar",
      "text": "Zajímavé i když docela hlučné prostředí. Slušné ceny a dobrá samoobsluha s pivním automatem.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Alexander Kuzmin",
      "text": "(Přeloženo pomocí Google) Pilsner dostal lepší, super hospoda. Trochu hlučný ačkoli.\n\n(Původní text)\nPilsner got better, super pub. A bit noisy though.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Andrej Naď",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Carda",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Thomas Ligmann",
      "text": "(Přeloženo pomocí Google) proniknout do sebe ... Mega. Živá hudba ... Mega !!\n\n(Původní text)\nSelbst zapfen... Mega. Livemusik... Mega!! ",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "P",
      "text": "(Přeloženo pomocí Google) Třída pivo. příjemná restaurace\n\n(Původní text)\nKlasse bier. Schönes Restaurant ",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Shah Mir",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Karolina Smutná",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Hester van Wijk",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Andrea Mariani",
      "text": "(Přeloženo pomocí Google) Skutečný hospoda s bezkonkurenční ceny\n\n(Původní text)\nUn vero pub con prezzi imbattibili",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Kavka",
      "text": "Pivo tady prostě musí být super. Jídlo v poradku. Milá obsluha.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Palovský",
      "text": "Výborné obědy. Většinou nějaké české a pár zahraničních jídel v poledním menu. Nebyl jsem mimo dobu oběda, takže soudím, jen, co jsem potkal.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Salava",
      "text": "Příjemný podnik s pípou na stole.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Andrei Reutov",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Avishay Reuven Shem-Tov Dlugy",
      "text": "(Přeloženo pomocí Google) Výtvarné ceny pěkné potravin. Si nalít sami si pivo, takže není čekání na to.\n\n(Původní text)\nFine prices nice food. You pour yourself your beer so there is no wait for that.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "vladimir vojtisek",
      "text": "(Přeloženo pomocí Google) Skvělé jídlo. Přátelský servis.\nPolévky jsou bohaté a domácí-like \"babička styl\". Opravdu jsem si to užil.\nPřekvapivě velmi chutné hamburger. Maso je velmi šťavnaté a chutné.\nDocela dobrá reprezentace české kuchyně.\n\n(Původní text)\nGreat food. Friendly service. \nSoups are rich and home-made-like \"Grandma style \". I've really enjoyed it. \nSurprisingly very tasty burger. Meat was very juicy and tasty. \nQuite good representation of Czech cuisine.",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "František Beránek",
      "text": "Česká klasika, někdy se jídlem trefí, někdy ne.",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Vojta Baroch",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "noemipiknova",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Brhlík",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Marc Vollekier",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Eugene Marty",
      "text": "Super!",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Kott",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Marek Král",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Zdenek Zita",
      "text": "(Přeloženo pomocí Google) Velký!\n\n(Původní text)\nGreat!",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Strnad",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Veronika Pavlíková",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Karel Krejčí",
      "text": "Objednali jsme si stůl v NEKUŘÁCKÉ části. K našemu překvapení ale hosté u všech okolních stolů kouřili. Personál na moji stížnost reagoval slovy \".... máte přece nekuřácký STŮL....\"",
      "stars": "1 hvězdička",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "jan pešek",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukas Vrabec",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Kateřina Hotovcová",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Vomočil",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukáš Kšír",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Dvorak",
      "text": "Klasicky pub. Nicim neprekvapi, jidlo dobre.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jakub Svatos",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Řezáč",
      "text": "Pokud si clovek umi natocit pivo, tak se rad vrati. Jidlo: kridla a menu pro 4 osoby prislo k pivu vhod. Byt strizlivy dal bych hvezdy 3.",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michal Hostička",
      "text": "(Přeloženo pomocí Google) Copak opravdu na mě dojem\n\n(Původní text)\nDidn't really impressed me",
      "stars": "3 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Dvořák",
      "text": "Zajimavy koncept restaurace, kde si pivo u stolu tocite sami. Super pro partu kamaradu. Jidlo prumerne. ",
      "stars": "4 hvězdičky",
      "publishAt": "před rokem",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Dalibor Hála",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tomáš Knotek",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Tománek",
      "text": "Dobré jídlo a pivo z tanku, které si člověk točí sám přímo na stole. ",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "pepa pepa",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Валерий Баринов",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Katsiaryna Pazniak",
      "text": "(Přeloženo pomocí Google) Normální místo, velmi zajímavý způsob servírování piva. Ale občas udělali chybu a přidal 2L Pivo na náš účet, protože to bylo nějak v systému, ale neměli jsme to. Burger je v pořádku, ale opravdu není nejlepší. Poradit toto místo pouze na návštěvu jednou pro zábavu.\n\n(Původní text)\nA normal place, very interesting way of serving Beer. But occasionally they made a mistake and added 2L Beer to our bill, because it was somehow in system, but we haven't had this. Burger is fine, but really not the best one. Advice this place only to visit once for fun. ",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Alex Koch",
      "text": "(Přeloženo pomocí Google) Dobré pivo s zapfhahn u stolu\n\nVelmi chutné místní (český) jídla za dobré ceny\n\n(Původní text)\nGutes bier mit zapfhahn am Tisch \n\nSehr leckere lokale (böhmische) Gerichte zu guten Preisen",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jaroslav Stříbrný",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Paolo Iavarone",
      "text": "(Přeloženo pomocí Google) Osobně mě žádná legrace, že pivní soutěže hospody to dělá. Přeplněné studenty, ceny nejsou opravdu levné, pivo může být chutné, ale také pro koktejly V žádném případě!\n\n(Původní text)\nPersonally it makes me no fun the beer contest pubs. Crowded by students,  prices are not really cheap,  the beer can be tasty but for the cocktails no way! ",
      "stars": "1 hvězdička",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Chris Berry",
      "text": "(Přeloženo pomocí Google) Vynikajícího piva, příjemný personál a chutné jídlo. Neuvědomil jste museli rezervovat pro tabulky s odbočkami, aby sloužit sami, ale stále skvěle.\n\n(Původní text)\nGreat beer, nice staff and tasty food. Didn't realise you had to book for the tables with taps to serve yourself but still great.",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tomáš Novák",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Francesco Furloni",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jaroslav Kubáň",
      "text": "Pípa u stolu, dobrá Plzeň, kuřácka restaurace.",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Misha van der Ven",
      "text": "(Přeloženo pomocí Google) Velmi, velmi zábavné jít sem se svými přáteli. Jídlo je v pořádku, atmosféra je lepší a když jdete tam se svými přáteli, bude to pekelná noc!\n\n(Původní text)\nVery very much fun to go here with your friends. The food is alright, the atmosphere is better and when you go there with your friends, it will be a hell of a night! ",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Pavel Mikeska",
      "text": "Velmi dobrá kuchyně, díky kartičce lze získat 10% slevu",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Pochop",
      "text": "(Přeloženo pomocí Google) Nemůže jít tady špatně. Neomezené pivo na dosah ruky. Nijak zvlášť úžasné jídlo, ale v pohodě způsob objednávání prostřednictvím systému a mohou strávit hodiny zde soutěží pít co nejvíce. Více pro vysoké školy dav ačkoli.\n\n(Původní text)\nCan't go wrong here.  Unlimited beer at your fingertips.  Not particularly awesome food, but cool way of ordering through the system and can spend hours here competing to drink the most.  More for the college crowd though.",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Vojta Roček",
      "text": "(Přeloženo pomocí Google) The PUB standardem.\n\n(Původní text)\nThe PUB standard.",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Biji Leskova",
      "text": "+ pivo přímo točené u stolu\n+ přivolávání obsluhy tlačítkem\n-  Nevhodné pro nekuřáky\n-  pruměrná kvalita jídla\n-  kdo má rád spíš víno, moc si ho nevychutná",
      "stars": "2 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "James Wickenden",
      "text": "(Přeloženo pomocí Google) Ochladí se na nalít si vlastní pivo. Chudá atmosféra, když jsme tam byli\n\n(Původní text)\nCool to pour your own beer. Poor atmosphere when we were there ",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Dobiáš",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Hotovec",
      "text": "Určitě nejlepší restaurace z řetězce The Pub v Praze. Pohodová atmosféra, super obsluha. Chutné jídlo.",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Håvard Neshaug",
      "text": "(Přeloženo pomocí Google) Skvělé místo, skvělé jídlo, nalít si vlastní pivo! Graf ukazuje, v porovnání s ostatními tabulkami, jiných hospodách a dalších městech!\n\n(Původní text)\nGreat place, great food, pour your own beer! Chart shows you up against other tables, other pubs and other cities! ",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Panagiotis Filippis",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Vasek Prucha",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jeroen Bobbeldijk",
      "text": "(Přeloženo pomocí Google) Velmi zábavná soutěžit s jinými tabulkami a hospody!\n\n(Původní text)\nVery fun to compete with other tables and pubs! ",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jiří Švub",
      "text": "Nevšední zážitek točit si pivo sám u stolu :-D ",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Norbert Kovács",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Yuri Yakovlev",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Vancl",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Maureen Moignard",
      "text": "(Přeloženo pomocí Google) Dobré pivo a zábavná hra.\n\n(Původní text)\nGood beer and fun game.",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Derk Snijders",
      "text": "(Přeloženo pomocí Google) Neměl žádné dobra, ale pivo bylo pivo. Výčepní pivo sami přidali nějakou zábavu do konverzace, kohoutek sám byl velmi podivné ačkoli. Nikdy ji nastavte na maximum.\n\n(Původní text)\nDid not have any of the good but the beer was beer. Tapping a beer yourself added some fun to the conversation, the tap itself was very weird though. Never set it to max.",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Štěpánek",
      "text": "Klasicky koncept the pub, kde si pivo točíme sami. Na pivo v partě úplně super. Pokud potřebujete obsluhu tak si ji tlačítkem zavoláte. Jídlo spíš průměr - Žádná hitparáda. Hospoda se nachází v suterénu. V době návštěvy: středa 12-19 bylo poměrně prázdno. ",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Kalaš",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Caspar Walhout",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Peto Papp",
      "text": "az na moznost tocit si pivo sam a soutezit s jinymi, je to standardni ceska/prazska hospoda.",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Dvořáček",
      "text": "Soutěžení mezi stoly. Pivo dobré i jídlo. ",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Dlabal",
      "text": "Dlouhá otevíračka, velké grupy mohou pít o závod.\nPípy na stolech, klasika.",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Pedro de Sousa Avelino",
      "text": "(Přeloženo pomocí Google) Nejdůležitější je, že pokud jste turista a jste někdy snil o tom, mající Návrh Klepněte na svůj vlastní stůl, nehledejte nic jiného.\nI obvykle přinést své hosty z jiných zemí tam bavit brát jejich vlastní pivo z kohoutku v tabulce a má nějaké dobré jídlo.\nUjistěte se, že požádat o nekuřácké či jinak budete cítit věky.\n\n(Původní text)\nThe most important is, if you are a tourist and you ever dreamed of having a Draft Tap on your own table, look no further.\nI usually bring my guests from other countries there to have fun taking their own beers from the tap in the table and having some good food. \nBe sure to request non-smoking or else you will be smelling for ages.",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Krzysztof Wala",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Benda",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Henry Ashley-Cooper",
      "text": "(Přeloženo pomocí Google) Skvělé místo pro dokonale litého pivo, nebo samostatně sloužit pokud je to vaše preference!\n\n(Původní text)\nGreat place for a perfectly poured beer, or self serve if that's your preference!",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jan Cílek",
      "text": "pivo ujde, nezakoureno...a obsluha se vola pres displej na pipe ;) kdyby vam prislo, ze si vas dlouho nevsima",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Josef Šilhavý",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Hubka",
      "text": "(Přeloženo pomocí Google) Místo, kde si můžete navrhnout svůj vlastní pivo, který se používá pro pivních soutěžích. Není to nejlepší hospody v okolí. Jídlo je v pořádku i když po několika pint.\n\n(Původní text)\nA place where you can draft your own beer, used for beer contests. Not the best pub around. Food is though fine after few pints.",
      "stars": "3 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Dmitry Skuratov",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ľubomír Petrus",
      "text": "(Přeloženo pomocí Google) Výborný bar, obsluha na úrovni, dobré točené pivo, které si zákazník díky pipam na stole může sám natočit.\n\n(Původní text)\nVýborný bar, obsluha na úrovni, dobré capované pivo, ktoré si zákazník vďaka pipam na stole môže sám natočiť. ",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "antonio ninniri",
      "text": "(Přeloženo pomocí Google) Kus mého jater zůstane zde ... velký ..\n\n(Původní text)\nUn pezzetto del mio fegato resterà qui...ottimo..",
      "stars": "5 hvězdiček",
      "publishAt": "před 2 lety",
      "likesCount": "2",
      "responseFromOwnerText": ""
    },
    {
      "name": "Hedvika Pajerová",
      "text": "Neútulná místnost s několika velkými stoly, kde si hosté točí pivo sami - obsluha tak logicky nechodí moc často. Díky špatné ventilaci je všude cítit kouř a kuchyně. Jídlo průměrné, zázraky nečekejte.",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Melka",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Joey Simsen",
      "text": "(Přeloženo pomocí Google) Každá tabulka má svůj vlastní kohout, a tam je velký displej s pivy se závitem podle tabulky v každém 'The Pub \". Velmi pěkný nastavení, dobré pivo a dobré barfood.\n\n(Původní text)\nEach table has its own tap, and there is a big screen with beers tapped per table in every 'The Pub'. Very nice setting, good beer and good barfood. ",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Kozina",
      "text": "Priserna akustika, v plnejsi hospode neni slyset vlastniho slova. ",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukáš Zlámal",
      "text": "(Přeloženo pomocí Google) restaurace classic ThePub \", kde má vlastní každý (velký) stolní výčepní (vlastně tři kohoutky) a můžete vidět, jak si konkurují s jinými tabulkami konzumace piva, jakož i dalších restauracích ThePub v Praze a dokonce iv jiných městech! Mimochodem, jídlo je také chutné a můžete zavolat číšníka tlačítkem, chcete-li. Vzhledem k tomu, že je pod úrovní ulice není žádný telefonní signál mobilních služeb, ale můžete připojit na jejich wifi zdarma.\n\n(Původní text)\nClassic 'ThePub' restaurant where each (big) table has own beer tap (actually three taps) and you can see how you compete with other tables beer consumption as well as other ThePub restaurants in Prague and even in other cities! Anyway, the food is also delicious and you can call the waiter with button if you want to. Since it is under street level there is no mobile phone signal but you can hook up on their free wifi.",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Тарас Ахматов",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Michal Landsman",
      "text": "(Přeloženo pomocí Google) Příjemné místo k obědu a původně \"self-made\" pivo!\n\n(Původní text)\nNice place to lunch and originally \"self-made\" beer!",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Kolář",
      "text": "",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Martin Maiksnar",
      "text": "Milá hospůdka typu, natoč si sám. Pivo není špatné, jídlo taky ne, ale přišlo mi, že až na to pivo, které jsem si sám načepoval, jsem vždy čekal na obsluhu trošku déle, než bych si přál.  Ale vyloženou stížnost nemam.",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "David Vančišin",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "L Frasier",
      "text": "",
      "stars": "1 hvězdička",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Tomáš Zmek",
      "text": "Dobrý nápad ale to pivo prostě nechutnalo ",
      "stars": "3 hvězdičky",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jakub Kinšt",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Galina Baryshnikova",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 3 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Reinier",
      "text": "(Přeloženo pomocí Google) Pěkný koncept, ale umístění v bezútěšného zařízeném suterénu je spíše průměrná potraviny (jsem měl žebra), dtto pivo (Pilsner Urquell) a daleko od přátelský servis, aby to místo, aby se zabránilo.\n\n(Původní text)\nEen leuk concept, maar de locatie in een ongezellig ingerichte kelder, het nogal matige eten (ik had de spareribs), het dito bier (Pilsner Urquell) en de verre van vriendelijke bediening maken dit tot een lokaal om te vermijden.",
      "stars": "1 hvězdička",
      "publishAt": "před 3 lety",
      "likesCount": "1",
      "responseFromOwnerText": ""
    },
    {
      "name": "Petr Poliček",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 4 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Ondřej Ušel",
      "text": "Drzá obsluha",
      "stars": "1 hvězdička",
      "publishAt": "před 4 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Jiří Pospíšil",
      "text": "Nice place, but very slow and lazy staff. Bad cell phone signal. Cold meal. I can't recommand this restaurant. Hrůza. Pomalá obsluha, studené jídlo a mizerný signal na mobil. Už sem nepůjdu. Doporučuji se poohlednnout po okolí. Nabízí se množství dobrých restaurací. ",
      "stars": "1 hvězdička",
      "publishAt": "před 4 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Lukáš Krejčí",
      "text": "",
      "stars": "5 hvězdiček",
      "publishAt": "před 5 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Robin Gwynne",
      "text": "(Přeloženo pomocí Google) Zpočátku docela zábavné se stolním pivních dávkovačů měřič z vašeho pivo jako benzinové pumpy. Mají také vůdce stav pivo desku, takže můžete vidět, jak moc jsou další tabulky pití. Nic jako malá konkurence řídit prodeje. Menu se podíval povzbudivé, ale jídlo bylo zklamáním, přinejmenším.\n\nPřítelkyně objednal kachnu čtvrt která vypadala, jako by to bylo předtím, než vařené den a měl tři soust suchého kachního masa a hromadu kostí. Objednal jsem si tradiční českou svíčková ... to přišlo přikrytý v nemocné sladkou omáčkou, brusinkový džem a sladkou šlehačkou ze stříkací plechovky. Obecně mi Dumal, co na zemi jsem jedl.\n\nTen pozitivním bodem na obou deskách byl knedlíky, které byly docela dobré. Bohužel to není dost pokoušet mě zpátky na další jídlo.\n\n\n\n(Původní text)\nInitially quite entertaining with the table top beer dispensers that meter out your beer like a petrol pump.  They also have a beer condition leader board so you can see how much other tables are drinking.  Nothing like a little competition to drive sales.  Menu looked encouraging but food was disappointing to say the least.\n\nGirlfriend ordered the quarter duck which looked like it was cooked the day before and had three mouthfuls of dry duck meat and a pile of bones.  I ordered the traditional Czech roast sirloin...  This came smothered in a sickly sweet sauce, cranberry jam, and sweet whipped cream from a squirt can.  Generally left me wondering what on earth I was eating.\n\nThe one positive item on both plates was the dumplings which were quite excellent.  Unfortunately this is not enough to tempt me back for another meal.\n\n",
      "stars": "2 hvězdičky",
      "publishAt": "před 5 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Cat Kroupová",
      "text": "",
      "stars": "4 hvězdičky",
      "publishAt": "před 6 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    },
    {
      "name": "Róbert Sisák",
      "text": "(Přeloženo pomocí Google) Výborně pivo. Atmosféra také pokud nebudete mít štěstí na anglických hlučných turisty který nemají asi ani ve zvyku platit ...\n\n(Původní text)\nVýborne pivo. Atmosféra tiež pokiaľ nebudete mať šťastie na anglických hlučných turistov ktorý nemajú asi ani vo zvyku platiť...",
      "stars": "4 hvězdičky",
      "publishAt": "před 6 lety",
      "likesCount": "",
      "responseFromOwnerText": ""
    }
  ],
  "reviewsCount": "445",
  "imageUrls": [
    "https://lh5.googleusercontent.com/p/AF1QipN3C30wYxEzduGcdYpNBbK56QofHEbJG9dW4Y9s=s396-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipN3gWgtxLODbKIVs9YPn_A2bOtNvLhxxyNX1r92=s226-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipO2RpNzPvNJmTQ0o30uZtgMWg4dkvZ0A9r9HTZ7=s169-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMAoFHivbohkdus0vt4NkMOjIWDf3nB5dxhZQGZ=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMxuCu6_V-fQ5CNB-yQaL32ZJLH8Wa7Zr_llnD8=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipP7-nPS9-l7xnxiAANF5MOc6irrH4_P0M_UShHl=s207-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOiaTrsUC_50f92AZKnb8MVh-vvmAfAoImzH-wX=s277-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipORizXUnnuWHxyE4YOiHvF33iWptnCvwbp_XdkY=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOnb1Zz-hE0RdqAJlL3EvX4igtyIG5kEeBIxExK=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMGXcBBK1HeJp59w7531je3Xi67s32_X2vGtCMg=s396-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNkWX4Mb8R27kD4-m-7acw7cvzFuNGFWotElRNo=s225-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPs_4EwmejJVIvATJ7GjAzkzovvCc6jxldnvYrd=s225-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOEJpn0QIChd7r4CSWbS_A60XK9BEcOgtY1ZV4p=s397-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPMws_sEhq1uQoq8PpveeXRzSS9yjV0cLIrfM1B=s190-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMK_6OoR0aj7Bmkpqoavd70eqw5oNoNBWjfjjSG=s446-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOXspGFjoKJbs-Zkw5ExrE1OeawXDIBmrZ8kC4m=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMZclSTyToarPltY4wBoizOSKgs1nPnyU4_gPWg=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMaYQ3GH2MJBhmZGZIrV8Bs1wm79Xn32_6fC4MY=s363-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOn8ZpKCJ1R36elaL0vYv-8v5YobddkkMRIhRfC=s253-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOjD0RI9GM3LdYkF_UQHUzKYF5d1p7D9bADqC6Z=s192-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipN5BsP0uD016qTyQvVEiqG_v1T2b1u7mQTxUp7I=s396-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipO_jOXwFtkQFeRs8P8gKT6Wxyv8Zpp_asQeNOKI=s156-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPqKThfBVZTLgSR9RjeXa2lP9Gn3qLfK-CEbjk5=s277-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPC2g2oCy4E2J97so52DrBq2--bP7KM6BWQY-Yc=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipP4cLdyiC4KmM05MEthsMvKPziARn0DIq0oNx9l=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNOpcnaSgp71DcAi0byzZvaJoT2HTpx7xuA35bP=s412-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipO0OLcBRz63NC4RocGfCg0GSY9WhnpLNmXSCb3C=s288-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOz74icrLcHS_RYuW2MAviplyW1p80i2da8iJlm=s163-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNONHGhWbO03bWM5A_VwqBokWBuszSfdj5D9LWI=s321-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipP2DMwwYMYO1Yaz6IlrwG_HEbhSHngGhhzmER8L=s204-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNqtoaHoCG8pSI_nqf0Vvusw9uhCL3LOrtsIyAy=s247-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipM4hfiz5A5tq-nebbttWky5qCAuEvL47zzVtvMQ=s185-k-no",
    "https://www.thepub.cz/inc/phpThumb/phpThumb.php?src=/files/kategorie/308.jpg&w=800&h=800&zc=1&hash=578c6326b79dab0f5a49fb3ff4cc733f",
    "https://lh5.googleusercontent.com/p/AF1QipMb_uQPsUHXNBcXU1o68rWOm9vddYgiS3CYFY4S=s263-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipN0sSTTVV_oWQQbgwjtBn9LFcgaSQcrdTvMR899=s263-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipN6NvKFo_Mg_IAbe74qZI8Tt1MmOcEt755LVViE=s241-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipO057bUEbqwcV10TD59xS8GvCeKrlZIENkBVDNm=s213-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOAGcrO4_-wmtTLOUy4lV1xqbEEEv8CmOCjw9a_=s212-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipM25PpfWWi2uUTzzPl8b1RluPQ-BHIQhRThnxtT=s258-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMyS8vIS1KA8yztwZ88ScljaeAA73-fKuxf33Sx=s258-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipN1p1iWOPzdSBIOVedC2Fai8YnT1qTcKYio8F2k=s320-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOBPEjerNs6fz-TxUevltl1Rsw-O0sOMzbAl-0s=s213-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPD3XIFg5rGchIXMCcwPmwVmPG7hSXDbPUotPm7=s211-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNA3blJEfrW6gVHDFFK8op09qSZ77F0SzW9lXG4=s207-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPIDRfMfpRZGAmBfyHKKpcOqnaWuGeoFqXcYvtg=s276-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNwtRlRcIxmWqkGlSHv4yPIzmhms8VapDuG52Ht=s396-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMhYP4vn0Gjwhhr_4Oaud1Ua93w2a-1BIRNWgJ7=s321-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNYI-R_L-_3faMK4W0w5pn2Wa-be8Z_6jFLGr6m=s204-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipM1DXr2QsltiIRF_zSxWr7FhmyU9jonFFOyZck=s153-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipM-Y84YfJ5eYXmIOuI_-jXBGHiBUIKIGmx836o=s263-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOQO9JbcHvFZ-SZIyHGXR07ihfhANeqTRf4WFuz=s263-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMNsESXbtktvhETI7U5Rq8UEX-FaMDn6y4wcFYj=s363-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPwvEr4UDh1G12vo1u44h3_AuobUiRTXrHt6IU=s253-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOQQXHfiGe47AWJoRzHcUaIy2dCNxpHj4fflkp_=s192-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNrxUA5ESMt39BIQWjSsrQz-XVtc38Mn-rBWJ43=s396-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNLfOB5WBa6cmXlMWGgQohEhD8FEqcGeRddP0o9=s224-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNLSI-_K1ap0WeO4dhzFM1_haYdqX9MNNYuHD2A=s171-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPckLMHuYjvhb7HOlOGFOO2vTGtkjajHfuiUC6I=s168-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPQZmGcnNeTSEwEJp1QKUJFtz09gtcMZHuW6V5H=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipP71qhHCRVIpW1KXH-oqfUJvlgapgGzYXbeYzGd=s300-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMiKeASpupkzzKpr8PvVtfVLyjDWjSXfRCiCKTz=s241-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPJqBNUsUQv4g0GJqx-CUjgZZTHeX5swNxnCzOc=s214-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPqxFVPQL-GHzoep9DVsJKbk9MyuMf2QZ58T_fs=s212-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPZ90fEKvTZj8oOMd1JqF5bY8eA2nCIUycgGGtY=s395-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPAGjFRJ2pF2qaFP7DAeKE38VX05uY0qSmrJlLO=s261-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMboHmoWXhxZc7mcuntl17tSgL4eZeUsiDKSmZ6=s196-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOLJYWrrSt6j0jCW5fYFfMOguDY5v-sWmn0JJUu=s156-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipO8EEm82yavDaWiHoLIDi8DndK2agJdxqTRHag_=s277-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOt4ElRBC_UigRyJfYCLWrc3vbYciriqdkDP4Dc=s396-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOFWQ1WIfy92xrV0qzP2TA4_qcXLWhoaJqB8N4=s169-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipO1QVVCq-41_kaYvrkuwvWk4ONuaIOZbvFEu6Xs=s226-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipN7S34EN6kSCWW81sWlczbQuJdhx1togs2RJ_FS=s396-k-no"
  ]
}
```
