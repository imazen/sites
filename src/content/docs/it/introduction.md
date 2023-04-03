---
title: srcset e dimensioni di <img>
description: Una guida efficiente e opinabile alle immagini responsive per il 2023
taskInputHash: 7c0db2e5e6194bc9
lang: it
sidebar_sort_priority: 1000
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
**Una guida efficiente e opinabile alle immagini del 2023**

Controlla la barra laterale per un'analisi dettagliata. Questa è un'annotazione rapida per aggiornare i tag `<img>` per gestire i moderni dispositivi con tutte le loro diverse dimensioni e densità di pixel. Devi [sapere che i pixel non sono tutti uguali](/it/pixel-non-uguali) e che `devicePixelRatio` è più probabile che sia di circa 3,875 che di 1:1. I telefoni moderni si fingono larghi da 320-428px per leggibilità (in pixel CSS), ma hanno molti pixel del dispositivo per ogni pixel CSS.

> Se la tua immagine non cambia mai di dimensioni, indipendentemente da quanto strettamente ridimensioni la finestra del browser, dovresti usare un [descrittore di densità](/it/density-descriptors) al suo posto. Questo è spesso adatto per loghi, icone e pulsanti.

Conosci i tuoi [punti di interruzione](/it/breakpoints)? Avrai bisogno di questi numeri per affinare la soluzione di seguito - e come minimo il punto di interruzione della larghezza del viewport in cui l'area del contenuto principale smette di crescere.

### Il metodo facile

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Cane che guida una bicicletta" />

<!-- Abbiamo supposto che tu abbia un breakpoint a 700px. 
      E che sotto quella larghezza di viewport, questa immagine occupa il 100% della larghezza, ma
      quando il viewport è più ampio, l'immagine è limitata a 800 pixel CSS -->

<!-- Questo presuppone che stai utilizzando un server di immagini compatibile RIAPI come Imageflow. 
     La produzione di varianti di immagini al volo è essenziale per la sanità dello sviluppatore. -->
```
