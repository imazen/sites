---
title: px ≠ pixlar
description: Enhet px ≠ webbläsare px ≠ bild px
taskInputHash: 2b5adfa6783beef0
lang: sv
ignore: '/* cSpell:locale sv,en*/'
sidebar_sort_priority: 900
date_published: '2023-03-26'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
### Enhet pixlar ≠ webbläsare px ≠ bild px

Tack vare Apple mappar CSS och HTML pixlar (`px`) **nästan alltid mot flera enhets-/skrivar-pixlar**. devicePixelRatio på min telefon är 3,875; [vad är din?](https://www.mydevice.io/)

min desktop devicePixelRatio ändras med webbläsar-zoomet, men är standard på 1,5 (eftersom min `System > Display > Scale` är 150%).

Bildfiler (exklusive SVG) avkodas till en matris av pixlar. **Det är irriterande svårt att få bildpixlar att visas perfekt i 1:1-förhållande med enhetspixel - men med `srcset` kan du komma *tillräckligt nära***, och lite Javascript kan justera html-elementets storlek efter laddning om du har verkligt motiverade skäl för att behöva den perfekta matchningen, även om sådana förbjudna konster inte avslöjas här.

> Andra absoluta [enheter (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/en-US/docs/Web/CSS/length) definieras i termer av antalet CSS-pixlar och låtsas att allt är 96 dpi. Utvecklare undviker absoluta enheter eftersom det brukar vara bättre att använda enheter som härstammar från teckenstorleken eller från viewport-/behållar-dimensionerna. Felaktiga enheter kan bryta en layout om användaren justerar sin `Accessibility > Text Size`-multiplikator, zoomar webbläsaren eller roterar sin enhet. Det behöver inte sägas att du bör göra alla dessa saker innan du lanserar din webbplats.
