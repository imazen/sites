---
title: Comment le navigateur fait son choix
description: >-
  Comment le navigateur choisit entre les images répertoriées dans l'attribut
  srcset
taskInputHash: 9ec13add5d7e8eb5
lang: fr
---
Comment le navigateur choisit-il entre les images répertoriées dans l'attribut `srcset`? Voici une explication étape par étape, avec des exemples pour les spécifications de largeur et de densité, et comment le navigateur décide en fonction de l'appareil et du viewport.

- Lorsque l'attribut `srcset` est utilisé en HTML, le navigateur utilise un ensemble de règles pour choisir l'image la plus appropriée dans une liste de sources fournies. Ces règles dépendent à la fois des caractéristiques d'affichage de l'appareil (résolution, densité de pixels) et de la taille du viewport. L'attribut `srcset` vous permet de spécifier différentes images en fonction de la largeur (en utilisant le descripteur `w`) ou de la densité de pixels (en utilisant le descripteur `x`). Examinons chacun des cas avec des exemples.

1\. Descripteur de largeur (`w`):

Supposons que nous avons l'attribut `srcset` suivant:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Image d'exemple">

```

Le navigateur suivra ces étapes:

a. Déterminer la DPR (Device Pixel Ratio) de l'appareil. Par exemple, un affichage standard a une DPR de 1, tandis qu'un affichage haute résolution (Retina) a une DPR de 2 ou plus.

b. Calculer la largeur effective pour chaque image de la `srcset`. Multipliez le descripteur de largeur par la DPR. Pour un appareil avec une DPR de 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Comparez les largeurs effectives avec la largeur du viewport. Supposons que la largeur du viewport est de 420px. Le navigateur choisira l'image la plus petite avec une largeur effective supérieure ou égale à la largeur du viewport. Dans ce cas, il sélectionnera `example-medium.jpg`.

1\. Descripteur de densité de pixels (`x`):

Supposons que nous avons l'attribut `srcset` suivant:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Image d'exemple">

```

Le navigateur suivra ces étapes:

a. Déterminer la DPR (Device Pixel Ratio) de l'appareil. Par exemple, un affichage standard a une DPR de 1, tandis qu'un affichage haute résolution (Retina) a une DPR de 2 ou plus.

b. Comparez la DPR de l'appareil avec les descripteurs `x` dans la `srcset`. Dans ce cas, nous avons trois images avec les descripteurs suivants:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Choisissez l'image avec le descripteur `x` le plus proche de la DPR de l'appareil. Pour un appareil avec une DPR de 1, le navigateur sélectionnera `example-1x.jpg`. Pour un appareil avec une DPR de 2, il choisira `example-2x.jpg`, et ainsi de suite.

Il est important de noter que vous pouvez également utiliser l'attribut `sizes` en combinaison avec l'attribut `srcset` pour fournir plus d'informations sur la façon dont l'image sera affichée à différentes largeurs de viewport. Cela est particulièrement utile lors de l'utilisation du descripteur de largeur (`w`). Voici un exemple:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
