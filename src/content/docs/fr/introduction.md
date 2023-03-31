---
title: srcset et tailles d'<img>
description: Un guide efficace et subjectif pour les images réactives en 2023
taskInputHash: 2f3bd9fa4d308fbc
lang: fr
ignore: '/* cSpell:locale fr,en*/'
sidebar_sort_priority: 1000
date_published: '2023-03-23'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
**Un guide efficace et subjectif pour les images en 2023**

Consultez la barre latérale pour une plongée plus profonde. Ceci est une référence rapide pour mettre à jour ces balises `<img>` pour prendre en charge les appareils modernes dans toutes leurs tailles et densités de pixels variées. Vous devez [savoir que les pixels != pixels](/en/pixels-not-pixels) et `devicePixelRatio` est plus susceptible d'être autour de 3,875 que de 1:1. Les téléphones modernes prétendent avoir une largeur de 320 à 428 pixels pour la lisibilité (en pixels CSS), mais ont de nombreux pixels par pixel CSS.

> Si votre image ne change jamais de taille, peu importe la taille réduite de la fenêtre du navigateur, vous devriez utiliser un [descripteur de densité à la place](/en/density-descriptors). Ceci convient souvent aux logos, aux icônes et aux boutons.

Savez-vous ce que sont vos [points de rupture](/en/breakpoints)? Vous aurez besoin de ces numéros pour affiner la solution ci-dessous, et au minimum le point de rupture de la largeur d'affichage où la zone de contenu principal cesse de s'agrandir.


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
      Et qu'en dessous de cette largeur de vue, cette image prend 100% de la largeur, mais
      lorsque la fenêtre d'affichage est plus grande, l'image est limitée à 800 pixels CSS -->

<!-- Ceci suppose que vous utilisez un serveur d'images compatible RIAPI tel que Imageflow.
     La production de variantes d'image à la volée est essentielle pour la santé mentale des développeurs. -->
```
