---
title: Bredd och densitet beskrivare
description: Exempel på hur man använder bredd och densitet beskrivare i `srcset`
taskInputHash: 0f5f9ebc2c843512
lang: sv
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Förståelse för bredd (`w`) och densitet (`x`) beskrivare i `srcset`. Använd exempel och använd Markdown.

>`srcset` är en HTML-attribut som gör det möjligt för utvecklare att tillhandahålla flera bildkällor med olika upplösningar eller pixeldensiteter och låta webbläsaren välja lämplig bild baserat på enhetens displayegenskaper. `srcset` attributen använder en kombination av `URL` och `w` eller `x` beskrivare för att specificera bilderna.

## Bredd (`w`) beskrivare

>`w` beskrivaren används för att specificera bildens bredd i pixlar. Den används när vi vill ge webbläsaren bildens dimensioner så att den kan välja rätt bild för den tillgängliga skärmplatsen.

>Syntaxen för att använda `w` beskrivaren i `srcset` är enligt följande:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Exempelbild">
```

>I exemplet ovan har vi gett webbläsaren tre bilder och deras motsvarande bredder i pixlar. Webbläsaren väljer bilden med närmaste bredd till den tillgängliga skärmplatsen.

## Densitet (`x`) beskrivare

>`x` beskrivaren används för att specificera bildens pixeldensitet, vilket är förhållandet mellan fysiska pixlar och CSS-pixlar. Den används när vi vill ge webbläsaren olika versioner av samma bild med olika pixeldensiteter.

>Syntaxen för att använda `x` beskrivaren i `srcset` är enligt följande:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Exempelbild">
```

>I exemplet ovan har vi gett webbläsaren tre bilder och deras motsvarande pixeldensiteter. Webbläsaren väljer bilden med närmaste pixeldensitet till enhetens skärm.

>Märk att både `w` och `x` beskrivarna kan användas tillsammans i samma `srcset` attribut för att ge webbläsaren fler alternativ att välja mellan.
