---
title: Skapa ett galleri
description: Hur du skapar ett galleri på en hemsida
taskInputHash: b00702760ee5792d
lang: sv
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Här är de allmänna stegen för att skapa ett bildgalleri på en hemsida:
1. Skapa en ny HTML-fil för ditt bildgalleri. Du kan ge den ett namn som "gallery.html".
2. Lägg till HTML-strukturen i din fil. Detta inkluderar vanligtvis head-sektionen med en titel och eventuella nödvändiga CSS-stilmallar, och body-sektionen där du lägger till det faktiska galleriet.
3. Skapa en container för ditt galleri med en `<div>`-tagg. Ge den en ID eller en klass så du kan styla den senare.
4. Inuti containern, lägg till individuella bild-element med `<img>`-taggen. Du kan ange källattributet till bildfilens sökväg eller URL, och lägga till eventuell alt-text eller bildtexter som behövs.
5. Styla ditt galleri med CSS. Du kan använda egenskaper som display, width, height, margin, padding och border för att kontrollera layouten och utseendet på ditt galleri.

Här är ett exempel på kod för att skapa ett enkelt bildgalleri:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Mitt bildgalleri</title>
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

I detta exempel har galleri-containern en klass "gallery" och stylas med flexbox för att ordna bilderna i en grid. Varje bild har en bredd på 300px, en höjd på 200px, en marginal på 10px och en border på 2px solid black. Object-fit-egenskapen används för att se till att bilderna bibehåller sin proportionsförhållande även om de inte är av samma storlek.

Du kan anpassa denna kod för att passa dina specifika behov och designpreferenser.
