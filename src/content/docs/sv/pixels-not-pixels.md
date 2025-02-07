---
taskInputHash: e934c073c1613c26
title: px ≠ pixlar
description: Enhetspx ≠ webbläsar-px ≠ bild-px
sidebar_sort_priority: 900
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---
### Enhetspixlar ≠ webbläsar-px ≠ bild-px

Tack vare Apple, mappar CSS och HTML-pixlar (`px`) **nästan alltid till flera enhets-/skrivarpixlar**. Min telefon har en devicePixelRatio på 3.875; [vad är din?](https://www.mydevice.io/)

Min stationära enhets devicePixelRatio ändras vid webbläsarzoom, men är som standard 1.5 (min `System > Display > Scale` är trots allt 150%).

Bildfiler (exklusive SVG) avkodas till ett rutnät av pixlar. **Det är irriterande svårt att få bildpixlar att visas perfekt i en 1:1-förhållande med enhetspixlar - men med `srcset` kan du komma *tillräckligt nära***, och lite Javascript kan justera storleken på html-elementet efter laddning om du har verkligt rättfärdigade skäl för att behöva den perfekta mappningen, även om sådana förbjudna konster inte kommer att avslöjas här.

> Andra absoluta [enheter (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/sv/docs/Web/CSS/length) definieras i termer av antal CSS-pixlar och låtsas att allt är 96dpi. Utvecklare undviker absoluta enheter eftersom det generellt sett är bättre att använda enheter som härleds från teckenstorleken eller vyhamnens/behållarens dimensioner. Omatchade enheter kan bryta layouten om användaren justerar sin `Accessibility > Text Size`-multiplikator, zoomar webbläsaren eller roterar sin enhet. Behöver vi säga att du bör göra alla dessa saker innan du lanserar din webbplats?
