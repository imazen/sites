---
title: Crea una galería
description: Cómo crear una galería en un sitio web
taskInputHash: 3e1b9e8d5dc2cd54
lang: es
ignore: '/* cSpell:locale es,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Aquí están los pasos generales para crear una galería de imágenes en un sitio web:

1. Crea un archivo HTML nuevo para tu galería de imágenes. Puedes llamarlo algo como "galería.html".
2. Agrega la estructura HTML a tu archivo. Esto típicamente incluye la sección head con un título y cualquier hoja de estilos CSS necesaria, y la sección body donde agregarás la galería real.
3. Crea un contenedor para tu galería usando una etiqueta `<div>`. Dale un ID o una clase para que puedas estilizarlo después.
4. Dentro del contenedor, agrega elementos individuales de imagen utilizando la etiqueta `<img>`. Puedes establecer el atributo source como la ruta del archivo de imagen o URL, y agregar cualquier texto alternativo o subtítulos como sea necesario.
5. Estiliza tu galería con CSS. Puedes usar propiedades como display, width, height, margin, padding, y border para controlar el diseño y la apariencia de tu galería.

Aquí hay un ejemplo de código para crear una galería simple de imágenes:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Mi Galería de Imágenes</title>
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
		<img src="imagen1.jpg" alt="Imagen 1">
		<img src="imagen2.jpg" alt="Imagen 2">
		<img src="imagen3.jpg" alt="Imagen 3">
		<img src="imagen4.jpg" alt="Imagen 4">
		<img src="imagen5.jpg" alt="Imagen 5">
		<img src="imagen6.jpg" alt="Imagen 6">
	</div>
</body>
</html>
```

En este ejemplo, el contenedor de la galería tiene una clase de "gallery" y se estiliza usando flexbox para organizar las imágenes en una cuadrícula. Cada imagen tiene un ancho de 300px, una altura de 200px, un margen de 10px y un borde de 2px sólido en color negro. La propiedad object-fit se utiliza para asegurarse de que las imágenes mantengan su relación de aspecto aunque no sean del mismo tamaño.

Puedes personalizar este código para ajustarlo a tus necesidades y preferencias de diseño.
