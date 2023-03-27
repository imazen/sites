---
title: px ≠ pixels
description: >-
  Dispositivi pixels ≠ px browser ≠ px immagine


  (Note: The translation of the title is based on the assumption that the word
  'pixels' is meant to be translated to 'pixels'. If the word 'pixels' should be
  translated to another word based on the context, kindly let me know.)
taskInputHash: 4ab884e82e2f9b69
lang: it
sidebar_sort_priority: 900
---
### Dispositivi pixels ≠ px browser ≠ px immagine

Grazie ad Apple, i pixels di CSS e HTML (`px`) **vengono mappati quasi sempre su molti dispositivi/stampe**. Il devicePixelRatio del mio telefono è 3,875; [quale è il tuo?](https://www.mydevice.io/)

Il mio devicePixelRatio sul desktop cambia in base allo zoom del browser, ma di default è 1,5 (il mio `Sistema > Display > Scalabilità` è al 150%, dopotutto).

I file delle immagini (esclusi quelli SVG) decodificano in una griglia di pixels. **È fastidiosamente difficile ottenere che i pixels dell'immagine vengano visualizzati perfettamente a una proporzione di 1:1 con i dispositivi pixels - ma con `srcset` puoi arrivare *quasi* vicino**, e un po' di Javascript può regolare le dimensioni dell'elemento html dopo il caricamento se hai motivazioni davvero giustificate per aver bisogno di questa mappatura perfetta, anche se tali arti proibite non verranno qui rivelate.

> Altre unità assolute [(in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/it/docs/Web/CSS/length) sono definite in funzione del numero di pixels CSS e fanno finta che tutto abbia una risoluzione di 96dpi. Gli sviluppatori evitano le unità assolute perché di solito è meglio usare unità derivate dalle dimensioni del carattere o delle dimensioni viewport/contenitore. Unità non corrispondenti possono compromettere un layout se l'utente regola il moltiplicatore del testo in `Accessibilità > Dimensioni testo`, effettua lo zoom del browser o fa ruotare il dispositivo. Inutile dire che dovresti fare tutte queste cose prima di pubblicare il tuo sito.
