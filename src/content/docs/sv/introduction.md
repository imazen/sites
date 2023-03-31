---
title: srcset och <img> sizes
description: En effektiv och tydlig guide till responsiva bilder för 2023
taskInputHash: 87881becd1c9192b
lang: sv
ignore: '/* cSpell:locale sv,en*/'
sidebar_sort_priority: 1000
date_published: '2023-03-23'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
**En effektiv och bestämd guide till bilder för 2023**

Kontrollera sidofältet för en mer ingående beskrivning. Detta är snabbreferensen för att uppgradera `<img>`-taggarna så att de kan hantera moderna enheter i alla sina olika storlekar och pixeldensiteter. Du bör veta att pixels != pixels och `devicePixelRatio` är mer troligt att vara runt 3.875 än 1:1. Moderna telefoner låtsas vara 320-428px breda för läsbarhet (i CSS-pixels), men har många enhetspixlar per CSS-pixel.

> Om din bild aldrig ändrar storlek, oavsett hur smalt du gör webbläsarfönstret bör du istället använda en densitetsbeskrivning. Detta är ofta lämpligt för logotyper, ikoner och knappar.

Vet du vad dina breakpoints är? Du kommer att behöva dessa nummer för att finslipa lösningen nedan - och som minimum viewport width breakpoint där huvudinnehållsytan slutar växa in i bredd.

### Den enkla metoden

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund som cyklar" />

<!-- Vi antar att du har en breakpoint vid 700px. 
      Och att under den viewport bredden tar bilden 100% av bredden, men
      när viewporten är större är bilden begränsad till 800 CSS-pixels -->

<!-- Detta förutsätter att du använder en RIAPI-kompatibel bildserver som Imageflow. 
     Bildvariantproduktion på begäran är avgörande för utvecklarhälsan. -->
```
