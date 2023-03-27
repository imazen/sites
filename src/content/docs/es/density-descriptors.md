---
title: Descriptores de densidad y srcset
description: Ejemplos de uso de descriptores de densidad en `srcset`
taskInputHash: 37bc38b313c4ea53
lang: es
---
Srcset con descriptores de densidad proporciona un método simple y efectivo para proporcionar la imagen más adecuada al dispositivo de cada usuario, mejorando el rendimiento y la experiencia del usuario. Esta guía le guiará a través de los aspectos esenciales de cómo usar srcset con descriptores de densidad y proporcionará ejemplos de marcado para su conveniencia.

## ¿Qué es Srcset con Descriptores de Densidad?

Srcset es un atributo HTML diseñado para permitirle especificar múltiples fuentes de imagen para un solo elemento `<img>`. Los descriptores de densidad (`x`) se utilizan en conjunto con srcset para proporcionar imágenes de diferentes resoluciones en función de la densidad de píxeles de la pantalla del usuario.

## Cuándo Usar Srcset con Descriptores de Densidad

Usar srcset con descriptores de densidad es especialmente útil cuando desea:
1. Servir imágenes de alta resolución a pantallas de alta DPI (por ejemplo, pantallas Retina) y proporcionar imágenes de resolución más baja a pantallas estándar.
2. Mejorar el rendimiento de la página entregando el tamaño de imagen más apropiado para el dispositivo de cada usuario.

## Implementación de Srcset con Descriptores de Densidad

Para usar srcset con descriptores de densidad, siga estos pasos:
1. Prepare sus imágenes en diferentes resoluciones.
2. Agregue el atributo `srcset` al elemento `<img>`, incluyendo las fuentes de imágenes y los descriptores de densidad correspondientes.
3. Agregue el atributo `sizes` (opcional) para especificar el tamaño de la imagen tal como se mostrará en la pantalla.

### Ejemplo de Marcado

Aquí hay un ejemplo de cómo implementar srcset con descriptores de densidad en su marcado:

```html
<img src="ejemplo-de-imagen-1x.jpg"
     srcset="ejemplo-de-imagen-1x.jpg 1x, ejemplo-de-imagen-2x.jpg 2x, ejemplo-de-imagen-3x.jpg 3x"
     alt="Una imagen de ejemplo">
```

Este ejemplo de marcado incluye:
- **src**: La fuente de imagen predeterminada, que se muestra si el navegador no admite srcset.
- **srcset**: La lista de fuentes de imágenes y sus descriptores de densidad (1x, 2x, 3x). El navegador elegirá la imagen más apropiada según la pantalla del usuario.
- **alt**: Una descripción de la imagen con fines de accesibilidad.

¡Y eso es todo! Ha implementado con éxito srcset con descriptores de densidad, mejorando el rendimiento y la experiencia del usuario de su sitio web.
