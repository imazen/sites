---
title: Exempel på användning av <picture>-elementet
description: >-
  Ger exempel på hur <picture>-elementet kan användas för anpassningsbara
  bilder, bildkomposition och olika bildformat.
taskInputHash: 3b4e429f7eb84ce2
lang: sv
---
Här är några exempel på hur `<picture>` elementet kan användas och deras förklaringar:

1\. Exempel på anpassningsbara bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att ge olika bildkällor för olika skärmstorlekar. `<source>` elementen specificerar de olika bildkällorna med hjälp av attributen "srcset" och "media" för att specificera villkoren under vilka varje källa ska användas. `<img>` elementet används som fallback för äldre webbläsare eller när villkoren specificerade i `<source>` elementen inte uppfylls.

2\. Exempel på bildkomposition:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att ge olika bildkällor beroende på enhetens orientering. `<source>` elementet med attributet "media" satt till "(orientation: landscape)" specificerar en bildkälla för breda skärmar, medan `<img>` elementet specificerar en bildkälla för porträttskärmar.

3\. Exempel på olika bildformat:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att ge olika bildkällor för olika bildformat. `<source>` elementen specificerar olika bildkällor med hjälp av attributen "srcset" och "type" för att specificera bildformatet. `<img>` elementet används som fallback för äldre webbläsare som inte stöder `<picture>` elementet.

## Brytpunkter

I responsiv design används brytpunkter för att definiera när layouten på en webbplats eller applikation ska ändras baserat på storleken på viewporten. Brytpunkter definieras vanligtvis med hjälp av media queries i CSS, vilka tillämpar olika stilar beroende på skärmens bredd. Dessa brytpunkter kan användas tillsammans med `<picture>` elementet för att ge olika bildkällor för olika skärmstorlekar.

Till exempel i det första exemplet ovan använde vi `media` attributet för att specificera skärmens bredd under vilken varje källa ska användas. När skärmens bredd är större än eller lika med 768 pixlar används källan `image-large.jpg`; när skärmens bredd är större än eller lika med 480 pixlar men mindre än 768 pixlar används källan `image-medium.jpg`; och när skärmens bredd är mindre än 480 pixlar används källan `image-small.jpg`. Detta gör det möjligt för oss att servera bilder med lämplig storlek för varje enhet, vilket minskar sidlasttider och förbättrar användarupplevelsen.

Brytpunkter kan definieras vid vilken skärmstorlek som helst, och flera brytpunkter kan användas för att skapa layouter som svarar på ett brett spektrum av enheter. Genom att kombinera brytpunkter med `<picture>` elementet kan du skapa flexibla och responsiva designer som ser bra ut på alla enheter.
