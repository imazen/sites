---
title: srcset et les tailles des balises <img>
description: Un guide efficace et partial sur les images réactives pour 2023
taskInputHash: 0885934b6e1e9afa
lang: fr
sidebar_sort_priority: 1000
---
**Un guide efficace et partial sur les images pour 2023**

Consultez la barre latérale pour découvrir en détail. Ceci est une référence rapide pour améliorer les balises `<img>` afin de gérer les nouveaux périphériques aux différentes tailles et densités de pixels. Vous devez [savoir que pixels != pixels](/fr/pixels-not-pixels)(en anglais) et que `devicePixelRatio` est plus susceptible d'être d'environ 3,875 que de 1:1. Les téléphones modernes se font passer pour des écrans larges de 320 à 428 px pour améliorer la lisibilité (en pixels CSS), mais ont de nombreux pixels de périphérique par pixel CSS.

> Si votre image ne change jamais de taille, quelle que soit la largeur de la fenêtre de navigateur, vous devriez utiliser un [descripteur de densité](/fr/density-descriptors) (en anglais) à la place. Cela convient souvent aux logos, icônes et boutons.

Savez-vous quels sont vos [points de rupture](/fr/breakpoints) (en anglais) ? Vous aurez besoin de ces chiffres pour affiner la solution ci-dessous - et au minimum le point de rupture de la largeur de la fenêtre d'affichage où la zone de contenu principal cesse de s'agrandir.


### La méthode facile

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Chien faisant du vélo" />

<!-- Nous avons supposé que vous avez un point de rupture à 700px. 
      Et qu'en dessous de cette largeur de fenêtre, l'image prend 100 % de la largeur, mais
      quand la fenêtre d'affichage est plus grande, l'image est limitée à 800 pixels CSS -->

<!-- Cela suppose que vous utilisez un serveur d'images compatible RIAPI tel que Imageflow. 
     La production de variantes d'image à la volée est essentielle pour la santé mentale du développeur. -->
```
