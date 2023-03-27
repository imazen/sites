---
title: srcset & <img> sizes
description: En effektiv och restriktiv guide till responsiva bilder för 2023
taskInputHash: abb034d49e737477
lang: sv
sidebar_sort_priority: 1000
---
**En effektiv och restriktiv guide till bilder för 2023**

Kolla sidofält för utförlig guide. Detta är en snabbreferens för att uppgradera dina `<img>` taggar så att de kan hantera moderna enheter i alla deras olika storlekar och pixeltätheter. Du bör [veta att pixlar inte är detsamma som pixlar](/sv/pixels-not-pixels) och `devicePixelRatio` är mer troligt 3,875 än 1:1. Moderna telefoner låtsas vara mellan 320 och 428 pixlar breda för enklare läsning.

> Om din bild aldrig ändrar storlek, oavsett hur smalt du gör webbläsarfönstret, bör du istället använda en [density descriptor](/sv/density-descriptors). Detta fungerar ofta bra för logo, ikoner och knappar.

Vet du vad dina [brytpunkter](/sv/breakpoints) är? Du behöver dessa tal för att finjustera lösningen nedan - och minst brytpunkten där det huvudsakliga innehållsområdet slutar växa.

### Det enkla sättet

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w,
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund som cyklar" />

<!-- Vi har antagit att du har en brytpunkt på 700px.
      Och att under den bildens storlek tar 100% av bredden, men
      när bildens storlek är större begränsas bredden till 800 CSS-pixlar -->

<!-- Detta antar också att du använder en RIAPI-kompatibel bildserver som Imageflow. 
     Väsentligt för utvecklar-sanity är on-the-fly bildvariantproduktion. -->
