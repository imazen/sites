---
title: Comment le navigateur choisit
description: >-
  Comment le navigateur choisit entre les images répertoriées dans l'attribut
  srcset
taskInputHash: df517c34368094dc
lang: fr
---
Comment le navigateur sélectionne-t-il les images répertoriées dans l'attribut srcset? Voici une démarche étape par étape, avec des exemples pour les spécifications de largeur et de densité et la façon dont le navigateur décide en fonction de l'appareil et du viewport.

- Lorsque vous utilisez l'attribut `srcset` en HTML, le navigateur utilise un ensemble de règles pour choisir l'image la plus appropriée parmi une liste de sources fournies. Ces règles dépendent à la fois des caractéristiques d'affichage de l'appareil (résolution, densité de pixels) et de la taille du viewport. L'attribut `srcset` vous permet de spécifier différentes images en fonction de la largeur (en utilisant le descripteur `w`) ou de la densité de pixels (en utilisant le descripteur `x`). Passons en revue chaque cas avec des exemples.

1\. Descripteur de largeur (`w`):

Supposons que nous avons l'attribut `srcset` suivant:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Exemple d'image">

```

Le navigateur suivra ces étapes:

a. Déterminer le DPR (Device Pixel Ratio) de l'appareil. Par exemple, un écran standard a un DPR de 1, tandis qu'un écran haute résolution (Retina) a un DPR de 2 ou plus.

b. Calculez la largeur effective pour chaque image dans le `srcset`. Multipliez le descripteur de largeur par le DPR. Pour un appareil avec un DPR de 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Comparez les largeurs effectives avec la largeur du viewport. Supposons que la largeur du viewport soit de 420px. Le navigateur choisira l'image la plus petite avec une largeur effective supérieure ou égale à la largeur du viewport. Dans ce cas, il sélectionnera `example-medium.jpg`.

2\. Descripteur de densité de pixels (`x`):

Supposons que nous avons l'attribut `srcset` suivant:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Exemple d'image">

```

Le navigateur suivra ces étapes:

a. Déterminer le DPR (Device Pixel Ratio) de l'appareil. Par exemple, un écran standard a un DPR de 1, tandis qu'un écran haute résolution (Retina) a un DPR de 2 ou plus.

b. Comparez le DPR de l'appareil avec les descripteurs `x` dans le `srcset`. Dans ce cas, nous avons trois images avec les descripteurs suivants:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Choisissez l'image avec le descripteur `x` le plus proche du DPR de l'appareil. Pour un appareil avec un DPR de 1, le navigateur sélectionnera `example-1x.jpg`. Pour un appareil avec un DPR de 2, il choisira `example-2x.jpg`, et ainsi de suite.

Il est important de noter que vous pouvez également utiliser l'attribut `sizes` en combinaison avec l'attribut `srcset` pour fournir plus d'informations sur la façon dont l'image sera affichée à différentes largeurs de viewport. Cela est particulièrement utile lors de l'utilisation du descripteur de largeur (`w`). Voici un exemple:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
