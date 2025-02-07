---
taskInputHash: 9203469f7de56d54
title: Lägg till padding runt en bild
description: >-
  Hur man lägger till padding runt en bild med hjälp av CSS och bildförhållande
  för att centrera
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---
Här är hur du kan använda CSS och bildförhållande för att centrera och paddda en bild: 
1. Först måste du omsluta din bild i ett containerelement, som en `<div>` eller `<figure>`. Detta gör att du kan tillämpa stilar på containern som kommer att påverka bilden inuti.
2. Ställ in containerns `position`-egenskap till `relative`. Detta låter dig positionera bilden inuti containern.
3. Lägg till ett `::after` pseudo-element till containern. Detta kommer att användas för att bibehålla bildförhållandet och skapa paddningen.
4. Ställ in `content`-egenskapen för `::after` pseudo-elementet till en tom sträng. Detta är nödvändigt för att skapa elementet.
5. Ställ in `padding-bottom`-egenskapen för `::after` pseudo-elementet till ett procentvärde som motsvarar bildförhållandet för bilden. Till exempel, om din bild har ett bildförhållande på 4:3, skulle du ställa in padding till `75%` (eftersom 3/4 = 0,75). Detta kommer att skapa paddningen under bilden.
6. Ställ in `position`-egenskapen för `::after` pseudo-elementet till `absolute`. Detta kommer att positionera elementet inom containern.
7. Ställ in `top`, `left`, `bottom`, och `right`-egenskaperna för `::after` pseudo-elementet till `0`. Detta kommer att få elementet att fylla containern och skapa paddningen.
8. Slutligen, ställ in `position`-egenskapen för själva bilden till `absolute`. Detta gör att du kan centrera bilden inom containern med hjälp av `top`, `left`, `bottom`, och `right`-egenskaperna.

Här är ett exempel på CSS-koden som du skulle använda för att centrera och paddda en bild med ett bildförhållande på 4:3:

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

I detta exempel är `.container` elementet containern för bilden. `::after` pseudo-elementet används för att skapa paddningen och bibehålla bildförhållandet för bilden. `img`-elementet är inställt på `position: absolute` så att det kan centreras inom containern med hjälp av `top`, `left`, `bottom`, och `right`-egenskaperna.

Genom att ställa in egenskaperna `max-width` och `max-height` för bilden till `100%`, kommer bilden skalas för att passa det tillgängliga utrymmet medan dess bildförhållande bibehålls. Detta innebär att paddningen skapad av `::after` pseudo-elementet alltid kommer att vara proportionell till storleken på bilden.
