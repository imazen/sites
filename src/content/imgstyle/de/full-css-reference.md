---
title: Vollständige CSS-Referenz
description: Vollständige CSS-Referenz für Effekte mit Beispielen
taskInputHash: 14c2d1e815930d7b
lang: de
ignore: '/* cSpell:locale de,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Hier ist eine umfassende Referenz von CSS-Effekten und -Rahmen, die Sie auf Bilder anwenden können, zusammen mit Beispielen für jeden Effekt:

1. **Rahmen:** Fügt ein Rahmen um das Bild hinzu.

```css
img {
  border: 2px solid black;
}
```


2. **Boxschatten:** Fügt einen Schatten um das Bild hinzu.

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```


3. **Deckkraft:** Passt die Transparenz des Bildes an.

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


5. **Sepia:** Wendet einen Sepia-Effekt auf das Bild an.

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


9. **Hue Rotate:** Dreht die Farbton des Bildes.

```css
img {
  filter: hue-rotate(90deg);
}
```


10. **Invertieren:** Invertiert die Farben des Bildes.

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


12. **Sepia:** Wendet einen Sepia-Effekt auf das Bild an.

```css
img {
  filter: sepia(100%);
}
```


13. **Drop-Shadow:** Fügt dem Bild einen Schlagschatten-Effekt hinzu.

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



Dies sind nur einige Beispiele der vielen CSS-Effekte und -Rahmen, die Sie auf Bilder anwenden können. Experimentieren Sie mit verschiedenen Stilen, um einzigartige und auffällige Designs zu schaffen!
