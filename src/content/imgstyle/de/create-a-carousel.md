---
taskInputHash: df2d537b36383c67
title: >-
  Übersetzen Sie auch sorgfältig den Titel und die Beschreibung des Artikels,
  verwenden Sie nicht & oder < oder >
   Erstellen Sie ein Karussell
description: Wie man ein Karussell auf einer Website erstellt
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
Hier sind die allgemeinen Schritte zur Erstellung eines Bildkarussells auf einer Website:
1. Erstellen Sie eine neue HTML-Datei für Ihr Bildkarussell. Sie können sie zum Beispiel "carousel.html" nennen.
2. Fügen Sie die HTML-Struktur zu Ihrer Datei hinzu. Diese enthält in der Regel den Kopfbereich mit einem Titel und allen notwendigen CSS-Stylesheets sowie den Körperbereich, in dem Sie das eigentliche Karussell hinzufügen.
3. Erstellen Sie einen Container für Ihr Karussell mit einem `<div>`-Tag. Geben Sie ihm eine ID oder eine Klasse, damit Sie ihn später stylen können.
4. Fügen Sie innerhalb des Containers einzelne Bildelemente mit dem `<img>`-Tag hinzu. Sie können das Quellattribut auf den Bildpfad oder die URL setzen und bei Bedarf Alt-Text oder Bildunterschriften hinzufügen.
5. Fügen Sie Navigationsbuttons zu Ihrem Karussell mithilfe von `<button>`- oder `<a>`-Tags hinzu. Sie benötigen einen Button oder Link für den linken Pfeil und einen weiteren für den rechten Pfeil.
6. Fügen Sie JavaScript-Code hinzu, um Ihr Karussell funktionsfähig zu machen. Sie müssen auf Klickereignisse auf den Navigationsbuttons horchen und die Anzeige des Karussells entsprechend aktualisieren. Das können Sie mit der DOM-API oder einer JavaScript-Bibliothek wie jQuery oder React tun.

Hier ist ein Beispielcode für die Erstellung eines einfachen Bildkarussells mit jQuery:

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
