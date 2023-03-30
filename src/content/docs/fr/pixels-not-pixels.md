---
title: px ≠ pixels
description: Pixels d'appareil ≠ pixels du navigateur ≠ pixels d'image
taskInputHash: 7de2b9bb6354abff
lang: fr
sidebar_sort_priority: 900
---
### Pixels d'appareil ≠ pixels du navigateur ≠ pixels d'image

Grâce à Apple, les pixels CSS et HTML (`px`) **sont presque toujours représentés par plusieurs pixels d'appareil/imprimante**. Le `devicePixelRatio` sur mon téléphone est de 3,875 ; [et le vôtre ?](https://www.mydevice.io/)

Le `devicePixelRatio` de mon ordinateur de bureau change en fonction du zoom du navigateur, mais est par défaut de 1,5 (après tout mon `Système > Affichage > Échelle` est à 150%).

Les fichiers d'image (à l'exception des fichiers SVG) sont découpés en une grille de pixels. **Il est difficilement ennuyeux d'obtenir une représentation parfaite des pixels d'image à un ratio de 1:1 avec les pixels d'appareil, mais avec `srcset`, vous pouvez vous en approcher suffisamment**, et un peu de Javascript peut ajuster la taille de l'élément html après le chargement si vous avez des raisons parfaitement justifiées pour avoir besoin de cette mappage parfait, bien que de telles pratiques interdites ne seront pas révélées ici.

> D'autres unités absolues ([en, pc, pt, mm, cm, Q)](https://developer.mozilla.org/fr/docs/Web/CSS/longueur) sont définies en fonction du nombre de pixels CSS et prétendent que tout est de 96 dpi. Les développeurs évitent les unités absolues car il est généralement préférable d'utiliser des unités dérivées de la taille de police ou des dimensions du viewport/conteneur. Des unités incompatibles peuvent rompre une mise en page si l'utilisateur ajuste son multiplicateur de `Accessibilité > Taille de texte`, zoome le navigateur ou fait pivoter son appareil. Inutile de dire que vous devriez faire toutes ces choses avant de publier votre site.
