---
taskInputHash: 6dc4f829b51319de
title: srcset e attributo sizes di <img>
description: Una guida efficiente e opinata alle immagini responsive per il 2023
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---

**Una guida efficiente e opinata alle immagini per il 2023**

Controlla la barra laterale per un approfondimento. Questa è la guida rapida per aggiornare quei tag `<img>` per gestire i dispositivi moderni in tutte le loro varie dimensioni e densità di pixel. Dovresti [sapere che i pixel != pixel](/it/pixels-not-pixels) e `devicePixelRatio` è più probabile che sia intorno a 3.875 piuttosto che 1:1. I telefoni moderni fingono di essere larghi 320-428px per leggibilità (in pixel CSS), ma hanno molti pixel del dispositivo per ogni pixel CSS.

> Se la tua immagine non cambia mai dimensione, indipendentemente da quanto riduci la finestra del browser, dovresti usare un [descrittore di densità invece](/it/density-descriptors). Questo è spesso adatto per loghi, icone e pulsanti.

Conosci quali sono i tuoi [breakpoints](/it/breakpoints)? Avrai bisogno di quei numeri per perfezionare la soluzione qui sotto - e come minimo il punto di interruzione della larghezza del viewport dove l'area del contenuto principale smette di crescere.


### Il metodo facile

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Cane che va in bicicletta" />

<!-- Supponiamo che tu abbia un breakpoint a 700px. 
      E che sotto quella larghezza di viewport, questa immagine prenda il 100% della larghezza, ma
      quando il viewport è più grande, l'immagine è limitata a 800 pixel CSS -->

<!-- Si suppone che stai usando un server di immagini conforme a RIAPI come Imageflow. 
     La produzione di varianti di immagini al volo è essenziale per la sanità mentale degli sviluppatori. -->
```
