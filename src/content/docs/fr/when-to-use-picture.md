---
title: Quand utiliser l'élément <picture>
description: Explique dans quelles situations vous devriez utiliser l'élément <picture>
taskInputHash: 745796c8db3f3527
lang: fr
ignore: '/* cSpell:locale fr,en*/'
date_published: '2023-03-27'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
L'élément `picture` est utilisé pour fournir plusieurs versions d'une image et détermine quelle version de l'image afficher en fonction de certaines conditions. Il est particulièrement utile pour optimiser des images pour différentes tailles d'écran et résolutions, et est couramment utilisé dans la conception de sites Web adaptatifs.
Voici quelques scénarios spécifiques où vous voudriez utiliser l'élément `picture` :

* **Écrans Retina :** Les écrans haute densité tels que les écrans Retina d'Apple ont une densité de pixels plus élevée, ce qui signifie que les images peuvent sembler floues ou pixelisées si elles ne sont pas optimisées pour le haute résolution. Avec l'élément `picture`, vous pouvez fournir une version de l'image qui a deux fois plus de pixels que la version normale, ce qui la rend nette et claire sur les écrans Retina.

* **Différents ratios d'aspect :** Si vous concevez un site qui doit afficher des images avec différents ratios d'aspect (comme paysage contre portrait), vous pouvez utiliser l'élément `picture` pour fournir différentes versions de l'image optimisées pour chaque ratio d'aspect.

* **Limitations de la bande passante:** Les images peuvent être de grands fichiers qui consomment beaucoup de bande passante, surtout sur les appareils mobiles. Avec l'élément `picture`, vous pouvez fournir des versions plus petites de l'image pour les appareils avec des écrans plus petits ou des connexions Internet plus lentes, ce qui peut aider à réduire les temps de chargement des pages.

* **Mise en page d'art directionnel :** Parfois, vous pouvez vouloir présenter une image d'une certaine manière en fonction de la mise en page du reste de la page. Par exemple, vous pouvez vouloir afficher un gros plan du visage d'une personne sur les appareils mobiles, mais un plan plus large sur les ordinateurs de bureau. L'élément `picture` vous permet de fournir différentes versions de l'image optimisées pour différentes mises en page.

Dans l'ensemble, l'élément `picture` est un outil puissant qui peut vous aider à optimiser vos images pour une variété de cas d'utilisation et à vous assurer qu'elles ont fière allure, quel que soit l'appareil ou la taille d'écran sur lequel elles sont affichées.
