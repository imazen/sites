---
title: Descriptores de densidad y Srcset
description: Ejemplos de uso de descriptores de densidad en `srcset`
taskInputHash: e966c5af35628703
lang: es
---
Srcset con descriptores de densidad ofrece un método simple y efectivo para entregar la imagen más adecuada a cada dispositivo del usuario, mejorando el rendimiento y la experiencia del usuario. Esta guía lo guiará a través de lo esencial del uso de srcset con descriptores de densidad y proporcionará ejemplos de marcado para su conveniencia.

## ¿Qué es Srcset con Descriptores de Densidad?

Srcset es un atributo HTML diseñado para permitirle especificar múltiples fuentes de imagen para un solo elemento `<img>`. Los descriptores de densidad (`x`) se utilizan en conjunto con srcset para proporcionar imágenes de diferentes resoluciones según la densidad de píxeles de la pantalla del usuario.

## Cuándo Usar Srcset con Descriptores de Densidad

El uso de srcset con descriptores de densidad es especialmente útil cuando desea:
1. Servir imágenes de alta resolución a pantallas de alta densidad de píxeles (por ejemplo, pantallas Retina) mientras proporciona imágenes de menor resolución a pantallas estándar.
2. Mejorar el rendimiento de la página al entregar el tamaño de imagen más adecuado al dispositivo de cada usuario.

## Implementar Srcset con Descriptores de Densidad

Para usar srcset con descriptores de densidad, siga estos pasos:
1. Prepare sus imágenes en diferentes resoluciones.
2. Agregue el atributo `srcset` al elemento `<img>`, incluyendo las fuentes de imagen y los correspondientes descriptores de densidad.
3. Agregue el atributo `sizes` (opcional) para especificar el tamaño de la imagen tal como se mostrará en la pantalla.

### Ejemplo de Marcado

Aquí hay un ejemplo de cómo implementar srcset con descriptores de densidad en su marcado:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Una imagen de ejemplo">
```

Este ejemplo de marcado incluye:
- **src**: La fuente de imagen predeterminada, se muestra si el navegador no admite srcset.
- **srcset**: La lista de fuentes de imagen y sus descriptores de densidad (1x, 2x, 3x). El navegador elegirá la imagen más adecuada según la pantalla del usuario.
- **alt**: Una descripción de la imagen con fines de accesibilidad.

¡Y eso es todo! Ha implementado con éxito srcset con descriptores de densidad, mejorando el rendimiento y la experiencia del usuario de su sitio web.
