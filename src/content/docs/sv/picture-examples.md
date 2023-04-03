---
title: Exempel med <picture> elementet
description: >-
  Ger exempel på användning av <picture> elementet för responsiva bilder, art
  direction och olika bildformat
taskInputHash: 2be3dc0822137e26
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Här är några exempel på hur man använder `<picture>` elementet och deras förklaringar:

1\. Exempel med responsiva bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar. `<source>` elementen specificerar de olika bildkällorna med hjälp av "srcset" attributet och "media" attributet för att specificera villkoren under vilka varje källa bör användas. `<img>` elementet används som ett reservalternativ för äldre webbläsare eller när villkoren som specificerats i `<source>` elementen inte uppfylls.

2\. Exempel för art direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att tillhandahålla olika bildkällor beroende på enhetens orientering. `<source>` elementet med "media" attributet satt till "(orientation: landscape)" specifierar en bildkälla för breda skärmar, medan `<img>` elementet specifierar en bildkälla för stående skärmar.

3\. Exempel för olika bildformat:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att tillhandahålla olika bildkällor för olika bildformat. `<source>` elementen specificerar olika bildkällor med hjälp av "srcset" attributet och "type" attributet för att specificera bildformatet. `<img>` elementet används som ett reservalternativ för äldre webbläsare som inte stöder `<picture>` elementet.

## Brytpunkter

I responsiv design används brytpunkter för att definiera när layouten på en webbplats eller applikation bör ändras baserat på storleken på viewporten. Brytpunkter definieras vanligtvis med media queries i CSS, som tillämpar olika stilar beroende på skärmens bredd. Dessa brytpunkter kan användas tillsammans med `<picture>` elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar.

Till exempel använde vi i det första exemplet ovan "media" attributet för att specificera skärmens bredd under vilken varje källa skulle användas. När skärmens bredd är större än eller lika med 768 pixlar kommer "image-large.jpg" källan att användas; när skärmens bredd är större än eller lika med 480 pixlar men mindre än 768 pixlar kommer "image-medium.jpg" källan att användas; och när skärmens bredd är mindre än 480 pixlar används "image-small.jpg" källan. Detta gör det möjligt för oss att tjänstgöra lämpligt storlek anpassade bilder för varje enhet, vilket minskar sidolastningstider och förbättrar användarupplevelsen.

Brytpunkter kan definieras vid valfri skärmstorlek, och flera brytpunkter kan användas för att skapa layouter som svarar på ett brett utbud av enheter. Genom att kombinera brytpunkter med `<picture>` elementet kan du skapa flexibla och responsiva design som ser bra ut på alla enheter.
