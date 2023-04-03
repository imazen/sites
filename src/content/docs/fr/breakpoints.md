---
title: Points de rupture et images
description: >-
  Pourquoi certains points de rupture (mais pas tous) sont importants pour vos
  images
taskInputHash: 3a845882fe3c1d34
lang: fr
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Contexte

Les petits écrans et les grands écrans ont besoin de mises en page différentes. Pour les besoins de `srcset` et `sizes`, nous devons savoir à partir de quelle largeur la mise en page change.

Les développeurs web doivent décider ce qu'il convient de réduire, de masquer ou de déplacer sur les petits écrans - ou plus couramment, ce qu'il convient d'étendre, de révéler ou d'ajouter sur les grands écrans. Ils disposent également de très peu d'informations. L'utilisateur est-il sur une tablette ou sur un téléphone en mode paysage - ou sur une petite fenêtre de navigateur ?

Nous devons choisir une largeur de fenêtre d'affichage arbitraire où la mise en page change. C'est ce qu'on appelle un **point de rupture**. C'est un nombre arbitraire de pixels CSS ([pas de pixels d'appareil](/fr/pixels-pas-pixels)). Polypane a un [excellent article](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sur les.breakpoints couramment utilisés.

Certaines images (comme les logos, les icônes ou les boutons) peuvent être insensibles aux changements de mise en page causés par ces points de rupture (et être compatibles avec les [descripteurs de densité srcset](/fr/descripteurs-de-densite)).

Les images du contenu principal seront limitées par la taille de leur conteneur. En général, la zone de contenu principal d'une page sera limitée à une certaine largeur sur les plus grands écrans, une `max-width`, mais sur les petits écrans, la zone de contenu principal remplira l'ensemble de la fenêtre d'affichage.

Si vous avez plus d'une colonne à certains points de rupture, il sera plus difficile de calculer les règles dimensionnelles efficaces, car le pourcentage de la largeur de la fenêtre d'affichage que l'image occupe changera.

### La méthode facile

Cela dit, ne vous tracassez pas trop. Vous serez probablement très bien avec l'approximation suivante :

1. À quelle taille la colonne principale (ou le conteneurs d'images) cesse-t-elle de grandir ? Jusqu'à cette largeur de fenêtre d'affichage, nous pouvons utilisez `100vw` pour l'attribut `sizes` de l'image pour dire que l'image prend 100 % de la largeur de la fenêtre d'affichage.
2. Quelle est la largeur maximale que ce conteneur atteint jamais ? Nous pouvons fixer cela comme une largeur fixe pour tout le reste.

Si votre réponse à la question 1 était 700px et votre réponse à la question 2 était 800px, vous pouvez utiliser l'attribut `sizes` suivant :

```html
<!-- Ce sont des pixels CSS, pas des pixels d'appareil photo ou d'images -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Vous pensiez que le navigateur pouvait gérer toutes ces calculs pour nous en fonction du CSS. Malheureusement, les navigateurs sont très désireux de choisir une URL d'image *avant* que les feuilles de style soient téléchargées. Nous devons donc faire les calculs nous-mêmes, et c'est bien ainsi s'ils ne sont pas parfaits.
