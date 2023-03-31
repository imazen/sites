---
title: srcset y tamaños de <img>
description: Una guía eficiente y con opiniones sobre imágenes responsivas para 2023
taskInputHash: c0bfd3a988eb464d
lang: es
ignore: '/* cSpell:locale es,en*/'
sidebar_sort_priority: 1000
date_published: '2023-03-23'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
**Una guía eficiente y con opiniones sobre imágenes para 2023**

Consulte la barra lateral para obtener información detallada. Esta es la referencia rápida para actualizar las etiquetas `<img>` y manejar los dispositivos modernos en todas sus diferentes tamaños y densidades de píxeles. Debe [saber que los píxeles no son iguales](/es/pixels-not-pixels) y que `devicePixelRatio` es más probable que esté alrededor de 3,875 en lugar de 1:1. Los teléfonos modernos fingen tener 320-428 píxeles de ancho para la legibilidad (en píxeles CSS), pero tienen muchos píxeles de dispositivo por píxel CSS.

> Si su imagen nunca cambia de tamaño, no importa cuán estrecha haga la ventana del navegador, debe utilizar un [descriptor de densidad](/es/density-descriptors). Esto a menudo es adecuado para logotipos, iconos y botones.

¿Sabe cuáles son sus [puntos de interrupción](/es/breakpoints)? Necesitará esos números para ajustar la solución a continuación, como mínimo, el punto de interrupción del ancho del viewport donde el área de contenido principal deja de crecer.

### El método fácil

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Perro montando en bicicleta" />

<!-- Asumimos que tiene un punto de interrupción en 700px. 
      Y que, en esa anchura de viewport, esta imagen ocupa el 100% del ancho, pero
      cuando el viewport es más grande, la imagen se limita a 800 píxeles CSS -->

<!-- Esto asume que está utilizando un servidor de imágenes compatible con RIAPI, como Imageflow. 
     La producción de variantes de imágenes al vuelo es esencial para la cordura del desarrollador. -->
```
