---
title: Descripteurs de densité et srcset
description: Exemples d'utilisation des descripteurs de densité dans `srcset`
taskInputHash: 935c76acf22c926c
lang: fr
---
Srcset avec descripteurs de densité fournit une méthode simple et efficace pour livrer l'image la plus adaptée à chaque appareil de l'utilisateur, améliorant les performances et l'expérience utilisateur. Ce guide vous guidera à travers l'essentiel de l'utilisation de srcset avec descripteurs de densité et fournira des exemples de balisage pour votre commodité.
## Qu'est-ce que Srcset avec descripteurs de densité?

Srcset est un attribut HTML conçu pour vous permettre de spécifier plusieurs sources d'image pour un seul élément `<img>`. Les descripteurs de densité (`x`) sont utilisés en conjonction avec srcset pour fournir des images de résolution différente en fonction de la densité de pixels de l'affichage de l'utilisateur.
## Quand utiliser Srcset avec descripteurs de densité

L'utilisation de srcset avec descripteurs de densité est particulièrement utile lorsque vous souhaitez :
1. Servir des images haute résolution aux affichages haute densité de pixels (par exemple, les affichages Retina) tout en fournissant des images de résolution inférieure aux affichages standard.
2. Améliorer les performances de la page en livrant la taille d'image la plus appropriée à chaque appareil de l'utilisateur.
## Implémentation de Srcset avec descripteurs de densité

Pour utiliser srcset avec descripteurs de densité, suivez ces étapes :
1. Préparez vos images dans des résolutions différentes.
2. Ajoutez l'attribut `srcset` à l'élément `<img>`, en incluant les sources d'image et les descripteurs de densité correspondants.
3. Ajoutez l'attribut `sizes` (facultatif) pour spécifier la taille de l'image telle qu'elle sera affichée à l'écran.
### Exemple de balisage

Voici un exemple d'implémentation de srcset avec descripteurs de densité dans votre balisage :

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Une image d'exemple">
```



Cet exemple de balisage comprend :
- **src** : La source d'image par défaut, affichée si le navigateur ne prend pas en charge srcset.
- **srcset** : La liste des sources d'image et leurs descripteurs de densité (1x, 2x, 3x). Le navigateur choisira l'image la plus appropriée en fonction de l'affichage de l'utilisateur.
- **alt** : Une description de l'image à des fins d'accessibilité.


Et voilà ! Vous avez implémenté avec succès srcset avec descripteurs de densité, améliorant les performances et l'expérience utilisateur de votre site Web.
