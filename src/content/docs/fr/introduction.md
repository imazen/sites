---
title: srcset & tailles de <img>
description: Un Guide efficace et sans détour pour les Images Adaptatives en 2023
taskInputHash: ddea94bb07b6ac00
lang: fr
sidebar_sort_priority: 1000
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
**Un Guide efficace et sans détour pour les Images en 2023**

Vérifiez la barre latérale pour une plongée plus profonde. Ceci est la référence rapide pour mettre à niveau les balises `<img>` pour gérer les appareils modernes dans toutes leurs tailles variables et densités de pixels. Vous devriez [savoir que les pixels != pixels](/fr/pixels-not-pixels) et que `devicePixelRatio` est plus susceptible d'être autour de 3,875 que 1:1. Les téléphones modernes prétendent être larges de 320-428 pixels pour la lisibilité (en pixels CSS), mais ont de nombreux pixels de périphérique par pixel CSS.

> Si votre image ne change jamais de taille, peu importe la largeur que vous donnez à la fenêtre du navigateur, vous devriez utiliser un [descripteur de densité](/fr/density-descriptors) à la place. Ceci convient souvent aux logos, icônes et boutons.

Savez-vous quels sont vos [points de rupture](/fr/breakpoints) ? Vous aurez besoin de ces nombres pour affiner la solution ci-dessous - et au minimum le point de rupture de largeur de viewport où la zone de contenu principal cesse de s'agrandir.


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
      Et que sous cette largeur de viewport, cette image prend 100% de la largeur, mais
      lorsque le viewport est plus grand, l'image est limitée à 800 pixels CSS -->

<!-- Ceci suppose que vous utilisez un serveur d'images compatible RIAPI tel qu'Imageflow. 
     La production de variantes d'image à la volée est essentielle pour la stabilité du développeur. -->
```
