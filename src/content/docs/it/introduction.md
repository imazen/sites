---
title: srcset e le dimensioni degli <img>
description: >-
  Una guida efficiente e orientata all'opinione sulle immagini responsive per il
  2023.
taskInputHash: 68cdeab4f43079cc
lang: it
sidebar_sort_priority: 1000
---
**Una guida efficiente e orientata all'opinione sulle immagini per il 2023**

Controlla la sidebar per una guida approfondita. Questa è la sintesi per aggiornare i tag `<img>` per gestire i dispositivi moderni nelle loro diverse dimensioni e densità di pixel. Dovresti sapere che i pixel != pixel e che `devicePixelRatio` è più probabile che sia intorno a 3.875 che 1:1. I telefoni moderni si fingono larghi 320-428px per la leggibilità (in pixel CSS), ma hanno molti pixel del dispositivo per pixel CSS.

> Se la tua immagine non cambia mai dimensione, indipendentemente da quanto riduci la finestra del browser, dovresti usare un [descrittore di densità](/it/descrittori-di-densità). Questo è spesso adatto per loghi, icone e pulsanti.

Conosci i tuoi [punti di interruzione](/it/punti-di-interruzione)? Avrai bisogno di quei numeri per perfezionare la soluzione qui sotto, e almeno del punto di interruzione della larghezza della viewport in cui l'area del contenuto principale smette di crescere.


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
      E che sotto quella larghezza della viewport, questa immagine prenda il 100% della larghezza, ma
      quando la viewport è più grande, l'immagine è limitata a 800 pixel CSS -->

<!-- Ciò presuppone che stai usando un server di immagini compatibile RIAPI come Imageflow. 
     La produzione di varianti di immagini al volo è essenziale per la sanità del programmatore. -->
```
