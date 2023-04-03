---
title: Erstelle ein Karussell
description: Wie man ein Karussell auf einer Website erstellt
taskInputHash: a04b23b21eb4f8de
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Hier sind die allgemeinen Schritte, um eine Bildkarussell auf einer Website zu erstellen:

1. Erstelle eine neue HTML-Datei für dein Bildkarussell. Du kannst sie beispielsweise "carousel.html" nennen.
2. Füge die HTML-Struktur zu deiner Datei hinzu. Dies umfasst in der Regel den Head-Bereich mit einem Titel und eventuell benötigten CSS-Stylesheets sowie den Body-Bereich, in dem du das eigentliche Karussell hinzufügst.
3. Erstelle einen Container für dein Karussell mit einem `<div>`-Tag. Gib ihm eine ID oder eine Klasse, um es später zu stylen.
4. Füge innerhalb des Containers einzelne Bild-Elemente mit dem `<img>`-Tag hinzu. Du kannst den Quellcode auf den Bild-Dateipfad oder die URL setzen und gegebenenfalls einen Alternativtext oder eine Bildunterschrift hinzufügen.
5. Füge Navigationsbuttons zu deinem Karussell mit `<button>` oder `<a>`-Tags hinzu. Du benötigst einen Button oder Link für den linken Pfeil und einen weiteren für den rechten Pfeil.
6. Füge JavaScript-Code hinzu, um dein Karussell funktionsfähig zu machen. Du musst auf Klick-Ereignisse auf den Navigationsbuttons hören und das Anzeigen des Karussells entsprechend aktualisieren. Dies kannst du mit der DOM-API oder einer JavaScript-Bibliothek wie jQuery oder React tun.

Hier ist ein Beispielcode für die Erstellung eines einfachen Bildkarussell mit jQuery:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Mein Bildkarussell</title>
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
		<img src="image1.jpg" alt="Bild 1">
		<img src="image2.jpg" alt="Bild 2">
		<img src="image3.jpg" alt="Bild 3">
		<img src="image4.jpg" alt="Bild 4">
		<img src="image5.jpg" alt="Bild 5">
		<img src="image6.jpg" alt="Bild 6">
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
