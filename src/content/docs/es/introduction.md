---
title: '`srcset` y tamaños de `<img>`'
description: Una guía eficiente y con opiniones sobre imágenes receptivas para el 2023
taskInputHash: edb0432e275e0289
lang: es
sidebar_sort_priority: 1000
---

**Una guía eficiente y con opiniones sobre imágenes para el 2023**

Revisa la barra lateral para una explicación detallada. Esta es una referencia rápida para mejorar esas etiquetas `<img>` y permitir el manejo de dispositivos modernos con sus variados tamaños y densidades de píxeles. Deberías saber que los píxeles no siempre son iguales entre sí [«pixels != pixels»](/en/pixels-not-pixels) y que un `devicePixelRatio` es más probable que sea 3.875 en lugar de 1:1. Los teléfonos modernos se comportan como si su ancho fuera de 320 a 428 px por legibilidad.

> Si tu imagen nunca cambia de tamaño, sin importar cuán estrecha sea la ventana del navegador, deberías usar una [descripción de densidad en su lugar](/en/density-descriptors). Esto suele ser adecuado para logotipos, iconos y botones.

¿Sabes cuáles son tus [puntos de interrupción](/en/breakpoints)? Necesitarás esos números para afinar la solución que se encuentra a continuación —y, como mínimo, el punto de interrupción del ancho de la ventana gráfica donde la zona de contenido principal deja de crecer.


### El método sencillo

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Perro montando bicicleta" />

<!-- Hemos asumido que tienes un punto de interrupción en 700px. 
      Y que antes de ese ancho de ventana, la imagen ocupa el 100% del ancho, pero
      cuando la ventana es más grande, la imagen se limita a 800 píxeles CSS -->

<!-- También asumimos que estás utilizando un servidor de imágenes compatible con RIAPI, como Imageflow. La producción de variantes de imágenes sobre la marcha es esencial para la cordura del desarrollador. -->
```
