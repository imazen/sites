---
title: px ≠ píxeles
description: Píxeles de dispositivo ≠ píxeles de navegador ≠ píxeles de imagen
taskInputHash: f879e185cc72444b
lang: es
sidebar_sort_priority: 900
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Píxeles de dispositivo ≠ píxeles de navegador ≠ píxeles de imagen

Gracias a Apple, los píxeles CSS y HTML (`px`) **casi siempre se asignan a múltiples píxeles de dispositivo/impresora**. El dispositivoPixelRatio de mi teléfono es 3.875; [¿cuál es el tuyo?](https://www.mydevice.io/)

Mi dispositivoPixelRatio de escritorio cambia en el zoom del navegador, pero se establece en 1.5 por defecto (mi `Sistema > Pantalla > Escala` es 150%, después de todo).

Los archivos de imagen (excluyendo SVG) se decodifican en una cuadrícula de píxeles. **Es extremadamente difícil hacer que los píxeles de una imagen se muestren perfectamente en una relación de 1:1 con los píxeles del dispositivo - pero con `srcset` puedes llegar a acercarte lo suficiente**, y un poco de JavaScript puede ajustar el tamaño del elemento HTML después de cargarlo si realmente tienes razones justificadas para necesitar esa asignación perfecta, aunque dichos artefactos prohibidos no se revelarán aquí.

> Otras unidades absolutas ([in, pc, pt, mm, cm, Q](https://developer.mozilla.org/es/docs/Web/CSS/length)) se definen en términos de número de píxeles CSS y pretenden que todo sea de 96 ppp. Los desarrolladores evitan las unidades absolutas porque generalmente es mejor usar unidades que se derivan del tamaño de fuente o de las dimensiones del viewport/contenedor. Las unidades incompatibles pueden romper un diseño si el usuario ajusta su multiplicador de `Accesibilidad > Tamaño de texto`, hace zoom en el navegador o rota su dispositivo. Desde luego, deberías hacer todas estas cosas antes de lanzar tu sitio.
