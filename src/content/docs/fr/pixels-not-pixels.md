---
taskInputHash: 1229b9ebbf7809f4
title: px ≠ pixels
description: Pixels de l'appareil ≠ pixels du navigateur ≠ pixels de l'image
sidebar_sort_priority: 900
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
### Pixels de l'appareil ≠ pixels du navigateur ≠ pixels de l'image

Grâce à Apple, les pixels CSS et HTML (`px`) **correspondent presque toujours à plusieurs pixels d'appareil/imprimante**. Le devicePixelRatio sur mon téléphone est de 3.875 ; [quel est le vôtre ?](https://www.mydevice.io/) 

Le devicePixelRatio de mon ordinateur de bureau change avec le zoom du navigateur, mais par défaut, il est de 1.5 (mon `Système > Affichage > Échelle` est de 150%, après tout).

Les fichiers d'images (à l'exclusion des SVG) se décode en une grille de pixels. **Il est extrêmement difficile d'obtenir une correspondance parfaite à un ratio de 1:1 avec les pixels de l'appareil - mais avec `srcset` vous pouvez vous approcher suffisamment***, et un peu de JavaScript peut ajuster la taille de l'élément html après le chargement si vous avez de véritables raisons justifiées pour avoir besoin de cette correspondance parfaite, bien que ces arts interdits ne seront pas révélés ici.

> D'autres [unités absolues (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/fr/docs/Web/CSS/length) sont définies en termes de nombre de pixels CSS et prétendent que tout est à 96ppp. Les développeurs évitent les unités absolues car il est généralement préférable d'utiliser des unités dérivées de la taille de la police ou des dimensions du viewport/conteneur. Des unités incompatibles peuvent briser une mise en page si l'utilisateur ajuste son multiplicateur `Accessibilité > Taille du texte`, zoome le navigateur, ou fait pivoter son appareil. Inutile de dire que vous devriez faire toutes ces choses avant de livrer votre site.
