---
title: srcset y tamaños de <img>
description: Una guía eficiente y con criterio sobre imágenes responsivas para 2023
taskInputHash: 54aca67ab19c478f
lang: es
sidebar_sort_priority: 1000
---

**Una guía eficiente y con criterio sobre imágenes para 2023**

Revisa la barra lateral para una inmersión profunda. Esta es la referencia rápida para actualizar esas etiquetas `<img>` y manejar dispositivos modernos en todas sus diferentes tamaños y densidades de píxeles. Debes [saber que los píxeles no son iguales](/es/pixels-not-pixels) y que `devicePixelRatio` es más probable que sea alrededor de 3.875 que 1:1. Los teléfonos modernos fingen ser de 320 a 428 px de ancho para una mejor lectura.

> Si tu imagen nunca cambia de tamaño, sin importar lo estrecha que hagas la ventana del navegador, debes usar un [descriptor de densidad en su lugar](/es/density-descriptors). Esto es frecuentemente adecuado para logotipos, iconos, y botones.

¿Conoces tus [puntos de quiebre](/es/breakpoints)? Necesitarás esos números para ajustar la solución de abajo, y como mínimo, el punto de quiebre del ancho del área de contenido principal donde deja de crecer.


### El método fácil

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Perro montando bicicleta" />

<!-- Hemos supuesto que tienes un punto de quiebre en 700px. 
      Y que bajo ese ancho de viewport, esta imagen ocupa el 100% del ancho, mientras que
      cuando el viewport es más grande, la imagen se limita a 800 píxeles CSS -->

<!-- Esto también supone que estás usando un servidor de imágenes compatible con RIAPI como Imageflow. 
     La producción de variantes de imágenes bajo demanda es esencial para la cordura del desarrollador. -->
```
