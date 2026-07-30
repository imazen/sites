---
taskInputHash: e639330a77b62531
title: Bredd- och densitetsdeskriptorer
description: Exempel på användning av bredd- och densitetsdeskriptorer i `srcset`
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
Förståelse av bredd (w) och densitets (x) deskriptorer i `srcset`. Använd exempel och använd Markdown.

> `srcset` är ett HTML-attribut som tillåter utvecklare att tillhandahålla flera bildkällor med olika upplösningar eller pixeldensiteter, och låter webbläsaren välja den lämpliga bilden baserat på enhetens skärmegenskaper. Attributet `srcset` använder en kombination av `URL` och `w` eller `x` deskriptorer för att specificera bilderna.
## Bredd (`w`) deskriptor

> `w` deskriptor används för att specificera bredden på en bild i pixlar. Den används när vi vill ge webbläsaren dimensionerna på en bild så att den kan välja rätt bild för det tillgängliga skärmutrymmet.

> Syntaxen för att använda `w` deskriptor i `srcset` är som följer:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Exempelbild">
```

> I exemplet ovan har vi gett webbläsaren tre bilder och deras motsvarande bredder i pixlar. Webbläsaren kommer att välja bilden med den närmaste bredden till det tillgängliga skärmutrymmet.
## Densitet (`x`) deskriptor

> `x` deskriptor används för att specificera pixeldensiteten på en bild, vilket är förhållandet mellan fysiska pixlar och CSS-pixlar. Den används när vi vill ge webbläsaren olika versioner av samma bild med olika pixeldensiteter.

> Syntaxen för att använda `x` deskriptor i `srcset` är som följer:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Exempelbild">
```

> I exemplet ovan har vi gett webbläsaren tre bilder och deras motsvarande pixeldensiteter. Webbläsaren kommer att välja bilden med den närmaste pixeldensiteten till enhetens skärm.

> Observera att `w` och `x` deskriptorer kan användas tillsammans i samma `srcset` attribut för att ge webbläsaren fler alternativ att välja mellan.
