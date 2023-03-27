---
title: srcset et tailles de l'élément <img>
description: Un guide efficace et catégorique pour les images réactives en 2023
taskInputHash: 4c6b1b7d054d9d3e
lang: fr
sidebar_sort_priority: 1000
---
**Un guide efficace et catégorique pour les images en 2023**

Consultez la barre latérale pour une plongée en profondeur. Ceci est une référence rapide pour mettre à niveau les balises `<img>` afin de gérer les appareils modernes dans toutes leurs tailles et densités de pixels variées. Vous devez [savoir que les pixels ne sont pas égaux aux pixels](/fr/pixels-not-pixels) et que `devicePixelRatio` est plus susceptible d'être de l'ordre de 3,875 que de 1:1. Les téléphones modernes prétendent être larges de 320 à 428 pixels pour des raisons de lisibilité.

> Si votre image ne change jamais de taille, peu importe la largeur de la fenêtre de votre navigateur, vous devriez utiliser un [descripteur de densité plutôt](/fr/density-descriptors). Cela convient souvent aux logos, icônes et boutons.

Savez-vous quels sont vos [points de rupture](/fr/breakpoints) ? Vous aurez besoin de ces numéros pour affiner la solution ci-dessous - et au minimum le point de rupture de la largeur du port d'affichage où la zone de contenu principal cesse de grandir.


### La méthode facile

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Chien sur un vélo" />

<!-- Nous avons supposé que vous avez un point de rupture à 700px. 
      Et que sous cette largeur de port d'affichage, cette image prend 100% de la largeur, mais
      lorsque la fenêtre d'affichage est plus grande, l'image est limitée à 800 pixels CSS -->

<!-- Cela suppose également que vous utilisez un serveur d'images conforme à RIAPI tel que Imageflow.
     La production de variantes d'image à la volée est essentielle pour la santé mentale des développeurs. -->
```
