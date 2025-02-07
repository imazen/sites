---
taskInputHash: a12f86c9d9ac23e9
title: Points de rupture et images
description: >-
  Pourquoi certains points de rupture (mais pas tous) sont importants pour vos
  images
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
### Contexte

Les petits écrans et les grands moniteurs nécessitent des mises en page différentes. Pour l'utilisation de `srcset` et `sizes`, nous devons savoir à quel moment la mise en page change.

Les développeurs web doivent décider ce qu'il faut rétrécir, cacher ou déplacer sur les petits écrans - ou plus communément, ce qu'il faut agrandir, révéler ou ajouter sur les grands écrans. Ils disposent également de très peu d'informations. L'utilisateur est-il sur une tablette ou un téléphone en mode paysage - ou une petite fenêtre de navigateur ?

Nous devons choisir une largeur de fenêtre d'affichage arbitraire où la mise en page change. Cela s'appelle un **point de rupture**. C'est un nombre arbitraire de pixels CSS ([pas des pixels d'appareil](/fr/pixels-not-pixels)). Polypane a un [excellent article](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sur les points de rupture couramment utilisés.

Certaines images (comme les logos, icônes ou boutons) peuvent être insensibles aux changements de mise en page causés par ces points de rupture (et être satisfaites avec les [descripteurs de densité de srcset](/fr/density-descriptors)).

Les images de contenu principal seront limitées par la taille de leur conteneur. En général, la zone de contenu principal d'une page sera limitée à une certaine largeur sur les plus grands écrans, une `max-width`, mais sur les petits écrans, la zone de contenu principal remplira l'ensemble de la fenêtre d'affichage.

Si vous avez plus d'une colonne à certains points de rupture, il deviendra plus difficile de calculer les règles de dimensionnement effectives, puisque le pourcentage de la largeur de la fenêtre d'affichage que l'image occupe changera.

### La méthode facile

Cela dit, ne compliquez pas trop les choses. Vous serez probablement très satisfait de l'approximation suivante :

1. À quelle taille la colonne principale (ou le conteneur de l'image) cesse-t-elle de croître ? Jusqu'à cette largeur de fenêtre d'affichage, nous pouvons utiliser `100vw` pour l'attribut `sizes` de l'image pour dire que l'image occupe 100% de la largeur de la fenêtre d'affichage.  
2. Quelle est la largeur maximale que ce conteneur atteint ? Nous pouvons définir cela comme une `width` fixe pour tout le reste. 

Si vos réponses à 1 étaient 700px et à 2 étaient 800px, vous pouvez utiliser l'attribut `sizes` suivant :

```html
<!-- Ce sont des pixels CSS, pas des pixels d'appareil ou d'image. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Vous penseriez que le navigateur pourrait bien gérer tous ces calculs pour nous en se basant sur le CSS. Malheureusement, les navigateurs sont exagérément prompts à choisir une URL d'image *avant* que les feuilles de style ne soient téléchargées. Nous devons donc faire les calculs nous-mêmes, et cela leur sert bien s'ils ne sont pas parfaits.
