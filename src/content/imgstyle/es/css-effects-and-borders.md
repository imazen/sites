---
title: Efectos y bordes CSS
description: Cómo añadir efectos y bordes CSS a una imagen
taskInputHash: 824ba2ead7b1129e
lang: es
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Para añadir efectos CSS y bordes a una imagen, puedes seguir los siguientes pasos:
1. Selecciona el elemento de imagen en tu código HTML. Puedes hacer esto utilizando un selector de ID o clase, o seleccionando directamente el elemento `<img>`.
2. Define un selector de clase o ID de CSS que aplique los estilos deseados a la imagen. Por ejemplo, podrías utilizar el siguiente código para crear un borde simple alrededor de la imagen:

```css
.mi-imagen {
  border: 2px solid black;
}
```

3. Aplica el selector de clase o ID de CSS al elemento de imagen. Por ejemplo, si utilizas el selector `.mi-imagen` en el paso 2, puedes añadir el siguiente código a tu HTML para aplicar los estilos a la imagen:

```html
<img src="ruta/a/imagen.jpg" class="mi-imagen">
```

4. Personaliza los estilos según desees. Además de los bordes, puedes aplicar una amplia variedad de efectos CSS a las imágenes, como filtros, opacidad, transiciones y animaciones. Aquí hay algunos ejemplos de código CSS que se pueden utilizar para añadir efectos a las imágenes:

```css
/* Añade un efecto de sombra */
.mi-imagen {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Añade un efecto de filtro a escala de grises */
.mi-imagen {
  filter: grayscale(100%);
}

/* Añade un efecto de transición de zoom al pasar el ratón por encima */
.mi-imagen {
  transition: transform 0.3s ease;
}
.mi-imagen:hover {
  transform: scale(1.1);
}
```

Estos son sólo algunos ejemplos de los muchos efectos CSS y bordes que puedes utilizar para mejorar tus imágenes. Experimenta con diferentes estilos para encontrar los que funcionen mejor para tu diseño.
