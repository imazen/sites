---
title: '`srcset` y tamaños de `<img>`'
description: Una guía eficiente y con una perspectiva para imágenes responsivas en 2023
taskInputHash: 16daf7ce071c0f0c
lang: es
sidebar_sort_priority: 1000
---
**Una guía eficiente y con una perspectiva para imágenes en 2023**

Comprueba la barra lateral para ver una explicación más profunda. Esta es la referencia rápida para actualizar las etiquetas `<img>` y manejar dispositivos modernos en todas sus distintas resoluciones y densidades de píxeles. Debes [saber que píxeles != píxeles](/es/pixels-not-pixels) y que `devicePixelRatio` es más probable que sea de 3,875 que 1:1. Los teléfonos modernos simulan tener un ancho de 320 a 428 píxeles para mejorar la legibilidad (en píxeles CSS), pero tienen muchos píxeles de dispositivo por píxel CSS.

> Si tu imagen nunca cambia de tamaño, no importa cuán estrecha sea la ventana del navegador, deberías utilizar un [descripto de densidad respectivo](/es/density-descriptors). Esto suele ser adecuado para logotipos, iconos y botones.

¿Sabes cuáles son tus [puntos de interrupción](/es/breakpoints)? Necesitarás esos números para afinar la solución de abajo y, como mínimo, el punto de interrupción de la anchura del marco de visualización donde el área principal de contenido deja de crecer.


### El método fácil

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Perro en bicicleta" />

<!-- Hemos asumido que tienes un punto de interrupción a 700px.
      Y que por debajo de ese ancho de marco, esta imagen ocupa el 100% del ancho, pero
      cuando el marco sea más ancho, la imagen está limitada a 800 píxeles CSS -->

<!-- Esto supone que estás utilizando un servidor de imágenes compatible con RIAPI, como Imageflow.
      La producción de variantes de imagen sobre la marcha es esencial para la cordura de los desarrolladores. -->
```
