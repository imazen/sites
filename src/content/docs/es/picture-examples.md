---
taskInputHash: 34cab27cb63b1312
title: Ejemplos de uso del elemento `<picture>`
description: >-
  Proporciona ejemplos utilizando el elemento `<picture>`, para imágenes
  responsivas, dirección artística y diferentes formatos de imagen.
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: es
---
Aquí hay algunos ejemplos de uso del elemento `<picture>` y sus explicaciones:

1\. Ejemplo de imágenes responsivas:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, se usa el elemento `<picture>` para proporcionar diferentes fuentes de imágenes para diferentes tamaños de pantalla. Los elementos `<source>` especifican las diferentes fuentes de imágenes utilizando el atributo "srcset" y el atributo "media" para especificar las condiciones bajo las cuales se debe usar cada fuente. El elemento `<img>` se utiliza como alternativa para navegadores más antiguos o cuando no se cumplen las condiciones especificadas en los elementos `<source>`.

2\. Ejemplo para dirección artística:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, se utiliza el elemento `<picture>` para proporcionar diferentes fuentes de imágenes dependiendo de la orientación del dispositivo. El elemento `<source>` con el atributo "media" establecido en "(orientation: landscape)" especifica una fuente de imagen para pantallas anchas, mientras que el elemento `<img>` especifica una fuente de imagen para pantallas en modo retrato.

3\. Ejemplo para diferentes formatos de imagen:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, se utiliza el elemento `<picture>` para proporcionar diferentes fuentes de imágenes para diferentes formatos de imagen. Los elementos `<source>` especifican diferentes fuentes de imágenes utilizando el atributo "srcset" y el atributo "type" para especificar el formato de la imagen. El elemento `<img>` se utiliza como alternativa para navegadores más antiguos que no soportan el elemento `<picture>`.

## Puntos de quiebre

En el diseño responsivo, los puntos de quiebre se utilizan para definir cuándo debe cambiar el diseño de un sitio web o aplicación según el tamaño del viewport. Los puntos de quiebre se definen generalmente usando media queries en CSS, que aplican diferentes estilos dependiendo del ancho de la pantalla. Estos puntos de quiebre se pueden usar junto con el elemento `<picture>` para proporcionar diferentes fuentes de imágenes para diferentes tamaños de pantalla.

Por ejemplo, en el primer ejemplo anterior, usamos el atributo `media` para especificar el ancho de pantalla bajo el cual se debe usar cada fuente. Cuando el ancho de pantalla es mayor o igual a 768 píxeles, se usará la fuente `image-large.jpg`; cuando el ancho de pantalla es mayor o igual a 480 píxeles pero menor de 768 píxeles, se usará la fuente `image-medium.jpg`; y cuando el ancho de pantalla es menor de 480 píxeles, se usará la fuente `image-small.jpg`. Esto nos permite servir imágenes de tamaño adecuado para cada dispositivo, reduciendo los tiempos de carga de la página y mejorando la experiencia del usuario.

Los puntos de quiebre se pueden definir a cualquier tamaño de pantalla, y se pueden usar múltiples puntos de quiebre para crear diseños que responden a una amplia gama de dispositivos. Al combinar puntos de quiebre con el elemento `<picture>`, se pueden crear diseños flexibles y responsivos que se ven geniales en cualquier dispositivo.
