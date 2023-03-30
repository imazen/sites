---
title: Creare una galleria
description: Come creare una galleria su un sito web
taskInputHash: 5d485d89c96e6a0a
lang: it
---
Ecco i passaggi generali per creare una galleria di immagini su un sito web:
1. Crea un nuovo file HTML per la tua galleria di immagini. Puoi chiamarlo ad esempio "gallery.html".
2. Aggiungi la struttura HTML al tuo file. Questo include tipicamente la sezione head con un titolo e ogni foglio di stile CSS necessario, e la sezione body dove aggiungerai la vera e propria galleria.
3. Crea un contenitore per la tua galleria utilizzando un tag `<div>`. Assegna un ID o una classe per poterlo stilizzare in seguito.
4. All'interno del contenitore, aggiungi elementi immagine individuali utilizzando il tag `<img>`. Puoi impostare l'attributo source con il percorso del file immagine o URL, e aggiungere qualsiasi testo alternativo o didascalia necessaria.
5. Stilizza la tua galleria con CSS. Puoi utilizzare proprietà come display, larghezza, altezza, margini, padding e bordi per controllare il layout e l'aspetto della tua galleria.

Ecco un esempio di codice per creare una semplice galleria di immagini:

 ```html
<!DOCTYPE html>
<html>
<head>
	<title>La mia galleria di immagini</title>
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
		<img src="image1.jpg" alt="Immagine 1">
		<img src="image2.jpg" alt="Immagine 2">
		<img src="image3.jpg" alt="Immagine 3">
		<img src="image4.jpg" alt="Immagine 4">
		<img src="image5.jpg" alt="Immagine 5">
		<img src="image6.jpg" alt="Immagine 6">
	</div>
</body>
</html>
 ```

In questo esempio, il contenitore della galleria ha una classe di "gallery" e viene stilizzato utilizzando flexbox per disporre le immagini in una griglia. Ciascuna immagine ha una larghezza di 300px, un'altezza di 200px, un margine di 10px e un bordo di 2px solido nero. La proprietà object-fit viene utilizzata per fare in modo che le immagini mantengano il loro rapporto d'aspetto anche se non sono delle stesse dimensioni.

Puoi personalizzare questo codice per adattarlo alle tue esigenze specifiche e ai tuoi gusti di design.
