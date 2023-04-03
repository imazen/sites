---
title: Crea un carrusel
description: Cómo crear un carrusel en un sitio web
taskInputHash: 20c1f11806d2c688
lang: es
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Aquí están los pasos generales para crear un carrusel de imágenes en un sitio web:
1. Cree un nuevo archivo HTML para su carrusel de imágenes. Puede nombrarlo algo como "carousel.html".
2. Agregue la estructura HTML a su archivo. Esto normalmente incluye la sección head con un título y cualquier hoja de estilos CSS necesaria, y la sección body donde agregará el carrusel real.
3. Cree un contenedor para su carrusel usando la etiqueta `<div>`. Dales un ID o una clase para poder darles estilo más tarde.
4. Dentro del contenedor, agregue elementos de imagen individuales usando la etiqueta `<img>`. Puede establecer el atributo de origen en la ruta del archivo de imagen o URL, y agregar cualquier texto alternativo o subtítulos según sea necesario.
5. Agregue botones de navegación a su carrusel utilizando etiquetas `<button>` o `<a>`. Necesitará un botón o enlace para la flecha izquierda y otro para la flecha derecha.
6. Agrega código JavaScript para hacer que tu carrusel sea funcional. Deberá escuchar los eventos de clic en los botones de navegación y actualizar la pantalla del carrusel en consecuencia. Puede hacer esto utilizando la API del DOM o una biblioteca de JavaScript como jQuery o React.

Aquí hay un ejemplo de código para crear un carrusel de imágenes simple utilizando jQuery:

`` `html
<! DOCTYPE html>
<html>
<head>
	<title>My Image Carousel</title>
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
		<img src = "image1.jpg" alt = "Imagen 1">
		<img src = "image2.jpg" alt = "Imagen 2">
		<img src = "image3.jpg" alt = "Imagen 3">
		<img src = "image4.jpg" alt = "Imagen 4">
		<img src = "image5.jpg" alt = "Imagen 5">
		<img src = "image6.jpg" alt = "Imagen 6">
	</div>
	<script src = "https://code.jquery.com/jquery-3.5.1.min.js"> </script>
	<script src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"> </script>
	<script>
		$ (document) .ready (function () {
			$ ('. Carrusel') .owlCarousel ({
				loop: true,
				margin: 10,
				nav: true,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
`` `
