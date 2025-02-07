---
taskInputHash: 2ecc10a07e96bfb8
title: Quand utiliser l'élément `<picture>`
description: Explique dans quelles situations vous devriez utiliser l'élément `<picture>`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
L'élément `picture` est utilisé pour fournir plusieurs versions d'une image et déterminer quelle version de l'image afficher en fonction de certaines conditions. Il est particulièrement utile pour optimiser les images pour différentes tailles et résolutions d'écran, et est couramment utilisé dans la conception web réactive. Voici quelques scénarios spécifiques où vous pourriez vouloir utiliser l'élément `picture`:

* **Écrans Retina :** Les écrans à haute densité comme les écrans Retina d'Apple ont une densité de pixels plus élevée, ce qui signifie que les images peuvent paraître floues ou pixelisées si elles ne sont pas optimisées pour une haute résolution. Avec l'élément `picture`, vous pouvez fournir une version de l'image qui a deux fois plus de pixels que la version normale, afin qu'elle apparaisse nette et claire sur les écrans Retina.

* **Différents rapports d'aspect :** Si vous concevez un site qui doit afficher des images avec différents rapports d'aspect (comme paysage vs portrait), vous pouvez utiliser l'élément `picture` pour fournir différentes versions de l'image optimisées pour chaque rapport d'aspect.

* **Limitations de la bande passante :** Les images peuvent être des fichiers volumineux qui consomment beaucoup de bande passante, surtout sur les appareils mobiles. Avec l'élément `picture`, vous pouvez fournir des versions plus petites de l'image pour les appareils avec des écrans plus petits ou des connexions Internet plus lentes, ce qui peut aider à réduire les temps de chargement des pages.

* **Mises en page dirigées par l'art :** Parfois, vous souhaitez présenter une image d'une certaine manière en fonction de la mise en page du reste de la page. Par exemple, vous pourriez vouloir montrer un gros plan du visage d'une personne sur des appareils mobiles, mais une vue plus large sur les appareils de bureau. L'élément `picture` vous permet de fournir différentes versions de l'image optimisées pour différentes mises en page.

Dans l'ensemble, l'élément `picture` est un outil puissant qui peut vous aider à optimiser vos images pour une variété de cas d'utilisation et à garantir qu'elles soient superbes quel que soit l'appareil ou la taille d'écran sur lesquels elles sont visionnées.
