---
title: Référence complète CSS
description: 'Référence complète CSS pour les effets, avec des exemples'
taskInputHash: af79aea14d270817
lang: fr
ignore: '/* cSpell:locale fr,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Voici une référence complète des effets et bordures CSS que vous pouvez appliquer aux images, avec des exemples pour chacun :

1. **Bordure :** Ajoute une bordure autour de l'image.

```css
img {
  border: 2px solid black;
}
```

2. **Ombre de boîte :** Ajoute une ombre autour de l'image.

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

3. **Opacité :** Ajuste la transparence de l'image.

```css
img {
  opacity: 0,5;
}
```

4. **Niveau de gris :** Convertit l'image en niveau de gris.

```css
img {
  filter: grayscale(100%);
}
```

5. **Sépia :** Applique un effet sépia à l'image.

```css
img {
  filter: sepia(100%);
}
```

6. **Flou :** Floute l'image.

```css
img {
  filter: blur(5px);
}
```

7. **Luminosité :** Ajuste la luminosité de l'image.

```css
img {
  filter: brightness(50%);
}
```

8. **Contraste :** Ajuste le contraste de l'image.

```css
img {
  filter: contrast(200%);
}
```

9. **Rotation de la teinte :** Fait tourner la teinte de l'image.

```css
img {
  filter: hue-rotate(90deg);
}
```

10. **Inversion :** Inverse les couleurs de l'image.

```css
img {
  filter: invert(100%);
}
```

11. **Saturation :** Ajuste la saturation de l'image.

```css
img {
  filter: saturate(200%);
}
```

12. **Sépia :** Applique un effet sépia à l'image.

```css
img {
  filter: sepia(100%);
}
```

13. **Ombre portée :** Ajoute un effet d'ombre portée à l'image.

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

Ce ne sont que quelques exemples des nombreux effets et bordures CSS que vous pouvez appliquer aux images. Expérimentez avec différents styles pour créer des designs uniques et accrocheurs !
