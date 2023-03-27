---
title: px ≠ pixlar
description: Enhetpx ≠ webbläsarpx ≠ bildpx
taskInputHash: 69ed91e31fe2aa4d
lang: sv
sidebar_sort_priority: 900
---
### Enhetpixlar ≠ webbläsarpx ≠ bildpx

Tack vare Apple så mapas CSS- och HTML-pixlar (`px`) **nästan alltid till flera enhets/utskriftspixlar**. devicePixelRatio på min telefon är 3,875; [vad har du för värde?](https://www.mydevice.io/)

Min datorns devicePixelRatio ändras vid webbläsarzoom men är som standard 1,5 (eftersom min `System > Display > Scale` är 150%).

Bildfiler (med undantag för SVG) avkodas till en matris av pixlar. **Det är svårt att få bildpixlarna att visas perfekt i en 1:1-förhållande med enhetspixlar, men med `srcset` kan man komma *tillräckligt nära* och med lite Javascript kan man justera html-elementets storlek efter inläsning om man har verkligt motiverade skäl för att behöva den perfekta kartläggningen, även om sådana förbjudna konster inte kommer att avslöjas här.

> Andra absoluta [enheter (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/en-US/docs/Web/CSS/length) är definierade i termer av antal CSS-pixlar och låtsas att allt har en upplösning på 96 dpi. Utvecklare undviker absoluta enheter eftersom det är bättre att använda enheter som kommer från fontstorleken eller viewport/container-dimensionerna. Felaktiga enheter kan förstöra en layout om användaren ändrar sin `Accessibility > Text Size`-multiplikator, zoomar i webbläsaren eller vrider sin enhet. Som man kan förstå, bör man göra alla dessa saker innan man lanserar sin webbplats.
