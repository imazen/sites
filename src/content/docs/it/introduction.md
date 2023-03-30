---
title: srcset e le dimensioni dell'elemento <img>
description: Una Guida Efficientemente di Opinione sulle Immagini Responsive per il 2023
taskInputHash: 68cdeab4f43079cc
lang: it
sidebar_sort_priority: 1000
---
**Una guida efficiente e di opinione sulle immagini per il 2023**

Controlla la barra laterale per una spiegazione dettagliata. Questa è una rapida guida per aggiornare quei tag `<img>` per gestire i dispositivi moderni con tutte le loro diverse dimensioni e densità di pixel. Dovresti [sapere che i pixel != pixel](/it/pixel-non-sono-pixel) e `devicePixelRatio` è più probabile che sia intorno a 3,875 che 1:1. I telefoni moderni si fingono larghi da 320-428 px per la leggibilità (in pixel CSS), ma hanno molti pixel del dispositivo per pixel CSS.

> Se la tua immagine non cambia mai di dimensione, indipendentemente da quanto stringi la finestra del browser, dovresti utilizzare un [density descriptor](/it/density-descriptors). Questo è spesso adatto per loghi, icone e pulsanti.

Sai quali sono i tuoi [punti di interruzione](/it/breakpoints)? Avrai bisogno di questi numeri per perfezionare la soluzione di seguito - e almeno il punto di interruzione della larghezza della viewport in cui l'area del contenuto principale smette di crescere.

### Il metodo più semplice

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Cane che cavalca una bicicletta" />

<!-- Abbiamo supposto che tu abbia un punto di interruzione a 700 px. 
      E che sotto quella larghezza della viewport, questa immagine occupi il 100% della larghezza, ma
      quando la viewport è più grande, l'immagine è limitata a 800 pixel CSS -->

<!-- Si presume che tu stia utilizzando un server di immagini compatibile con RIAPI come Imageflow. 
     La produzione di varianti di immagini al volo è essenziale per la sanità dello sviluppatore. -->
