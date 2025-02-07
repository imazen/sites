---
taskInputHash: 7cf18adf7cb4e9fe
title: Densitetsbeskrivare och srcset
description: Exempel på att använda densitetsbeskrivare i `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---
Srcset med densitetsbeskrivare erbjuder en enkel och effektiv metod för att leverera den mest lämpliga bilden till varje användares enhet, vilket förbättrar prestanda och användarupplevelse. Denna guide kommer att gå igenom grunderna för att använda srcset med densitetsbeskrivare och ge markup-exempel för din bekvämlighet.

## Vad är Srcset med Densitetsbeskrivare?

Srcset är ett HTML-attribut som låter dig ange flera bildkällor för ett enda `<img>`-element. Densitetsbeskrivare (`x`) används tillsammans med srcset för att tillhandahålla bilder med olika upplösningar beroende på pixelupplösningen på användarens skärm.

## När ska man använda Srcset med Densitetsbeskrivare

Att använda srcset med densitetsbeskrivare är särskilt användbart när du vill:
1. Servera högupplösta bilder till skärmar med hög DPI (t.ex. Retina-skärmar) samtidigt som lägre upplösta bilder serveras till standarddisplayer.
2. Förbättra sidans prestanda genom att leverera den mest lämpliga bildstorleken till varje användares enhet.

## Implementering av Srcset med Densitetsbeskrivare

För att använda srcset med densitetsbeskrivare, följ dessa steg:
1. Förbered dina bilder i olika upplösningar.
2. Lägg till attributet `srcset` till `<img>`-elementet, inklusive bildkällorna och motsvarande densitetsbeskrivare.
3. Lägg till attributet `sizes` (valfritt) för att specificera bildens storlek som den kommer att visas på skärmen.

### Markup-exempel

Här är ett exempel på hur du implementerar srcset med densitetsbeskrivare i din markup:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="En exempelbild">
```

Detta markup-exempel inkluderar:
- **src** : Standardbildkällan som visas om webbläsaren inte stödjer srcset.
- **srcset** : Listan över bildkällor och deras densitetsbeskrivare (1x, 2x, 3x). Webbläsaren kommer att välja den mest lämpliga bilden baserat på användarens skärm.
- **alt** : En beskrivning av bilden för tillgänglighetsändamål.

Och det är allt! Du har framgångsrikt implementerat srcset med densitetsbeskrivare, vilket förbättrar din webbplats prestanda och användarupplevelse.
