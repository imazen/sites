---
taskInputHash: 74545868b8177b5e
title: px ≠ pixels
description: px de l'appareil ≠ px du navigateur ≠ px de l'image
sidebar_sort_priority: 900
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: fr
---
### Les pixels des appareils ≠ px du navigateur ≠ px de l'image

Grâce à Apple, les pixels CSS et HTML (`px`) **se mappent presque toujours à plusieurs pixels d'appareil/imprimante**. Le rapport de pixels de l'appareil sur mon téléphone est de 3,875 ; [et le vôtre ?](https://www.mydevice.io/)

Le rapport de pixels de l'appareil de mon bureau change lors du zoom dans le navigateur, mais par défaut, il est de 1,5 (mon `Système > Affichage > Mise à l'échelle` est à 150%, après tout).

Les fichiers image (à l'exception des SVG) se décodent en une grille de pixels. **Il est incroyablement difficile d'obtenir que les pixels d'une image s'affichent parfaitement à un ratio de 1:1 avec les pixels de l'appareil - mais avec `srcset`, vous pouvez vous en approcher suffisamment**, et un peu de Javascript peut ajuster la taille de l'élément html après le chargement si vous avez des raisons vraiment justifiées pour avoir besoin de cette correspondance parfaite, bien que de tels arts interdits ne soient pas révélés ici.

> Les autres [unités absolues (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/fr/docs/Web/CSS/length) sont définies en termes de nombre de pixels CSS et prétendent que tout est à 96dpi. Les développeurs évitent les unités absolues car il est généralement préférable d'utiliser des unités dérivées de la taille de la police ou des dimensions de la fenêtre d'affichage/conteneur. Des unités non assorties peuvent casser une mise en page si l'utilisateur ajuste son multiplicateur `Accessibilité > Taille du texte`, zoome le navigateur, ou fait pivoter son appareil. Inutile de dire que vous devriez faire toutes ces choses avant de publier votre site.
