---
taskInputHash: 8ae4fcefc9ac59e9
title: srcset y <img> sizes
description: Una Guía Eficiente y Opinada sobre Imágenes Responsivas para 2023
sidebar_sort_priority: 1000
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: es
---

**Una Guía Eficiente y Opinada sobre Imágenes para 2023**

Consulta la barra lateral para un análisis profundo. Esta es la referencia rápida para actualizar esas etiquetas `<img>` y manejar dispositivos modernos en todos sus diversos tamaños y densidades de píxeles. Deberías [saber que píxeles != píxeles](/es/pixels-not-pixels) y `devicePixelRatio` es más probable que sea alrededor de 3.875 que 1:1. Los teléfonos modernos pretenden ser de 320-428px de ancho para la legibilidad (en píxeles CSS), pero tienen muchos píxeles de dispositivo por píxel CSS.

> Si tu imagen nunca cambia de tamaño, sin importar cuán estrecha hagas la ventana del navegador, deberías usar un [descriptor de densidad](/es/density-descriptors) en su lugar. Esto a menudo es adecuado para logotipos, iconos y botones.

¿Sabes cuáles son tus [puntos de interrupción](/es/breakpoints)? Necesitarás esos números para afinar la solución a continuación – y como mínimo el punto de interrupción del ancho del viewport donde el área de contenido principal deja de crecer.


### El método fácil

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Perro montando una bicicleta" />

<!-- Hemos asumido que tienes un punto de interrupción en 700px. 
      Y que bajo ese ancho del viewport, esta imagen ocupa el 100% del ancho, pero
      cuando el viewport es más grande, la imagen se limita a 800 píxeles CSS -->

<!-- Esto asume que estás usando un servidor de imágenes compatible con RIAPI, como Imageflow. 
     La producción de variantes de imágenes sobre la marcha es esencial para la cordura del desarrollador. -->
```
