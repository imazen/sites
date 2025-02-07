---
taskInputHash: 0522a82d32e6afba
title: Descripteurs de largeur et de densité
description: Exemples d'utilisation des descripteurs de largeur et de densité dans `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
Comprendre les descripteurs de largeur (w) et de densité (x) dans `srcset`. Utilisez des exemples et utilisez Markdown.

> `srcset` est un attribut HTML qui permet aux développeurs de fournir plusieurs sources d'images avec différentes résolutions ou densités de pixels, et de laisser le navigateur sélectionner l'image appropriée en fonction des caractéristiques d'affichage de l'appareil. L'attribut `srcset` utilise une combinaison des descripteurs `URL` et `w` ou `x` pour spécifier les images.
## Descripteur de largeur (`w`)

> Le descripteur `w` est utilisé pour spécifier la largeur d'une image en pixels. Il est utilisé lorsque nous voulons fournir au navigateur les dimensions d'une image afin qu'il puisse choisir l'image appropriée pour l'espace d'écran disponible.

> La syntaxe pour utiliser le descripteur `w` dans `srcset` est la suivante :

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Exemple d'image">
```

> Dans l'exemple ci-dessus, nous avons fourni au navigateur trois images et leurs largeurs correspondantes en pixels. Le navigateur choisira l'image avec la largeur la plus proche de l'espace d'écran disponible.
## Descripteur de densité (`x`)

> Le descripteur `x` est utilisé pour spécifier la densité de pixels d'une image, qui est le rapport des pixels physiques aux pixels CSS. Il est utilisé lorsque nous voulons fournir au navigateur différentes versions de la même image avec différentes densités de pixels.

> La syntaxe pour utiliser le descripteur `x` dans `srcset` est la suivante :

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Exemple d'image">
```

> Dans l'exemple ci-dessus, nous avons fourni au navigateur trois images et leurs densités de pixels correspondantes. Le navigateur choisira l'image avec la densité de pixels la plus proche de celle de l'écran de l'appareil.

> Notez que les descripteurs `w` et `x` peuvent être utilisés ensemble dans le même attribut `srcset` pour fournir au navigateur plus d'options parmi lesquelles choisir.
