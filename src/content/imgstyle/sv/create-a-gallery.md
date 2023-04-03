---
title: Skapa ett galleri
description: Hur man skapar ett galleri på en webbplats
taskInputHash: 7c46cfb96ed226ad
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Här är de allmänna stegen för att skapa ett bildgalleri på en webbplats:
1. Skapa en ny HTML-fil för ditt bildgalleri. Du kan döpa den till något som "gallery.html".
2. Lägg till HTML-strukturen till din fil. Detta inkluderar vanligtvis huvudsektionen med en titel och eventuella nödvändiga CSS-stilmallar, och kroppssektionen där du kommer att lägga till själva galleriet. 
3. Skapa en behållare för ditt galleri med en `<div>` tagg. Ge den en ID eller en klass så att du kan formatera den senare. 
4. Inne i behållaren, lägg till individuella billelement med hjälp av `<img>` taggen. Du kan ange källattributet till bildfilens sökväg eller URL, och lägga till eventuella alternativa texter eller bildtexter vid behov.
5. Formatera ditt galleri med CSS. Du kan använda egenskaper som display, width, height, margin, padding, och border för att kontrollera layouten och utseendet på ditt galleri.

Här är exempelkod för att skapa ett enkelt bildgalleri:

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

I det här exemplet har galleribehållaren en klass på "gallery" och formateras med hjälp av flexbox för att ordna bilderna i en tabell. Varje bild har en bredd på 300px, höjd på 200px, marginal på 10px och en border på 2px solid black. Object-fit-egenskapen används för att se till att bilderna behåller sin sidförhållande även om de inte är samma storlek.

Du kan anpassa denna kod för att passa dina specifika behov och designpreferenser.
