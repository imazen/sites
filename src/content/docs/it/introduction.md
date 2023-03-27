---
title: srcset & <img> sizes
description: Una Guida Efficientea e Decisa alle Immagini Responsive per il 2023
taskInputHash: 9fad2f8d356df766
lang: it
sidebar_sort_priority: 1000
---
**Una guida efficiente e decisa alle immagini per il 2023**

Controlla la sidebar per una sprofondamento maggiore. Questa è la rapida guida all'aggiornamento dei tag `<img>` per gestire i dispositivi moderni in tutte le loro varie dimensioni e densità di pixel. Dovresti sapere che i pixel non sono uguali e che `devicePixelRatio` è più probabile che sia intorno a 3,875 che 1:1. I telefoni moderni fingono di avere una larghezza compresa tra 320 e 428px per la leggibilità.

> Se la tua immagine non cambia mai dimensione, indipendentemente da quanto riduci la finestra del browser, dovresti invece usare un [descrittore di densità](/it/density-descriptors). Questo è adatto spesso per loghi, icone e pulsanti.

Sai quali sono i tuoi [punti di interruzione](/it/breakpoints)? Avrai bisogno di questi numeri per affinare la soluzione qui sotto, e almeno del punto di interruzione della larghezza di visualizzazione in cui l'area del contenuto principale smette di crescere.

### Il metodo facile

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Cane che guida una bicicletta" />

<!-- Abbiamo supposto che tu abbia un punto di interruzione a 700px. 
      E che sotto quella larghezza di visualizzazione, questa immagine occupi il 100% della larghezza, ma
      quando la larghezza di visualizzazione è più grande, l'immagine è limitata a 800 pixel CSS -->

<!-- Questo presupposto vale anche se usi un server di immagini compatibile con RIAPI come Imageflow. 
     La produzione on-the-fly delle varianti delle immagini è essenziale per la sanità dello sviluppatore. -->
```
