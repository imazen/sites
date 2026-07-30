---
taskInputHash: c44f8e3e36f9041a
title: srcset e attributi `sizes` di `<img>`
description: Una Guida Efficiente e Opinata alle Immagini Responsive per il 2023
sidebar_sort_priority: 1000
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---

**Una Guida Efficiente e Opinata alle Immagini per il 2023**

Controlla la barra laterale per l'approfondimento. Questa è la guida rapida per aggiornare quei tag `<img>` per gestire dispositivi moderni in tutte le loro varie dimensioni e densità di pixel. Dovresti [sapere che pixel != pixel](/it/pixels-not-pixels) e `devicePixelRatio` è più probabile che sia intorno a 3.875 piuttosto che 1:1. I telefoni moderni fingono di essere larghi 320-428px per la leggibilità (in pixel CSS), ma hanno molti pixel del dispositivo per ogni pixel CSS.

> Se la tua immagine non cambia mai dimensione, non importa quanto restringi la finestra del browser, dovresti usare [un descrittore di densità](/it/density-descriptors) invece. Questo è spesso adatto per loghi, icone e pulsanti.

Conosci quali sono i tuoi [punti di interruzione](/it/breakpoints)? Avrai bisogno di quei numeri per affinare la soluzione qui sotto - e almeno il punto di interruzione della larghezza del viewport dove l'area del contenuto principale smette di crescere.


### Il metodo facile

```html

<img src="img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Cane che va in bicicletta" />

<!-- Abbiamo supposto che tu abbia un punto di interruzione a 700px.
      E che sotto quella larghezza del viewport, questa immagine prenda il 100% della larghezza, ma
      quando il viewport è più grande, l'immagine è limitata a 800 pixel CSS -->

<!-- Si suppone che tu stia usando un server di immagini compatibile con RIAPI come Imageflow.
     La produzione di varianti di immagine al volo è essenziale per la sanità mentale degli sviluppatori. -->
```
