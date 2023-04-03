---
title: Fullständig CSS-referens
description: 'Fullständig CSS-referens för effekter, med exempel'
taskInputHash: 17d0eb4c5ef16996
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Här är en omfattande referens av CSS-effekter och ramar som du kan tillämpa på bilder, tillsammans med exempel för varje:

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


3. **Opacitet:** Justerar bilden genomskinlighet.

```css
img {
  opacity: 0.5;
}
```


4. **Gråskala:** Omvandlar bilden till gråskala.

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


6. **oskärpa:** Förblir bilden.

```css
img {
  filter: blur(5px);
}
```


7. **Ljusstyrka:** Justerar ljusstyrkan på bilden.

```css
img {
  filter: brightness(50%);
}
```


8. **Kontrast:** Justerar kontrasten på bilden.

```css
img {
  filter: contrast(200%);
}
```


9. **Hue Rotate:** Rotera nyansen på bilden.

```css
img {
  filter: hue-rotate(90deg);
}
```


10. **Invertera:** Inverterar färgerna på bilden.

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


12. **Sepia:** Gäller en sepia effekt på bilden.

```css
img {
  filter: sepia(100%);
}
```


13. **Drop-Shadow:** Lägger till en skugga effekt på bilden.

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```


14. **Övergång:** Lägger till en övergångseffekt på bilden.

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



Dessa är bara några exempel på de många CSS-effekter och ramar som du kan tillämpa på bilder. Prova olika stilar för att skapa unika och iögonfallande designer!
