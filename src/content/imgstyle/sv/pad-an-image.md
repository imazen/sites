---
title: Skapa padding runt en bild
description: >-
  Hur man skapar padding runt en bild med hjälp av CSS och aspect ratio för att
  centrera
taskInputHash: c5381c99f314e33a
lang: sv
---
Så här kan du använda CSS och aspect ratio för att centrera och göra en bild större: 
1. Först behöver du omsluta din bild med en container, till exempel en `<div>` eller `<figure>`. Detta gör det möjligt att tillämpa stilar på containern som kommer att påverka bilden innanför. 
2. Ange containerns `position` till `relative`. Detta gör det möjligt att placera bilden inne i containern. 
3. Lägg till en `::after` pseudo-element till containern. Detta kommer att användas för att bevara bildens aspect ratio och skapa padding. 
4. Ange `content` för `::after` pseudo-elementet till en tom sträng. Detta är nödvändigt för att skapa elementet. 
5. Ange `padding-bottom` för `::after` pseudo-elementet till en procentandel som motsvarar bildens aspect ratio. Till exempel, om din bild har en aspect ratio på 4:3, skulle du ange padding till `75%` (eftersom 3/4 = 0.75). Detta skapar paddingen under bilden. 
6. Ange containerns `position` till `absolute`. Detta placera elementet innehåll till containern. 
7. Ange `top`, `left`, `bottom` och `right` egenskaperna för `::after` pseudo-elementet till `0`. Detta gör att elementet fyller containern och skapar paddingen. 
8. Slutligen, ange `position` egenskapen för bilden själv till `absolute`. Detta gör det möjligt att centrera bilden inom containern genom att använda `top`, `left`, `bottom` och `right` egenskaperna.

Här är ett exempel på CSS-koden du skulle använda för att centrera och göra en bild större med en aspect ratio på 4:3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 aspect ratio */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
```



I det här exemplet är `.container` elementet containern för bilden. Pseudo-elementet `::after` används för att skapa paddingen och bevara aspect ratio för bilden. `img` elementet är satt till `position: absolute` så att det kan centreras inom containern genom att använda `top`, `left`, `bottom` och `right` egenskaperna.

Genom att sätta `max-width` och `max-height` egenskaperna för bilden till `100%`, kommer bilden att skala för att passa det tillgängliga utrymmet samtidigt som aspect ratio bevaras. Detta innebär att paddingen som skapas av `::after` pseudo-elementet alltid är proportionell mot bildens storlek.
