---
title: Riferimento completo di CSS
description: 'Riferimento completo di CSS per gli effetti, con esempi'
taskInputHash: c3593013ecb2579d
lang: it
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Ecco un riferimento completo di effetti CSS e bordi che puoi applicare alle immagini, insieme agli esempi per ciascuno:

1. **Bordo:** Aggiunge un bordo intorno all'immagine.

```css
img {
  border: 2px solid black;
}
```


2. **Box Shadow:** Aggiunge un'ombra intorno all'immagine.

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```


3. **Opacità:** Regola la trasparenza dell'immagine.

```css
img {
  opacity: 0.5;
}
```


4. **Grigio:** Converte l'immagine in scala di grigi.

```css
img {
  filter: grayscale(100%);
}
```


5. **Sepia:** Applica un effetto seppia all'immagine.

```css
img {
  filter: sepia(100%);
}
```


6. **Sfocatura:** Sfoca l'immagine.

```css
img {
  filter: blur(5px);
}
```


7. **Luminosità:** Regola la luminosità dell'immagine.

```css
img {
  filter: brightness(50%);
}
```


8. **Contrasto:** Regola il contrasto dell'immagine.

```css
img {
  filter: contrast(200%);
}
```


9. **Rotazione Croma:** Ruota il croma dell'immagine.

```css
img {
  filter: hue-rotate(90deg);
}
```


10. **Inverti:** Inverte i colori dell'immagine.

```css
img {
  filter: invert(100%);
}
```


11. **Saturazione:** Regola la saturazione dell'immagine.

```css
img {
  filter: saturate(200%);
}
```


12. **Sepia:** Applica un effetto seppia all'immagine.

```css
img {
  filter: sepia(100%);
}
```


13. **Ombra:** Aggiunge un effetto ombreggiatura all'immagine.

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```


14. **Transizione:** Aggiunge un effetto transizione all'immagine.

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```


15. **Animazione:** Aggiunge un effetto animazione all'immagine.

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

Questi sono solo alcuni esempi dei molti effetti CSS e bordi che puoi applicare alle immagini. Sperimenta con stili diversi per creare design unici ed accattivanti!
