---
title: Efectos y bordes CSS
description: Cómo agregar efectos y bordes CSS a una imagen
taskInputHash: 9ed3263ca112b427
lang: es
ignore: '/* cSpell:locale es,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Para agregar efectos CSS y bordes a una imagen, puede seguir los siguientes pasos:
1. Seleccione el elemento de imagen en su código HTML. Puede hacer esto usando un selector de ID o clase, o seleccionando directamente el elemento `<img>`.
2. Defina un selector de clase o ID CSS que aplique los estilos deseados a la imagen. Por ejemplo, podría usar el siguiente código para crear un borde simple alrededor de la imagen:

```css
.my-image {
  border: 2px solid black;
}
```


3. Aplique el selector de clase o ID CSS al elemento de imagen. Por ejemplo, si usó el selector `.my-image` en el paso 2, podría agregar el siguiente código a su HTML para aplicar los estilos a la imagen:

```arduino
<img src="ruta/a/imagen.jpg" class="my-image">
```


4. Personalice los estilos según lo deseado. Además de los bordes, puede aplicar una amplia gama de efectos CSS a las imágenes, como filtros, opacidad, transiciones y animaciones. Aquí hay algunos ejemplos de código CSS que se pueden usar para agregar efectos a las imágenes:

```css
/* Agregar un efecto de sombra */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Agregar un efecto de filtro en escala de grises */
.my-image {
  filter: grayscale(100%);
}

/* Agregar un efecto de transición de zoom al pasar el ratón */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```


Estos son solo algunos ejemplos de las muchas opciones de efectos y bordes CSS que puede usar para mejorar sus imágenes. Experimente con diferentes estilos para encontrar los que funcionen mejor para su diseño.
