---
title: Ejemplos utilizando el elemento <picture>
description: >-
  Proporciona ejemplos utilizando el elemento <picture> para imágenes responsivas, dirección de arte y diferentes formatos de imagen.
taskInputHash: aa9de5a15f947b5e
lang: es
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Aquí hay algunos ejemplos de uso del elemento `<picture>` y sus explicaciones:

1\. Ejemplo para imágenes responsivas:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, se utiliza el elemento `<picture>` para proporcionar diferentes fuentes de imagen para diferentes tamaños de pantalla. Los elementos `<source>` especifican las diferentes fuentes de imagen utilizando el atributo "srcset" y el atributo "media" para especificar las condiciones en las que se debe utilizar cada fuente. El elemento `<img>` se utiliza como alternativa para navegadores antiguos o cuando no se cumplen las condiciones especificadas en los elementos `<source>`.

2\. Ejemplo para dirección de arte:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, se utiliza el elemento `<picture>` para proporcionar diferentes fuentes de imagen dependiendo de la orientación del dispositivo. El elemento `<source>` con el atributo "media" establecido en "(orientation: landscape)" especifica una fuente de imagen para pantallas anchas, mientras que el elemento `<img>` especifica una fuente de imagen para pantallas verticales.

3\. Ejemplo para diferentes formatos de imagen:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, se utiliza el elemento `<picture>` para proporcionar diferentes fuentes de imagen en diferentes formatos. Los elementos `<source>` especifican diferentes fuentes de imagen utilizando el atributo "srcset" y el atributo "type" para especificar el formato de imagen. El elemento `<img>` se utiliza como alternativa para navegadores antiguos que no admiten el elemento `<picture>`.

## Puntos de interrupción

En el diseño responsivo, se utilizan puntos de interrupción para definir cuándo debe cambiar el diseño de un sitio web o aplicación en función del tamaño de la ventana gráfica. Los puntos de interrupción se definen típicamente mediante consultas de medios en CSS, que aplican diferentes estilos según el ancho de pantalla. Estos puntos de interrupción se pueden utilizar en conjunto con el elemento `<picture>` para proporcionar diferentes fuentes de imagen para diferentes tamaños de pantalla.

Por ejemplo, en el primer ejemplo anterior, utilizamos el atributo `media` para especificar el ancho de pantalla bajo el cual se debe utilizar cada fuente. Cuando el ancho de la pantalla es mayor o igual a 768 píxeles, se utilizará la fuente `image-large.jpg`; cuando el ancho de pantalla es mayor o igual a 480 píxeles pero menor que 768 píxeles, se utilizará la fuente `image-medium.jpg`; y cuando el ancho de pantalla es menor que 480 píxeles, se utilizará la fuente `image-small.jpg`. Esto nos permite servir imágenes de tamaño apropiado para cada dispositivo, reduciendo los tiempos de carga de la página y mejorando la experiencia del usuario.

Los puntos de interrupción se pueden definir en cualquier tamaño de pantalla, y se pueden utilizar múltiples puntos de interrupción para crear diseños que responden a una amplia gama de dispositivos. Al combinar puntos de interrupción con el elemento `<picture>`, se pueden crear diseños flexibles y responsivos que se vean bien en cualquier dispositivo.
