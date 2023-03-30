---
title: Eine Galerie erstellen
description: Wie man eine Galerie auf einer Website erstellt
taskInputHash: 42ae1b2794083cf2
lang: de
---
Hier sind die allgemeinen Schritte zur Erstellung einer Bildergalerie auf einer Website:
1. Erstellen Sie eine neue HTML-Datei für Ihre Bildergalerie. Sie können sie beispielsweise "gallery.html" nennen.
2. Fügen Sie die HTML-Struktur zu Ihrer Datei hinzu. Dazu gehört in der Regel der Abschnitt head mit einem Titel und allen erforderlichen CSS-Stylesheets sowie der Abschnitt body, in dem Sie die eigentliche Galerie hinzufügen.
3. Erstellen Sie einen Container für Ihre Galerie mit einem `<div>`-Tag. Geben Sie ihm eine ID oder eine Klasse, damit Sie ihn später formatieren können.
4. Fügen Sie innerhalb des Containers einzelne Bildelemente mit dem `<img>`-Tag hinzu. Sie können den Quellattribut auf den Bilddateipfad oder URL setzen und bei Bedarf einen Alt-Text oder Untertitel hinzufügen.
5. Formatieren Sie Ihre Galerie mit CSS. Sie können Eigenschaften wie Display, Breite, Höhe, Marge, Padding und Border verwenden, um das Layout und das Erscheinungsbild Ihrer Galerie zu steuern.

Hier ist ein Beispielcode für die Erstellung einer einfachen Bildergalerie:

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

In diesem Beispiel hat der Galerie-Container die Klasse "gallery" und wird mit Flexbox formatiert, um die Bilder in einem Raster anzuordnen. Jedes Bild hat eine Breite von 300px, eine Höhe von 200px, eine Marge von 10px und einen Rahmen von 2px Solid Black. Die Eigenschaft object-fit wird verwendet, um sicherzustellen, dass die Bilder ihr Seitenverhältnis beibehalten, auch wenn sie nicht die gleiche Größe haben.

Sie können diesen Code anpassen, um Ihren spezifischen Anforderungen und Designvorlieben zu entsprechen.
