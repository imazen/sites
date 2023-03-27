---
title: Bredd och densitet deskriptorer
description: Exempel på hur man använder bredd och densitet deskriptorer i `srcset`
taskInputHash: 739378ef9bb54419
lang: sv
---
Förståelse av bredd (w) och densitet (x) deskriptorer i `srcset`. Använd exempel och använd Markdown.

>`srcset` är en HTML-attribut som gör det möjligt för utvecklare att tillhandahålla flera bildkällor med olika upplösningar eller pixeldensiteter och lår webbläsaren välja lämplig bild baserat på enhetens displayegenskaper. `srcset`-attributet använder en kombination av `URL` och `w` eller `x` deskriptorer för att specificera bilderna.

## Bredd (`w`) Deskriptor

> `w` deskriptorn används för att specificera bredden på en bild i pixlar. Den används när vi vill förse webbläsaren med dimensionerna för en bild så att den kan välja lämplig bild för den tillgängliga skärmutrymmet.

> Syntaxen för att använda deskriptorn `w` i `srcset` är följande:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Exempelbild">
```



> I exemplet ovan har vi gett webbläsaren tre bilder och deras motsvarande bredder i pixlar. Webbläsaren kommer att välja den bild med närmast bredd till det tillgängliga skärmutrymmet.


## Densitet (`x`) Deskriptor

> Deskriptorn `x` används för att specificera bildens pixeldensitet, vilket är förhållandet mellan fysiska pixlar och CSS-pixlar. Den används när vi vill förse webbläsaren med olika versioner av samma bild med olika pixeldensiteter.

> Syntaxen för att använda deskriptorn `x` i `srcset` är följande:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Exempelbild">
```


> I exemplet ovan har vi gett webbläsaren tre bilder och deras motsvarande pixeldensiteter. Webbläsaren kommer att välja den bild med närmast pixeldensitet till enhetens skärm.

> Observera att deskriptorerna `w` och `x` kan användas tillsammans i samma `srcset`-attribut för att ge webbläsaren fler alternativ att välja mellan.
