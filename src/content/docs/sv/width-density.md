---
taskInputHash: 2575112a0b5a8fb1
title: Bredd- och densitetsbeskrivare
description: Exempel på användning av bredd- och densitetsbeskrivare i `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---
Förståelse av bredd (w) och densitet (x) beskrivningar i `srcset`. Använd exempel och använd Markdown.

> `srcset` är ett HTML-attribut som tillåter utvecklare att tillhandahålla flera bildkällor med olika upplösningar eller pixeldensiteter, och låta webbläsaren välja lämplig bild baserat på enhetens visningsegenskaper. `srcset`-attributet använder en kombination av `URL` och `w` eller `x` beskrivare för att specificera bilderna.
## Bredd (`w`) Beskrivare

> `w`-beskrivaren används för att specificera bredden på en bild i pixlar. Den används när vi vill förse webbläsaren med bildens dimensioner så att den kan välja lämplig bild för tillgängligt skärmutrymme.

> Syntaxen för att använda `w`-beskrivaren i `srcset` är följande:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Exempelbild">
```

> I exemplet ovan har vi försett webbläsaren med tre bilder och deras motsvarande bredder i pixlar. Webbläsaren kommer att välja den bild som har den närmaste bredden till det tillgängliga skärmutrymmet.
## Densitet (`x`) Beskrivare

> `x`-beskrivaren används för att specificera pixeldensiteten för en bild, vilket är förhållandet mellan fysiska pixlar och CSS-pixlar. Det används när vi vill förse webbläsaren med olika versioner av samma bild med olika pixeldensiteter.

> Syntaxen för att använda `x`-beskrivaren i `srcset` är följande:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Exempelbild">
```

> I exemplet ovan har vi försett webbläsaren med tre bilder och deras motsvarande pixeldensiteter. Webbläsaren kommer att välja den bild som har den närmaste pixeldensiteten till enhetens skärm.

> Observera att `w` och `x` beskrivarna kan användas tillsammans i samma `srcset`-attribut för att ge webbläsaren fler alternativ att välja mellan.
