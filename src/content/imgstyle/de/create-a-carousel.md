---
title: Erstelle ein Karussell
description: Wie man ein Karussell auf einer Website erstellt
taskInputHash: 6797b4446b178094
lang: de
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Hier sind die allgemeinen Schritte zur Erstellung eines Bildkarussells auf einer Website:
1. Erstellen Sie eine neue HTML-Datei für Ihr Bildkarussell. Sie können es beispielsweise "carousel.html" nennen.
2. Fügen Sie die HTML-Struktur zu Ihrer Datei hinzu. Dazu gehört in der Regel der Head-Bereich mit einem Titel und eventuell notwendigen CSS-Stylesheets und der Body-Bereich, in dem Sie das eigentliche Karussell hinzufügen.
3. Erstellen Sie einen Container für Ihr Karussell mit einem `<div>`-Tag. Geben Sie ihm eine ID oder eine Klasse, damit Sie es später stylen können.
4. Fügen Sie innerhalb des Containers einzelne Bilddateien mit dem `<img>`-Tag hinzu. Sie können den Quelltext auf den Bilddateipfad oder URL setzen und bei Bedarf Alt-Texte oder Bildunterschriften hinzufügen.
5. Fügen Sie Ihrem Karussell Navigationsbuttons mit `<button>`- oder `<a>`-Tags hinzu. Sie benötigen einen Button oder Link für den linken Pfeil und einen weiteren Button oder Link für den rechten Pfeil.
6. Fügen Sie JavaScript-Code hinzu, um Ihr Karussell funktionsfähig zu machen. Sie müssen auf Klick-Ereignisse auf den Navigationsbuttons hören und die Anzeige des Karussells entsprechend aktualisieren. Das können Sie mit Hilfe der DOM-API oder einer JavaScript-Bibliothek wie jQuery oder React tun.

Hier ist ein Beispielcode zur Erstellung eines einfachen Bildkarussells mit jQuery:

```html
<!DOCTYPE html>
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
