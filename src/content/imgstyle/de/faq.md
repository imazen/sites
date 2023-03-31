---
title: FAQ
description: Häufig gestellte Fragen zum Stylen und Layouten von Bildern mit CSS
taskInputHash: 8ab7aaccc4a7a585
lang: de
ignore: '/* cSpell:locale de,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Einige häufig gestellte Fragen zum Stylen und Layouten von Bildern mit CSS sind:

**1. Wie setzt man die Größe eines Bildes in CSS?**

Um die Größe eines Bildes in CSS festzulegen, kann man die Eigenschaften `width` und `height` verwenden. Zum Beispiel kann man mit folgendem CSS-Code die Breite eines Bildes auf 300 Pixel setzen:

```css
img {
  width: 300px;
}
``` 

**2. Wie zentriert man ein Bild horizontal und vertikal mit CSS?**

Um ein Bild horizontal und vertikal mit CSS zu zentrieren, kann man die Eigenschaften `display: flex`, `justify-content: center` und `align-items: center` auf einen Container anwenden, der das Bild enthält. Zum Beispiel kann man mit folgendem CSS-Code ein Bild innerhalb eines `div`-Elements zentrieren:

```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

div img {
  /* Optional: set a maximum width for the image */
  max-width: 100%;
}
``` 

**3. Wie macht man ein Bild mit CSS responsiv?**

Um ein Bild mit CSS responsiv zu machen, kann man die Eigenschaft `max-width: 100%` auf das Bild anwenden. Dadurch wird sichergestellt, dass das Bild niemals breiter als sein Container wird. Zum Beispiel:

```css
img {
  max-width: 100%;
  height: auto;
}
``` 

**4. Wie fügt man einem Bild einen Rahmen oder Schatten mit CSS hinzu?**

Um einem Bild mit CSS einen Rahmen oder Schatten hinzuzufügen, kann man die Eigenschaften `border` bzw. `box-shadow` verwenden. Zum Beispiel:

```css
img {
  border: 1px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
``` 

**5. Wie stellt man Bilder nebeneinander mit CSS auf?**

Um Bilder nebeneinander mit CSS aufzustellen, kann man die Eigenschaft `display: inline-block` auf die Bilder anwenden. Zum Beispiel:

```css
img {
  display: inline-block;
  /* Optional: set a margin between the images */
  margin-right: 10px;
}
``` 

**6. Wie setzt man ein Hintergrundbild in CSS?**

Um ein Hintergrundbild in CSS zu setzen, kann man die Eigenschaft `background-image` verwenden. Zum Beispiel:

```css
div {
  background-image: url('image.jpg');
}
``` 

**7. Wie schneidet man ein Bild mit CSS zurecht?**

Um ein Bild mit CSS zuzuschneiden, kann man die Eigenschaft `clip` verwenden. Zum Beispiel:

```css
img {
  clip: rect(0px, 100px, 100px, 0px);
}
```

Dadurch wird das Bild auf ein 100x100 Pixel großes Quadrat zurechtgeschnitten, das oben links beginnt.

**8. Wie fügt man einem Bild mit CSS einen Hover-Effekt hinzu?**

Um einem Bild mit CSS einen Hover-Effekt hinzuzufügen, kann man die Pseudo-Klasse `:hover` verwenden. Zum Beispiel:

```css
img {
  /* Set the initial state of the image */
  opacity: 0.8;
}

img:hover {
  /* Set the state of the image when hovering over it */
  opacity: 1;
}
``` 

**9. Wie kontrolliert man den Abstand zwischen Bildern mit CSS?**

Um den Abstand zwischen Bildern mit CSS zu kontrollieren, kann man die Eigenschaft `margin` verwenden. Zum Beispiel:

```css
img {
  margin-right: 10px;
}
```

Dadurch wird ein 10-Pixel-Abstand rechts von jedem Bild hinzugefügt.

**10. Wie erstellt man mit CSS eine Diashow von Bildern?**

Um mit CSS eine Diashow von Bildern zu erstellen, kann man die Regel `@keyframes` verwenden, um die Animation zu definieren, und die Eigenschaft `animation`, um sie auf die Bilder anzuwenden. Zum Beispiel:

```css
@keyframes slideshow {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

img {
  /* Set the initial state of the images */
  opacity: 0;
  /* Set the duration and timing function of the animation */
  animation: slideshow;
}
```
