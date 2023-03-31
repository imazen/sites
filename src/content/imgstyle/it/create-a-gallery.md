---
title: Creare una galleria
description: Come creare una galleria su un sito web
taskInputHash: 5d485d89c96e6a0a
lang: it
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Ecco i passi generali per creare una galleria di immagini su un sito web:
1. Crea un nuovo file HTML per la tua galleria di immagini. Puoi chiamarlo ad esempio "galleria.html".
2. Aggiungi la struttura HTML al tuo file. Questo include tipicamente la sezione head con un titolo e eventuali fogli di stile CSS necessari, e la sezione body dove aggiungerai la galleria vera e propria.
3. Crea un contenitore per la tua galleria utilizzando un tag `<div>`. Dài un ID o una classe in modo da poterlo stilizzare in seguito.
4. All'interno del contenitore, aggiungi elementi immagine individuali utilizzando il tag `<img>`. Puoi impostare l'attributo src al percorso del file immagine o all'URL, e aggiungere eventuali testi alternativi o didascalie al bisogno.
5. Stilizza la tua galleria con CSS. Puoi utilizzare proprietà come display, width, height, margin, padding e border per controllare il layout e l'aspetto della tua galleria.

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



In questo esempio, il contenitore della galleria ha una classe "gallery" e viene stilizzato utilizzando il flexbox per disporre le immagini in una griglia. Ogni immagine ha larghezza di 300px, altezza di 200px, un margine di 10px ed una linea di contorno di 2px in nero. La proprietà object-fit viene utilizzata per assicurare che le immagini mantengano il loro rapporto d'aspetto anche se non sono della stessa dimensione.

Puoi personalizzare questo codice per soddisfare le tue esigenze specifiche e le tue preferenze di design.
