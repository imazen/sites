---
taskInputHash: 54a4e68170452bdc
title: Ejemplos usando el elemento <picture>
description: >-
  Proporciona ejemplos usando el elemento <picture>, para imágenes responsivas,
  dirección artística y diferentes formatos de imagen
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
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

Explicación: En este ejemplo, el elemento `<picture>` se utiliza para proporcionar diferentes fuentes de imagen para diferentes tamaños de pantalla. Los elementos `<source>` especifican las diferentes fuentes de imagen utilizando el atributo "srcset" y el atributo "media" para especificar las condiciones bajo las cuales cada fuente debe ser utilizada. El elemento `<img>` se usa como respaldo para navegadores más antiguos o cuando no se cumplen las condiciones especificadas en los elementos `<source>`.

2\. Ejemplo para dirección artística:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, el elemento `<picture>` se usa para proporcionar diferentes fuentes de imagen dependiendo de la orientación del dispositivo. El elemento `<source>` con el atributo "media" establecido en "(orientation: landscape)" especifica una fuente de imagen para pantallas anchas, mientras que el elemento `<img>` especifica una fuente de imagen para pantallas en modo retrato.

3\. Ejemplo para diferentes formatos de imagen:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, el elemento `<picture>` se utiliza para proporcionar diferentes fuentes de imagen para diferentes formatos de imagen. Los elementos `<source>` especifican diferentes fuentes de imagen utilizando el atributo "srcset" y el atributo "type" para especificar el formato de imagen. El elemento `<img>` se utiliza como respaldo para navegadores más antiguos que no soportan el elemento `<picture>`.

## Puntos de quiebre

En diseño responsivo, los puntos de quiebre se utilizan para definir cuándo debe cambiar el diseño de un sitio web o aplicación según el tamaño del viewport. Los puntos de quiebre se definen típicamente usando consultas de medios en CSS, que aplican diferentes estilos dependiendo del ancho de la pantalla. Estos puntos de quiebre pueden utilizarse conjuntamente con el elemento `<picture>` para proporcionar diferentes fuentes de imagen para diferentes tamaños de pantalla.

Por ejemplo, en el primer ejemplo anterior, utilizamos el atributo `media` para especificar el ancho de pantalla bajo el cual cada fuente debe ser utilizada. Cuando el ancho de la pantalla es mayor o igual a 768 píxeles, se usará la fuente `image-large.jpg`; cuando el ancho de la pantalla es mayor o igual a 480 píxeles pero menos de 768 píxeles, se usará la fuente `image-medium.jpg`; y cuando el ancho de la pantalla es menor a 480 píxeles, se usará la fuente `image-small.jpg`. Esto nos permite servir imágenes de tamaño apropiado para cada dispositivo, reduciendo los tiempos de carga de la página y mejorando la experiencia del usuario.

Los puntos de quiebre pueden definirse en cualquier tamaño de pantalla, y se pueden utilizar múltiples puntos de quiebre para crear diseños que respondan a una amplia gama de dispositivos. Al combinar puntos de quiebre con el elemento `<picture>`, puedes crear diseños flexibles y responsivos que se ven geniales en cualquier dispositivo.
