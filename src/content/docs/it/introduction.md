---
title: srcset & dimensioni delle immagini <img>
description: Una guida efficiente e dettagliata per le immagini responsive del 2023.
taskInputHash: 163252199483aa34
lang: it
sidebar_sort_priority: 1000
---
**Una guida efficiente e dettagliata per le immagini del 2023**

Controlla la barra laterale per una maggior approfondimento. Questo è il riferimento veloce per aggiornare i tag `<img>` per gestire i moderni dispositivi con tutte le loro diverse dimensioni e densità di pixel. Devi [sapere che i pixel non sono uguali](/it/pixels-non-pixels) e il `devicePixelRatio` è più probabilmente 3,875 che 1:1. I telefoni moderni fingono di avere una larghezza di 320-428px per una maggiore leggibilità.

> Se la tua immagine non cambia mai di dimensione, indipendentemente da quanto è stretta la finestra del browser, dovresti usare un [descrittore di densità](/it/density-descriptors). Questo è spesso adatto per loghi, icone e pulsanti.

Conosci i [punti di interruzione](/it/breakpoints)? Avrai bisogno di questi numeri per perfezionare la soluzione di seguito - e almeno il punto di interruzione della larghezza del viewport in cui l'area del contenuto principale smette di crescere.


### Il metodo facile

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Cane che guida una bicicletta" />

<!-- Abbiamo ipotizzato che tu abbia un breakpoint a 700px. 
      E che sotto quella larghezza del viewport, l'immagine occupi il 100% della larghezza, ma
      quando il viewport è più grande, l'immagine è limitata a 800 pixels CSS -->

<!-- Questo presuppone anche che tu stia usando un server di immagini compatibile con RIAPI come Imageflow.
     La produzione di varianti di immagini al volo è essenziale per la sanità mentale dello sviluppatore. -->
