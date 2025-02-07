---
taskInputHash: 498d9448ee769f19
title: Exempel på användning av <picture>-elementet
description: >-
  Tillhandahåller exempel på användning av <picture>-elementet för responsiva
  bilder, konstnärlig riktning och olika bildformat
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---
Här är några exempel på hur man använder `<picture>`-elementet och deras förklaringar:

1\. Exempel för responsiva bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="En bild" />
</picture>
```

Förklaring: I det här exemplet används `<picture>`-elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar. `<source>`-elementen specificerar de olika bildkällorna med hjälp av "srcset"-attributet och "media"-attributet för att specificera villkoren under vilka varje källa ska användas. `<img>`-elementet används som en reserv för äldre webbläsare eller när villkoren som anges i `<source>`-elementen inte är uppfyllda.

2\. Exempel för konstnärlig riktning:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="En bild" />
</picture>
```

Förklaring: I det här exemplet används `<picture>`-elementet för att tillhandahålla olika bildkällor beroende på enhetens orientering. `<source>`-elementet med "media"-attributet inställt på "(orientation: landscape)" specificerar en bildkälla för breda skärmar, medan `<img>`-elementet specificerar en bildkälla för porträttskärmar.

3\. Exempel för olika bildformat:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="En bild" />
</picture>
```

Förklaring: I det här exemplet används `<picture>`-elementet för att tillhandahålla olika bildkällor för olika bildformat. `<source>`-elementen specificerar olika bildkällor med hjälp av "srcset"-attributet och "type"-attributet för att specificera bildformatet. `<img>`-elementet används som en reserv för äldre webbläsare som inte stöder `<picture>`-elementet.

## Brytpunkter

I responsiv design används brytpunkter för att definiera när utformningen av en webbplats eller applikation ska ändras beroende på storleken på vyfönstret. Brytpunkter definieras vanligtvis med hjälp av mediefrågor i CSS, som tillämpar olika stilar beroende på skärmbredden. Dessa brytpunkter kan användas tillsammans med `<picture>`-elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar.

Till exempel, i det första exemplet ovan, använde vi `media`-attributet för att specificera skärmbredden under vilken varje källa ska användas. När skärmbredden är större än eller lika med 768 pixlar, används `image-large.jpg`-källan; när skärmbredden är större än eller lika med 480 pixlar men mindre än 768 pixlar, används `image-medium.jpg`-källan; och när skärmbredden är mindre än 480 pixlar, används `image-small.jpg`-källan. Detta tillåter oss att leverera lämpligt storleksanpassade bilder för varje enhet, vilket minskar sidladdningstider och förbättrar användarupplevelsen.

Brytpunkter kan definieras vid vilken skärmstorlek som helst, och flera brytpunkter kan användas för att skapa layouter som svarar på ett brett spektrum av enheter. Genom att kombinera brytpunkter med `<picture>`-elementet kan du skapa flexibla och responsiva designer som ser bra ut på vilken enhet som helst.
