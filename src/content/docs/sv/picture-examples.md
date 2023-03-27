---
title: Exempel med <picture>-elementet
description: >-
  Tillhandahåller exempel med <picture>-elementet, för responsiva bilder,
  konstnärlig riktning och olika bildformat.
taskInputHash: 1b874203783dde1a
lang: sv
---
Ge flera exempel på användning av `<picture>` elementet och förklara kortfattat varje exempel:

Här är några exempel på användning av `<picture>` elementet och deras förklaringar:

1\. Exempel för responsiva bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att tillhandahålla olika bildkällor för olika skärmstorlekar. `<source>` elementen specificerar olika bildkällor med hjälp av attributen "srcset" och "media" för att specificera villkoren under vilka varje källa ska användas. `<img>` elementet används som ett säkerhetsnät för äldre webbläsare eller när villkoren som anges i `<source>` elementen inte uppfylls.

2\. Exempel för konstnärligt riktning:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att ange olika bildkällor beroende på enhetens riktning. `<source>` elementet med attributet "media" som är satt till "(orientation: landscape)" specificerar en bildkälla för breda skärmar, medan `<img>` elementet specificerar en bildkälla för porträttskärmar.

3\. Exempel för olika bildformat:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="En bild" />
</picture>
```

Förklaring: I detta exempel används `<picture>` elementet för att tillhandahålla olika bildkällor för olika bildformat. `<source>` elementen specificerar olika bildkällor med hjälp av atributen "srcset" och "type" för att specificera bildformatet. `<img>` elementet används som en fallback för äldre webbläsare som inte stöder `<picture>` elementet.
