---
taskInputHash: a8a7a186b4013dad
title: >-
  Traduisez également avec soin le titre et la description de l'article ;
  n'utilisez pas & ni < ni >
   Descripteurs de largeur et de densité
description: Exemples d'utilisation des descripteurs de largeur et de densité dans `srcset`
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: fr
---
Comprendre les descripteurs de largeur (w) et de densité (x) dans `srcset`. Utilisez des exemples et utilisez Markdown.

> `srcset` est un attribut HTML qui permet aux développeurs de fournir plusieurs sources d'images avec différentes résolutions ou densités de pixels, et laisse le navigateur sélectionner l'image appropriée en fonction des caractéristiques d'affichage de l'appareil. L'attribut `srcset` utilise une combinaison de l'`URL` et des descripteurs `w` ou `x` pour spécifier les images.
## Descripteur de largeur (`w`)

> Le descripteur `w` est utilisé pour spécifier la largeur d'une image en pixels. Il est utilisé lorsque nous voulons fournir au navigateur les dimensions d'une image afin qu'il puisse choisir l'image appropriée pour l'espace d'écran disponible.

> La syntaxe pour utiliser le descripteur `w` dans `srcset` est la suivante :

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Image Exemple">
```



> Dans l'exemple ci-dessus, nous avons fourni au navigateur trois images et leurs largeurs correspondantes en pixels. Le navigateur sélectionnera l'image avec la largeur la plus proche de l'espace d'écran disponible.
## Descripteur de densité (`x`)

> Le descripteur `x` est utilisé pour spécifier la densité de pixels d'une image, qui est le rapport entre les pixels physiques et les pixels CSS. Il est utilisé lorsque nous voulons fournir au navigateur différentes versions de la même image avec différentes densités de pixels.

> La syntaxe pour utiliser le descripteur `x` dans `srcset` est la suivante :

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Image Exemple">
```


> Dans l'exemple ci-dessus, nous avons fourni au navigateur trois images et leurs densités de pixels correspondantes. Le navigateur sélectionnera l'image avec la densité de pixels la plus proche de l'écran de l'appareil.

> Notez que les descripteurs `w` et `x` peuvent être utilisés ensemble dans le même attribut `srcset` pour fournir au navigateur plus d'options parmi lesquelles choisir.
