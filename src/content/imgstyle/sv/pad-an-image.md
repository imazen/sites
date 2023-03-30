---
title: Stoppa en bild
description: >-
  Så här stoppar du en bild med hjälp av CSS och bildförhållande för att
  centrera
taskInputHash: c5381c99f314e33a
lang: sv
---
Så här kan du använda CSS och bildförhållande för att centrera och stoppa en bild:
1. Först måste du omsluta din bild i en container-element, såsom en `<div>` eller `<figure>`. Detta gör det möjligt att tillämpa stilar på containern som påverkar bilden inuti.
2. Ange containerns `position` -egenskap till `relative`. Detta gör det möjligt att positionera bilden inuti containern.
3. Lägg till en `:: after` pseudo-element till containern. Detta används för att bibehålla bildens bildförhållande och skapa stoppning.
4. Ange `content` -egenskapen för `:: after` pseudo-element till en tom sträng. Detta är nödvändigt för att skapa elementet.
5. Ange `padding-bottom` -egenskapen för `:: after` pseudo-element till ett procentvärde som motsvarar bildens bildförhållande. Till exempel, om din bild har en bildförhållande på 4: 3 skulle du ställa in stoppningen till `75%` (eftersom 3/4 = 0,75). Detta skapar stoppningen nedanför bilden.
6. Ange `position` -egenskapen för `:: after` pseudo-element till `absolute`. Detta positionerar elementet inom containern.
7. Ange `top`, `left`, `bottom` och `right` egenskaperna för `:: after` pseudo-element till `0`. Detta kommer att göra att elementet fyller containern och skapa stoppningen.
8. Slutligen ange positionsegenskapen för själva bilden till `absolute`. Detta gör det möjligt att centrera bilden i containern med hjälp av egenskaperna `top`, `left`, `bottom` och `right`.

Här är ett exempel på CSS-koden du skulle använda för att centrera och stoppa en bild med ett bildförhållande på 4: 3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 bildförhållande */
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

I detta exempel är `.container` elementet containern för bilden. `:: after` pseudo-element används för att skapa stoppningen och bibehålla bildens bildförhållande. `img` elementet är inställt på `position: absolute` så att det kan centreras i containern med hjälp av egenskaperna `top`, `left`, `bottom` och `right`.

Genom att ställa in `max-width` och `max-height` egenskaperna för bilden till `100%`, kommer bilden att skala för att passa tillgängligt utrymme samtidigt som bildförhållandet bibehålls. Detta innebär att stoppningen som skapats av `:: after` pseudo-elementet alltid kommer att vara proportionell mot bildens storlek.
