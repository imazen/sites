---
title: Crea una galería
description: Cómo crear una galería en un sitio web
taskInputHash: c53f8f23fba93bad
lang: es
---
Aquí están los pasos generales para crear una galería de imágenes en un sitio web:
1. Crea un nuevo archivo HTML para tu galería de imágenes. Puedes darle un nombre como "galeria.html".
2. Agrega la estructura HTML a tu archivo. Esto típicamente incluye la sección de encabezado con un título y cualquier hoja de estilo CSS necesaria, y la sección de cuerpo donde agregarás la galería real.
3. Crea un contenedor para tu galería usando una etiqueta `<div>`. Dale un ID o una clase para que puedas estilizarlo más tarde.
4. Dentro del contenedor, agrega elementos de imagen individuales usando la etiqueta `<img>`. Puedes establecer el atributo de origen a la ruta o URL del archivo de imagen, y agregar cualquier texto de descripción o subtítulos según sea necesario.
5. Estiliza tu galería con CSS. Puedes usar propiedades como display, width, height, margin, padding y border para controlar el diseño y la apariencia de tu galería.

Aquí hay un ejemplo de código para crear una galería de imágenes simple:

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

En este ejemplo, el contenedor de galería tiene una clase de "gallery" y está estilizado usando flexbox para organizar las imágenes en una cuadrícula. Cada imagen tiene un ancho de 300px, una altura de 200px, un margen de 10px y un borde de 2px sólido negro. La propiedad object-fit se utiliza para asegurarse de que las imágenes mantengan su relación de aspecto incluso si no son del mismo tamaño.

Puedes personalizar este código para adaptarlo a tus necesidades específicas y preferencias de diseño.
