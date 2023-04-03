---
title: Créer une galerie
description: Comment créer une galerie sur un site web
taskInputHash: 8f19510e5b124c38
lang: fr
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Voici les étapes générales pour créer une galerie d'images sur un site web:
1. Créez un nouveau fichier HTML pour votre galerie d'images. Vous pouvez l'appeler quelque chose comme "gallery.html".
2. Ajoutez la structure HTML à votre fichier. Cela inclut généralement la section head avec un titre et les feuilles de style CSS nécessaires, et la section body où vous ajouterez la galerie réelle.
3. Créez un conteneur pour votre galerie en utilisant une balise `<div>`. Donnez-lui un ID ou une classe pour pouvoir le styliser plus tard.
4. À l'intérieur du conteneur, ajoutez des éléments d'image individuels en utilisant la balise `<img>`. Vous pouvez définir l'attribut source sur le chemin du fichier image ou une URL, et ajoutez du texte alternatif ou des légendes si nécessaire.
5. Stylez votre galerie avec CSS. Vous pouvez utiliser des propriétés telles que display, width, height, margin, padding et border pour contrôler la mise en page et l'apparence de votre galerie.

Voici un exemple de code pour créer une simple galerie d'images:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Ma galerie d'images</title>
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
		<img src="image1.jpg" alt="Image 1">
		<img src="image2.jpg" alt="Image 2">
		<img src="image3.jpg" alt="Image 3">
		<img src="image4.jpg" alt="Image 4">
		<img src="image5.jpg" alt="Image 5">
		<img src="image6.jpg" alt="Image 6">
	</div>
</body>
</html>
```



Dans cet exemple, le conteneur de la galerie a une classe de "gallery" et est stylé en utilisant flexbox pour organiser les images en une grille. Chaque image a une largeur de 300px, une hauteur de 200px, une marge de 10px et une bordure de 2px solide en noir. La propriété object-fit est utilisée pour s'assurer que les images conservent leur rapport d'aspect même si elles ne sont pas de la même taille.

Vous pouvez personnaliser ce code pour répondre à vos besoins spécifiques et vos préférences de design.
