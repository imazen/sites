---
taskInputHash: e947654670b1a0f3
title: Nuevas características de CSS para imágenes
description: Nuevas características de CSS para imágenes
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
---
El CSS moderno ofrece a los desarrolladores herramientas concisas y efectivas para un manejo robusto de imágenes:

- **Relación de Aspecto:**  
  La propiedad `aspect-ratio` impone proporciones fijas, estabilizando los diseños al prevenir cambios inesperados mientras las imágenes se cargan.  
  ```css  
  .container {  
    aspect-ratio: 16/9;  
  }  
  ```

- **Ajuste y Posición del Objeto:**  
  Usa `object-fit` (ej., `cover`, `contain`) y `object-position` para controlar con precisión el escalado y la alineación de las imágenes dentro de sus contenedores, eliminando recortes incómodos o distorsiones.  
  ```css  
  img {  
    object-fit: cover;  
    object-position: center;  
  }  
  ```

- **Image-Set para Adaptabilidad de Resolución:**  
  La función `image-set()` ofrece conmutación de resolución para imágenes de fondo, asegurando una claridad óptima en dispositivos de alta resolución DPI.  
  ```css  
  .hero {  
    background-image: image-set(url("hero.png") 1x, url("hero@2x.png") 2x);  
  }  
  ```

- **Mejoras Adicionales:**  
  `image-rendering` ajusta los algoritmos de escalado para una salida nítida (ideal para arte de píxeles), mientras que `filter` permite efectos visuales dinámicos directamente en CSS.

Estas características simplifican significativamente la presentación de imágenes, reduciendo la dependencia de trucos de JavaScript y soluciones complejas, facilitando así notablemente las tareas de desarrollo diario.
