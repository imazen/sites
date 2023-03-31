---
title: Exemples d'utilisation de l'élément <picture>
description: >-
  Fournit des exemples d'utilisation de l'élément <picture> pour des images adaptatives, l'art direction et différents formats d'images.
taskInputHash: 3db6dce4b89b4275
lang: fr
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Voici quelques exemples d'utilisation de l'élément `<picture>` et leurs explications:

1\. Exemple pour des images adaptatives:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Une image" />
</picture>
```

Explication: Dans cet exemple, l'élément `<picture>` est utilisé pour fournir différentes sources d'images pour différentes tailles d'écran. Les éléments `<source>` spécifient les différentes sources d'images en utilisant l'attribut "srcset" et l'attribut "media" pour spécifier les conditions dans lesquelles chaque source doit être utilisée. L'élément `<img>` est utilisé comme solution de repli pour les navigateurs plus anciens ou lorsque les conditions spécifiées dans les éléments `<source>` ne sont pas remplies.

2\. Exemple pour l'art direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Une image" />
</picture>
```

Explication: Dans cet exemple, l'élément `<picture>` est utilisé pour fournir différentes sources d'images en fonction de l'orientation de l'appareil. L'élément `<source>` avec l'attribut "media" défini sur "(orientation: landscape)" spécifie une source d'image pour les écrans larges, tandis que l'élément `<img>` spécifie une source d'image pour les écrans en portrait.

3\. Exemple pour différents formats d'image:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Une image" />
</picture>
```

Explication: Dans cet exemple, l'élément `<picture>` est utilisé pour fournir différentes sources d'images pour différents formats d'image. Les éléments `<source>` spécifient différentes sources d'images en utilisant l'attribut "srcset" et l'attribut "type" pour spécifier le format d'image. L'élément `<img>` est utilisé comme solution de repli pour les navigateurs plus anciens qui ne prennent pas en charge l'élément `<picture>`.

## Points de rupture

En conception adaptative, les points de rupture sont utilisés pour définir quand la mise en page d'un site web ou d'une application doit changer en fonction de la taille du viewport. Les points de rupture sont généralement définis à l'aide de requêtes multimédia en CSS, qui appliquent différentes styles selon la largeur de l'écran. Ces points de rupture peuvent être utilisés en conjonction avec l'élément `<picture>` pour fournir différentes sources d'images pour différentes tailles d'écran.

Par exemple, dans le premier exemple ci-dessus, nous avons utilisé l'attribut `media` pour spécifier la largeur de l'écran en dessous de laquelle chaque source doit être utilisée. Lorsque la largeur de l'écran est supérieure ou égale à 768 pixels, la source `image-large.jpg` sera utilisée ; lorsque la largeur de l'écran est supérieure ou égale à 480 pixels mais inférieure à 768 pixels, la source `image-medium.jpg` sera utilisée ; et lorsque la largeur de l'écran est inférieure à 480 pixels, la source `image-small.jpg` sera utilisée. Ceci nous permet de servir des images de taille appropriée pour chaque appareil, réduisant les temps de chargement des pages et améliorant l'expérience utilisateur.

Les points de rupture peuvent être définis à n'importe quelle taille d'écran et plusieurs points de rupture peuvent être utilisés pour créer des mises en page qui répondent à une large gamme d'appareils. En combinant les points de rupture avec l'élément `<picture>`, vous pouvez créer des designs flexibles et adaptatifs qui sont beaux sur n'importe quel appareil.
