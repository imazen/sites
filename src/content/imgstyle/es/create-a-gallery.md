---
title: Crea una galería
description: Cómo crear una galería en un sitio web
taskInputHash: 63ffcca85fbf4e07
lang: es
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Aquí están los pasos generales para crear una galería de imágenes en un sitio web:
1. Crea un nuevo archivo HTML para tu galería de imágenes. Puedes nombrarlo algo como "galería.html".
2. Agrega la estructura HTML a tu archivo. Esto generalmente incluye la sección de encabezado con un título y cualquier hoja de estilos CSS necesarias, y la sección de cuerpo donde agregarás la galería real.
3. Crea un contenedor para tu galería usando una etiqueta `<div>`. Dale un ID o una clase para que puedas darle estilo más tarde.
4. Dentro del contenedor, agrega elementos de imagen individuales usando la etiqueta `<img>`. Puedes establecer el atributo de origen a la ruta del archivo de imagen o URL, y agregar cualquier texto alternativo o subtítulos según sea necesario.
5. Estiliza tu galería con CSS. Puedes usar propiedades como display, width, height, margin, padding y border para controlar el diseño y apariencia de tu galería.

Aquí hay un ejemplo de código para crear una simple galería de imágenes:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Mi galería de imágenes</title>
	<style>
		.gallery {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.gallery img {
			width: 300px;
			height: 200px;
			margin: 10px;
			object-fit: cover;
			border: 2px solid black;
		}
	</style>
</head>
<body>
	<div class="gallery">
		<img src="image1.jpg" alt="Imagen 1">
		<img src="image2.jpg" alt="Imagen 2">
		<img src="image3.jpg" alt="Imagen 3">
		<img src="image4.jpg" alt="Imagen 4">
		<img src="image5.jpg" alt="Imagen 5">
		<img src="image6.jpg" alt="Imagen 6">
	</div>
</body>
</html>
```



En este ejemplo, el contenedor de galería tiene una clase de "gallery" y se estiliza usando flexbox para organizar las imágenes en una cuadrícula. Cada imagen tiene un ancho de 300px, una altura de 200px, un margen de 10px y un borde de 2px sólido negro. La propiedad object-fit se utiliza para asegurarse de que las imágenes mantengan su relación de aspecto incluso si no son del mismo tamaño.

Puedes personalizar este código para adaptarlo a tus necesidades y preferencias de diseño específicas.
