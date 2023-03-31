---
title: Ejemplos usando el elemento <picture>
description: >-
  Proporciona ejemplos utilizando el elemento <picture>, para imágenes
  responsivas, dirección de arte y diferentes formatos de imagen.
taskInputHash: 6db4516ee45090eb
lang: es
ignore: '/* cSpell:locale es,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Aquí hay algunos ejemplos de cómo usar el elemento `<picture>` y sus explicaciones:

1\. Ejemplo para imágenes responsivas:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, el elemento `<picture>` se utiliza para proporcionar diferentes fuentes de imágenes para diferentes tamaños de pantalla. Los elementos `<source>` especifican las diferentes fuentes de imagen utilizando el atributo "srcset" y el atributo "media" para especificar las condiciones en las que se debe utilizar cada fuente. El elemento `<img>` se utiliza como alternativa para navegadores antiguos o cuando no se cumplen las condiciones especificadas en los elementos `<source>`.

2\. Ejemplo para dirección de arte:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, el elemento `<picture>` se utiliza para proporcionar diferentes fuentes de imágenes según la orientación del dispositivo. El elemento `<source>` con el atributo "media" establecido en "(orientation: landscape)" especifica una fuente de imagen para pantallas anchas, mientras que el elemento `<img>` especifica una fuente de imagen para pantallas verticales.

3\. Ejemplo para diferentes formatos de imagen:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, el elemento `<picture>` se utiliza para proporcionar diferentes fuentes de imágenes para diferentes formatos de imagen. Los elementos `<source>` especifican diferentes fuentes de imagen utilizando el atributo "srcset" y el atributo "type" para especificar el formato de imagen. El elemento `<img>` se utiliza como alternativa para navegadores antiguos que no admiten el elemento `<picture>`.

## Puntos de quiebre

En el diseño responsivo, los puntos de quiebre se utilizan para definir cuándo debe cambiar el diseño de un sitio web o aplicación en función del tamaño del viewport. Los puntos de quiebre se definen típicamente utilizando consultas de medios en CSS, que aplican diferentes estilos dependiendo del ancho de la pantalla. Estos puntos de quiebre se pueden utilizar en conjunto con el elemento `<picture>` para proporcionar diferentes fuentes de imágenes para diferentes tamaños de pantalla.

Por ejemplo, en el primer ejemplo anterior, usamos el atributo `media` para especificar el ancho de pantalla bajo el cual se debe utilizar cada fuente. Cuando el ancho de pantalla es mayor o igual a 768 píxeles, se utilizará la fuente `image-large.jpg`; cuando el ancho de pantalla es mayor o igual a 480 píxeles pero menor a 768 píxeles, se utilizará la fuente `image-medium.jpg`; y cuando el ancho de pantalla es inferior a 480 píxeles, se utilizará la fuente `image-small.jpg`. Esto nos permite servir imágenes con el tamaño adecuado para cada dispositivo, reduciendo los tiempos de carga de página y mejorando la experiencia del usuario.

Los puntos de quiebre se pueden definir en cualquier tamaño de pantalla, y se pueden utilizar múltiples puntos de quiebre para crear diseños que respondan a una amplia gama de dispositivos. Al combinar puntos de quiebre con el elemento `<picture>`, se pueden crear diseños flexibles y responsivos que se ven geniales en cualquier dispositivo.
