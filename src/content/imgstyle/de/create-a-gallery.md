---
title: Erstellen Sie eine Galerie
description: Wie erstelle ich eine Galerie auf einer Website
taskInputHash: 42ae1b2794083cf2
lang: de
---
Hier sind die allgemeinen Schritte zur Erstellung einer Bildergalerie auf einer Website:
1. Erstellen Sie eine neue HTML-Datei für Ihre Bildergalerie. Sie können sie beispielsweise "gallery.html" nennen.
2. Fügen Sie die HTML-Struktur Ihrer Datei hinzu. Dies umfasst in der Regel den Kopfbereich mit Titel und allen erforderlichen CSS-Stylesheets sowie den Body-Bereich, in dem Sie die eigentliche Galerie hinzufügen.
3. Erstellen Sie einen Behälter für Ihre Galerie mit einem `<div>`-Tag. Geben Sie ihm eine ID oder eine Klasse, damit Sie ihn später formatieren können.
4. Fügen Sie im Container einzelne Bild-Elemente mit dem `<img>`-Tag hinzu. Sie können das Quellattribut auf den Pfad der Bilddatei oder URL setzen und bei Bedarf Alternativtexte oder Bildunterschriften hinzufügen.
5. Gestalten Sie Ihre Galerie mit CSS. Sie können Eigenschaften wie Anzeige, Breite, Höhe, Abstand, Polsterung und Rahmen verwenden, um das Layout und Erscheinungsbild Ihrer Galerie zu steuern.

Hier ist ein Beispielcode für die Erstellung einer einfachen Bildergalerie:

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Image Gallery</title>
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



In diesem Beispiel hat der Galerie-Container eine Klasse "gallery" und wird mit Flexbox formatiert, um die Bilder in einem Raster anzuordnen. Jedes Bild hat eine Breite von 300px, eine Höhe von 200px, einen Abstand von 10px und einen Rahmen von 2px solid black. Die Eigenschaft object-fit wird verwendet, um sicherzustellen, dass die Bilder ihr Seitenverhältnis beibehalten, auch wenn sie nicht dieselbe Größe haben.

Sie können diesen Code an Ihre spezifischen Anforderungen und Designpräferenzen anpassen.
