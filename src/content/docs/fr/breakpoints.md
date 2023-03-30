---
title: Points de rupture et images
description: >-
  Pourquoi certains points de rupture (mais pas tous) sont importants pour vos
  images
taskInputHash: 40287daab3fdebb3
lang: fr
---
### Contexte

Les petits écrans et les grands moniteurs nécessitent des mises en page différentes. Pour les besoins de `srcset` et de `sizes`, nous devons savoir à quel moment la mise en page change.

Les développeurs Web doivent décider ce qu'il faut réduire, masquer ou déplacer sur les petits écrans - ou plus couramment, ce qu'il faut étendre, révéler ou ajouter sur les grands écrans. Ils disposent également de très peu d'informations. L'utilisateur est-il sur une tablette ou un téléphone en mode paysage - ou une petite fenêtre de navigateur ?

Nous devons choisir une largeur de viewport arbitraire où la mise en page change. Cela s'appelle un **point de rupture**. C'est un nombre arbitraire de pixels CSS ([pas de pixels d'appareil](/fr/pixels-not-pixels)). Polypane a un [excellent article](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sur les points de rupture couramment utilisés.

Certaines images (comme les logos ou les icônes ou les boutons) pourraient être immunisées contre les changements de mise en page causés par ces points de rupture (et être fines avec les [descripteurs de densité srcset](/fr/density-descriptors)).

Les images du contenu principal seront limitées par la taille de leur conteneur. En règle générale, la zone de contenu principal d'une page sera limitée à une certaine largeur sur les plus grands écrans, une `max-width`, mais sur les petits écrans, la zone de contenu principal remplira l'ensemble du viewport.

Si vous avez plus d'une colonne à certains points de rupture, il sera plus difficile de calculer les règles de dimensionnement effectives, car le pourcentage de la largeur du viewport que l'image occupe changera.

### La méthode facile

Cela étant dit, ne pensez pas trop à cela. Vous serez probablement très bien avec la méthode d'approximation suivante :

1. À quelle taille la colonne principale (ou le conteneur de l'image) cesse-t-elle de croître ? Jusqu'à cette largeur de viewport, nous pouvons utiliser `100vw` pour l'attribut `sizes` de l'image pour dire que l'image occupe 100 % de la largeur du viewport.
2. Quelle est la largeur maximale que le conteneur atteint jamais ? Nous pouvons fixer cela comme une largeur fixe pour tout le reste.

Si votre réponse à 1 était 700px et votre réponse à 2 était 800px, vous pouvez utiliser l'attribut `sizes` suivant :

```html
<!-- Ce sont des pixels CSS, pas des pixels d'appareil ou d'image. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```



> Vous pensiez que le navigateur pourrait gérer toutes ces calculs pour nous en fonction des CSS. Malheureusement, les navigateurs sont agressivement désireux de choisir une URL d'image *avant* le téléchargement des feuilles de style. Nous devons donc effectuer les calculs nous-mêmes, et ils méritent bien si nous ne les obtenons pas parfaitement.
