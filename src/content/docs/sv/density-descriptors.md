---
title: Densitetsbeskrivningar och srcset
description: Exempel på användning av densitetsbeskrivningar i `srcset`
taskInputHash: 3e4c00237cedf2c5
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Srcset med densitet är ett enkelt och effektivt sätt att leverera den mest lämpliga bilden till varje användares enhet, vilket förbättrar prestandan och användarupplevelsen. Den här guiden kommer att guida dig genom grunderna i att använda srcset med densitet och ge markup-exempel för din bekvämlighet.
## Vad är Srcset med densitet?

Srcset är en HTML-attribut som är utformad för att låta dig ange flera bildkällor för ett enda `<img>` element. Densitetsbeskrivningar (`x`) används i kombination med srcset för att tillhandahålla bilder med olika upplösning baserat på användarens bildskärms pixeltäthet.
## När man ska använda Srcset med densitet

Att använda srcset med densitet är särskilt användbart när du vill:
1. Servera högupplösta bilder till hög-DPI-skärmar (t.ex. Retina-skärmar) samtidigt som du tillhandahåller lågupplösta bilder till standard-skärmar.
2. Förbättra sidprestandan genom att leverera den mest lämpliga bildstorleken till varje användares enhet.
## Implementering av Srcset med densitet

Följ dessa steg för att använda srcset med densitet:
1. Förbered dina bilder i olika upplösningar.
2. Lägg till `srcset` attributet till `<img>` elementet, inklusive bildkällorna och motsvarande densitetsbeskrivningar.
3. Lägg till `sizes` attributet (valfritt) för att ange bildens storlek när den kommer att visas på skärmen.
### Markup exempel

Här är ett exempel på hur man implementerar srcset med densitetsbeskrivningar i din markup:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="En exempelbild">
```

Denna markup exempel inkluderar:
- **src** : Bildkällan som visas om webbläsaren inte stöder srcset.
- **srcset** : Listan med bildkällor och densitetsbeskrivningar (1x, 2x, 3x). Webbläsaren väljer den mest lämpliga bilden baserat på användarens bildskärm.
- **alt** : En beskrivning av bilden för tillgänglighetsändamål.

Och det är allt! Du har framgångsrikt implementerat srcset med densitet, förbättrat din webbplats prestanda och användarupplevelse.
