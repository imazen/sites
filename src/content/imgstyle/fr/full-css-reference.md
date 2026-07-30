---
taskInputHash: b2c459cc24793db6
title: Référence complète CSS
description: 'Référence complète CSS pour les effets, avec exemples'
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: fr
---
Voici une référence complète des effets CSS et des bordures que vous pouvez appliquer aux images, avec des exemples pour chacun :

1. **Border :** Ajoute une bordure autour de l'image.

```css
img {
  border: 2px solid black;
}
```

2. **Box Shadow :** Ajoute une ombre autour de l'image.

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

3. **Opacity :** Ajuste la transparence de l'image.

```css
img {
  opacity: 0.5;
}
```

4. **Grayscale :** Convertit l'image en niveaux de gris.

```css
img {
  filter: grayscale(100%);
}
```

5. **Sepia :** Applique un effet sépia à l'image.

```css
img {
  filter: sepia(100%);
}
```

6. **Blur :** Floute l'image.

```css
img {
  filter: blur(5px);
}
```

7. **Brightness :** Ajuste la luminosité de l'image.

```css
img {
  filter: brightness(50%);
}
```

8. **Contrast :** Ajuste le contraste de l'image.

```css
img {
  filter: contrast(200%);
}
```

9. **Hue Rotate :** Fait pivoter la teinte de l'image.

```css
img {
  filter: hue-rotate(90deg);
}
```

10. **Invert :** Inverse les couleurs de l'image.

```css
img {
  filter: invert(100%);
}
```

11. **Saturate :** Ajuste la saturation de l'image.

```css
img {
  filter: saturate(200%);
}
```

12. **Sepia :** Applique un effet sépia à l'image.

```css
img {
  filter: sepia(100%);
}
```

13. **Drop-Shadow :** Ajoute un effet d'ombre portée à l'image.

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```

14. **Transition :** Ajoute un effet de transition à l'image.

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```

15. **Animation :** Ajoute un effet d'animation à l'image.

```css
@keyframes slidein {
  from {
    transform: translateX(100%); /* Traduire sur l'axe X */
  }
  to {
    transform: translateX(0); /* Traduire sur l'axe X */
  }
}
img {
  animation: slidein 1s ease;
}
```

Ce ne sont que quelques exemples des nombreux effets CSS et bordures que vous pouvez appliquer aux images. Expérimentez avec différents styles pour créer des designs uniques et accrocheurs !
