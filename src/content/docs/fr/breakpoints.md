---
taskInputHash: d12f911461963db9
title: Points de rupture et images
description: >-
  Pourquoi certains points de rupture (mais pas tous) sont importants pour vos
  images
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: fr
---
### Contexte

Les petits écrans et les grands moniteurs nécessitent des mises en page différentes. Pour les besoins des attributs `srcset` et `sizes`, nous devons savoir à quel point la mise en page change.

Les développeurs web doivent décider ce qu'il faut réduire, masquer ou déplacer sur des écrans plus petits - ou plus communément, ce qu'il faut élargir, révéler ou ajouter sur des écrans plus grands. Ils ont également très peu d'informations à exploiter. L'utilisateur est-il sur une tablette ou un téléphone en mode paysage - ou une petite fenêtre de navigateur ?

Nous devons choisir une largeur de fenêtre d'affichage arbitraire où la mise en page change. Cela s'appelle un **point de rupture**. C'est un nombre arbitraire de pixels CSS ([pas de pixels d'appareil](/fr/pixels-not-pixels)). Polypane a un [excellent article](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sur les points de rupture couramment utilisés. 

Certaines images (comme les logos ou les icônes ou les boutons) pourraient être à l'abri des changements de mise en page causés par ces points de rupture (et être compatibles avec les [descripteurs de densité de srcset](/fr/density-descriptors)).

Les images du contenu principal seront limitées par la taille de leur conteneur. Typiquement, la zone de contenu principal d'une page sera limitée à une certaine largeur sur les plus grands écrans, une `max-width`, mais sur les petits écrans, la zone de contenu principal remplira l'ensemble de la fenêtre d'affichage.

Si vous avez plus d'une colonne à certains points de rupture, il sera plus difficile de calculer les règles de dimensionnement effectives, puisque le pourcentage de la largeur de la fenêtre d'affichage que l'image occupe va changer.

### La méthode facile

Cela dit, ne compliquez pas trop les choses. Vous serez probablement très satisfait de l'approximation suivante :

1. À quelle taille la colonne principale (ou le conteneur de l'image) cesse-t-elle de croître ? Jusqu'à cette largeur de fenêtre d'affichage, nous pouvons utiliser `100vw` pour l'attribut `sizes` de l'image afin de dire que l'image occupe 100 % de la largeur de la fenêtre d'affichage.  
2. Quelle est la largeur maximale que ce conteneur atteint jamais ? Nous pouvons définir cela comme une `width` fixe pour tout le reste.

Si votre réponse à la question 1 était 700px et votre réponse à la question 2 était 800px, vous pouvez utiliser l'attribut `sizes` suivant :

```html
<!-- Ce sont des pixels CSS, pas des pixels d'appareil ou des pixels d'image. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Vous penseriez que le navigateur pourrait gérer toutes ces calculs de manière élégante en fonction du CSS. Malheureusement, les navigateurs sont très pressés de choisir une URL d'image *avant* que les feuilles de style ne soient téléchargées. Nous devons donc faire les calculs nous-mêmes, et tant pis pour eux si nous ne sommes pas parfaits.
