---
title: Exempel med <picture>-elementet
description: >-
  Ger exempel på användning av <picture>-elementet för responsiva bilder,
  konstnärlig riktning och olika bildformat
taskInputHash: d2042ff600a5ac1a
lang: sv
ignore: '/* cSpell:locale sv,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Här är några exempel på hur man använder `<picture>`-elementet och deras förklaringar:

1\. Exempel på responsiva bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="En bild" />
</picture>
```

Förklaring: I det här exemplet används `<picture>`-elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar. `<source>`-elementen specifierar de olika bildkällorna genom att använda attributet "srcset" och "media" för att specificera villkoren under vilka varje källa ska användas. `<img>`-elementet används som en fallback för äldre webbläsare eller när villkoren som specificerats i `<source>`-elementen inte uppfylls.

2\. Exempel på konstnärlig riktning:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="En bild" />
</picture>
```

Förklaring: I det här exemplet används `<picture>`-elementet för att tillhandahålla olika bildkällor beroende på enhetens orientering. `<source>`-elementet med attributet "media" satt till "(orientation: landscape)" specifierar en bildkälla för breda skärmar, medan `<img>`-elementet specifierar en bildkälla för porträttskärmar.

3\. Exempel för olika bildformat:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="En bild" />
</picture>
```

Förklaring: I det här exemplet används `<picture>`-elementet för att tillhandahålla olika bildkällor för olika bildformat. `<source>`-elementen specifierar olika bildkällor genom att använda attributen "srcset" och "type" för att specificera bildformatet. `<img>`-elementet används som en fallback för äldre webbläsare som inte stödjer `<picture>`-elementet.

## Brytpunkter

I responsiv design används brytpunkter för att definiera när layouten på en webbplats eller applikation ska ändras baserat på storleken på viewporten. Brytpunkter definieras vanligtvis med hjälp av media queries i CSS, som tillämpar olika stilar beroende på skärmens bredd. Dessa brytpunkter kan användas i kombination med `<picture>`-elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar.

Till exempel använde vi i det första exemplet ovan `media`-attributet för att specificera skärmens bredd under vilken varje källa ska användas. När skärmbredden är större än eller lika med 768 pixlar, används källan `image-large.jpg`; när skärmbredden är större än eller lika med 480 pixlar men mindre än 768 pixlar, används källan `image-medium.jpg`; och när skärmbredden är mindre än 480 pixlar, används källan `image-small.jpg`. Detta gör det möjligt för oss att servera lämpligt storleksanpassade bilder för varje enhet, vilket minskar sidladdningstider och förbättrar användarupplevelsen.

Brytpunkter kan definieras vid vilken skärmstorlek som helst, och flera brytpunkter kan användas för att skapa layouter som svarar på ett brett utbud av enheter. Genom att kombinera brytpunkter med `<picture>`-elementet kan du skapa flexibla och responsiva design som ser bra ut på alla enheter.
