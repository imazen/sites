---
title: px ≠ pixels
description: Pixels d'appareil ≠ pixels de navigateur ≠ pixels d'image
taskInputHash: b505a8e4cccad4f3
lang: fr
sidebar_sort_priority: 900
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Pixels d'appareil ≠ pixels de navigateur ≠ pixels d'image

Grâce à Apple, les pixels CSS et HTML (`px`) **sont presque toujours mappés à plusieurs pixels d'appareil/imprimante**. Le `devicePixelRatio` sur mon téléphone est de 3,875; [et le vôtre ?](https://www.mydevice.io/)

Le `devicePixelRatio` de mon ordinateur de bureau change en fonction du zoom du navigateur, mais par défaut il est de 1,5 (car mon réglage `Système > Affichage > Mise à l'échelle` est de 150%).

Les fichiers d'images (à l'exclusion des SVG) se décodent en une grille de pixels. **Il est ennuyeusement difficile d'afficher les pixels de l'image parfaitement à un rapport 1:1 avec les pixels de l'appareil - mais avec `srcset`, vous pouvez obtenir une approximation raisonnable**, et un peu de Javascript peut ajuster la taille de l'élément HTML après le chargement si vous avez des raisons vraiment justifiées de vouloir ce mappage parfait, bien que ces arts interdits ne seront pas dévoilés ici.

> D'autres unités absolues [ (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/fr/docs/Web/CSS/Unit%C3%A9s_de_longueur) sont définies en termes du nombre de pixels CSS et font semblant que tout est de 96dpi. Les développeurs évitent les unités absolues car il est généralement préférable d'utiliser des unités dérivées de la taille de la police ou des dimensions de la vue/du conteneur. Des unités disparates peuvent casser une mise en page si l'utilisateur ajuste son multiplicateur de `Accessibilité > Taille de texte`, agrandit le navigateur ou fait tourner son appareil. Il va de soi que vous devriez faire toutes ces choses avant de publier votre site.
