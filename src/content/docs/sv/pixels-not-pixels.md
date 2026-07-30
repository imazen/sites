---
taskInputHash: 9c82f13cad7a56f3
title: px ≠ pixlar
description: Enhetspx ≠ webbläsarpx ≠ bildpixlar
sidebar_sort_priority: 900
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
### Enhetspixlar ≠ webbläsarpx ≠ bildpixlar

Tack vare Apple, CSS och HTML-pixlar (`px`) **kartläggs nästan alltid till flera enheters/skrivarens pixlar**. Min telefoons devicePixelRatio är 3.875; [vad är din?](https://www.mydevice.io/) 

Mitt skrivbords enhetspixel förhållande ändras vid webbläsarzoom, men standardinställningen är 1.5 (min `System > Visa > Skala` är trots allt 150%).

Bildfiler (exklusive SVG) dekodas till ett rutnät av pixlar. **Det är irriterande svårt att få bildpixlar att visas perfekt i ett 1:1-förhållande med enhetspixlar - men med `srcset` kan du komma *tillräckligt nära***, och lite Javascript kan justera html-elementets storlek efter laddning om du har verkligen motiverade skäl för att behöva den perfekta kartläggningen, även om sådana förbjudna konster inte kommer att avslöjas här.

> Andra absoluta [enheter (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/sv/docs/Web/CSS/length) definieras i termer av antal CSS-pixlar och låtsas att allt är 96dpi. Utvecklare undviker absoluta enheter eftersom det generellt sett är bättre att använda enheter som härleds från textstorleken eller vyporten/behållarens dimensioner. Missanpassade enheter kan förstöra en layout om användaren justerar sin `Tillgänglighet > Textstorlek` multiplikator, zoomar webbläsaren, eller roterar sin enhet. Onödigt att säga, du bör göra alla dessa saker innan du lanserar din webbplats.
