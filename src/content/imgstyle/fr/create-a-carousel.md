---
taskInputHash: f639498c20bca4d9
title: Créer un carrousel
description: Comment créer un carrousel sur un site web
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
Voici les étapes générales pour créer un carrousel d'images sur un site web :
1. Créez un nouveau fichier HTML pour votre carrousel d'images. Vous pouvez le nommer par exemple "carousel.html".
2. Ajoutez la structure HTML à votre fichier. Cela inclut généralement la section head avec un titre et les feuilles de style CSS nécessaires, ainsi que la section body où vous ajouterez le carrousel proprement dit.
3. Créez un conteneur pour votre carrousel en utilisant une balise `<div>`. Donnez-lui un ID ou une classe pour pouvoir le styliser plus tard.
4. À l'intérieur du conteneur, ajoutez des éléments d'image individuels en utilisant la balise `<img>`. Vous pouvez définir l'attribut source sur le chemin du fichier ou l'URL de l'image et ajouter un texte alternatif ou des légendes si nécessaire.
5. Ajoutez des boutons de navigation à votre carrousel en utilisant des balises `<button>` ou `<a>`. Vous aurez besoin d'un bouton ou d'un lien pour la flèche gauche et d'un autre pour la flèche droite.
6. Ajoutez du code JavaScript pour rendre votre carrousel fonctionnel. Vous devrez écouter les événements de clic sur les boutons de navigation et mettre à jour l'affichage du carrousel en conséquence. Vous pouvez le faire en utilisant l'API DOM ou une bibliothèque JavaScript comme jQuery ou React.

Voici un exemple de code pour créer un carrousel d'images simple en utilisant jQuery :

```html
<!DOCTYPE html>
<html>
<head>
	<title>Mon Carrousel d'Images</title>
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
		<img src="image1.jpg" alt="Image 1">
		<img src="image2.jpg" alt="Image 2">
		<img src="image3.jpg" alt="Image 3">
		<img src="image4.jpg" alt="Image 4">
		<img src="image5.jpg" alt="Image 5">
		<img src="image6.jpg" alt="Image 6">
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
