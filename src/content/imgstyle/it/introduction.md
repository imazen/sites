---
taskInputHash: d3a96c16ab918c34
title: Nuove funzionalità CSS per le immagini
description: Nuove funzionalità CSS per le immagini
sidebar_sort_priority: 1000
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---
Il CSS moderno offre agli sviluppatori strumenti concisi ed efficaci per una gestione robusta delle immagini:

- **Aspect Ratio:**  
  La proprietà `aspect-ratio` impone proporzioni fisse, stabilizzando i layout e prevenendo spostamenti imprevisti durante il caricamento delle immagini.  
  ```css  
  .container {  
    aspect-ratio: 16/9;  
  }  
  ```

- **Object Fit & Object Position:**  
  Utilizza `object-fit` (ad es., `cover`, `contain`) e `object-position` per controllare con precisione il ridimensionamento e l'allineamento delle immagini all'interno dei loro contenitori, eliminando ritagli goffi o distorsioni.  
  ```css  
  img {  
    object-fit: cover;  
    object-position: center;  
  }  
  ```

- **Image-Set per Adattabilità alla Risoluzione:**  
  La funzione `image-set()` offre la commutazione della risoluzione per le immagini di sfondo, garantendo una chiarezza ottimale sui dispositivi ad alta densità di pixel.  
  ```css  
  .hero {  
    background-image: image-set(url("hero.png") 1x, url("hero@2x.png") 2x);  
  }  
  ```

- **Ulteriori Miglioramenti:**  
  `image-rendering` affina gli algoritmi di ridimensionamento per un output nitido (ideale per la pixel art), mentre `filter` consente di applicare effetti visivi dinamici direttamente in CSS.

Queste funzionalità semplificano significativamente la presentazione delle immagini, riducendo la dipendenza da hack di JavaScript e complessi workaround, facilitando così notevolmente le attività di sviluppo quotidiane.
