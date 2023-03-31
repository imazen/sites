---
title: Creare un carousel
description: Come creare un carousel su un sito web
taskInputHash: 12f7f3924af2ff63
lang: it
ignore: '/* cSpell:locale it,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Ecco i passaggi generali per creare un carousel di immagini su un sito web:
1. Crea un nuovo file HTML per il tuo carousel di immagini. Puoi dargli un nome come "carousel.html".
2. Aggiungi la struttura HTML al tuo file. Questo di solito include la sezione head con un titolo e eventuali fogli di stile CSS necessari e la sezione body dove aggiungerai il vero carousel.
3. Crea un contenitore per il tuo carousel con un tag `<div>`. Dalle un ID o una classe in modo da poterlo stilizzare successivamente.
4. All'interno del contenitore, aggiungi elementi di immagine singoli usando il tag `<img>`. Puoi impostare l'attributo source al percorso del file immagine o all'url e aggiungere testo alternativo o didascalie se necessario.
5. Aggiungi pulsanti di navigazione al tuo carousel utilizzando i tag `<button>` o `<a>`. Avrai bisogno di un pulsante o link per la freccia sinistra e un altro per la freccia destra.
6. Aggiungi codice JavaScript per rendere il tuo carousel funzionale. Dovrai ascoltare eventi di clic sui pulsanti di navigazione e aggiornare di conseguenza la visualizzazione del carousel. Puoi farlo usando l'API DOM o una libreria JavaScript come jQuery o React.

Ecco un codice di esempio per creare un semplice carousel di immagini utilizzando jQuery:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Il mio carousel di immagini</title>
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
		<img src="image1.jpg" alt="Immagine 1">
		<img src="image2.jpg" alt="Immagine 2">
		<img src="image3.jpg" alt="Immagine 3">
		<img src="image4.jpg" alt="Immagine 4">
		<img src="image5.jpg" alt="Immagine 5">
		<img src="image6.jpg" alt="Immagine 6">
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
