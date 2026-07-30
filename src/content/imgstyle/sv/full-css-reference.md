---
taskInputHash: 0e4e98dd6cedc8fe
title: Fullständig CSS-referens
description: 'Fullständig CSS-referens för effekter, med exempel'
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
Här är en omfattande referens av CSS-effekter och ramar som du kan applicera på bilder, tillsammans med exempel för varje:
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


3. **Opacity:** Justerar transparensen på bilden.

```css
img {
  opacity: 0.5;
}
```


4. **Grayscale:** Konverterar bilden till gråskalor.

```css
img {
  filter: grayscale(100%);
}
```


5. **Sepia:** Applicerar en sepiaeffekt på bilden.

```css
img {
  filter: sepia(100%);
}
```


6. **Blur:** Gör bilden suddig.

```css
img {
  filter: blur(5px);
}
```


7. **Brightness:** Justerar ljusstyrkan på bilden.

```css
img {
  filter: brightness(50%);
}
```


8. **Contrast:** Justerar kontrasten på bilden.

```css
img {
  filter: contrast(200%);
}
```


9. **Hue Rotate:** Roterar nyansen på bilden.

```css
img {
  filter: hue-rotate(90deg);
}
```


10. **Invert:** Inverterar färgerna på bilden.

```css
img {
  filter: invert(100%);
}
```


11. **Saturate:** Justerar mättnaden på bilden.

```css
img {
  filter: saturate(200%);
}
```


12. **Sepia:** Applicerar en sepiaeffekt på bilden.

```css
img {
  filter: sepia(100%);
}
```


13. **Drop-Shadow:** Lägger till en drop-shadow effekt på bilden.

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```


14. **Transition:** Lägger till en övergångseffekt på bilden.

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```


15. **Animation:** Lägger till en animationseffekt på bilden.

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



Detta är bara några exempel på de många CSS-effekter och ramar du kan använda på bilder. Experimentera med olika stilar för att skapa unika och iögonfallande designer!
