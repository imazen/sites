---
taskInputHash: 3ffa61f4b689b072
title: Fullständig CSS-referens
description: 'Fullständig CSS-referens för effekter, med exempel'
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---
Här är en omfattande referens av CSS-effekter och ramar som du kan använda på bilder, tillsammans med exempel för varje:

1. **Ram:** Lägger till en ram runt bilden.

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


3. **Opacitet:** Justerar bildens genomskinlighet.

```css
img {
  opacity: 0.5;
}
```


4. **Gråskala:** Konverterar bilden till gråskala.

```css
img {
  filter: grayscale(100%);
}
```


5. **Sepia:** Applicerar en sepiatoning på bilden.

```css
img {
  filter: sepia(100%);
}
```


6. **Sudda ut:** Suddar ut bilden.

```css
img {
  filter: blur(5px);
}
```


7. **Ljusstyrka:** Justerar bildens ljusstyrka.

```css
img {
  filter: brightness(50%);
}
```


8. **Kontrast:** Justerar bildens kontrast.

```css
img {
  filter: contrast(200%);
}
```


9. **Färgrotation:** Roterar bildens färgnyans.

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


11. **Mättnad:** Justerar bildens mättnad.

```css
img {
  filter: saturate(200%);
}
```


12. **Sepia:** Applicerar en sepiatoning på bilden.

```css
img {
  filter: sepia(100%);
}
```


13. **Släppskugga:** Lägger till en släppskugga på bilden.

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
