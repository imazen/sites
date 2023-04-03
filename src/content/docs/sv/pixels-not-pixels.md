---
title: px ≠ pixlar
description: Enhet pixlar ≠ webbläsare px ≠ bild px
taskInputHash: 49c85f11bddeb9d6
lang: sv
sidebar_sort_priority: 900
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Enhet pixlar ≠ webbläsare px ≠ bild px

Tack vare Apple så motsvarar stilmått (`px`) i CSS och HTML **nästan alltid flera enhets-/skrivarepixlar**. enhetspixelkvoten på min telefon är 3,875; [vad är din?](https://www.mydevice.io/)

Min stationära enhetspixelkvot ändras vid webbläsarzoomning, men är som standard 1,5 (min `System > Display > Scale` är ändå på 150 %).

Bildfiler (med undantag av SVG) avkodas till en rutnät av pixlar. **Det är irriterande svårt att få bildpixlar att visas perfekt vid en 1:1-förhållande med enhetspixlar, men med `srcset`  kan man komma *tillräckligt nära*** och lite Javascript kan anpassa den HTML-elementets storlek efter laddning, om du har verkligen goda skäl för att behöva denna perfekta koppling. Men sådana förbjudna konster avslöjas inte här.

> Andra absoluta [enheten (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/sv-SE/docs/Web/CSS/length) definieras i termer av antalet CSS-pixlar och låtsas att allt är 96 dpi. Utvecklare undviker absoluta enheter eftersom det vanligtvis är bättre att använda enheter som härleds från fontstorleken eller viewport/container dimensionerna. Mismatchade enheter kan bryta en layout om användaren justerar sin `Accessibility > Text Size` multiplikator, zoomar webbläsaren eller vrider enheten. Onödigt att säga, du bör göra alla dessa saker innan du skickar ut din webbplats.
