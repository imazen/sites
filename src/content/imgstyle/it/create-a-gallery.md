---
taskInputHash: 0cc9872e4b79125a
title: >-
  Traduci attentamente anche il titolo e la descrizione dell'articolo; non
  utilizzare & o < o >
   Crea una galleria
description: Come creare una galleria su un sito web
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---
Ecco i passaggi generali per creare una galleria di immagini su un sito web:
1. Crea un nuovo file HTML per la tua galleria di immagini. Puoi chiamarlo qualcosa come "gallery.html".
2. Aggiungi la struttura HTML al tuo file. Questa include tipicamente la sezione head con un titolo e eventuali fogli di stile CSS necessari, e la sezione body dove aggiungerai la galleria effettiva.
3. Crea un contenitore per la tua galleria usando un tag `<div>`. Dagli un ID o una classe in modo da poterlo stilizzare in seguito.
4. All'interno del contenitore, aggiungi elementi immagine individuali utilizzando il tag `<img>`. Puoi impostare l'attributo source al percorso del file immagine o all'URL, e aggiungere qualsiasi testo alternativo o didascalie necessarie.
5. Stila la tua galleria con CSS. Puoi usare proprietà come display, width, height, margin, padding e border per controllare il layout e l'aspetto della tua galleria.

Ecco un esempio di codice per creare una semplice galleria di immagini:

```html
<!DOCTYPE html>
<html>
<head>
	<title>La Mia Galleria di Immagini</title>
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

In questo esempio, il contenitore della galleria ha una classe "gallery" ed è stilizzato usando flexbox per disporre le immagini in una griglia. Ogni immagine ha una larghezza di 300px, un'altezza di 200px, un margine di 10px e un bordo di 2px solid black. La proprietà object-fit è utilizzata per assicurarsi che le immagini mantengano il loro rapporto d'aspetto anche se non sono della stessa dimensione.

Puoi personalizzare questo codice per adattarlo alle tue esigenze specifiche e preferenze di design.
