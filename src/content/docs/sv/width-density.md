---
title: Bredd- och densitetsbeskrivare
description: Exempel på användning av bredd- och densitetsbeskrivare i `srcset`
taskInputHash: de07e2c59a8993ce
lang: sv
ignore: '/* cSpell:locale sv,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Förståelse för bredd (w) och densitet (x) deskriptorer i `srcset`. Använd exempel och använd markdown.

> `srcset` är en HTML-attribut som tillåter utvecklare att tillhandahålla flera bildkällor med olika upplösningar eller pixeldensiteter och låta webbläsaren välja den lämpliga bilden baserad på enhetens visningskaraktär. `srcset` attributen använder en kombination av `URL` och `w` eller `x` beskrivare för att specificera bilderna.
## Bredd (`w`) Beskrivare

> Beskrivaren `w` används för att specificera bredden på en bild i pixlar. Den används när vi vill tillhandahålla webbläsaren med dimensionerna på en bild så att den kan välja rätt bild för den tillgängliga skärmutrymmet.

> Syntaxen för att använda beskrivaren `w` i `srcset` ser ut som följer:

````html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Exempelbild">
```



> I exemplet ovan har vi tillhandahållit webbläsaren med tre bilder och deras motsvarande bredder i pixlar. Webbläsaren kommer att välja bilden som har den närmaste bredden till det tillgängliga skärmutrymmet.

## Densitet (`x`) Beskrivare

> Beskrivaren `x` används för att specificera pixeldensiteten på en bild, vilket är proportionen mellan fysiska pixlar och CSS-pixlar. Den används när vi vill tillhandahålla webbläsaren olika versioner av samma bild med olika pixeldensiteter.

> Syntaxen för att använda beskrivaren `x` i `srcset` ser ut som följer:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Exempelbild">
```


> I exemplet ovan har vi tillhandahållit webbläsaren med tre bilder och deras motsvarande pixeldensiteter. Webbläsaren kommer att välja bilden som har den närmaste pixeldensiteten till enhetens skärm.

> Observera att beskrivarna `w` och `x` kan användas tillsammans i samma `srcset` attribut för att tillhandahålla webbläsaren fler alternativ att välja mellan.
