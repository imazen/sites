---
title: Lägg till kantutrymme runt en bild
description: >-
  Så här lägger du till kantutrymme runt en bild med hjälp av css och
  höjd/bredd-förhållande för att centrera
taskInputHash: acc97f9ddede461f
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Så här kan du använda CSS och höjd/bredd-förhållande för att centrera och lägga till kantutrymme runt en bild: 
1. Först behöver du lägga in din bild i en behållarelement, en `<div>` eller en `<figure>`. Detta gör att du kan använda stilar på behållaren som kommer att påverka bilden innuti. 
2. Ställ positionsegenskapen för behållaren till `relative`. Detta låter dig positionera bilden innuti behållaren. 
3. Lägg till en `::after` pseudo-element till behållaren. Detta som kommer att användas för att lagra höjd och bredd-förhållandet av bilden och skapa kantutrymmet. 
4. Ställ in `content`-egenskapen för `::after` pseudo-elementet till en tom sträng. Detta behövs för att kunna skapa elementet. 
5. Ställ in `padding-bottom`-egenskapen för `::after` pseudo-elementet till en procentsats som motsvarar höjd/bredd-förhållandet för bilden. Till exempel, om din bild har en höjd/bredd-förhållande på 4:3 skulle du ange paddingen till `75%` (eftersom 3/4 blir 0,75). Detta skapar kantutrymmet under bilden. 
6. Ställ in positionsegenskapen för `::after` pseudo-elementet till `absolute`. Detta kommer att positionera elementet inuti behållaren. 
7. Ställ in `top`, `left`, `bottom` och `right`-egenskaperna för `::after` pseudo-elementet till `0`. Detta kommer att fylla behållaren och skapa kantutrymmet. 
8. Slutligen, ställ in positionsegenskapen för bilden själv till `absolute`. Detta kommer att låta dig centrera bilden inuti behållaren med hjälp av `top`, `left`, `bottom` och `right`-egenskaperna.

Här är ett exempel på CSS-kod du skulle använda för att centrera och lägga till kantutrymme runt en bild med en höjd/bredd-förhållande på 4:3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 höjd/bredd-förhållande */
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



I detta exempel är `.container` elementet som behållaren för bilden. `::after` pseudo-elementet används för att skapa kantutrymmet och lagra höjd/bredd-förhållandet av bilden. `img` elementet är satt till `position: absolute` så att det kan centreras inne i behållaren med hjälp av `top`, `left`, `bottom` och `right`-egenskaperna.

Genom att sätta `max-width` och `max-height` egenskaperna hos bilden till `100%`, kommer bilden att skala ner för att passa tillgängligt utrymme och samtidigt behålla sitt höjd/bredd-förhållande. Detta innebär att kantutrymmet skapat av `::after` pseudo-elementet alltid kommer att vara proportionellt mot bildens storlek.
