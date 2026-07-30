---
taskInputHash: f0b259ae6fab29e2
title: srcset et tailles <img>
description: Un guide efficace et assumé pour les images réactives en 2023
sidebar_sort_priority: 1000
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: fr
---

**Un guide efficace et assumé pour les images en 2023**

Consultez la barre latérale pour un examen approfondi. Voici une référence rapide pour mettre à jour ces balises `<img>` afin de gérer les appareils modernes dans toutes leurs tailles et densités de pixels variées. Vous devez [savoir que pixels != pixels](/fr/pixels-not-pixels) et que `devicePixelRatio` est plus susceptible d'être autour de 3.875 que de 1:1. Les téléphones modernes prétendent être larges de 320-428px pour une meilleure lisibilité (en pixels CSS), mais ont de nombreux pixels d'appareil par pixel CSS.

> Si votre image ne change jamais de taille, peu importe la largeur de la fenêtre du navigateur, vous devriez utiliser un [descripteur de densité à la place](/fr/density-descriptors). C'est souvent adapté pour les logos, icônes et boutons.

Connaissez-vous vos [points de rupture](/fr/breakpoints) ? Vous aurez besoin de ces chiffres pour affiner la solution ci-dessous - et au minimum le point de rupture de la largeur de la fenêtre d'affichage où la zone de contenu principal cesse de croître.


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
      Et que sous cette largeur de fenêtre, cette image prend 100% de la largeur, mais
      lorsque la fenêtre est plus grande, l'image est limitée à 800 pixels CSS -->

<!-- Cela suppose que vous utilisez un serveur d'image compatible RIAPI tel que Imageflow. 
     La production de variantes d'image à la volée est essentielle pour la tranquillité d'esprit des développeurs. -->
```
