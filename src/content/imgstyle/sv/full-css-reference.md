---
title: Fullständig CSS-referens
description: 'Fullständig CSS-referens för effekter, med exempel'
taskInputHash: a2dfd495505a6c32
lang: sv
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Här är en omfattande referens för CSS-effekter och ramar som du kan tillämpa på bilder, tillsammans med exempel för varje:

1. **Border:** Lägger till en ram runt bilden.

```css
img {
  border: 2px solid black;
}
```

2. **Box Shadow:** Lägger till en skugga runt bilden.

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

3. **Opacity:** Justerar transparensen för bilden.

```css
img {
  opacity: 0.5;
}
```

4. **Grayscale:** Konverterar bilden till gråskala.

```css
img {
  filter: grayscale(100%);
}
```

5. **Sepia:** Tillämpar en sepiaeffekt på bilden.

```css
img {
  filter: sepia(100%);
}
```

6. **Blur:** Luddar bilden.

```css
img {
  filter: blur(5px);
}
```

7. **Brightness:** Justera bildens ljusstyrka.

```css
img {
  filter: brightness(50%);
}
```

8. **Contrast:** Justerar bildens kontrast.

```css
img {
  filter: contrast(200%);
}
```

9. **Hue Rotate:** Rotera bilden.

```css
img {
  filter: hue-rotate(90deg);
}
```

10. **Invert:** Vänder bildens färger.

```css
img {
  filter: invert(100%);
}
```

11. **Saturate:** Justerar bildens mättnad.

```css
img {
  filter: saturate(200%);
}
```

12. **Sepia:** Tillämpar en sepiaeffekt på bilden.

```css
img {
  filter: sepia(100%);
}
```

13. **Drop-Shadow:** Lägger till en droppeffekt på bilden.

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```

14. **Transition:** Lägger till en transitions effekt på bilden.

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```

15. **Animation:** Lägger till en animations effekt på bilden.

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

Detta är bara några exempel på de många CSS-effekter och ramar som du kan tillämpa på bilder. Testa olika stilar för att skapa unika och ögonfallande designer!
