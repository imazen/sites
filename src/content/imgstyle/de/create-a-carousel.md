---
title: Erstellen eines Karussells
description: Wie erstellt man auf einer Website ein Karussell?
taskInputHash: 6797b4446b178094
lang: de
---
Hier sind die allgemeinen Schritte zur Erstellung eines Bildkarussells auf einer Website:
1. Erstellen Sie eine neue HTML-Datei für Ihr Bildkarussell. Sie können es beispielsweise "carousel.html" nennen.
2. Fügen Sie die HTML-Struktur zu Ihrer Datei hinzu. Dies beinhaltet in der Regel den Kopfbereich mit einem Titel und eventuell notwendigen CSS-Stylesheets sowie den Body-Bereich, in dem Sie das eigentliche Karussell hinzufügen.
3. Erstellen Sie einen Container für Ihr Karussell mithilfe eines `<div>`-Tags. Geben Sie ihm eine ID oder Klasse, damit Sie es später stylen können.
4. Fügen Sie innerhalb des Containers einzelne Bilddateien mithilfe des `<img>`-Tags hinzu. Sie können den Quellattribut auf den Pfad oder die URL der Bild-Datei setzen und bei Bedarf beliebigen Alt-Text oder Untertitel hinzufügen.
5. Fügen Sie Navigationstasten zu Ihrem Karussell mit `<button>` oder `<a>`-Tags hinzu. Sie benötigen eine Schaltfläche oder einen Link für den linken Pfeil und einen weiteren für den rechten Pfeil.
6. Fügen Sie JavaScript-Code hinzu, um Ihr Karussell funktionsfähig zu machen. Sie müssen auf Klick-Ereignisse auf den Navigationstasten reagieren und die Anzeige des Karussells entsprechend aktualisieren. Sie können dafür die DOM-API oder eine JavaScript-Bibliothek wie jQuery oder React verwenden.

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
