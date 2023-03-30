---
title: Densitetsdescriptors och srcset
description: Exempel på att använda densitetsdescriptors i `srcset`
taskInputHash: fe4017c7a115e9fc
lang: sv
---
Srcset med densitetsdescriptors ger en enkel och effektiv metod för att leverera den mest lämpliga bilden till varje användares enhet, vilket förbättrar prestanda och användarupplevelse. Den här guiden går igenom det väsentliga i att använda srcset med densitetsdescriptors och ger exempel på markup för din bekvämlighet.
## Vad är Srcset med densitetsdescriptors?

Srcset är en HTML-attribut som är utformad för att låta dig ange flera bildkällor för ett enda `<img>`-element. Densitetsdescriptors (`x`) används i kombination med srcset för att tillhandahålla bilder med olika upplösning baserat på användarens skärmpixeltäthet.
## När ska man använda Srcset med densitetsdescriptors

Användning av srcset med densitetsdescriptors är särskilt användbart när du vill:
1. Servera bilder med hög upplösning till hög-DPI-skärmar (t.ex. Retina-skärmar) samtidigt som du tillhandahåller bilder med lägre upplösning till vanliga skärmar.
2. Förbättra sidprestanda genom att leverera den mest lämpliga bildstorleken till varje användares enhet.
## Implementera Srcset med densitetsdescriptors

För att använda srcset med densitetsdescriptors, följ dessa steg:
1. Förbered dina bilder i olika upplösningar.
2. Lägg till `srcset`-attributet till `<img>`-elementet, inklusive bildkällorna och motsvarande densitetsdescriptors.
3. Lägg till `sizes`-attributet (valfritt) för att ange bildens storlek när den visas på skärmen.
### Markupexempel

Här är ett exempel på hur du implementerar srcset med densitetsdescriptors i din markup:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="En exempelbild">
```



Detta markupexempel inkluderar:
- **src**: Standard bildkälla som visas om webbläsaren inte stöder srcset.
- **srcset**: Listan över bildkällor och deras densitetsdescriptors (1x, 2x, 3x). Webbläsaren väljer den mest lämpliga bilden baserat på användarens skärm.
- **alt**: En beskrivning av bilden för tillgänglighetsändamål.


Och det är allt! Du har framgångsrikt implementerat srcset med densitetsdescriptors, vilket förbättrar din webbplats prestanda och användarupplevelse.
