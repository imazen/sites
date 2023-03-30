---
title: Skapa ett galleri
description: Hur man skapar ett galleri på en webbplats
taskInputHash: b00702760ee5792d
lang: sv
---
Här är de allmänna stegen för att skapa ett bildgalleri på en webbplats:
1. Skapa en ny HTML-fil för ditt bildgalleri. Du kan namnge den något som "gallery.html".
2. Lägg till HTML-strukturen i din fil. Detta inkluderar vanligtvis huvudsektionen med en titel och nödvändiga CSS-stilmallar, och kroppssektionen där du lägger till själva galleriet. 
3. Skapa en behållare för ditt galleri med en `<div>`-tagg. Ge den en ID eller en klass så att du kan styla den senare. 
4. Inuti containern, lägg till individuella bildelement med `<img>`-taggen. Du kan ange källattributet till bildfilens sökväg eller URL och lägga till någon alt-text eller bildtexter vid behov.
5. Styla ditt galleri med CSS. Du kan använda egenskaper som display, width, height, margin, padding, och border för att styra layouten och utseendet av ditt galleri.

Här är ett exempelkod för att skapa ett enkelt bildgalleri:

```html
<!DOCTYPE html>
<html>
<head>
	<title> Mitt bildgalleri </title>
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
		<img src="image1.jpg" alt="Bild 1">
		<img src="image2.jpg" alt="Bild 2">
		<img src="image3.jpg" alt="Bild 3">
		<img src="image4.jpg" alt="Bild 4">
		<img src="image5.jpg" alt="Bild 5">
		<img src="image6.jpg" alt="Bild 6">
	</div>
</body>
</html>
```

I detta exempel har gallericontainern en klass på "gallery" och stylas med flexbox för att ordna bilderna i en rutnät. Varje bild har en bredd på 300px, en höjd på 200px, en marginal på 10px och en ram på 2px stark svart. Objekt-fit-egenskapen används för att se till att bilderna behåller sin aspektförhållande även om de inte är samma storlek.

Du kan anpassa denna kod för att passa dina specifika behov och designpreferenser.
