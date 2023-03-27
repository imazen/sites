---
title: px ≠ pixels
description: Pixels de l'appareil ≠ pixels du navigateur ≠ pixels de l'image
taskInputHash: 4c09170abf1da027
lang: fr
sidebar_sort_priority: 900
---
### Les pixels de l'appareil ≠ les pixels du navigateur ≠ les pixels de l'image

Grâce à Apple, les pixels CSS et HTML (`px`) **correspondent presque toujours à plusieurs pixels de l'appareil/imprimante**. Le devicePixelRatio sur mon téléphone est de 3,875 ; [et toi ?](https://www.mydevice.io/)

Le devicePixelRatio de mon ordinateur de bureau change lors du zoom du navigateur, mais revient à 1,5 par défaut (mon `Système > Affichage > Échelle` est à 150 %, après tout).

Les fichiers d'images (à l'exclusion des SVG) se décodent en une grille de pixels. **Il est franchement difficile d'obtenir une affichage parfait des pixels de l'image à un rapport de 1:1 avec les pixels de l'appareil, mais avec `srcset` vous pouvez vous en approcher suffisamment**, et un peu de Javascript peut ajuster la taille de l'élément html après le chargement si vous avez de bonnes raisons valables pour besoin d'un tel mapping parfait, bien que de tels arts interdits ne seront pas révélés ici.

> D'autres unités absolues [ (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/fr/docs/Web/CSS/longueur) sont définies en fonction du nombre de pixels CSS et prétendent que tout est en 96 dpi. Les développeurs évitent les unités absolues car il est généralement préférable d'utiliser des unités dérivées de la taille de police ou de la dimension de la fenêtre d'affichage/conteneur. Les unités incompatibles peuvent casser une disposition si l'utilisateur ajuste leur multiplicateur `Accessibilité > Taille de texte`, agrandit le navigateur ou fait pivoter leur appareil. Inutile de dire que vous devez faire tout cela avant de publier votre site.
