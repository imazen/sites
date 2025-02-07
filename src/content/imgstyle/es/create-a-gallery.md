---
taskInputHash: abb7ce862c0771d5
title: >-
  También traduce cuidadosamente el título y la descripción del artículo; no
  uses & ni < ni >
   Crear una galería
description: Cómo crear una galería en un sitio web
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
---
Aquí están los pasos generales para crear una galería de imágenes en un sitio web:
1. Crea un nuevo archivo HTML para tu galería de imágenes. Puedes nombrarlo algo como "gallery.html".
2. Añade la estructura HTML a tu archivo. Esto generalmente incluye la sección head con un título y cualquier hoja de estilos CSS necesaria, y la sección body donde añadirás la galería real.
3. Crea un contenedor para tu galería usando una etiqueta `<div>`. Dale un ID o una clase para que puedas estilizarlo después.
4. Dentro del contenedor, añade elementos de imagen individuales usando la etiqueta `<img>`. Puedes establecer el atributo source a la ruta o URL del archivo de imagen, y añadir cualquier texto alternativo o leyendas según sea necesario.
5. Estiliza tu galería con CSS. Puedes usar propiedades como display, width, height, margin, padding y border para controlar el diseño y la apariencia de tu galería.

Aquí tienes un ejemplo de código para crear una galería de imágenes simple:

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

En este ejemplo, el contenedor de la galería tiene una clase "gallery" y está estilizado usando flexbox para organizar las imágenes en una cuadrícula. Cada imagen tiene un ancho de 300px, una altura de 200px, un margen de 10px, y un borde de 2px sólido negro. La propiedad object-fit se usa para asegurarse de que las imágenes mantengan su relación de aspecto incluso si no son del mismo tamaño.

Puedes personalizar este código para adaptarlo a tus necesidades específicas y preferencias de diseño.
