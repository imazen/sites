---
taskInputHash: 8f0cd4d6d9d6af08
title: Descripteurs de densité et srcset
description: Exemples d'utilisation des descripteurs de densité dans `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
L'attribut Srcset avec des descripteurs de densité offre une méthode simple et efficace pour diffuser l'image la plus appropriée sur chaque appareil utilisateur, améliorant ainsi les performances et l'expérience utilisateur. Ce guide vous guidera à travers les éléments essentiels de l'utilisation de srcset avec des descripteurs de densité et fournira des exemples de balisage pour votre convenance.

## Qu'est-ce que Srcset avec des Descripteurs de Densité ?

Srcset est un attribut HTML conçu pour vous permettre de spécifier plusieurs sources d'images pour un seul élément `<img>`. Les descripteurs de densité (`x`) sont utilisés en conjonction avec srcset pour fournir des images de différentes résolutions en fonction de la densité de pixels de l'affichage de l'utilisateur.

## Quand Utiliser Srcset avec des Descripteurs de Densité

L'utilisation de srcset avec des descripteurs de densité est particulièrement utile lorsque vous souhaitez :
1. Proposer des images haute résolution aux écrans haute-DPI (par exemple, les écrans Retina) tout en fournissant des images de résolution plus basse aux écrans standard.
2. Améliorer les performances de la page en diffusant la taille d'image la plus appropriée à chaque appareil utilisateur.

## Mise en Œuvre de Srcset avec des Descripteurs de Densité

Pour utiliser srcset avec des descripteurs de densité, suivez ces étapes :
1. Préparez vos images dans différentes résolutions.
2. Ajoutez l'attribut `srcset` à l'élément `<img>`, en incluant les sources d'images et les descripteurs de densité correspondants.
3. Ajoutez l'attribut `sizes` (facultatif) pour spécifier la taille de l'image telle qu'elle sera affichée à l'écran.

### Exemple de Balisage

Voici un exemple de la mise en œuvre de srcset avec des descripteurs de densité dans votre balisage :

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Une image d'exemple">
```

Cet exemple de balisage inclut : 
- **src** : La source d'image par défaut, affichée si le navigateur ne prend pas en charge srcset.
- **srcset** : La liste des sources d'images et de leurs descripteurs de densité (1x, 2x, 3x). Le navigateur choisira l'image la plus appropriée en fonction de l'affichage de l'utilisateur.
- **alt** : Une description de l'image à des fins d'accessibilité.

Et voilà ! Vous avez réussi à mettre en œuvre srcset avec des descripteurs de densité, améliorant ainsi les performances et l'expérience utilisateur de votre site web.
