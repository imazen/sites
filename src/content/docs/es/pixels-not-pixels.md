---
title: px ≠ píxeles
description: Píxeles de dispositivo ≠ píxeles del navegador ≠ píxeles de imagen
taskInputHash: d01e3b9515e2e27e
lang: es
sidebar_sort_priority: 900
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
### Píxeles de dispositivo ≠ píxeles del navegador ≠ píxeles de imagen

Gracias a Apple, los píxeles de CSS y HTML (`px`) **casi siempre se asignan a múltiples píxeles de dispositivo/impresora**. El devicePixelRatio de mi teléfono es 3,875; [¿cuál es el tuyo?](https://www.mydevice.io/)

Mi dispositivo de escritorio devicePixelRatio cambia con el zoom del navegador, pero es predeterminadamente 1,5 (después de todo, mi `Sistema > Pantalla > Escala` es 150%).

Los archivos de imagen (excluyendo SVG) se decodifican a una cuadrícula de píxeles. **Es molestoamente difícil obtener que los píxeles de la imagen se muestren perfectamente a una relación 1:1 con los píxeles de dispositivo -pero con `srcset` puedes llegar lo *suficientemente* cerca**, y un poco de Javascript puede ajustar el tamaño del elemento html después de la carga si realmente tienes razones justificadas para necesitar ese mapeo perfecto, aunque dichas artes prohibidas no serán reveladas aquí.

> Otras unidades absolutas [unidades (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/es/docs/Web/CSS/length) se definen en términos del número de píxeles CSS y pretenden que todo sea de 96 ppp. Los desarrolladores evitan las unidades absolutas porque generalmente es mejor utilizar unidades derivadas del tamaño de fuente o de las dimensiones del viewport/contenedor. Las unidades incompatibles pueden romper una disposición si el usuario ajusta el multiplicador de `Accesibilidad > Tamaño de texto`, acerca el navegador, o rota su dispositivo. Cabe decir que debes hacer todas estas cosas antes de lanzar tu sitio.
