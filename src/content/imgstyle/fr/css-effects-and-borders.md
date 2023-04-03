---
title: Effets CSS et bordures
description: Comment ajouter des effets CSS et des bordures à une image
taskInputHash: 9eeed38477975199
lang: fr
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Pour ajouter des effets CSS et des bordures à une image, vous pouvez suivre les étapes suivantes :

1. Sélectionnez l'élément image dans votre code HTML. Vous pouvez le faire en utilisant un sélecteur ID ou de classe, ou en sélectionnant directement l'élément `<img>`. 
2. Définissez un sélecteur de classe ou d'ID CSS qui applique les styles souhaités à l'image. Par exemple, vous pourriez utiliser le code suivant pour créer une bordure simple autour de l'image :

```css
.ma-image {
  border: 2px solid black;
}
```

3. Appliquez le sélecteur de classe ou d'ID CSS à l'élément image. Par exemple, si vous avez utilisé le sélecteur `.ma-image` à l'étape 2, vous pouvez ajouter le code suivant à votre HTML pour appliquer les styles à l'image :

```html
<img src="chemin/vers/image.jpg" class="ma-image">
```

4. Personnalisez les styles selon vos souhaits. En plus des bordures, vous pouvez appliquer une large gamme d'effets CSS aux images, tels que des filtres, de l'opacité, des transitions et des animations. Voici quelques exemples de code CSS qui peuvent être utilisés pour ajouter des effets aux images :

```css
/* Ajouter un effet d'ombre portée */
.ma-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Ajouter un effet de filtre niveaux de gris */
.ma-image {
  filter: grayscale(100%);
}

/* Ajouter un effet de transition zoom au survol */
.ma-image {
  transition: transform 0.3s ease;
}
.ma-image:hover {
  transform: scale(1.1);
}
```

Ce ne sont que quelques exemples des nombreux effets CSS et bordures que vous pouvez utiliser pour améliorer vos images. Expérimentez avec différents styles pour trouver ceux qui conviennent le mieux à votre design.
