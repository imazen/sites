---
title: Exemples d'utilisation de l'élément <picture>
description: >-
  Fournit des exemples d'utilisation de l'élément <picture> pour les images
  réactives, la direction artistique et différents formats d'image
taskInputHash: 921ac1b97585a0fe
lang: fr
---
Fournir plusieurs exemples d'utilisation de l'élément `<picture>` et expliquer brièvement chacun

Voici quelques exemples d'utilisation de l'élément `<picture>` et leur explication :

1\. Exemple pour les images réactives :

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Une image" />
</picture>
```

Explication : Dans cet exemple, l'élément `<picture>` est utilisé pour fournir différentes sources d'image pour différentes tailles d'écran. Les éléments `<source>` spécifient les différentes sources d'image en utilisant l'attribut "srcset" et l'attribut "media" pour spécifier les conditions dans lesquelles chaque source doit être utilisée. L'élément `<img>` est utilisé comme solution de repli pour les anciens navigateurs ou lorsque les conditions spécifiées dans les éléments `<source>` ne sont pas remplies.

2\. Exemple pour la direction artistique :

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Une image" />
</picture>
```

Explication : Dans cet exemple, l'élément `<picture>` est utilisé pour fournir différentes sources d'image en fonction de l'orientation de l'appareil. L'élément `<source>` avec l'attribut "media" défini sur "(orientation: landscape)" spécifie une source d'image pour les écrans larges, tandis que l'élément `<img>` spécifie une source d'image pour les écrans en portrait.

3\. Exemple pour différents formats d'image :

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Une image" />
</picture>
```

Explication : Dans cet exemple, l'élément `<picture>` est utilisé pour fournir différentes sources d'image pour différents formats d'image. Les éléments `<source>` spécifient différentes sources d'image en utilisant l'attribut "srcset" et l'attribut "type" pour spécifier le format d'image. L'élément `<img>` est utilisé comme solution de repli pour les anciens navigateurs qui ne prennent pas en charge l'élément `<picture>`.
