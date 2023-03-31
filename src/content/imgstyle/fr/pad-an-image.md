---
title: Remplir une image
description: >-
  Comment remplir une image en utilisant le CSS et le rapport d'aspect pour centrer.
taskInputHash: 5a77bdcdafcc6600
lang: fr
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Voici comment utiliser le CSS et le rapport d'aspect pour centrer et remplir une image :
1. Tout d'abord, vous devez envelopper votre image dans un élément conteneur, tel qu'un `<div>` ou une `<figure>`. Cela vous permettra d'appliquer des styles au conteneur qui affecteront l'image à l'intérieur. 
2. Définissez la propriété `position` du conteneur sur `relative`. Cela vous permettra de positionner l'image à l'intérieur du conteneur. 
3. Ajoutez un pseudo-élément `::after` au conteneur. Cela sera utilisé pour maintenir le rapport d'aspect de l'image et créer le remplissage. 
4. Définissez la propriété `content` du pseudo-élément `::after` sur une chaîne vide. Ceci est nécessaire pour créer l'élément. 
5. Définissez la propriété `padding-bottom` du pseudo-élément `::after` sur une valeur en pourcentage qui correspond au rapport d'aspect de l'image. Par exemple, si votre image a un rapport d'aspect de 4:3, vous définiriez le remplissage à `75%` (puisque 3/4 = 0,75). Cela créera le remplissage sous l'image. 
6. Définissez la propriété `position` du pseudo-élément `::after` sur `absolute`. Cela positionnera l'élément dans le conteneur. 
7. Définissez les propriétés `top`, `left`, `bottom` et `right` du pseudo-élément `::after` sur `0`. Cela fera en sorte que l'élément remplisse le conteneur, créant le remplissage. 
8. Enfin, définissez la propriété `position` de l'image elle-même sur `absolute`. Cela vous permettra de centrer l'image à l'intérieur du conteneur en utilisant les propriétés `top`, `left`, `bottom` et `right`.

Voici un exemple de code CSS que vous utiliseriez pour centrer et remplir une image avec un rapport d'aspect de 4:3 :

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* rapport d'aspect 4:3 */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
```

Dans cet exemple, l'élément `.container` est le conteneur pour l'image. Le pseudo-élément `::after` est utilisé pour créer le remplissage et maintenir le rapport d'aspect de l'image. L'élément `img` est défini sur `position: absolute` afin qu'il puisse être centré à l'intérieur du conteneur en utilisant les propriétés `top`, `left`, `bottom` et `right`.

En définissant les propriétés `max-width` et `max-height` de l'image sur `100%`, l'image s'adaptera à l'espace disponible tout en maintenant son rapport d'aspect. Cela signifie que le remplissage créé par le pseudo-élément `::after` sera toujours proportionnel à la taille de l'image.
