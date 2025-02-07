---
taskInputHash: 3557776b7d07d02c
title: Nuove funzionalità CSS per le immagini
description: Nuove funzionalità CSS per le immagini
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---
Il CSS moderno offre agli sviluppatori strumenti concisi ed efficaci per una gestione robusta delle immagini:

- **Aspect Ratio:**  
  La proprietà `aspect-ratio` impone proporzioni fisse, stabilizzando i layout prevenendo spostamenti inaspettati durante il caricamento delle immagini.  
  ```css  
  .container {  
    aspect-ratio: 16/9;  
  }  
  ```

- **Object Fit & Object Position:**  
  Usa `object-fit` (es. `cover`, `contain`) e `object-position` per controllare precisamente la scalatura e l'allineamento delle immagini all'interno dei loro contenitori, eliminando tagli o distorsioni scomode.  
  ```css  
  img {  
    object-fit: cover;  
    object-position: center;  
  }  
  ```

- **Image-Set per la Adattabilità alla Risoluzione:**  
  La funzione `image-set()` offre lo switch di risoluzione per le immagini di sfondo, garantendo chiarezza ottimale su dispositivi con DPI elevato.  
  ```css  
  .hero {  
    background-image: image-set(url("hero.png") 1x, url("hero@2x.png") 2x);  
  }  
  ```

- **Miglioramenti Aggiuntivi:**  
  `image-rendering` ottimizza gli algoritmi di scalatura per un output nitido (ideale per la pixel art), mentre `filter` abilita effetti visivi dinamici direttamente nel CSS.

Queste funzionalità semplificano notevolmente la presentazione delle immagini, riducendo la dipendenza da hack JavaScript e soluzioni complesse, facilitando così notevolmente le attività di sviluppo quotidiane.
