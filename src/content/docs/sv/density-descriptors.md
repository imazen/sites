---
title: Densitetsbeskrivningar & srcset
description: Exempel på att använda densitetsbeskrivningar i `srcset`
taskInputHash: fe4017c7a115e9fc
lang: sv
---
Srcset med densitetsbeskrivningar ger en enkel och effektiv metod för att leverera den mest lämpliga bilden till varje användares enhet, vilket förbättrar prestanda och användarupplevelse. Denna guide går igenom grunderna för att använda srcset med densitetsbeskrivningar och ger exempel på markup för din bekvämlighet.

## Vad är Srcset med densitetsbeskrivningar?

Srcset är ett HTML-attribut som är utformat för att låta dig specificera flera bildkällor för ett enda `<img>`-element. Densitetsbeskrivningar (`x`) används i kombination med srcset för att tillhandahålla bilder med olika upplösning baserat på användarens bildskärms pixeltäthet.

## När ska man använda Srcset med densitetsbeskrivningar?

Att använda srcset med densitetsbeskrivningar är särskilt användbart när du vill:
1. Servera högupplösta bilder till högupplösta displays (t.ex. Retina-displays) medan du tillhandahåller lägre upplösta bilder till vanliga displays.
2. Förbättra sidprestandan genom att leverera den mest lämpliga bildstorleken till varje användares enhet.

## Implementering av Srcset med densitetsbeskrivningar

Följ dessa steg för att använda srcset med densitetsbeskrivningar:
1. Förbered dina bilder i olika upplösningar.
2. Lägg till `srcset`-attributet till `<img>`-elementet, inklusive bildkällorna och motsvarande densitetsbeskrivningar.
3. Lägg till `sizes`-attributet (valfritt) för att specificera bildens storlek som den kommer att visas på skärmen.

### Exempel på markup

Här är ett exempel på hur du kan implementera srcset med densitetsbeskrivningar i din markup:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="En exempelbild">
```

Detta markup-exempel inkluderar:
- **src**: Standardbildkällan som visas om webbläsaren inte stöder srcset.
- **srcset**: Listan över bildkällor och deras densitetsbeskrivningar (1x, 2x, 3x). Webbläsaren väljer den mest lämpliga bilden baserat på användarens display.
- **alt**: En beskrivning av bilden för tillgänglighetsändamål.

Och det är allt! Du har framgångsrikt implementerat srcset med densitetsbeskrivningar och förbättrat din webbplats prestanda och användarupplevelse.
