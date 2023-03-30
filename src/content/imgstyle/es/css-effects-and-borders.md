---
title: Efectos y bordes CSS
description: Cómo agregar efectos y bordes CSS a una imagen
taskInputHash: 7a326c1fc1c7a1c6
lang: es
---
Para agregar efectos y bordes de CSS a una imagen, se pueden seguir los siguientes pasos:

1. Seleccionar el elemento de imagen en el código HTML. Se puede hacer esto mediante un selector de ID o clase, o seleccionando directamente el elemento `<img>`.
2. Definir un selector de ID o clase de CSS que aplique los estilos deseados a la imagen. Por ejemplo, se puede utilizar el siguiente código para crear un borde simple alrededor de la imagen:

```css
.mi-imagen {
  border: 2px solid black;
}
```

3. Aplicar el selector de ID o clase de CSS al elemento de imagen. Por ejemplo, si se utilizó el selector `.mi-imagen` en el paso 2, se puede agregar el siguiente código a su HTML para aplicar los estilos a la imagen:

```arduino
<img src="ruta/a/imagen.jpg" class="mi-imagen">
```

4. Personalizar los estilos según se desee. Además de bordes, se pueden aplicar una amplia variedad de efectos CSS a imágenes, como filtros, opacidad, transiciones y animaciones. Aquí hay algunos ejemplos de código CSS que se pueden utilizar para agregar efectos a imágenes:

```css
/* Agregar un efecto de sombra de caída */
.mi-imagen {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Agregar un efecto de filtro en escala de grises */
.mi-imagen {
  filter: grayscale(100%);
}

/* Agregar un efecto de transición en zoom al pasar el cursor */
.mi-imagen {
  transition: transform 0.3s ease;
}
.mi-imagen:hover {
  transform: scale(1.1);
}
```

Estos son solo algunos ejemplos de los muchos efectos y bordes CSS que se pueden utilizar para mejorar las imágenes. Experimente con diferentes estilos para encontrar los que mejor funcionen para su diseño.
