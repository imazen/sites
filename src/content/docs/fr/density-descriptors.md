---
taskInputHash: c42b446693b62c31
title: Descripteurs de densité et `srcset`
description: Exemples d'utilisation des descripteurs de densité dans `srcset`
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: fr
---

Le `srcset` avec des descripteurs de densité fournit une méthode simple et efficace pour livrer l'image la plus appropriée à l'appareil de chaque utilisateur, améliorant ainsi les performances et l'expérience utilisateur. Ce guide vous guidera à travers les éléments essentiels de l'utilisation de `srcset` avec des descripteurs de densité et fournira des exemples de balisage pour votre commodité.

## Qu'est-ce que le Srcset avec des Descripteurs de Densité ?

`Srcset` est un attribut HTML conçu pour vous permettre de spécifier plusieurs sources d'image pour un seul élément `<img>`. Les descripteurs de densité (`x`) sont utilisés en conjonction avec `srcset` pour fournir des images de résolutions différentes en fonction de la densité de pixels de l'affichage de l'utilisateur.

## Quand Utiliser Srcset avec des Descripteurs de Densité

L'utilisation de `srcset` avec des descripteurs de densité est particulièrement utile lorsque vous souhaitez :
1. Servir des images haute résolution aux écrans à haute densité de pixels (par exemple, écrans Retina) tout en fournissant des images de plus basse résolution aux écrans standards.
2. Améliorer les performances de la page en livrant la taille d'image la plus appropriée à l'appareil de chaque utilisateur.

## Mise en Œuvre de Srcset avec des Descripteurs de Densité

Pour utiliser `srcset` avec des descripteurs de densité, suivez ces étapes :
1. Préparez vos images avec différentes résolutions.
2. Ajoutez l'attribut `srcset` à l'élément `<img>`, incluant les sources d'image et les descripteurs de densité correspondants.
3. Ajoutez l'attribut `sizes` (facultatif) pour spécifier la taille de l'image telle qu'elle sera affichée à l'écran.

### Exemple de Balisage

Voici un exemple de la façon de mettre en œuvre srcset avec des descripteurs de densité dans votre balisage :

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Une image d'exemple">
```

Cet exemple de balisage comprend : 
- **src** : La source d'image par défaut, affichée si le navigateur ne supporte pas `srcset`. 
- **srcset** : La liste des sources d'image et leurs descripteurs de densité (1x, 2x, 3x). Le navigateur choisira l'image la plus appropriée en fonction de l'affichage de l'utilisateur. 
- **alt** : Une description de l'image à des fins d'accessibilité.

Et voilà ! Vous avez mis en œuvre avec succès `srcset` avec des descripteurs de densité, améliorant les performances et l'expérience utilisateur de votre site web.
