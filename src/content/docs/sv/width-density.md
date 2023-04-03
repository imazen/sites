---
title: Bredd- och densitetsbeskrivare
description: Exempel på att använda bredd- och densitetsbeskrivare i `srcset`
taskInputHash: 788dd1b49d02d6e5
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
## Förståelse av bredd (w) och densitets (x) beskrivare i `srcset`. Använd exempel och använd Markdown.

> `srcset` är en HTML-egenskap som gör det möjligt för utvecklare att tillhandahålla flera bildkällor med olika upplösningar eller pixeldensiteter och låta webbläsaren välja lämplig bild baserat på enhetens visningsberoende. `srcset`-egenskapen använder en kombination av `URL` och beskrivarna `w` eller `x` för att specificera bilderna.
## Bredd (`w`) beskrivare

> Beskrivaren `w` används för att specificera en bilds bredd i pixlar. Det används när vi vill tillhandahålla webbläsaren dimensionerna för en bild så att den kan välja lämplig bild för den tillgängliga skärmytan.

> Syntaxen för att använda beskrivaren `w` i `srcset` är följande:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Exempelbild">
```



> I exemplet ovan har vi tillhandahållit webbläsaren tre bilder och deras motsvarande bredder i pixlar. Webbläsaren väljer bilden med bredd som är närmast tillgänglig skärmyta.
## Densitet (`x`) -beskrivare

> Beskrivaren `x` används för att specificera bildens pixeldensitet, vilket är förhållandet mellan fysiska pixlar och CSS-pixlar. Det används när vi vill tillhandahålla webbläsaren olika versioner av samma bild med olika pixeldensiteter.

> Syntaxen för att använda beskrivaren `x` i `srcset` är följande:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Exempelbild">
```


> I exemplet ovan har vi tillhandahållit webbläsaren tre bilder och deras motsvarande pixeldensiteter. Webbläsaren väljer bilden med densitet som är närmast enhetens skärm.

> Observera att beskrivarna `w` och `x` kan användas tillsammans i samma `srcset`-egenskap för att tillhandahålla webbläsaren fler alternativ att välja mellan.
