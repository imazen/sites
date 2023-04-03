---
title: Creare una galleria
description: Come creare una galleria su un sito web
taskInputHash: c95a08dc6c1b7996
lang: it
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Ecco i passaggi generali per creare una galleria di immagini su un sito web:
1. Crea un nuovo file HTML per la tua galleria di immagini. Puoi chiamarlo "gallery.html".
2. Aggiungi la struttura HTML al tuo file. Questo include generalmente la sezione head con un titolo e eventuali fogli di stile CSS necessari, e la sezione body dove aggiungerai la galleria vera e propria.
3. Crea un contenitore per la tua galleria utilizzando un tag `<div>`. Assegnagli un ID o una classe in modo da poterlo stilizzare successivamente.
4. All'interno del contenitore, aggiungi elementi di immagine individuali con il tag `<img>`. Puoi impostare l'attributo della sorgente sul percorso del file immagine o URL, e aggiungere eventuali testi alternativi o didascalie come necessario.
5. Stilizza la tua galleria con CSS. Puoi utilizzare proprietà come display, width, height, margin, padding e border per controllare il layout e l'aspetto della tua galleria.

Qui è un esempio di codice per creare una semplice galleria di immagini:

```html
<!DOCTYPE html>
<html>
<head>
	<title>La mia Galleria di Immagini</title>
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

In questo esempio, il contenitore di galleria ha una classe di "gallery" ed è stilizzato utilizzando flexbox per disporre le immagini in una griglia. Ogni immagine ha una larghezza di 300px, un'altezza di 200px, un margine di 10px e un bordo di 2px di colore nero. La proprietà object-fit è utilizzata per assicurarsi che le immagini mantengano il rapporto di aspetto anche se non sono della stessa dimensione.

Puoi personalizzare questo codice per soddisfare le tue esigenze e preferenze di design.
