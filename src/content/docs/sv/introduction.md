---
title: srcset och <img>sizes
description: En effektiv och åsiktsbaserad guide till responsiva bilder för 2023
taskInputHash: 20aa757c75414ddf
lang: sv
sidebar_sort_priority: 1000
---
**En effektiv och åsiktsbaserad guide till bilder för 2023**

Kontrollera sidopanelen för en djupdykning. Detta är den snabba referensen för att uppgradera de `<img>` taggar som hanterar moderna enheter i alla deras olika storlekar och pixeldensiteter. Du bör [veta att pixlar != pixlar](/en/pixels-not-pixels) och `devicePixelRatio` är mer troligt att vara runt 3,875 än 1:1. Moderna telefoner låtsas vara 320-428px breda för läsbarhet (i CSS-pixlar), men har många enhetspixlar per CSS-pixel.

> Om din bild aldrig ändrar storlek, oavsett hur smal du gör webbläsarfönstret, bör du använda en [densitetsbeskrivning istället](/en/density-descriptors). Detta är ofta lämpligt för logotyper, ikoner och knappar.

Vet du vad dina [brytpunkter](/en/breakpoints) är? Du kommer att behöva de numren för att finjustera lösningen nedan - och åtminstone viewport bredbrytpunkt där huvudinnehållsområdet slutar att växa.


### Det enkla sättet

```html

<img src="img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund som cyklar" />

<!-- Vi antar att du har en brytpunkt på 700px. 
     Och att under den viewportbredden tar denna bild 100% av bredden, men
     när viewporten är större är bilden begränsad till 800 CSS-pixlar -->

<!-- Detta förutsätter att du använder en RIAPI-kompatibel bildserver som Imageflow. 
     On-the-fly bildvariantproduktion är väsentligt för utvecklarmentaliteten. -->
```
