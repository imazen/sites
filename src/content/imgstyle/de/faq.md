---
taskInputHash: ce81170132c40cc8
title: FAQ
description: Häufig gestellte Fragen zur Gestaltung und Anordnung von Bildern mit CSS
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
Einige häufig gestellte Fragen zur Gestaltung und Anordnung von Bildern mit CSS umfassen:

**1. Wie legt man die Größe eines Bildes in CSS fest?**

Um die Größe eines Bildes in CSS festzulegen, können Sie die Eigenschaften `width` und `height` verwenden. Um beispielsweise die Breite eines Bildes auf 300 Pixel festzulegen, können Sie folgenden CSS-Code verwenden:

```css
img {
  width: 300px;
}
``` 

**2. Wie zentriert man ein Bild horizontal und vertikal mit CSS?**

Um ein Bild horizontal und vertikal mit CSS zu zentrieren, können Sie die Eigenschaften `display: flex`, `justify-content: center` und `align-items: center` auf einem Container verwenden, der das Bild enthält. Um beispielsweise ein Bild innerhalb eines `div` Elements zu zentrieren, können Sie folgenden CSS-Code verwenden:

```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

div img {
  /* Optional: maximale Breite für das Bild festlegen */
  max-width: 100%;
}
``` 

**3. Wie macht man ein Bild mit CSS responsive?**

Um ein Bild mit CSS responsive zu machen, können Sie die Eigenschaft `max-width: 100%` auf das Bild anwenden. Dies stellt sicher, dass das Bild niemals breiter als sein Container wird. Zum Beispiel:

```css
img {
  max-width: 100%;
  height: auto;
}
``` 

**4. Wie fügt man einen Rahmen oder Schatten zu einem Bild in CSS hinzu?**

Um einen Rahmen oder Schatten zu einem Bild in CSS hinzuzufügen, können Sie die Eigenschaften `border` und `box-shadow` verwenden. Zum Beispiel:

```css
img {
  border: 1px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
``` 

**5. Wie richtet man Bilder nebeneinander mit CSS aus?**

Um Bilder nebeneinander mit CSS auszurichten, können Sie die Eigenschaft `display: inline-block` auf die Bilder anwenden. Zum Beispiel:

```css
img {
  display: inline-block;
  /* Optional: Abstand zwischen den Bildern einstellen */
  margin-right: 10px;
}
``` 

**6. Wie setzt man ein Hintergrundbild in CSS?**

Um ein Hintergrundbild in CSS zu setzen, können Sie die Eigenschaft `background-image` verwenden. Zum Beispiel:

```css
div {
  background-image: url('image.jpg');
}
``` 

**7. Wie schneidet man ein Bild mit CSS zu?**

Um ein Bild mit CSS zuzuschneiden, können Sie die Eigenschaft `clip` verwenden. Zum Beispiel:

```css
img {
  clip: rect(0px, 100px, 100px, 0px);
}
```

Dies schneidet das Bild zu einem 100x100 Pixel großen Quadrat ab, beginnend von der oberen linken Ecke. 

**8. Wie fügt man einen Hover-Effekt zu einem Bild in CSS hinzu?**

Um einen Hover-Effekt zu einem Bild in CSS hinzuzufügen, können Sie die Pseudo-Klasse `:hover` verwenden. Zum Beispiel:

```css
img {
  /* Den anfänglichen Zustand des Bildes einstellen */
  opacity: 0.8;
}

img:hover {
  /* Den Zustand des Bildes bei Hover einstellen */
  opacity: 1;
}
``` 

**9. Wie steuert man den Abstand zwischen Bildern mit CSS?**

Um den Abstand zwischen Bildern mit CSS zu steuern, können Sie die Eigenschaft `margin` verwenden. Zum Beispiel:

```css
img {
  margin-right: 10px;
}
```

Dies fügt jedem Bild einen 10 Pixel breiten Abstand rechts hinzu.

**10. Wie erstellt man eine Diashow von Bildern mit CSS?**

Um eine Diashow von Bildern mit CSS zu erstellen, können Sie die Regel `@keyframes` nutzen, um die Animation zu definieren, und die Eigenschaft `animation`, um sie auf die Bilder anzuwenden. Zum Beispiel:

```css
@keyframes slideshow {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

img {
  /* Den anfänglichen Zustand der Bilder einstellen */
  opacity: 0;
  /* Dauer und Timing-Funktion der Animation festlegen */
  animation: slideshow
```
