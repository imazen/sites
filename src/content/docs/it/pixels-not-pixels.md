---
title: px ≠ pixel
description: Pixel del dispositivo ≠ pixel del browser ≠ pixel dell'immagine
taskInputHash: 5cb0d1fb2057aeac
lang: it
sidebar_sort_priority: 900
---
### Pixel del dispositivo ≠ pixel del browser ≠ pixel dell'immagine

Grazie ad Apple, i pixel CSS e HTML (`px`) **quasi sempre corrispondono a più pixel del dispositivo/stampante**. Il devicePixelRatio del mio telefono è di 3,875; [qual è il tuo?](https://www.mydevice.io/it/) 

Il devicePixelRatio del mio desktop cambia allo zoom del browser, ma di default è di 1,5 (la mia `System > Display > Scale` è al 150%, dopotutto).

I file di immagine (escludendo gli SVG) decodificano una griglia di pixel. **È fastidiosamente difficile ottenere la visualizzazione dei pixel dell'immagine perfettamente a un rapporto 1:1 con i pixel del dispositivo - ma con l'attributo `srcset` puoi avvicinarti abbastanza**, e un po' di Javascript può regolare la dimensione dell'elemento HTML dopo il caricamento se hai motivi davvero giustificati per necessitare di quella corrispondenza perfetta, anche se tali arti proibite non saranno svelate qui.

> Altre unità assolute [in, pc, pt, mm, cm, Q](https://developer.mozilla.org/it/docs/Web/CSS/length) sono definite in base al numero di pixel CSS e fingono che tutto sia a 96dpi. Gli sviluppatori evitano le unità assolute perché in genere è meglio utilizzare unità che derivano dalle dimensioni del carattere o del viewport/contenitore. Unità discordanti possono rompere un layout se l'utente regola il loro moltiplicatore `Accessibility > Text Size`, ingrandisce il browser o ruota il dispositivo. Inutile dire che dovresti fare tutte queste cose prima di pubblicare il tuo sito.
