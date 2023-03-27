---
title: srcset och <img> sizes
description: En Effektiv och Åsikt Styrd Guide till Responsiva Bilder för 2023
taskInputHash: d3a50c2adf9662fb
lang: sv
sidebar_sort_priority: 1000
---
**Effektiv och Åsikt Styrd Guide till Bilder för 2023**

Kolla sidofältet för djupdykning. Detta är snabbreferensen för att uppgradera de `<img>` taggarna för att hantera moderna enheter i alla olika storlekar och pixeltätheter. Du borde [veta att pixlar != pixlar](/sv/pixels-inte-pixels) och `devicePixelRatio` är mer troligt runt 3.875 än 1:1. Moderna telefoner låtsas vara 320-428px breda för läslighet.

> Om din bild aldrig ändrar storlek, oavsett hur smalt du gör webbläsarfönstret, borde du istället använda en [densitetsbeskrivning](/sv/density-descriptors). Detta är ofta lämpligt för logotyper, ikoner och knappar.

Vet du vad dina [breakpoints](/sv/breakpoints) är? Du kommer att behöva dessa nummer för att finjustera lösningen nedan - och åtminstone viewport-breddbreakpointen där huvudinnehållsområdet slutar växa.


### Den enkla metoden

```html

<img src="img.jpg?w=480"
     srcset="img.jpg?format=webp&w=480 480w, 
             img.jpg?format=webp&w=800 800w, 
             img.jpg?format=webp&w=1200 1200w, 
             img.jpg?format=webp&w=1600 1600w, 
             img.jpg?format=webp&w=2000 2000w"
     sizes="(max-width: 700px) 100vw, 800px" alt="Hund som cyklar" />

<!-- Vi har antagit att du har en breakpoint på 700px. 
     Och att under den viewport-bredd, tar denna bild 100% av bredden, men
     när viewport är större, är bilden begränsad till 800 CSS pixlar -->

<!-- Detta antar också att du använder en RIAPI-kompatibel bildserver som Imageflow. 
     Att skapa bildvarianter på löpande band är nödvändigt för utvecklarnas hälsa. -->
