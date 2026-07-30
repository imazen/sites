---
taskInputHash: 1d327e5efba00ae6
title: Nya CSS-funktioner för bilder
description: Nya CSS-funktioner för bilder
sidebar_sort_priority: 1000
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
Modern CSS ger utvecklare kraftfulla och effektiva verktyg för robust hantering av bilder:

- **Aspect Ratio:**  
  Egenskapen `aspect-ratio` upprätthåller fasta proportioner, vilket stabiliserar layouten genom att förhindra oväntade skiftningar när bilder laddas.  
  ```css  
  .container {  
    aspect-ratio: 16/9;  
  }  
  ```

- **Object Fit & Object Position:**  
  Använd `object-fit` (t.ex., `cover`, `contain`) och `object-position` för att exakt kontrollera bildskalning och inpassning inom deras container, vilket eliminerar otymplig beskärning eller förvrängning.  
  ```css  
  img {  
    object-fit: cover;  
    object-position: center;  
  }  
  ```

- **Image-Set för Anpassning till Upplösning:**  
  Funktionen `image-set()` erbjuder upplösningsväxling för bakgrundsbilder, vilket säkerställer optimal klarhet på enheter med hög DPI.  
  ```css  
  .hero {  
    background-image: image-set(url("hero.png") 1x, url("hero@2x.png") 2x);  
  }  
  ```

- **Ytterligare Förbättringar:**  
  `image-rendering` finjusterar skalningsalgoritmer för tydlig utskrift (idealiskt för pixelkonst), medan `filter` möjliggör dynamiska visuella effekter direkt i CSS.

Dessa funktioner förenklar bildpresentationen avsevärt, minskar beroendet av JavaScript-hack och komplexa lösningar, och underlättar därmed de dagliga utvecklingsuppgifterna markant.
