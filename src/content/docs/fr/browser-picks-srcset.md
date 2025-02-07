---
taskInputHash: 8f124ff2b0c7860e
title: Comment le navigateur choisit
description: >-
  Comment le navigateur choisit entre les images répertoriées dans l'attribut
  srcset
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
Comment le navigateur choisit-il entre les images répertoriées dans l'attribut srcset ? Voici un guide étape par étape, avec des exemples pour les spécifications de largeur et de densité, et comment le navigateur décide en fonction du dispositif et de la fenêtre d'affichage.

- Lors de l'utilisation de l'attribut `srcset` en HTML, le navigateur utilise un ensemble de règles pour choisir l'image la plus appropriée à partir d'une liste de sources fournies. Ces règles dépendent à la fois des caractéristiques d'affichage de l'appareil (résolution, densité de pixels) et de la taille de la fenêtre d'affichage. L'attribut `srcset` vous permet de spécifier différentes images en fonction de la largeur (en utilisant le descripteur `w`) ou de la densité de pixels (en utilisant le descripteur `x`). Passons en revue chaque cas avec des exemples.

1\. Descripteur de largeur (`w`):

Supposons que nous ayons l'attribut `srcset` suivant :

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Image Exemple">

```

Le navigateur suivra ces étapes :

a. Déterminez le DPR (Ratio Pixel de l'Appareil) de l'appareil. Par exemple, un affichage standard a un DPR de 1, tandis qu'un affichage haute résolution (Retina) a un DPR de 2 ou plus.

b. Calculez la largeur effective pour chaque image dans le `srcset`. Multipliez le descripteur de largeur par le DPR. Pour un appareil avec un DPR de 1 :

- example-small.jpg : 400 \* 1 = 400px

- example-medium.jpg : 800 \* 1 = 800px

- example-large.jpg : 1600 \* 1 = 1600px

c. Comparez les largeurs effectives avec la largeur de la fenêtre d'affichage. Supposons que la largeur de la fenêtre d'affichage soit de 420px. Le navigateur choisira la plus petite image avec une largeur effective supérieure ou égale à la largeur de la fenêtre d'affichage. Dans ce cas, il sélectionnera `example-medium.jpg`.

1\. Descripteur de densité de pixels (`x`):

Supposons que nous ayons l'attribut `srcset` suivant :

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Image Exemple">

```

Le navigateur suivra ces étapes :

a. Déterminez le DPR (Ratio Pixel de l'Appareil) de l'appareil. Par exemple, un affichage standard a un DPR de 1, tandis qu'un affichage haute résolution (Retina) a un DPR de 2 ou plus.

b. Comparez le DPR de l'appareil avec les descripteurs `x` dans le `srcset`. Dans ce cas, nous avons trois images avec les descripteurs suivants :

- example-1x.jpg : 1x

- example-2x.jpg : 2x

- example-3x.jpg : 3x

c. Choisissez l'image avec le descripteur `x` qui est le plus proche du DPR de l'appareil. Pour un appareil avec un DPR de 1, le navigateur sélectionnera `example-1x.jpg`. Pour un appareil avec un DPR de 2, il choisira `example-2x.jpg`, et ainsi de suite.

Il est important de noter que vous pouvez également utiliser l'attribut `sizes` en combinaison avec l'attribut `srcset` pour fournir plus d'informations sur la façon dont l'image sera affichée à différentes largeurs de fenêtre d'affichage. Ceci est particulièrement utile lors de l'utilisation du descripteur de largeur (`w`). Voici un exemple :

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
