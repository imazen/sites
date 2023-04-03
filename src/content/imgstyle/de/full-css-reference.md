---
title: Vollständige CSS-Referenz
description: Vollständige CSS-Referenz für Effekte mit Beispielen
taskInputHash: d4c0669b963e7e19
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Hier ist eine umfassende Referenz von CSS-Effekten und -Rändern, die auf Bilder angewendet werden können, zusammen mit Beispielen für jeden Effekt:

1. **Rahmen:** Fügt dem Bild einen Rahmen hinzu.

```css
img {
  border: 2px solid black;
}
```


2. **Box Shadow:** Fügt dem Bild einen Schatten hinzu.

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```


3. **Transparenz:** Ermöglicht das Anpassen der Transparenz des Bildes.

```css
img {
  opacity: 0.5;
}
```


4. **Graustufen:** Konvertiert das Bild in Graustufen.

```css
img {
  filter: grayscale(100%);
}
```


5. **Sepia:** Verleiht dem Bild einen Sepia-Effekt.

```css
img {
  filter: sepia(100%);
}
```


6. **Unschärfe:** Macht das Bild unscharf.

```css
img {
  filter: blur(5px);
}
```


7. **Helligkeit:** Passt die Helligkeit des Bildes an.

```css
img {
  filter: brightness(50%);
}
```


8. **Kontrast:** Passt den Kontrast des Bildes an.

```css
img {
  filter: contrast(200%);
}
```


9. **Farbtiefe:** Dreht die Farbtiefe des Bildes.

```css
img {
  filter: hue-rotate(90deg);
}
```


10. **Invertieren:** Dreht die Farben des Bildes um.

```css
img {
  filter: invert(100%);
}
```


11. **Sättigung:** Passt die Sättigung des Bildes an.

```css
img {
  filter: saturate(200%);
}
```


12. **Sepia:** Verleiht dem Bild einen Sepia-Effekt.

```css
img {
  filter: sepia(100%);
}
```


13. **Drop-Shadow:** Fügt dem Bild einen Schattenwurf-Effekt hinzu.

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```


14. **Übergang:** Fügt dem Bild einen Übergangseffekt hinzu.

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```


15. **Animation:** Fügt dem Bild einen Animations-Effekt hinzu.

```css
@keyframes slidein {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
img {
  animation: slidein 1s ease;
}
```



Dies sind nur ein paar Beispiele von vielen CSS-Effekten und -Rändern, die Sie auf Bilder anwenden können. Experimentieren Sie mit verschiedenen Stilen, um einzigartige und ansprechende Designs zu erstellen!
