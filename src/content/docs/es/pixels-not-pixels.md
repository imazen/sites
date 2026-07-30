---
taskInputHash: da51e1da5780dd0d
title: px ≠ píxeles
description: Píxeles del dispositivo ≠ píxeles del navegador ≠ píxeles de imagen
sidebar_sort_priority: 900
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: es
---
### Los píxeles del dispositivo ≠ px del navegador ≠ px de imagen

Gracias a Apple, los píxeles de CSS y HTML (`px`) **casi siempre se asignan a múltiples píxeles del dispositivo/impresora**. El devicePixelRatio en mi teléfono es 3.875; [¿cuál es el tuyo?](https://www.mydevice.io/) 

El devicePixelRatio de mi escritorio cambia con el zoom del navegador, pero por defecto es 1.5 (mi `Sistema > Pantalla > Escala` es 150%, después de todo).

Los archivos de imagen (excepto SVG) se decodifican en una cuadrícula de píxeles. **Es molesto lo difícil que es conseguir que los píxeles de imagen se muestren perfectamente a una proporción de 1:1 con los píxeles del dispositivo - pero con `srcset` puedes acercarte bastante**, y un poco de Javascript puede ajustar el tamaño del elemento html después de cargar si tienes razones realmente justificadas para necesitar ese mapeo perfecto, aunque tales artes prohibidas no serán reveladas aquí.

> Otras [unidades absolutas (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/en-US/docs/Web/CSS/length) se definen en términos de número de píxeles CSS y pretenden que todo está a 96dpi. Los desarrolladores evitan las unidades absolutas porque generalmente es mejor utilizar unidades derivadas del tamaño de fuente o de las dimensiones del viewport/contenedor. Las unidades desajustadas pueden romper un diseño si el usuario ajusta su multiplicador de `Accesibilidad > Tamaño de texto`, hace zoom en el navegador o rota su dispositivo. No hace falta decir, que deberías hacer todas estas cosas antes de lanzar tu sitio.
