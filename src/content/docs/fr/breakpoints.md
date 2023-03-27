---
title: Points de rupture et images
description: >-
  Pourquoi certains points de rupture (mais pas tous) ont de l'importance pour
  vos images
taskInputHash: 93d9bc4002109180
lang: fr
---
### Contexte

Les petits écrans et les grands écrans nécessitent des mises en page différentes. Dans le cadre de `srcset` et `sizes`, nous devons déterminer 

Les développeurs web doivent décider ce qu'il faut réduire, masquer ou déplacer sur les écrans plus petits - ou plus communément, ce qu'il faut agrandir, révéler ou ajouter sur les grands écrans. Ils disposent également de très peu d'informations. L'utilisateur est-il sur une tablette ou sur un téléphone en mode paysage - ou dans une petite fenêtre de navigateur ?

Nous devons choisir une largeur de fenêtre d'affichage arbitraire où la mise en page change. Cela s'appelle un **point de rupture**. C'est un nombre arbitraire de pixels CSS ([pas des pixels de l'appareil](/fr/pixels-not-pixels)). Polypane a un [excellent article](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sur les points de rupture couramment utilisés.

Certaines images (comme les logos, les icônes ou les boutons) peuvent être immunisées contre les changements de mise en page causés par ces points de rupture (et être bien avec les [descripteurs de densité de srcset](/fr/density-descriptors)).

Les images de contenu principal seront limitées par la taille de leur conteneur. En règle générale, la zone de contenu principal d'une page sera limitée à une certaine largeur sur les plus grands écrans, une `max-width`, mais sur les petits écrans, la zone de contenu principal remplira l'ensemble de la fenêtre d'affichage.

Si vous avez plus d'une colonne à certains points de rupture, il sera plus difficile de calculer les règles de dimensionnement effectives, car le pourcentage de la largeur de la fenêtre d'affichage que l'image occupe changera.

### La méthode facile

Ceci étant dit, ne vous en faites pas trop. Vous serez probablement très bien avec l'approximation suivante :

1. À quelle taille la colonne principale (ou le conteneur de l'image) cesse-t-elle de grandir ? Jusqu'à cette largeur de fenêtre d'affichage, nous pouvons utiliser `100vw` pour l'attribut `sizes` de l'image pour dire que l'image occupe 100 % de la largeur de la fenêtre d'affichage.
2. Quelle est la largeur maximale que le conteneur atteint jamais ? Nous pouvons fixer cela comme une largeur fixe pour tout le reste.

Si votre réponse à 1 était 700px et votre réponse à 2 était 800px, vous pouvez utiliser l'attribut `sizes` suivant :

```html
<!-- Il s'agit de pixels CSS, pas de pixels d'image ou d'appareil. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```


> On pourrait penser que le navigateur pourrait gérer toutes ces calculs pour nous en fonction des feuilles de style. Malheureusement, les navigateurs sont très impatients de choisir une URL d'image *avant* le téléchargement des feuilles de style. Nous devons donc effectuer les calculs nous-mêmes, ce qui leur sert bien si nous ne le faisons pas parfaitement.
