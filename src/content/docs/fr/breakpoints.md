---
title: Points de rupture et images
description: >-
  Pourquoi certains points de rupture (mais pas tous) sont importants pour vos
  images
taskInputHash: c2ab4bdd359c3735
lang: fr
---
### Contexte

Les petits écrans et les grands moniteurs ont besoin de mises en page différentes. Pour `srcset` et `sizes`, nous devons savoir à quel moment la mise en page change.

Les développeurs web doivent décider ce qu'il faut réduire, masquer ou déplacer sur les petits écrans - ou plus couramment, ce qu'il faut étendre, révéler ou ajouter sur les grands écrans. Ils disposent également de très peu d'informations. L'utilisateur utilise-t-il une tablette ou un téléphone en mode paysage - ou une petite fenêtre de navigateur?

Nous devons choisir une largeur de fenêtre d'affichage arbitraire où la mise en page change. Cela s'appelle un **point de rupture**. C'est un nombre arbitraire de pixels CSS ( [pas les pixels de l'appareil](/fr/pixels-not-pixels)). Polypane a un [excellent article](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sur les points de rupture couramment utilisés.

Certaines images (comme les logos, les icônes ou les boutons) peuvent être immunisées contre les changements de mise en page provoqués par ces points de rupture (et être satisfaites des [descripteurs de densité de srcset](/fr/density-descriptors)).

Les images de contenu principal seront limitées par la taille de leur conteneur. En général, la zone de contenu principal d'une page sera limitée à une certaine largeur sur les plus grands écrans, une `max-width`, mais sur les petits écrans, la zone de contenu principal remplira l'ensemble de la fenêtre d'affichage.

Si vous avez plus d'une colonne à certains points de rupture, il sera plus difficile de calculer les règles de dimensionnement effectives, car le pourcentage de la largeur de la fenêtre d'affichage que prend l'image va changer.

### La méthode facile

Cela dit, ne vous inquiétez pas trop de cela. Vous serez probablement très bien avec la méthode suivante :

1. À quelle taille la colonne principale (ou le conteneur de l'image) cesse-t-elle de se développer? Jusqu'à cette largeur de fenêtre d'affichage, nous pouvons utiliser `100vw` pour l'attribut `sizes` de l'image pour dire que l'image prend 100% de la largeur de la fenêtre d'affichage.  
2. Quelle est la largeur maximale que le conteneur atteint jamais? Nous pouvons fixer cela comme une largeur fixe pour tout le reste.

Si votre réponse à la première question est 700px et votre réponse à la seconde question est 800px, vous pouvez utiliser l'attribut `sizes` suivant :

```html
<!-- Ce sont des pixels CSS, pas des pixels d'appareil ou d'image. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```


> Vous pourriez penser que le navigateur pourrait facilement gérer tous ces calculs pour nous en fonction des feuilles de style CSS. Malheureusement, les navigateurs sont agressivement impatients de choisir une URL d'image *avant* que les feuilles de style soient téléchargées. Nous devons donc faire les calculs nous-mêmes, et ils méritent qu'on ne les fasse pas parfaitement.
