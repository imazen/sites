---
taskInputHash: 624de555ae9092b7
title: |-
  Titolo e descrizione dell'articolo; non utilizzare & o < o >

   px ≠ pixel
description: I pixel del dispositivo ≠ i pixel del browser ≠ i pixel dell'immagine
sidebar_sort_priority: 900
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---
### I pixel del dispositivo ≠ i pixel del browser ≠ i pixel dell'immagine

Grazie ad Apple, i pixel CSS e HTML (`px`) **quasi sempre si mappano su più pixel del dispositivo/stampante**. Il devicePixelRatio sul mio telefono è 3.875; [qual è il tuo?](https://www.mydevice.io/)

Sul mio desktop il devicePixelRatio cambia con lo zoom del browser, ma di default è 1.5 (il mio `Sistema > Schermo > Scala` è al 150%, dopotutto).

I file immagine (escludendo SVG) si decodificano in una griglia di pixel. **È fastidiosamente difficile ottenere che i pixel dell'immagine si visualizzino perfettamente in un rapporto 1:1 con i pixel del dispositivo - ma con `srcset` puoi avvicinarti abbastanza***, e un po' di Javascript può regolare la dimensione dell'elemento html dopo il caricamento se hai motivi realmente giustificati per volere quella mappatura perfetta, anche se tali arti proibite non saranno rivelate qui.

> Altre unità assolute [unità (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/it/docs/Web/CSS/length) sono definite in termini di numero di pixel CSS e fingono che tutto sia a 96dpi. Gli sviluppatori evitano le unità assolute perché generalmente è meglio usare unità derivanti dalla dimensione del font o dalle dimensioni del viewport/contenitore. Unità non corrispondenti possono rompere un layout se l'utente regola il proprio moltiplicatore `Accessibilità > Dimensione testo`, ingrandisce il browser o ruota il dispositivo. È superfluo dire che dovresti fare tutte queste cose prima di lanciare il tuo sito.
