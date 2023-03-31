---
title: px ≠ pixels
description: Pixels d'écran ≠ pixels de navigateur ≠ pixels d'image
taskInputHash: 7dfd1c9b5c352f62
lang: fr
ignore: '/* cSpell:locale fr,en*/'
sidebar_sort_priority: 900
date_published: '2023-03-26'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
### Pixels d'écran ≠ pixels de navigateur ≠ pixels d'image

Grâce à Apple, les pixels CSS et HTML (`px`) **correspondent presque toujours à plusieurs pixels d'écran/imprimante**. Le devicePixelRatio de mon téléphone est de 3,875 ; [et le vôtre ?](https://www.mydevice.io/)

Le devicePixelRatio de mon ordinateur de bureau change en fonction du zoom du navigateur, mais est par défaut de 1,5 (ma sacle d'affichage est de 150 % dans `Système > Affichage`).

Les fichiers image (à l'exception des SVG) se décodent en une grille de pixels. **Il est étonnamment difficile d'obtenir une correspondance parfaite entre les pixels d'image et les pixels d'écran avec un rapport 1 : 1 - mais avec `srcset`, on peut s'en approcher**, et un peu de Javascript peut ajuster la taille de l'élément HTML après le chargement si vous avez une raison valable de nécessiter une correspondance parfaite, bien que ces arts interdites ne seront pas révélées ici.

> Les autres unités absolues ([in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/fr/docs/Web/CSS/Longueurs-et-dimensions_typographiques) sont définies en fonction du nombre de pixels CSS et prétendent que tout est à 96 dpi. Les développeurs évitent les unités absolues car il est généralement préférable d'utiliser des unités dérivées de la taille de police ou des dimensions de la fenêtre d'affichage/du conteneur. Des unités incompatibles peuvent casser la mise en page si l'utilisateur augmente la taille de texte, zoome le navigateur ou pivote son appareil. Inutile de dire qu'il faut faire toutes ces choses avant de publier votre site.
