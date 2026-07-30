---
taskInputHash: 1b5900bdd7d7a9d6
title: srcset och <img> storlekar
description: En effektiv och åsiktsdriven guide till responsiva bilder för 2023
sidebar_sort_priority: 1000
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---

**En effektiv och åsiktsdriven guide till bilder för 2023**

Kolla in sidofältet för att få en djupare förståelse. Detta är en snabb referens för att uppgradera `<img>`-taggar för att hantera moderna enheter i alla deras olika storlekar och pixeltätheter. Du bör [veta att pixlar != pixlar](/sv/pixels-not-pixels) och `devicePixelRatio` är mer sannolikt runt 3.875 än 1:1. Moderna telefoner låtsas vara 320-428px breda för läsbarhet (i CSS-pixlar), men har många enhetspixlar per CSS-pixel.

> Om din bild aldrig ändrar storlek, oavsett hur smal du gör webbläsarfönstret, bör du istället använda en [densitetsbeskrivare](/sv/density-descriptors). Detta är ofta lämpligt för logotyper, ikoner och knappar.

Vet du vad dina [ramverk](/sv/breakpoints) är? Du kommer att behöva dessa siffror för att finjustera lösningen nedan - och åtminstone den brytpunkten för vyportens bredd där huvudområdet slutar att växa.

### Den enkla metoden

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund som cyklar" />

<!-- Vi har antagit att du har en brytpunkt vid 700px. 
      Och att under den vyportens bredd tar den här bilden 100% av bredden, men
      när vyporten är större, begränsas bilden till 800 CSS-pixlar -->

<!-- Detta förutsätter att du använder en RIAPI-kompatibel bildserver såsom Imageflow. 
     Produktion av bildvarianter i realtid är avgörande för utvecklarens mentala hälsa. -->
```
