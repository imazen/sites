---
title: px ≠ pixel
description: Pixel del dispositivo ≠ px del browser ≠ px dell'immagine
taskInputHash: 30d633a4ce310a0f
lang: it
sidebar_sort_priority: 900
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Pixel del dispositivo ≠ px del browser ≠ px dell'immagine

Grazie ad Apple, i pixel CSS e HTML (`px`) mappano **quasi sempre a multipli di pixel del dispositivo/stampante**. Il devicePixelRatio sul mio telefono è 3.875; [qual è il tuo?](https://www.mydevice.io/)

Il devicePixelRatio del desktop cambia durante lo zoom del browser, ma di default è 1.5 (il mio `Sistema > Display > Scala` è al 150%, dopotutto).

I file immagine (escludendo SVG) vengono decodificati in una griglia di pixel. **È fastidiosamente difficile far visualizzare i pixel delle immagini perfettamente in rapporto di 1:1 con i pixel del dispositivo, ma con `srcset` puoi avvicinarti abbastanza**, e un po' di Javascript può regolare la dimensione dell'elemento html in seguito al caricamento se hai delle ragioni valide per un mapping perfetto, anche se queste arti proibite non verranno rivelate qui.

> Altre [unità assolute (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/it/docs/Web/CSS/length) sono definite in termini di numero di pixel CSS e fingono che tutto sia a 96 dpi. Gli sviluppatori evitano le unità assolute perché in genere è meglio usare le unità derivate dalla dimensione del font o dalle dimensioni del viewport/contenitore. Unità non allineate possono spezzare una disposizione se l'utente regola il moltiplicatore `Accessibilità > Dimensione testo`, ingrandisce il browser o ruota il dispositivo. Inutile dire che, prima di distribuire il tuo sito, dovresti fare tutte queste cose.
