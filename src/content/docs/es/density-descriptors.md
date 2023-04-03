---
title: Descriptores de densidad y srcset
description: Ejemplos de cómo usar descriptores de densidad en `srcset`
taskInputHash: 9c96b9bb25cfad91
lang: es
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Srcset con descriptores de densidad proporciona un método simple y eficaz para ofrecer la imagen más adecuada a cada dispositivo del usuario, mejorando el rendimiento y la experiencia del usuario. Esta guía te llevará a través de la esencia de cómo usar srcset con descriptores de densidad y proporcionará ejemplos de marcado para tu conveniencia.

## ¿Qué es Srcset con Descriptores de Densidad?

Srcset es un atributo HTML diseñado para permitir especificar múltiples fuentes de imagen para un solo elemento `<img>`. Los descriptores de densidad (`x`) se utilizan junto con srcset para proporcionar imágenes de diferentes resoluciones basándose en la densidad de píxeles de la pantalla del usuario.

## Cuándo usar Srcset con Descriptores de Densidad

Usar srcset con descriptores de densidad es especialmente útil cuando deseas:
1. Servir imágenes de alta resolución a pantallas de alta resolución (por ejemplo, pantallas Retina) mientras que proporcionas imágenes de baja resolución a pantallas estándar.
2. Mejorar el rendimiento de la página entregando el tamaño de imagen más adecuado para el dispositivo del usuario.

## Implementación de Srcset con Descriptores de Densidad

Para usar srcset con descriptores de densidad, sigue estos pasos:
1. Prepara tus imágenes en diferentes resoluciones.
2. Agrega el atributo `srcset` al elemento `<img>`, incluyendo las fuentes de imagen y los descriptores de densidad correspondientes.
3. Agrega el atributo `sizes` (opcional) para especificar el tamaño de la imagen cuando se mostrará en la pantalla.

### Ejemplo de marcado

Aquí hay un ejemplo de cómo implementar srcset con descriptores de densidad en tu código:

```html
<img src="ejemplo-imagen-1x.jpg"
     srcset="ejemplo-imagen-1x.jpg 1x, ejemplo-imagen-2x.jpg 2x, ejemplo-imagen-3x.jpg 3x"
     alt="Una imagen de ejemplo">
```

Este ejemplo de marcado incluye:
- **src**: La fuente de imagen predeterminada, mostrada si el navegador no admite srcset.
- **srcset**: La lista de fuentes de imagen y sus descriptores de densidad (1x, 2x, 3x). El navegador elegirá la imagen más adecuada según la pantalla del usuario.
- **alt**: Una descripción de la imagen con fines de accesibilidad.

¡Y eso es todo! Has implementado con éxito srcset con descriptores de densidad, mejorando el rendimiento y la experiencia del usuario de tu sitio web.
