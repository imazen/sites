---
taskInputHash: 53c35053b40447fb
title: srcset et tailles <img>
description: Un guide efficace et opinionné sur les images réactives pour 2023
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---

**Un guide efficace et opinionné sur les images pour 2023**

Consultez la barre latérale pour un examen approfondi. Ceci est la référence rapide pour mettre à jour ces balises `<img>` afin de gérer les appareils modernes dans toutes leurs différentes tailles et densités de pixels. Vous devriez [savoir que pixels != pixels](/fr/pixels-not-pixels) et `devicePixelRatio` est plus susceptible d'être autour de 3.875 que 1:1. Les téléphones modernes prétendent être larges de 320 à 428px pour la lisibilité (en pixels CSS), mais ont de nombreux pixels de l'appareil par pixel CSS.

> Si l'image ne change jamais de taille, peu importe combien vous réduisez la fenêtre du navigateur, vous devriez utiliser un [descripteur de densité à la place](/fr/density-descriptors). Cela convient souvent pour les logos, les icônes et les boutons.

Connaissez-vous vos [breakpoints](/fr/breakpoints) ? Vous aurez besoin de ces chiffres pour affiner la solution ci-dessous - et au minimum le point d'arrêt de la largeur de la fenêtre où la zone de contenu principal cesse de croître.


### La méthode facile

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Chien faisant du vélo" />

<!-- Nous avons supposé que vous avez un point d'arrêt à 700px. 
      Et que sous cette largeur de fenêtre, cette image prend 100 % de la largeur, mais
      lorsque la fenêtre est plus large, l'image est limitée à 800 pixels CSS -->

<!-- Cela suppose que vous utilisez un serveur d'images conforme à RIAPI tel qu'Imageflow. 
     La production de variantes d'images à la volée est essentielle pour la tranquillité d'esprit des développeurs. -->
```
