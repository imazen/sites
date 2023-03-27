---
title: srcset et tailles d'<img>
description: Un guide efficace et convaincant sur les images adaptatives pour 2023
taskInputHash: 9067da6b012a9380
lang: fr
sidebar_sort_priority: 1000
---
**Un guide efficace et convaincant sur les images pour 2023**

Consultez la barre latérale pour une plongée en profondeur. Voici la référence rapide pour améliorer les balises `<img>` afin de gérer les appareils modernes dans toutes leurs tailles et densités de pixels variées. Vous devez [savoir que pixels != pixels](/fr/pixels-not-pixels) et que `devicePixelRatio` est plus susceptible d'être environ 3,875 que de 1:1. Les téléphones modernes prétendent être de largeur 320-428px pour la lisibilité.

> Si votre image ne change jamais de taille, quelle que soit la largeur de la fenêtre du navigateur, vous devriez utiliser un [descripteur de densité à la place](/fr/density-descriptors). Ceci est souvent adapté pour les logos, les icônes et les boutons.

Savez-vous quels sont vos [points de rupture](/fr/breakpoints)? Vous aurez besoin de ces nombres pour affiner la solution ci-dessous - et au minimum le point de rupture de la largeur de la zone de contenu principal où la croissance s'arrête.

### La méthode facile

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Chien faisant de la bicyclette" />

<!-- Nous avons supposé que vous avez un point de rupture à 700px. 
      Et que sous cette largeur d'affichage, cette image prend 100% de la largeur, mais
      lorsque la fenêtre d'affichage est plus grande, l'image est limitée à 800 pixels CSS -->

<!-- Ceci suppose également que vous utilisez un serveur d'images conforme à RIAPI, tel que Imageflow. 
     La production de variantes d'images à la volée est essentielle pour la santé mentale du développeur. -->
```
