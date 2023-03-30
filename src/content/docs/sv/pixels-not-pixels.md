---
title: px ≠ pixlar
description: Enhetspx ≠ webbläsarpx ≠ bildpx
taskInputHash: fd81e79f3e2dea92
lang: sv
sidebar_sort_priority: 900
---
### Enhet pixlar ≠ webbläsarpx ≠ bildpx

Tack vare Apple, CSS och HTML pixlar (`px`) **mappar nästan alltid till flera enhets-/skrivarepixlar**. devicePixelRatio på min telefon är 3,875; [vilken har du?](https://www.mydevice.io/) 

Min stationära devicePixelRatio ändras när jag zoomar i webbläsaren, men är som standard 1,5 (min `System > Display > Scale` är 150%).

Bildfiler (exklusive SVG) avkodas till en rutnät av pixlar. **Det är irriterande svårt att få bildpixlar att visas helt perfekt med en 1:1-förhållande med enhetspixlar - men med `srcset` kan du komma *tillräckligt nära***, och med lite Javascript kan du justera html-elementets storlek efter att det har laddats om du har verkligt goda skäl för att behöva den perfekta matchningen, även om sådana förbjudna konster inte kommer att avslöjas här.

> Andra absoluta [enheter (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/en-US/docs/Web/CSS/length) definieras i termer av antalet CSS-pixlar och låtsas att allt är 96 dpi. Utvecklare undviker absoluta enheter eftersom det generellt sett är bättre att använda enheter som härleds från teckenstorleken eller viewport-/behållardimensionerna. Mismatchade enheter kan bryta layouten om användaren justerar sin `Accessibility > Text Size`-multiplikator, zoomar webbläsaren eller roterar enheten. Det är självklart att du bör göra alla dessa saker innan du skickar din webbplats.
