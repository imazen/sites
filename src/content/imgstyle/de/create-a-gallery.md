---
taskInputHash: 21bc9ec6405f7a8e
title: >-
  Übersetzen Sie auch sorgfältig den Titel und die Beschreibung des Artikels;
  verwenden Sie nicht & oder < oder >

   Eine Galerie erstellen
description: Wie man eine Galerie auf einer Website erstellt
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
Hier sind die allgemeinen Schritte, um eine Bildergalerie auf einer Website zu erstellen:

1. Erstellen Sie eine neue HTML-Datei für Ihre Bildergalerie. Sie können sie beispielsweise "gallery.html" nennen.
2. Fügen Sie die HTML-Struktur in Ihre Datei ein. Dies umfasst typischerweise den Kopfbereich mit einem Titel und erforderlichen CSS-Stylesheets sowie den Hauptteil, in dem Sie die eigentliche Galerie hinzufügen.
3. Erstellen Sie einen Container für Ihre Galerie mit einem `<div>`-Tag. Geben Sie ihm eine ID oder eine Klasse, damit Sie ihn später stylen können.
4. Fügen Sie innerhalb des Containers individuelle Bild-Elemente mit dem `<img>`-Tag hinzu. Sie können das source-Attribut auf den Bild-Dateipfad oder die URL setzen und nach Bedarf alternativen Text oder Bildunterschriften hinzufügen.
5. Stylen Sie Ihre Galerie mit CSS. Sie können Eigenschaften wie Anzeige, Breite, Höhe, Rand, Innenabstand und Rahmen verwenden, um das Layout und das Erscheinungsbild Ihrer Galerie zu steuern.

Hier ist ein Beispielcode zum Erstellen einer einfachen Bildergalerie:

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

In diesem Beispiel hat der Galerie-Container eine Klasse namens "gallery" und wird mit Flexbox gestylt, um die Bilder in einem Raster anzuordnen. Jedes Bild hat eine Breite von 300px, eine Höhe von 200px, einen Randabstand von 10px und einen Rahmen von 2px festen Schwarz. Die Eigenschaft object-fit wird verwendet, um sicherzustellen, dass die Bilder ihr Seitenverhältnis beibehalten, auch wenn sie nicht die gleiche Größe haben.

Sie können diesen Code an Ihre speziellen Bedürfnisse und Designvorlieben anpassen.
