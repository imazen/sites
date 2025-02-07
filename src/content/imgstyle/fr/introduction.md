---
taskInputHash: 70877134aec58265
title: Nouvelles fonctionnalités CSS pour les images
description: Nouvelles fonctionnalités CSS pour les images
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
Le CSS moderne donne aux développeurs des outils concis et efficaces pour une gestion d'images robuste :

- **Proportions Fixes :**  
  La propriété `aspect-ratio` impose des proportions fixes, stabilisant les mises en page en évitant les changements inattendus lors du chargement des images.  
  ```css  
  .container {  
    aspect-ratio: 16/9;  
  }  
  ```

- **Ajustement et Positionnement des Objets :**  
  Utilisez `object-fit` (par exemple, `cover`, `contain`) et `object-position` pour contrôler précisément le redimensionnement et l'alignement des images dans leurs conteneurs, éliminant ainsi les recadrages ou distorsions gênants.  
  ```css  
  img {  
    object-fit: cover;  
    object-position: center;  
  }  
  ```

- **Image-Set pour l'Adaptabilité de Résolution :**  
  La fonction `image-set()` offre un changement de résolution pour les images de fond, assurant une clarté optimale sur les appareils à haute densité de pixels (DPI).  
  ```css  
  .hero {  
    background-image: image-set(url("hero.png") 1x, url("hero@2x.png") 2x);  
  }  
  ```

- **Améliorations Supplémentaires :**  
  `image-rendering` affine les algorithmes de redimensionnement pour un rendu net (idéal pour l'art en pixels), tandis que `filter` permet d'appliquer des effets visuels dynamiques directement en CSS.

Ces fonctionnalités simplifient considérablement la présentation des images, réduisant ainsi la dépendance aux astuces JavaScript et aux solutions complexes, facilitant ainsi grandement les tâches de développement quotidiennes.
