---
title: Bredd- och densitetsbeskrivningar
description: Exempel på att använda bredd- och densitetsbeskrivningar i `srcset`
taskInputHash: 0f5f9ebc2c843512
lang: sv
---
Förståelse av bredd (w) och densitet (x) descriptorer i `srcset`. Använd exempel och använd Markdown.

> `srcset` är en HTML-attribut som gör det möjligt för utvecklare att ange flera bildkällor med olika upplösningar eller pixeldensiteter och låta webbläsaren välja lämplig bild baserad på enhetens skärmegenskaper. `srcset`-attributet använder en kombination av `URL` samt `w` eller `x` descriptorer för att specificera bilderna.

## Bredd (`w`) Descriptor

> `W`-beskrivaren används för att specificera bredden på en bild i pixlar. Den används när vi vill ge webbläsaren dimensionerna på en bild så att den kan välja lämplig bild för den tillgängliga skärmytan.

> Syntaxen för att använda `w`-beskrivaren i `srcset` är följande:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Exempelbild">
```

> I exemplet ovan har vi gett webbläsaren tre bilder och deras motsvarande bredder i pixlar. Webbläsaren väljer bilden med den närmaste bredden till den tillgängliga skärmytan.

## Densitet (`x`) Descriptor

> `x`-beskrivaren används för att specificera pixeldensiteten på en bild, vilket är förhållandet mellan fysiska pixlar och CSS-pixlar. Den används när vi vill ge webbläsaren olika versioner av samma bild med olika pixeldensiteter.

> Syntaxen för att använda `x`-beskrivaren i `srcset` är följande:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Exempelbild">
```

> I exemplet ovan har vi gett webbläsaren tre bilder och deras motsvarande pixeldensiteter. Webbläsaren väljer bilden med den närmaste pixeldensiteten till enhetens skärm.

> Observera att `w`- och `x`-beskrivarna kan användas tillsammans i samma `srcset`-attribut för att ge webbläsaren fler alternativ att välja mellan.
