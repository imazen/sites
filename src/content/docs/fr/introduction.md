---
title: '`srcset` & dimensions de `<img>`'
description: Un guide efficace et engagé pour les images réactives en 2023
taskInputHash: 0885934b6e1e9afa
lang: fr
sidebar_sort_priority: 1000
---
**Un guide efficace et engagé pour les images en 2023**

Consultez la barre latérale pour une plongée en profondeur. Ceci est la référence rapide pour mettre à niveau les balises `<img>` pour gérer les appareils modernes dans toutes leurs tailles et densités de pixels variées. Vous devriez [savoir que pixels != pixels](/en/pixels-not-pixels) et que `devicePixelRatio` est plus susceptible d'être d'environ 3,875 que 1:1. Les téléphones modernes prétendent être larges de 320-428px pour la lisibilité (en pixels CSS), mais ont de nombreux pixels de périphérique par pixel CSS.

> Si votre image ne change jamais de taille, peu importe la largeur de la fenêtre du navigateur, vous devriez utiliser un [descripteur de densité](/en/density-descriptors) à la place. C'est souvent adapté pour les logos, icônes et boutons.

Savez-vous ce que sont vos [points de rupture](/en/breakpoints) ? Vous aurez besoin de ces numéros pour affiner la solution ci-dessous - et au minimum le point de rupture de la largeur de la fenêtre d'affichage où la zone de contenu principal cesse de croître.


### La méthode facile

```html

<img src="img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Chien roulant à vélo" />

<!-- Nous avons supposé que vous avez un point de rupture à 700px. 
      Et que sous cette largeur de fenêtre d'affichage, cette image prend 100 % de la largeur, mais
      lorsque la vue est plus grande, l'image est limitée à 800 pixels CSS -->

<!-- Cela suppose que vous utilisez un serveur d'images conforme RIAPI tel que Imageflow. 
     La production de variantes d'images à la volée est essentielle pour la santé du développeur. -->
```
