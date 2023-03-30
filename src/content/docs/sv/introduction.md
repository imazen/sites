---
title: '`srcset` och `<img>` storlekar'
description: En effektiv och strikt guide till responsiva bilder för 2023
taskInputHash: 20aa757c75414ddf
lang: sv
sidebar_sort_priority: 1000
---
**En effektiv och strikt guide till bilder för 2023**

Kolla sidofältet för djupdykning. Det här är den snabba referensen för att uppgradera `<img>` taggar för att hantera moderna enheter i alla sina olika storlekar och pixeltätheter. Du bör [veta att pixels != pixels](/sv/pixels-not-pixels) och `devicePixelRatio` är mer troligt att vara runt 3,875 än 1:1. Moderna telefoner låtsas vara 320-428px breda för läsbarhet (i CSS-pixels), men har många enhetspixlar per CSS-pixel.

> Om din bild aldrig ändrar storlek, oavsett hur smalt fönstret blir, bör du istället använda [en density descriptor](/sv/density-descriptors). Detta fungerar ofta bra för logotyper, ikoner och knappar.

Vet du vad dina [breakpoints](/sv/breakpoints) är? Du kommer att behöva de siffrorna för att finjustera lösningen nedan, och åtminstone breakpointrativet där huvudinnehållsområdet slutar växa.


### Det enkla sättet

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund som åker cykel" />

<!-- Vi har antagit att du har en breakpoint vid 700px. 
      Och att under den visningsbredden tar bilden 100% av bredden, men
      när visningsfönstret är större begränsas bilden till 800 CSS-pixels -->

<!-- Detta förutsätter att du använder en RIAPI-kompatibel bildserver som Imageflow. 
     Dynamisk bildvariantproduktion är avgörande för utvecklar-sanity. -->
```
