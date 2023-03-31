---
title: srcset e le dimensioni delle tag <img>
description: Una Guida Efficient and Opinionated alle Immagini Responsive per il 2023
taskInputHash: 770938b4f7895424
lang: it
ignore: '/* cSpell:locale it,en*/'
sidebar_sort_priority: 1000
date_published: '2023-03-23'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
**Una Guida Efficient and Opinionated sulle Immagini per il 2023**

Controlla la sidebar per un'analisi approfondita. Questa è una rapida panoramica per l'aggiornamento dei tag `<img>` per gestire i dispositivi moderni delle varie dimensioni e densità di pixel. Devi [sapere che i pixel non sono uguali](/it/pixels-not-pixels) e che il `devicePixelRatio` tende a essere verso 3,875 piuttosto che 1:1. I telefoni moderni fingono di essere larghi da 320-428px per la leggibilità (in pixel CSS), ma hanno molti pixel del dispositivo per ogni pixel CSS.

> Se la tua immagine non cambia mai dimensione, indipendentemente da quanto è stretta la finestra del browser, dovresti usare un [descrittore di densità](/it/density-descriptors). Questo è spesso adatto per loghi, icone e pulsanti.

Sai qual è il tuo [breakpoint](/it/breakpoints)? Avrai bisogno di quei numeri per affinare la soluzione qui sotto - e almeno il breakpoint della larghezza del viewport in cui l'area del contenuto principale smette di crescere. 

### Il metodo facile

```html

<img src="img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Cane che cavalca una bicicletta" />

<!-- Assumiamo che tu abbia un breakpoint a 700px. 
      E che sotto quella larghezza del viewport, questa immagine prende il 100% di larghezza, ma
      quando il viewport è più grande, l'immagine è limitata a 800 pixel CSS -->

<!-- Questo suppone che stai usando un server di immagini compatibile con RIAPI come Imageflow. 
     La produzione di varianti di immagini al volo è essenziale per la sanità del developer. -->
```
