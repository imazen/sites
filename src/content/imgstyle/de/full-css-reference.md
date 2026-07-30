---
taskInputHash: 5f21f5216aad8b3e
title: Umfassende CSS-Referenz
description: 'Umfassende CSS-Referenz für Effekte, mit Beispielen'
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
Hier ist eine umfassende Referenz von CSS-Effekten und Rahmen, die Sie auf Bilder anwenden können, zusammen mit Beispielen für jedes:

1. **Rahmen:** Fügt einen Rahmen um das Bild hinzu.

```css
img {
  border: 2px solid black;
}
```

2. **Box-Shadow:** Fügt einen Schatten um das Bild hinzu.

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

3. **Transparenz:** Passt die Transparenz des Bildes an.

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

6. **Weichzeichnen:** Weichzeichnet das Bild.

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

9. **Farbton-Drehen:** Dreht den Farbton des Bildes.

```css
img {
  filter: hue-rotate(90deg);
}
```

10. **Invertieren:** Kehrt die Farben des Bildes um.

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

13. **Schattenwurf:** Fügt einen Schattenwerf-Effekt auf das Bild hinzu.

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```

14. **Übergang:** Fügt einen Übergangseffekt zum Bild hinzu.

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```

15. **Animation:** Fügt einen Animationseffekt zum Bild hinzu.

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

Dies sind nur einige Beispiele der vielen CSS-Effekte und Rahmen, die Sie auf Bilder anwenden können. Experimentieren Sie mit verschiedenen Stilen, um einzigartige und auffällige Designs zu erstellen!
