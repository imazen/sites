---
title: Exempel med <picture> elementet
description: >-
  Ger exempel med <picture> elementet, för responsiva bilder, konstriktning och olika bildformat.
taskInputHash: 3b4e429f7eb84ce2
lang: sv
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Här är några exempel på hur man använder `<picture>` elementet och deras förklaringar:

1\. Exempel för responsiva bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar. `<source>` elementen specifierar de olika bildkällorna med hjälp av attributen "srcset" och "media" för att specifiera villkoren under vilka varje källa bör användas. `<img>` elementet används som en reserv om äldre webbläsare eller när villkoren som anges i `<source>` elementen inte uppfylls.

2\. Exempel för konstriktning:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att tillhandahålla olika bildkällor beroende på enhetens orientering. `<source>` elementet med attributet "media" satt till "(orientation: landscape)" specifierar en bildkälla för breda skärmar, medan `<img>` elementet specifierar en bildkälla för porträttskärmar.

3\. Exempel för olika bildformat:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att tillhandahålla olika bildkällor för olika bildformat. `<source>` elementen specificerar olika bildkällor med hjälp av attributen "srcset" och "type" för att specificera bildformatet. `<img>` elementet används som en reserv för äldre webbläsare som inte stöder `<picture>` elementet.

## Brytpunkter

Inom responsiv design används brytpunkter för att definiera när layouten på en webbplats eller applikation bör ändras baserat på viewportens storlek. Brytpunkter definieras vanligtvis med media queries i CSS, som tillämpar olika stil beroende på skärmens bredd. Dessa brytpunkter kan användas i samband med `<picture>` elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar.

Till exempel använde vi i det första exemplet ovan attributet `media` för att specificera skärmens bredd under vilken varje källa bör användas. När skärmens bredd är större än eller lika med 768 pixlar används källan `image-large.jpg`; när skärmens bredd är större än eller lika med 480 pixlar men mindre än 768 pixlar används källan `image-medium.jpg`; och när skärmens bredd är mindre än 480 pixlar används källan `image-small.jpg`. Detta gör det möjligt för oss att servera lämpligt dimensionerade bilder för varje enhet, vilket minskar sidlasttiden och förbättrar användarupplevelsen.

Brytpunkter kan definieras vid vilken skärmstorlek som helst, och flera brytpunkter kan användas för att skapa layouter som responderar på en stor mängd enheter. Genom att kombinera brytpunkter med `<picture>` elementet kan du skapa flexibla och responsiva designer som ser fantastiska ut på vilken enhet som helst.
