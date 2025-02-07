---
taskInputHash: 051aeebd1dd87aca
title: srcset & <img> storlekar
description: En effektiv och uppfattande guide till responsiva bilder för 2023
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---

**En effektiv och uppfattande guide till bilder för 2023**

Kolla sidofältet för en djupdykning. Detta är den snabba referensen för att uppgradera de där `<img>`-taggarna för att hantera moderna enheter i alla deras olika storlekar och pixeltätheter. Du bör [veta att pixlar != pixlar](/sv/pixels-not-pixels) och `devicePixelRatio` är mer sannolikt att vara runt 3.875 än 1:1. Moderna telefoner låtsas vara 320-428px breda för läsbarhet (i CSS-pixlar), men har många enhetspixlar per CSS-pixel.

> Om din bild aldrig ändrar storlek, oavsett hur smalt du gör webbläsarfönstret, bör du använda en [densitetsdeskriptor istället](/sv/density-descriptors). Detta är ofta lämpligt för logotyper, ikoner och knappar.

Vet du vad dina [brytpunkter](/sv/breakpoints) är? Du behöver dessa siffror för att finjustera lösningen nedan - och minst breddbrytpunkten för vyfönstret där det huvudsakliga innehållsområdet slutar växa.

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
      Och att under den bredden av vyfönstret, tar den här bilden 100% av bredden, men
      när vyfönstret är större, är bilden begränsad till 800 CSS-pixlar -->

<!-- Detta förutsätter att du använder en RIAPI-kompatibel bildserver som Imageflow.
     Produktion av bildvarianter på plats är avgörande för utvecklarens sinneslugn. -->
```
