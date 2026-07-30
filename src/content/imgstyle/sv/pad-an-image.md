---
taskInputHash: 26458f7e21632f92
title: Fyll ut en bild
description: >-
  Hur man fyller ut en bild med hjälp av CSS och bildförhållande för att
  centrera
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
Så här kan du använda CSS och bildförhållande för att centrera och fylla ut en bild:
1. Först behöver du omsluta din bild i ett konteiner-element, såsom en `<div>` eller `<figure>`. Detta möjliggör att applicera stilar på containern som påverkar bilden inuti.
2. Sätt konteinerns `position`-egenskap till `relative`. Detta låter dig positionera bilden inuti containern.
3. Lägg till ett `::after` pseudo-element till containern. Detta används för att bibehålla bildförhållandet och skapa utfyllnaden.
4. Sätt `content`-egenskapen på `::after` pseudo-elementet till en tom sträng. Detta är nödvändigt för att skapa elementet.
5. Sätt `padding-bottom`-egenskapen på `::after` pseudo-elementet till ett procentvärde som motsvarar bildförhållandet. Till exempel, om din bild har ett bildförhållande på 4:3, skulle du sätta utfyllnaden till `75%` (eftersom 3/4 = 0.75). Detta skapar utfyllnaden under bilden.
6. Sätt `position`-egenskapen på `::after` pseudo-elementet till `absolute`. Detta positionerar elementet inom containern.
7. Sätt `top`, `left`, `bottom`, och `right` egenskaperna på `::after` pseudo-elementet till `0`. Detta gör att elementet fyller containern och skapar utfyllnaden.
8. Slutligen, sätt `position`-egenskapen på själva bilden till `absolute`. Detta låter dig centrera bilden i containern med hjälp av `top`, `left`, `bottom`, och `right` egenskaperna.

Här är ett exempel på CSS-koden du skulle använda för att centrera och fylla ut en bild med bildförhållandet 4:3:

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

I detta exempel är `.container` elementet konteinern för bilden. `::after` pseudo-elementet skapar utfyllnaden och bibehåller bildförhållandet på bilden. `img` elementet är satt till `position: absolute` så att det kan centreras inom containern med hjälp av `top`, `left`, `bottom`, och `right` egenskaperna.

Genom att sätta `max-width` och `max-height` egenskaperna på bilden till `100%`, kommer bilden skala för att passa tillgängligt utrymme samtidigt som det bibehåller sitt bildförhållande. Detta innebär att utfyllnaden som skapats av `::after` pseudo-elementet alltid kommer att vara proportionellt med bildens storlek.
