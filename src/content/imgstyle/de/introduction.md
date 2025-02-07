---
taskInputHash: 791983b972d18c2a
title: Neue CSS-Funktionen für Bilder
description: Neue CSS-Funktionen für Bilder
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---
Modernes CSS bietet Entwicklern präzise, effektive Werkzeuge für eine robuste Bildverarbeitung:

- **Seitenverhältnis:**  
  Die Eigenschaft `aspect-ratio` erzwingt feste Proportionen, stabilisiert Layouts und verhindert unerwartete Verschiebungen, während Bilder geladen werden.  
  ```css  
  .container {  
    aspect-ratio: 16/9;  
  }  
  ```

- **Object Fit & Object Position:**  
  Verwenden Sie `object-fit` (z. B. `cover`, `contain`) und `object-position`, um die Bildskalierung und -ausrichtung innerhalb ihrer Container präzise zu steuern und so ungeschicktes Zuschneiden oder Verzerrungen zu vermeiden.  
  ```css  
  img {  
    object-fit: cover;  
    object-position: center;  
  }  
  ```

- **Image-Set für Auflösungsanpassung:**  
  Die Funktion `image-set()` bietet einen Auflösungswechsel für Hintergrundbilder, um auf hochauflösenden Geräten optimale Klarheit zu gewährleisten.  
  ```css  
  .hero {  
    background-image: image-set(url("hero.png") 1x, url("hero@2x.png") 2x);  
  }  
  ```

- **Zusätzliche Verbesserungen:**  
  `image-rendering` verfeinert Skalierungsalgorithmen für scharfe Ausgaben (ideal für Pixelkunst), während `filter` dynamische visuelle Effekte direkt in CSS ermöglicht.

Diese Funktionen optimieren die Bildpräsentation erheblich und reduzieren die Abhängigkeit von JavaScript-Tricks und komplexen Workarounds, was die alltäglichen Entwicklungsaufgaben deutlich erleichtert.
