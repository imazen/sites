---
title: Ejemplos de uso del elemento <picture>
description: >-
  Proporciona ejemplos de uso del elemento <picture> para imágenes responsivas,
  dirección de arte y diferentes formatos de imagen.
taskInputHash: 46dcbe022b1ab186
lang: es
---
Proporcione varios ejemplos de uso del elemento `<picture>` y explique de manera concisa cada uno.

Aquí hay algunos ejemplos de uso del elemento `<picture>` y sus explicaciones:

1\. Ejemplo para imágenes responsivas:

```html
<picture>
  <source srcset="imagen-grande.jpg" media="(min-width: 768px)" />
  <source srcset="imagen-mediana.jpg" media="(min-width: 480px)" />
  <img src="imagen-pequena.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, el elemento `<picture>` se utiliza para proporcionar diferentes fuentes de imagen para diferentes tamaños de pantalla. Los elementos `<source>` especifican las diferentes fuentes de imagen utilizando el atributo "srcset" y el atributo "media" para especificar las condiciones bajo las cuales se debe utilizar cada fuente. El elemento `<img>` se usa como alternativa para navegadores antiguos o cuando no se cumplen las condiciones especificadas en los elementos `<source>`.

2\. Ejemplo para dirección de arte:

```html
<picture>
  <source srcset="imagen-ancha.jpg" media="(orientation: landscape)" />

  <img src="imagen-vertical.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, se utiliza el elemento `<picture>` para proporcionar diferentes fuentes de imagen según la orientación del dispositivo. El elemento `<source>` con el atributo "media" configurado en "(orientation: landscape)" especifica una fuente de imagen para pantallas anchas, mientras que el elemento `<img>` especifica una fuente de imagen para pantallas verticales.

3\. Ejemplo para diferentes formatos de imagen:

```html
<picture>
  <source srcset="imagen.webp" type="image/webp" />

  <source srcset="imagen.png" type="image/png" />

  <img src="imagen.jpg" alt="Una imagen" />
</picture>
```

Explicación: En este ejemplo, se utiliza el elemento `<picture>` para proporcionar diferentes fuentes de imagen para diferentes formatos de imagen. Los elementos `<source>` especifican diferentes fuentes de imagen utilizando el atributo "srcset" y el atributo "type" para especificar el formato de imagen. El elemento `<img>` se utiliza como alternativa para navegadores antiguos que no admiten el elemento `<picture>`.
