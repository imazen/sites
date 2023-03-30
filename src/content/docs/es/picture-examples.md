---
title: Ejemplos usando el elemento <picture>
description: >-
  Proporciona ejemplos utilizando el elemento <picture>, para imágenes
  responsivas, dirección de arte y diferentes formatos de imagen.
taskInputHash: aa9de5a15f947b5e
lang: es
---
Aquí hay algunos ejemplos de cómo usar el elemento `<picture>` y sus explicaciones:

1. Ejemplo para imágenes responsivas:

```html
<picture>
  <source srcset="imagen-grande.jpg" media="(min-width: 768px)" />
  <source srcset="imagen-mediana.jpg" media="(min-width: 480px)" />
  <img src="imagen-pequena.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, se utiliza el elemento `<picture>` para proporcionar diferentes fuentes de imagen para diferentes tamaños de pantalla. Los elementos `<source>` especifican las diferentes fuentes de imagen usando el atributo "srcset" y el atributo "media" para especificar las condiciones bajo las cuales se debe usar cada fuente. El elemento `<img>` se utiliza como alternativa para navegadores antiguos o cuando las condiciones especificadas en los elementos `<source>` no se cumplen.

2. Ejemplo para dirección de arte:

```html
<picture>
  <source srcset="imagen-ancha.jpg" media="(orientation: landscape)" />

  <img src="imagen-vertical.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, el `<picture>` elemento se utiliza para proporcionar diferentes fuentes de imagen dependiendo de la orientación del dispositivo. El elemento `<source>` con el atributo "media" establecido en "(orientation: landscape)" especifica una fuente de imagen para pantallas anchas, mientras que el elemento `<img>` especifica una fuente de imagen para pantallas verticales. 

3. Ejemplo para diferentes formatos de imagen:

```html
<picture>
  <source srcset="imagen.webp" type="image/webp" />

  <source srcset="imagen.png" type="image/png" />

  <img src="imagen.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, el elemento `<picture>` se utiliza para proporcionar diferentes fuentes de imagen para diferentes formatos de imagen. Los elementos `<source>` especifican diferentes fuentes de imagen utilizando el atributo "srcset" y el atributo "type" para especificar el formato de imagen. El elemento `<img>` se utiliza como alternativa para navegadores antiguos que no admiten el elemento `<picture>`.

## Puntos de interrupción

En el diseño responsivo, se utilizan puntos de interrupción para  definir cuándo debe cambiar el diseño de un sitio web o aplicación basándose en el tamaño de la ventana de visualización. Los puntos de interrupción se definen típicamente utilizando consultas de medios en CSS, que aplican diferentes estilos según el ancho de la pantalla. Estos puntos de interrupción se pueden utilizar junto con el elemento `<picture>` para proporcionar diferentes fuentes de imagen para diferentes tamaños de pantalla.

Por ejemplo, en el primer ejemplo anterior, utilizamos el atributo `media` para especificar en qué tamaño de pantalla se debe usar cada fuente. Cuando el ancho de pantalla es mayor o igual a 768 píxeles, se usará la fuente `imagen-grande.jpg`; cuando el ancho de pantalla es mayor o igual a 480 píxeles pero menor que 768 píxeles, se usará la fuente `imagen-mediana.jpg`; y cuando el ancho de pantalla es menor que 480 píxeles, se usará la fuente `imagen-pequena.jpg`. Esto nos permite servir imágenes con un tamaño adecuado para cada dispositivo, reducir los tiempos de carga de página y mejorar la experiencia del usuario.

Los puntos de interrupción se pueden definir en cualquier tamaño de pantalla y se pueden utilizar varios para crear diseños que respondan a una amplia gama de dispositivos. Al combinar puntos de interrupción con el elemento `<picture>`, se pueden crear diseños flexibles y responsivos que se ven geniales en cualquier dispositivo.
