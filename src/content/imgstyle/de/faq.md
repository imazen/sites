---
title: FAQ
description: Häufig gestellte Fragen zu Styling und Anordnung von Bildern mit CSS
taskInputHash: d80a0329ce07e314
lang: de
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Einige häufig gestellte Fragen im Zusammenhang mit der Gestaltung und Anordnung von Bildern mit CSS sind:

**1. Wie legt man die Größe eines Bildes in CSS fest?**

Um die Größe eines Bildes in CSS festzulegen, kann man die `width`- und `height`-Eigenschaften verwenden. Um zum Beispiel die Breite eines Bildes auf 300 Pixel festzulegen, kann man den folgenden CSS-Code verwenden:

```css
img {
  width: 300px;
}
``` 

**2. Wie zentriert man ein Bild horizontal und vertikal mit CSS?**

Um ein Bild horizontal und vertikal mit CSS zu zentrieren, kann man die Eigenschaften `display: flex`, `justify-content: center` und `align-items: center` auf einen Container anwenden, der das Bild enthält. Um zum Beispiel ein Bild innerhalb eines `div`-Elements zu zentrieren, kann man den folgenden CSS-Code verwenden:

```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

div img {
  /* Optional: setze die maximale Breite des Bildes */
  max-width: 100%;
}
``` 

**3. Wie macht man ein Bild responsiv mit CSS?**

Um ein Bild responsiv mit CSS zu machen, kann man die Eigenschaft `max-width: 100%` auf das Bild anwenden. Dadurch wird sichergestellt, dass das Bild niemals breiter ist als sein Container. Zum Beispiel:

```css
img {
  max-width: 100%;
  height: auto;
}
``` 

**4. Wie fügt man in CSS einem Bild eine Umrandung oder einen Schatten hinzu?**

Um einem Bild in CSS eine Umrandung oder einen Schatten hinzuzufügen, kann man die Eigenschaften `border` und `box-shadow` verwenden. Zum Beispiel:

```css
img {
  border: 1px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
``` 

**5. Wie richtet man Bilder nebeneinander aus mit CSS?**

Um Bilder nebeneinander mit CSS auszurichten, kann man die Eigenschaft `display: inline-block` auf den Bildern verwenden. Zum Beispiel:

```css
img {
  display: inline-block;
  /* Optional: setze den Abstand zwischen den Bildern */
  margin-right: 10px;
}
``` 

**6. Wie setzt man in CSS ein Hintergrundbild?**

Um in CSS ein Hintergrundbild zu setzen, kann man die Eigenschaft `background-image` verwenden. Zum Beispiel:

```css
div {
  background-image: url('image.jpg');
}
``` 

**7. Wie schneidet man ein Bild in CSS zurecht?**

Um ein Bild in CSS zuzuschneiden, kann man die Eigenschaft `clip` verwenden. Zum Beispiel:

```css
img {
  clip: rect(0px, 100px, 100px, 0px);
}
```

Dadurch wird das Bild auf ein 100x100 Pixel großes Quadrat beschnitten, das links oben beginnt.

**8. Wie fügt man in CSS einen Hover-Effekt zu einem Bild hinzu?**

Um in CSS einen Hover-Effekt zu einem Bild hinzuzufügen, kann man die Pseudo-Klasse `:hover` verwenden. Zum Beispiel:

```css
img {
  /* Setze den Ausgangszustand des Bildes */
  opacity: 0.8;
}

img:hover {
  /* Setze den Zustand des Bildes beim Überfahren mit dem Mauszeiger */
  opacity: 1;
}
``` 

**9. Wie kann man den Abstand zwischen Bildern mit CSS steuern?**

Um den Abstand zwischen Bildern mit CSS zu steuern, kann man die Eigenschaft `margin` verwenden. Zum Beispiel:

```css
img {
  margin-right: 10px;
}
```

Dadurch wird jedem Bild ein 10 Pixel breiter Rand rechts angefügt.

**10. Wie erstellt man mit CSS eine Diashow von Bildern?**

Um mit CSS eine Diashow von Bildern zu erstellen, kann man die `@keyframes`-Regel verwenden, um die Animation zu definieren, und die Eigenschaft `animation`, um sie auf die Bilder anzuwenden. Zum Beispiel:

```css
@keyframes slideshow {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

img {
  /* Setze den Ausgangszustand der Bilder */
  opacity: 0;
  /* Setze Dauer und Zeitfunktion der Animation */
  animation: slideshow
