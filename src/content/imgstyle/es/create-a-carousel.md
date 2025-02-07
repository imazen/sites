---
taskInputHash: dbaba1ec783f3a67
title: >-
  También traduce cuidadosamente el título y la descripción del artículo; no
  uses & o < o >
   Crear un carrusel
description: Cómo crear un carrusel en un sitio web
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
---
Aquí están los pasos generales para crear un carrusel de imágenes en un sitio web:
1. Crea un nuevo archivo HTML para tu carrusel de imágenes. Puedes llamarlo algo como "carousel.html".
2. Añade la estructura HTML a tu archivo. Esto normalmente incluye la sección head con un título y cualquier hoja de estilos CSS necesaria, y la sección body donde agregarás el carrusel actual.
3. Crea un contenedor para tu carrusel usando una etiqueta `<div>`. Dale un ID o una clase para que puedas estilizarlo después.
4. Dentro del contenedor, añade elementos de imagen individuales usando la etiqueta `<img>`. Puedes establecer el atributo src a la ruta del archivo de imagen o URL, y agregar cualquier texto alternativo o leyendas según sea necesario.
5. Añade botones de navegación a tu carrusel usando etiquetas `<button>` o `<a>`. Necesitarás un botón o enlace para la flecha izquierda y otro para la flecha derecha.
6. Añade código JavaScript para hacer que tu carrusel sea funcional. Necesitarás escuchar eventos de clic en los botones de navegación y actualizar la visualización del carrusel en consecuencia. Puedes hacer esto usando la API DOM o una biblioteca de JavaScript como jQuery o React.

Aquí hay un ejemplo de código para crear un simple carrusel de imágenes usando jQuery:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Mi Carrusel de Imágenes</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
	<style>
		.carousel {
			margin: 50px auto;
		}
		.carousel img {
			width: 100%;
			height: auto;
		}
		.owl-nav {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 100%;
		}
		.owl-prev, .owl-next {
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto;
			width: 50px;
			height: 50px;
			background-color: rgba(0, 0, 0, 0.5);
			color: #fff;
			font-size: 30px;
			text-align: center;
			line-height: 50px;
			cursor: pointer;
			border-radius: 50%;
		}
		.owl-prev {
			left: 0;
		}
		.owl-next {
			right: 0;
		}
	</style>
</head>
<body>
	<div class="carousel owl-carousel owl-theme">
		<img src="image1.jpg" alt="Imagen 1">
		<img src="image2.jpg" alt="Imagen 2">
		<img src="image3.jpg" alt="Imagen 3">
		<img src="image4.jpg" alt="Imagen 4">
		<img src="image5.jpg" alt="Imagen 5">
		<img src="image6.jpg" alt="Imagen 6">
	</div>
	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
	<script>
		$(document).ready(function(){
			$('.carousel').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
```
