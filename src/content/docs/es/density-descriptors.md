---
title: Descriptores de densidad y srcset
description: Ejemplos de cómo utilizar descriptores de densidad en `srcset`
taskInputHash: e966c5af35628703
lang: es
---
Srcset con descriptores de densidad proporciona un método simple y efectivo para entregar la imagen más adecuada al dispositivo de cada usuario, mejorando el rendimiento y la experiencia del usuario. Esta guía le guiará a través de los conceptos esenciales de cómo utilizar srcset con descriptores de densidad y proporcionará ejemplos de marcado para su conveniencia.
## ¿Qué es Srcset con Descriptores de Densidad?

Srcset es un atributo HTML diseñado para permitir que especifique múltiples fuentes de imagen para un solo elemento `<img>`. Los descriptores de densidad (`x`) se utilizan en conjunto con srcset para proporcionar imágenes de diferentes resoluciones en función de la densidad de píxeles de la pantalla del usuario.
## Cuándo Utilizar Srcset con Descriptores de Densidad

Usar srcset con descriptores de densidad es especialmente útil cuando desea:
1. Servir imágenes de alta resolución a pantallas de alta densidad de píxeles (por ejemplo, pantallas Retina) mientras proporciona imágenes de baja resolución a las pantallas estándar.
2. Mejorar el rendimiento de la página entregando el tamaño de imagen más adecuado al dispositivo de cada usuario.
## Implementación de Srcset con Descriptores de Densidad

Para utilizar srcset con descriptores de densidad, siga estos pasos:
1. Prepare sus imágenes en diferentes resoluciones.
2. Añada el atributo `srcset` al elemento `<img>`, incluyendo las fuentes de imagen y los descriptores de densidad correspondientes.
3. Añada el atributo `sizes` (opcional) para especificar el tamaño de la imagen tal y como se mostrará en pantalla.
### Ejemplo de Marcado

Aquí tienes un ejemplo de cómo implementar srcset con descriptores de densidad en su marcado:

```html
<img src="ejemplo-imagen-1x.jpg"
     srcset="ejemplo-imagen-1x.jpg 1x, ejemplo-imagen-2x.jpg 2x, ejemplo-imagen-3x.jpg 3x"
     alt="Una imagen de ejemplo">
```



Este ejemplo de marcado incluye: 
- **src** : La fuente de imagen por defecto, se muestra si el navegador no admite srcset. 
- **srcset** : La lista de fuentes de imagen y sus descriptores de densidad (1x, 2x, 3x). El navegador elegirá la imagen más adecuada en función de la pantalla del usuario.
- **alt** : Una descripción de la imagen con fines de accesibilidad.


¡Y eso es todo! Ha implementado con éxito srcset con descriptores de densidad, mejorando el rendimiento y la experiencia del usuario en su sitio web.
