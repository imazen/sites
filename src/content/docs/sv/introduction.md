---
title: '`srcset` & `<img>` storlekar'
description: En effektiv och bestämd guide till responsiva bilder för 2023
taskInputHash: 9073468e325bcbed
lang: sv
sidebar_sort_priority: 1000
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
**En effektiv och fast guide för bilder år 2023**

Kontrollera sidofältet för djupdykning. Detta är snabbreferensen för att uppgradera `<img>` taggar för att hantera moderna enheter i alla deras olika storlekar och pixeldensiteter. Du bör [veta att pixels != pixels](/en/pixels-not-pixels) och `devicePixelRatio` är mer troligt att vara runt 3.875 än 1:1. Moderna telefoner låtsas vara 320-428px breda för läsbarhet (i CSS-pixlar), men har många enhetspixlar per CSS-pixel.

> Om din bild aldrig ändrar storlek, oavsett hur smal du gör webbläsarfönstret, bör du använda en [densitetsbeskrivning istället](/en/density-descriptors). Detta är ofta lämpligt för logotyper, ikoner och knappar.

Vet du vad dina [pauspunkter](/en/breakpoints) är? Du behöver de siffrorna för att finjustera lösningen nedan - och åtminstone visningsområdets breddpunkt där huvudinnehållsområdet slutar växa.

### Det enkla sättet

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund som cyklar" />

<!-- Vi har antagit att du har ett pausläge vid 700px. 
      Och att under den visningsbredden tar denna bild 100% av bredden, men
      när visningsområdet är större är bilden begränsad till 800 CSS-pixlar -->

<!-- Detta förutsätter att du använder en RIAPI-kompatibel bildserver som Imageflow. 
     Att generera bildvarianter på plats är avgörande för utvecklarens själsfrid. -->
```
