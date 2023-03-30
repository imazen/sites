---
title: px ≠ píxeles
description: >-
  Los píxeles del dispositivo no son iguales a los píxeles del navegador ni los
  píxeles de las imágenes
taskInputHash: d01e3b9515e2e27e
lang: es
sidebar_sort_priority: 900
---
### Los píxeles de los dispositivos no son iguales a los píxeles del navegador ni los píxeles de las imágenes

Gracias a Apple, los píxeles del CSS y HTML (`px`) **casi siempre se asignan a varios píxeles del dispositivo o de la impresora**. El dispositivoPixelRatio de mi teléfono es de 3.875; [¿cuál es el tuyo?](https://www.mydevice.io/)

El dispositivoPixelRatio de mi escritorio cambia al hacer zoom en el navegador, pero el valor predeterminado es 1.5 (porque mi configuración de `Sistema > Pantalla > Escala` es 150%).

Los archivos de imagen (excluyendo SVG) se decodifican en una cuadrícula de píxeles. **Es molesto tener que lograr que los píxeles de la imagen se muestren perfectamente en una proporción de 1:1 con los píxeles del dispositivo, pero con `srcset` se puede acercar lo suficiente**, y un poco de Javascript puede ajustar el tamaño del elemento HTML después de cargar la página si tienes razones verdaderamente justificadas para necesitar ese mapeo perfecto, aunque aquí no se revelarán tales artes prohibidas.  

> Las otras unidades absolutas [in, pc, pt, mm, cm, Q](https://developer.mozilla.org/en-US/docs/Web/CSS/length) se definen en función del número de píxeles CSS y suponen que todo se ejecuta a 96 ppp. Los desarrolladores evitan las unidades absolutas porque generalmente es mejor usar unidades que se derivan del tamaño de fuente o de las dimensiones del marco/contenedor. Las unidades desiguales pueden desorganizar una diseño si el usuario ajusta su multiplicador de `Accesibilidad > Tamaño del Texto`, hace zoom en el navegador o rota su dispositivo. Al decir verdad, deberías hacer todas estas cosas antes de lanzar tu sitio.
