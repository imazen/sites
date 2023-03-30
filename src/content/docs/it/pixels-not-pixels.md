---
title: px ≠ pixel
description: Pixel del dispositivo ≠ px del browser ≠ px dell'immagine
taskInputHash: 5cb0d1fb2057aeac
lang: it
sidebar_sort_priority: 900
---
### Device pixels ≠ px del browser ≠ px dell'immagine

Grazie ad Apple, i pixel CSS e HTML (`px`) **quasi sempre corrispondono a multipli di pixel del dispositivo/stampante**. Il `devicePixelRatio` del mio telefono è 3,875; [qual è il tuo?](https://www.mydevice.io/)

Il `devicePixelRatio` del mio desktop cambia allo zoom del browser, ma di default è 1,5 (dato che il mio `Sistema > Display > Zoom` è al 150%).

I file di immagine (esclusi gli SVG) vengono decodificati in una griglia di pixel. **È fastidiosamente difficile ottenere pixel dell'immagine che si visualizzino in modo perfetto a un rapporto 1:1 con i pixel del dispositivo, ma con `srcset` puoi essere *abbastanza vicino***, e un po' di Javascript può regolare la dimensione degli elementi HTML dopo il caricamento se hai ragioni sufficienti per ottenere un mappatura perfetta, anche se queste arti proibite non saranno rivelate qui.

> Altre unità assolute [in, pc, pt, mm, cm, Q](https://developer.mozilla.org/it/docs/Web/CSS/length) sono definite in termini di numero di pixel CSS e fingono che tutto sia a 96 dpi. I dev evitano le unità assolute perché in generale è meglio usare unità derivate dalla dimensione del carattere o dalle dimensioni del viewport/contenitore. Unità incoerenti possono rompere un layout se l'utente regola il moltiplicatore `Accessibilità > Dimensioni testo`, fa zoom sul browser o ruota il dispositivo. Ovviamente, dovresti fare tutte queste cose prima di pubblicare il tuo sito.
