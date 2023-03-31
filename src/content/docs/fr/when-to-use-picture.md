---
title: Quand utiliser l'élément <picture>
description: Explique dans quelles situations vous devriez utiliser l'élément <picture>
taskInputHash: 0b07f8e9feba7038
lang: fr
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
L'élément `picture` est utilisé pour fournir plusieurs versions d'une image et détermine quelle version de l'image afficher en fonction de certaines conditions. Il est particulièrement utile pour optimiser les images pour différentes tailles d'écrans et résolutions, et est couramment utilisé en conception web responsive.

Voici quelques scénarios spécifiques où vous voudrez peut-être utiliser l'élément `picture` :

* **Écrans Retina :** Les écrans haute densité comme les écrans Retina d'Apple ont une densité de pixels plus élevée, ce qui signifie que les images peuvent paraître floues ou pixélisées si elles ne sont pas optimisées pour une haute résolution. Avec l'élément `picture`, vous pouvez fournir une version de l'image qui a deux fois plus de pixels que la version normale, de sorte qu'elle soit nette et claire sur les écrans Retina.

* **Différents ratios d'aspect :** Si vous concevez un site qui doit afficher des images avec différents ratios d'aspect (comme le paysage par rapport au portrait), vous pouvez utiliser l'élément `picture` pour fournir différentes versions de l'image qui sont optimisées pour chaque ratio d'aspect.

* **Limitations de bande passante :** Les images peuvent être des fichiers volumineux qui prennent beaucoup de bande passante, surtout sur les appareils mobiles. Avec l'élément `picture`, vous pouvez fournir des versions plus petites de l'image pour les appareils avec des écrans plus petits ou des connexions Internet plus lentes, ce qui peut aider à réduire les temps de chargement de la page.

* **Mises en page dirigées par l'art :** Parfois, vous voudrez peut-être présenter une image d'une certaine manière en fonction de la mise en page du reste de la page. Par exemple, vous voudrez peut-être montrer un gros plan du visage d'une personne sur les appareils mobiles, mais un plan plus large sur les appareils de bureau. L'élément `picture` vous permet de fournir différentes versions de l'image qui sont optimisées pour différentes mises en page.

Dans l'ensemble, l'élément `picture` est un outil puissant qui peut vous aider à optimiser vos images pour une variété de cas d'utilisation et à vous assurer qu'elles ont fière allure, quel que soit l'appareil ou la taille d'écran sur lequel elles sont affichées.
