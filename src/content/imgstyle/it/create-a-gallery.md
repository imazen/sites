---
taskInputHash: 12a543da8f701252
title: Crea una galleria
description: Come creare una galleria su un sito web
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---
Ecco i passaggi generali per creare una galleria di immagini su un sito web:
1. Crea un nuovo file HTML per la tua galleria di immagini. Puoi nominarlo qualcosa come "galleria.html".
2. Aggiungi la struttura HTML al tuo file. Questo include tipicamente la sezione head con un titolo ed eventuali fogli di stile CSS necessari, e la sezione body dove aggiungerai effettivamente la galleria.
3. Crea un contenitore per la tua galleria usando un tag `<div>`. Dagli un ID o una classe in modo da poterlo stilizzare successivamente.
4. All'interno del contenitore, aggiungi gli elementi immagine individuali usando il tag `<img>`. Puoi impostare l'attributo source al percorso del file immagine o all'URL, e aggiungere eventuali testi alternativi o didascalie secondo necessità.
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

In questo esempio, il contenitore della galleria ha una classe "gallery" ed è stilizzato usando flexbox per disporre le immagini in una griglia. Ogni immagine ha una larghezza di 300px, un'altezza di 200px, un margine di 10px e un bordo di 2px solido nero. La proprietà object-fit è utilizzata per assicurarsi che le immagini mantengano il loro rapporto d'aspetto anche se non sono della stessa dimensione.

Puoi personalizzare questo codice per soddisfare le tue esigenze specifiche e le tue preferenze di design.
