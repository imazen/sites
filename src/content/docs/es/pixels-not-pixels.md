---
taskInputHash: e3c601599e1222d2
title: px ≠ píxeles
description: Los píxeles del dispositivo ≠ píxeles del navegador ≠ píxeles de la imagen
sidebar_sort_priority: 900
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
---
### Los píxeles del dispositivo ≠ píxeles del navegador ≠ píxeles de la imagen

Gracias a Apple, los píxeles de CSS y HTML (`px`) **casi siempre se mapean a múltiples píxeles del dispositivo/impresora**. El devicePixelRatio en mi teléfono es 3.875; [¿cuál es el tuyo?](https://www.mydevice.io/es/) 

El devicePixelRatio de mi escritorio cambia al hacer zoom en el navegador, pero por defecto es 1.5 (mi `Sistema > Pantalla > Escala` es 150%, después de todo).

Los archivos de imagen (excluyendo SVG) se decodifican en una cuadrícula de píxeles. **Es irritantemente difícil hacer que los píxeles de la imagen se muestren perfectamente a una proporción de 1:1 con los píxeles del dispositivo, pero con `srcset` puedes acercarte bastante**, y un poco de Javascript puede ajustar el tamaño del elemento html después de cargar si tienes razones verdaderamente justificadas para necesitar ese mapeo perfecto, aunque tales artes prohibidas no se revelarán aquí.

> Otras [unidades absolutas (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/en-US/docs/Web/CSS/length) se definen en términos de número de píxeles CSS y fingen que todo es 96dpi. Los desarrolladores evitan las unidades absolutas porque generalmente es mejor usar unidades derivadas del tamaño de fuente o de las dimensiones del viewport/contenedor. Las unidades desajustadas pueden romper un diseño si el usuario ajusta su multiplicador de `Accesibilidad > Tamaño de texto`, hace zoom en el navegador o rota su dispositivo. No hace falta decir que deberías hacer todas estas cosas antes de lanzar tu sitio.
