---
title: Densitetsbeskrivare & srcset
description: Exempel på att använda densitetsbeskrivare i `srcset`
taskInputHash: f052968262a22824
lang: sv
---
Srcset med densitetbeskrivare ger en enkel och effektiv metod för att leverera den mest lämpliga bilden till varje användares enhet, vilket förbättrar prestanda och användarupplevelse. Den här guiden kommer att ta dig igenom grunderna i att använda srcset med densitetbeskrivare och ge exempel på märkning för din bekvämlighet.
## Vad är Srcset med densitetbeskrivare?

Srcset är en HTML-attribut som är utformad för att låta dig ange flera bildkällor för ett enda `<img>`-element. Densitetsbeskrivare (`x`) används tillsammans med srcset för att tillhandahålla bilder med olika upplösning baserat på användarens skärmpixeldensitet.
## När ska man använda Srcset med densitetbeskrivare

Att använda srcset med densitetbeskrivare är särskilt användbart när du vill:
1. Visa högupplösta bilder på hög-DPI-skärmar (t.ex. Retina-skärmar) samtidigt som du tillhandahåller lägre upplösta bilder för standard skärmar.
2. Förbättra sidprestanda genom att leverera den mest lämpliga bildstorleken för varje användares enhet.
## Implementering av Srcset med densitetbeskrivare

För att använda srcset med densitetbeskrivare, följ dessa steg:
1. Förbered dina bilder i olika upplösningar.
2. Lägg till `srcset`-attributet till`<img>`-elementet, inklusive bildkällor och motsvarande densitetbeskrivare.
3. Lägg till `sizes`-attributet (valfritt) för att ange storleken på bilden när den visas på skärmen.
### Exempel på märkning

Här är ett exempel på hur man implementerar srcset med densitetbeskrivare i din märkning:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="En exempelbild">
```



Den här märknings exempel inkluderar: 
- **src** : Standardbildkällan, visas om webbläsaren inte stöder srcset. 
- **srcset** : Listan över bildkällor och deras densitetsbeskrivare (1x, 2x, 3x). Webbläsaren väljer den mest lämpliga bilden baserat på användarens skärm. 
- **alt** : En beskrivning av bilden för tillgänglighetsändamål. 


Och det är allt! Du har framgångsrikt implementerat srcset med densitetbeskrivare, vilket förbättrar din webbplats prestanda och användarupplevelse.
