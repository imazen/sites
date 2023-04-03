---
title: srcset y tamaños de `<img>`
description: Una guía eficiente y detallada de imágenes responsivas para 2023
taskInputHash: a764c357741581bc
lang: es
sidebar_sort_priority: 1000
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
**Una Guía Eficiente y Detallada de Imágenes para 2023**

Revisa la barra lateral para obtener información adicional. Esta es una guía rápida para actualizar las etiquetas `<img>` para que puedan manejar los dispositivos modernos con sus diferentes tamaños y densidades de píxeles. Debes [saber que los píxeles no siempre son iguales](/es/pixels-not-pixels) y que `devicePixelRatio` es más probable que sea alrededor de 3.875 que 1:1. Los teléfonos modernos fingen tener un ancho de 320 a 428 píxeles para una mejor legibilidad (en píxeles CSS), pero tienen muchos píxeles de dispositivo por píxel CSS.

> Si tu imagen nunca cambia de tamaño, no importa lo estrecha que hagas la ventana del navegador, deberías usar un [descriptor de densidad en su lugar](/es/density-descriptors). Esto suele ser adecuado para logotipos, iconos y botones.

¿Sabes cuáles son tus [puntos de quiebre](/es/breakpoints)? Necesitarás esos números para afinar la solución que se describe a continuación, y como mínimo el punto de quiebre del ancho del portapapeles donde el área de contenido principal deja de crecer.


### El método fácil

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Perro en bicicleta" />

<!-- Hemos asumido que tienes un punto de quiebre en 700px. 
        Y que debajo de ese ancho del portapapeles, esta imagen ocupa el 100% del ancho, pero
        cuando el portapapeles es más grande, la imagen está limitada a 800 píxeles CSS -->

<!-- Esto asume que estás utilizando un servidor de imágenes compatible con RIAPI, como Imageflow. 
      La producción de variantes de imágenes sobre la marcha es esencial para la cordura del desarrollador. -->
```
