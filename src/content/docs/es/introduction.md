---
title: srcset y tamaños de etiqueta `<img>`
description: Una guía eficiente y con opinión para imágenes responsivas en 2023
taskInputHash: 16daf7ce071c0f0c
lang: es
sidebar_sort_priority: 1000
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
**Una Guía Eficiente y Con Opinion para Imágenes para 2023**

Consulta la barra lateral para un análisis detallado. Esta es una referencia rápida para actualizar esas etiquetas `<img>` para manejar dispositivos modernos en todos sus tamaños y densidades de píxeles. Debes [saber que píxeles != píxeles](/es/pixeles-no-pixeles) y que `devicePixelRatio` es más probable que sea alrededor de 3.875 en lugar de 1:1. Los teléfonos modernos pretenden tener un ancho de 320 a 428px para una mejor legibilidad (en píxeles CSS), pero tienen muchos píxeles de dispositivo por píxel CSS.

> Si tu imagen nunca cambia de tamaño, no importa cuán estrecha hagas la ventana del navegador, deberías usar un [descriptor de densidad en su lugar](/es/descriptores-de-densidad). Esto suele ser adecuado para logos, iconos y botones.

¿Sabes cuáles son tus [puntos de quiebre](/es/puntos-de-quiebre)? Necesitarás esos números para ajustar la solución que se muestra a continuación, y como mínimo el punto de quiebre del ancho de la ventana gráfica donde el área de contenido principal deja de crecer.


### El método sencillo

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Perro montando bicicleta" />

<!-- Se ha asumido que tienes un punto de quiebre en 700px. 
Y que bajo ese ancho de ventana gráfica, esta imagen ocupa el 100% del ancho, pero
cuando la ventana gráfica es mayor, la imagen está limitada a 800 píxeles CSS -->

<!-- Esto asume que estás usando un servidor de imágenes compatible con RIAPI, como Imageflow. 
La producción de variantes de imágenes sobre la marcha es esencial para la cordura del desarrollador. -->
```
