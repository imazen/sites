---
taskInputHash: 25f03d68d78c4feb
title: Exempel med <picture>-elementet
description: >-
  Ger exempel på användning av <picture>-elementet för responsiva bilder,
  konstnärlig riktning och olika bildformat
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
Här är några exempel på hur `<picture>`-elementet kan användas och deras förklaringar:

1. Exempel för responsiva bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>`-elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar. `<source>`-elementen specificerar de olika bildkällorna med attributet "srcset" och attributet "media" för att specificera villkoren under vilka varje källa ska användas. `<img>`-elementet används som fallback för äldre webbläsare eller när villkoren specificerade i `<source>`-elementen inte uppfylls.

2. Exempel för konstnärlig riktning:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>`-elementet för att tillhandahålla olika bildkällor beroende på enhetens orientering. `<source>`-elementet med "media"-attributet satt till "(orientation: landscape)" specificerar en bildkälla för breda skärmar, medan `<img>`-elementet specificerar en bildkälla för porträttskärmar.

3. Exempel för olika bildformat:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>`-elementet för att tillhandahålla olika bildkällor för olika bildformat. `<source>`-elementen specificerar olika bildkällor med "srcset"-attributet och "type"-attributet för att specificera bildformatet. `<img>`-elementet används som en fallback för äldre webbläsare som inte stöder `<picture>`-elementet.

## Brytpunkter

I responsiv design används brytpunkter för att definiera när layouten på en webbplats eller applikation ska förändras baserat på vyportens storlek. Brytpunkter definieras vanligtvis med media queries i CSS, som tillämpar olika stilar beroende på skärmbredden. Dessa brytpunkter kan användas tillsammans med `<picture>`-elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar.

Till exempel, i det första exemplet ovan, använde vi attributet `media` för att specificera skärmbredden under vilken varje källa ska användas. När skärmbredden är större än eller lika med 768 pixlar kommer `image-large.jpg`-källan att användas; när skärmbredden är större än eller lika med 480 pixlar men mindre än 768 pixlar, kommer `image-medium.jpg`-källan att användas; och när skärmbredden är mindre än 480 pixlar, kommer `image-small.jpg`-källan att användas. Detta gör att vi kan tillhandahålla bilder i lämplig storlek för varje enhet, vilket minskar sidladdningstider och förbättrar användarupplevelsen.

Brytpunkter kan definieras vid vilken skärmstorlek som helst, och flera brytpunkter kan användas för att skapa layouter som svarar på en mängd olika enheter. Genom att kombinera brytpunkter med `<picture>`-elementet kan du skapa flexibla och responsiva designer som ser bra ut på vilken enhet som helst.
