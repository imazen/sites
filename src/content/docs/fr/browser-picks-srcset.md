---
title: Comment le navigateur choisit
description: >-
  Comment le navigateur choisit entre les images répertoriées dans l'attribut
  srcset
taskInputHash: 526ee912d47a6d62
lang: fr
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Comment le navigateur choisit-il entre les images répertoriées dans l'attribut srcset? Voici les étapes à suivre, avec des exemples pour les spécifications de largeur et de densité et la façon dont le navigateur décide en fonction de l'appareil et du viewport.

- Lorsque l'on utilise l'attribut `srcset` en HTML, le navigateur utilise un ensemble de règles pour choisir l'image la plus appropriée parmi une liste de sources fournies. Ces règles dépendent à la fois des caractéristiques d'affichage de l'appareil (résolution, densité de pixels) et de la taille du viewport. L'attribut `srcset` vous permet de spécifier différentes images en fonction de la largeur (en utilisant le descripteur `w`) ou de la densité de pixels (en utilisant le descripteur `x`). Examinons chaque cas avec des exemples.

1\. Descripteur de largeur (`w`):

Supposons que nous avons l'attribut `srcset` suivant:

```html

<img src="exemple-petit.jpg" srcset="exemple-petit.jpg 400w, exemple-moyen.jpg 800w, exemple-grand.jpg 1600w" alt="Exemple d'image">

```

Le navigateur suivra ces étapes:

a. Déterminez le DPR (Device Pixel Ratio) de l'appareil. Par exemple, un affichage standard a un DPR de 1, tandis qu'un affichage haute résolution (Retina) a un DPR de 2 ou plus.

b. Calculez la largeur effective pour chaque image dans le `srcset`. Multipliez le descripteur de largeur par le DPR. Pour un appareil avec un DPR de 1:

- exemple-petit.jpg: 400 \* 1 = 400px

- exemple-moyen.jpg: 800 \* 1 = 800px

- exemple-grand.jpg: 1600 \* 1 = 1600px

c. Comparez les largeurs effectives avec la largeur du viewport. Supposons que la largeur du viewport est de 420px. Le navigateur choisira l'image la plus petite ayant une largeur effective supérieure ou égale à la largeur du viewport. Dans ce cas, il sélectionnera `exemple-moyen.jpg`.

1\. Descripteur de densité de pixels (`x`):

Supposons que nous avons l'attribut `srcset` suivant:

```html

<img src="exemple-1x.jpg" srcset="exemple-1x.jpg 1x, exemple-2x.jpg 2x, exemple-3x.jpg 3x" alt="Exemple d'image">

```

Le navigateur suivra ces étapes:

a. Déterminez le DPR (Device Pixel Ratio) de l'appareil. Par exemple, un affichage standard a un DPR de 1, tandis qu'un affichage haute résolution (Retina) a un DPR de 2 ou plus.

b. Comparez le DPR de l'appareil avec les descripteurs `x` dans le `srcset`. Dans ce cas, nous avons trois images avec les descripteurs suivants:

- exemple-1x.jpg: 1x

- exemple-2x.jpg: 2x

- exemple-3x.jpg: 3x

c. Choisissez l'image avec le descripteur `x` le plus proche du DPR de l'appareil. Pour un appareil avec un DPR de 1, le navigateur sélectionnera `exemple-1x.jpg`. Pour un appareil avec un DPR de 2, il choisira `exemple-2x.jpg`, et ainsi de suite.

Il est important de noter que vous pouvez également utiliser l'attribut `sizes` en combinaison avec l'attribut `srcset` pour fournir plus d'informations sur la façon dont l'image sera affichée à différentes largeurs de viewport. Cela est particulièrement utile lors de l'utilisation du descripteur de largeur (`w`). Voici un exemple:

```html

<img src="exemple-petit.jpg" srcset="exemple-petit.jpg 400w, exemple-moyen.jpg 800w, exemple-grand.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
