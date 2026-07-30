---
taskInputHash: 85b382d865b63aef
title: Nuevas características de CSS para imágenes
description: Nuevas características de CSS para imágenes
sidebar_sort_priority: 1000
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: es
---
El CSS moderno otorga a los desarrolladores herramientas concisas y efectivas para un manejo robusto de imágenes:

- **Proporción de Aspecto:**  
  La propiedad `aspect-ratio` impone proporciones fijas, estabilizando los diseños al prevenir cambios inesperados mientras las imágenes se cargan.  
  ```css  
  .container {  
    aspect-ratio: 16/9;  
  }  
  ```

- **Ajuste y Posición del Objeto:**  
  Usa `object-fit` (por ejemplo, `cover`, `contain`) y `object-position` para controlar con precisión la escala y alineación de las imágenes dentro de sus contenedores, eliminando recortes o distorsiones incómodas.  
  ```css  
  img {  
    object-fit: cover;  
    object-position: center;  
  }  
  ```

- **Conjunto de Imágenes para Adaptabilidad de Resolución:**  
  La función `image-set()` ofrece cambio de resolución para imágenes de fondo, asegurando claridad óptima en dispositivos de alta DPI.  
  ```css  
  .hero {  
    background-image: image-set(url("hero.png") 1x, url("hero@2x.png") 2x);  
  }  
  ```

- **Mejoras Adicionales:**  
  `image-rendering` ajusta los algoritmos de escala para una salida nítida (ideal para arte de píxeles), mientras que `filter` habilita efectos visuales dinámicos directamente en CSS.

Estas características simplifican significativamente la presentación de imágenes, reduciendo la dependencia de trucos de JavaScript y soluciones complejas, aliviando marcadamente las tareas de desarrollo cotidianas.
