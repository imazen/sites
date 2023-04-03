---
title: Erstellen Sie eine Galerie
description: Wie erstellt man eine Galerie auf einer Website
taskInputHash: e537c1ed12c1b16e
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Hier sind die allgemeinen Schritte zur Erstellung einer Bildergalerie auf einer Website:
1. Erstellen Sie eine neue HTML-Datei für Ihre Bildergalerie. Sie können sie zum Beispiel "gallery.html" nennen.
2. Fügen Sie die HTML-Struktur Ihrer Datei hinzu. Dies umfasst in der Regel den Kopfbereich mit einem Titel und allen notwendigen CSS-Stylesheets sowie den Body-Bereich, in dem Sie die eigentliche Galerie hinzufügen.
3. Erstellen Sie einen Container für Ihre Galerie mit einem `<div>`-Tag. Geben Sie ihm eine ID oder eine Klasse, damit Sie ihn später formatieren können.
4. Fügen Sie innerhalb des Containers einzelne Bild-Elemente mit dem `<img>`-Tag hinzu. Sie können das Quellattribut auf den Pfad oder die URL der Bilddatei einstellen und bei Bedarf alternativen Text oder Bildunterschriften hinzufügen.
5. Gestalten Sie Ihre Galerie mit CSS. Sie können Eigenschaften wie display, width, height, margin, padding und border verwenden, um das Layout und das Erscheinungsbild Ihrer Galerie zu steuern.

Hier ist ein Codebeispiel für das Erstellen einer einfachen Bildergalerie:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Meine Bildergalerie</title>
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
			border: 2px solid schwarz;
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

In diesem Beispiel hat der Galerie-Container eine Klasse namens "gallery" und wird mit Flexbox gestaltet, um die Bilder in einem Raster anzuordnen. Jedes Bild hat eine Breite von 300px, eine Höhe von 200px, einen Abstand von 10px und einen schwarzen 2px Rand. Die Eigenschaft "object-fit" wird verwendet, um sicherzustellen, dass die Bilder ihr Seitenverhältnis beibehalten, auch wenn sie nicht die gleiche Größe haben.

Sie können diesen Code anpassen, um ihn an Ihre spezifischen Bedürfnisse und Designpräferenzen anzupassen.
