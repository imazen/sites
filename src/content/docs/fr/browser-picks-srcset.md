---
title: Comment le navigateur choisit
description: Comment le navigateur choisit entre les images listées dans l'attribut srcset
taskInputHash: df517c34368094dc
lang: fr
---
Comment le navigateur choisit-il entre les images listées dans l'attribut srcset? Voici étape par étape, avec des exemples pour les spécifications de largeur et de densité, comment le navigateur décide en fonction du support et du viewport.

- Lorsque vous utilisez l'attribut `srcset` en HTML, le navigateur utilise un ensemble de règles pour choisir l'image la plus appropriée parmi une liste de sources fournies. Ces règles dépendent à la fois des caractéristiques d'affichage du dispositif (résolution, densité de pixels) et de la taille du viewport. L'attribut `srcset` vous permet de spécifier des images différentes en fonction de la largeur (en utilisant le descripteur `w`) ou de la densité de pixels (en utilisant le descripteur `x`). Passons en revue chaque cas avec des exemples.

1\. Descripteur de largeur (`w`):

Supposons que nous avons l'attribut `srcset` suivant:

```html 

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Exemple Image">

```

Le navigateur suivra ces étapes :

a. Déterminer le DPR (Device Pixel Ratio) du dispositif. Par exemple, un écran standard a un DPR de 1, tandis qu'un écran haute résolution (Retina) a un DPR de 2 ou plus.

b. Calculer la largeur effective pour chaque image dans `srcset`. Multipliez le descripteur de largeur par DPR. Pour un dispositif avec un DPR de 1 :

- example-small.jpg : 400 * 1 = 400 px

- example-medium.jpg : 800 * 1 = 800 px

- example-large.jpg : 1600 * 1 = 1600 px

c. Comparez les largeurs effectives avec la largeur du viewport. Supposez que la largeur du viewport est de 420 px. Le navigateur choisira l'image la plus petite avec une largeur effective supérieure ou égale à la largeur du viewport. Dans ce cas, il sélectionnera `example-medium.jpg`.

2. Descripteur de densité de pixels (`x`):

Supposons que nous avons l'attribut `srcset` suivant:

```html 

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Exemple Image">

```

Le navigateur suivra ces étapes :

a. Déterminer le DPR (Device Pixel Ratio) du dispositif. Par exemple, un écran standard a un DPR de 1, tandis qu'un écran haute résolution (Retina) a un DPR de 2 ou plus.

b. Comparez le DPR du dispositif avec les descripteurs `x` dans srcset. Dans ce cas, nous avons trois images avec les descripteurs suivants :

- example-1x.jpg : 1x

- example-2x.jpg : 2x

- example-3x.jpg : 3x

c. Choisissez l'image avec le descripteur `x` qui est le plus proche du DPR du dispositif. Pour un dispositif avec un DPR de 1, le navigateur sélectionnera `example-1x.jpg`. Pour un dispositif avec un DPR de 2, il choisira `example-2x.jpg`, et ainsi de suite.

Il est important de noter que vous pouvez également utiliser l'attribut `sizes` en combinaison avec l'attribut `srcset` pour fournir plus d'informations sur la façon dont l'image sera affichée à différentes largeurs de viewport. Cela est particulièrement utile lors de l'utilisation du descripteur de largeur (`w`). Voici un exemple :

```html 

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
