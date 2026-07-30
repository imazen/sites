---
taskInputHash: 4f3a729e72f2b4eb
title: px ≠ pixel
description: Pixel del dispositivo ≠ pixel del browser ≠ pixel delle immagini
sidebar_sort_priority: 900
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---
### Pixel dei dispositivi ≠ pixel del browser ≠ pixel delle immagini

Grazie ad Apple, i pixel di CSS e HTML (`px`) **quasi sempre corrispondono a multipli di pixel del dispositivo/stampante**. Il devicePixelRatio sul mio telefono è 3.875; [qual è il tuo?](https://www.mydevice.io/) 

Il mio devicePixelRatio sul desktop cambia con lo zoom del browser, ma di default è 1.5 (dato che il mio `Sistema > Schermo > Scala` è 150%, dopotutto).

I file immagine (esclusi gli SVG) si decodificano in una griglia di pixel. **È fastidiosamente difficile ottenere che i pixel delle immagini si visualizzino perfettamente in un rapporto 1:1 con i pixel del dispositivo - ma con `srcset` puoi avvicinarti abbastanza***, e un po' di Javascript può regolare la dimensione dell'elemento html dopo il caricamento se hai davvero giustificati motivi per avere quell'accurata corrispondenza, sebbene tali arti proibite non saranno svelate qui.

> Altre [unità assolute (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/it/docs/Web/CSS/length) sono definite in termini di numero di pixel CSS e fingono che tutto sia a 96dpi. Gli sviluppatori evitano le unità assolute perché in generale è meglio usare unità derivate dalla dimensione del carattere o dalle dimensioni del viewport/contenitore. Unità non corrispondenti possono rompere un layout se l'utente regola il proprio moltiplicatore di `Accessibilità > Dimensione del testo`, effettua lo zoom del browser o ruota il dispositivo. Inutile dire che dovresti fare tutte queste cose prima di lanciare il tuo sito.
