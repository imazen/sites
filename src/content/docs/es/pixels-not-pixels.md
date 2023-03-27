---
title: px ≠ píxeles
description: Píxeles de dispositivo ≠ píxeles de navegador ≠ píxeles de imagen
taskInputHash: 14c451a76970a245
lang: es
sidebar_sort_priority: 900
---
### Los píxeles de dispositivo ≠ píxeles de navegador ≠ píxeles de imagen

Gracias a Apple, los píxeles CSS y HTML (`px`) **casi siempre se asignan a múltiples píxeles de dispositivo/impresora**. El devicePixelRatio en mi teléfono es 3,875; [¿cuál es el tuyo?](https://www.mydevice.io/)

Mi devicePixelRatio de escritorio cambia con el zoom del navegador, pero por defecto es 1.5 (después de todo, mi `Sistema > Pantalla > Escala` es del 150%).

Los archivos de imagen (excluyendo SVG) se decodifican a una cuadrícula de píxeles. **Es insoportablemente difícil conseguir que los píxeles de la imagen se muestren perfectamente en una relación de 1:1 con los píxeles del dispositivo - pero con `srcset`, puedes conseguir *lo suficientemente cerca***, y un poco de Javascript puede ajustar el tamaño del elemento HTML después de la carga si tienes razones realmente justificadas para necesitar ese mapeo perfecto, aunque tales artes prohibidas no se revelarán aquí.

> Otras unidades absolutas [in, pc, pt, mm, cm, Q](https://developer.mozilla.org/es/docs/Web/CSS/length) se definen en términos de número de píxeles CSS y pretender que todo está a 96 ppp. Los desarrolladores evitan las unidades absolutas porque generalmente es mejor usar unidades que se derivan del tamaño de fuente o de las dimensiones del viewport/contenedor. Las unidades no coincidentes pueden romper un diseño si el usuario ajusta su multiplicador de `Accesibilidad > Tamaño de texto`, hace zoom en el navegador o gira su dispositivo. No hace falta decir que debes hacer todas estas cosas antes de lanzar tu sitio.
