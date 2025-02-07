---
taskInputHash: f0abfb3c0a6b54fd
title: Descriptores de densidad y srcset
description: Ejemplos de uso de descriptores de densidad en `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
---
Srcset con descriptores de densidad ofrece un método simple y efectivo para entregar la imagen más adecuada al dispositivo de cada usuario, mejorando el rendimiento y la experiencia del usuario. Esta guía te guiará a través de los aspectos esenciales del uso de srcset con descriptores de densidad y te proporcionará ejemplos de marcado para tu conveniencia.

## ¿Qué es Srcset con Descriptores de Densidad?

Srcset es un atributo HTML diseñado para permitirte especificar múltiples fuentes de imagen para un solo elemento `<img>`. Los descriptores de densidad (`x`) se utilizan junto con srcset para proporcionar imágenes de diferentes resoluciones según la densidad de píxeles de la pantalla del usuario.

## Cuándo Usar Srcset con Descriptores de Densidad

Usar srcset con descriptores de densidad es especialmente útil cuando deseas:
1. Servir imágenes de alta resolución a pantallas de alta DPI (por ejemplo, pantallas Retina) mientras se proporcionan imágenes de menor resolución a pantallas estándar.
2. Mejorar el rendimiento de la página al entregar el tamaño de imagen más apropiado al dispositivo de cada usuario.

## Implementación de Srcset con Descriptores de Densidad

Para utilizar srcset con descriptores de densidad, sigue estos pasos:
1. Prepara tus imágenes en diferentes resoluciones.
2. Añade el atributo `srcset` al elemento `<img>`, incluyendo las fuentes de imagen y sus correspondientes descriptores de densidad.
3. Añade el atributo `sizes` (opcional) para especificar el tamaño de la imagen tal como se mostrará en la pantalla.

### Ejemplo de Marcado

Aquí tienes un ejemplo de cómo implementar srcset con descriptores de densidad en tu marcado:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Una imagen de ejemplo">
```

Este ejemplo de marcado incluye:
- **src**: La fuente de imagen por defecto, mostrada si el navegador no soporta srcset.
- **srcset**: La lista de fuentes de imagen y sus descriptores de densidad (1x, 2x, 3x). El navegador elegirá la imagen más apropiada según la pantalla del usuario.
- **alt**: Una descripción de la imagen para propósitos de accesibilidad.

¡Y eso es todo! Has implementado con éxito srcset con descriptores de densidad, mejorando el rendimiento de tu sitio web y la experiencia del usuario.
