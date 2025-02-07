---
taskInputHash: 1ed9ba24148e4447
title: >-
  Übersetzen Sie auch sorgfältig den Titel und die Beschreibung des Artikels;
  verwenden Sie nicht & oder < oder >

   Eine Galerie erstellen
description: Wie man eine Galerie auf einer Website erstellt
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---
Hier sind die allgemeinen Schritte, um eine Bildergalerie auf einer Website zu erstellen:

1. Erstellen Sie eine neue HTML-Datei für Ihre Bildergalerie. Sie können sie beispielsweise "galerie.html" benennen.
2. Fügen Sie die HTML-Struktur zu Ihrer Datei hinzu. Diese umfasst in der Regel den Head-Bereich mit einem Titel und allen notwendigen CSS-Stylesheets sowie den Body-Bereich, in dem Sie die eigentliche Galerie hinzufügen.
3. Erstellen Sie einen Container für Ihre Galerie mithilfe eines `<div>`-Tags. Geben Sie ihm eine ID oder eine Klasse, damit Sie ihn später stylen können.
4. Fügen Sie innerhalb des Containers einzelne Bildelemente mit dem `<img>`-Tag hinzu. Sie können das source-Attribut auf den Bilddateipfad oder die URL setzen und bei Bedarf Alternativtexte oder Bildunterschriften hinzufügen.
5. Stylen Sie Ihre Galerie mit CSS. Sie können Eigenschaften wie display, width, height, margin, padding und border verwenden, um das Layout und das Erscheinungsbild Ihrer Galerie zu steuern.

Hier ist ein Beispielcode zur Erstellung einer einfachen Bildergalerie:

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

In diesem Beispiel hat der Galerien-Container eine Klasse „gallery“ und wird mithilfe von Flexbox gestaltet, um die Bilder in einem Raster anzuordnen. Jedes Bild hat eine Breite von 300px, eine Höhe von 200px, einen Abstand von 10px und einen Rahmen von 2px solid black. Die Objekt-Eigenschaft object-fit wird verwendet, um sicherzustellen, dass die Bilder ihr Seitenverhältnis beibehalten, auch wenn sie nicht die gleiche Größe haben.

Sie können diesen Code an Ihre spezifischen Bedürfnisse und Designvorlieben anpassen.
