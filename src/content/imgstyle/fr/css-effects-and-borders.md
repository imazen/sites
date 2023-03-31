---
title: Effets et bordures CSS
description: Comment ajouter des effets et bordures CSS à une image
taskInputHash: 971cb9a44680dc77
lang: fr
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Pour ajouter des effets CSS et des bordures à une image, vous pouvez suivre les étapes suivantes :
1. Sélectionnez l'élément image dans votre code HTML. Vous pouvez le faire en utilisant un sélecteur d'ID ou de classe, ou en sélectionnant directement l'élément `<img>`.
2. Définissez un sélecteur de classe ou d'ID CSS qui applique les styles souhaités à l'image. Par exemple, vous pouvez utiliser le code suivant pour créer une bordure simple autour de l'image :

```css
.my-image {
  border: 2px solid black;
}
```

3. Appliquer le sélecteur de classe ou d'ID CSS à l'élément image. Par exemple, si vous avez utilisé le sélecteur `.my-image` à l'étape 2, vous pouvez ajouter le code suivant à votre HTML pour appliquer les styles à l'image :

```arduino
<img src="path/to/image.jpg" class="my-image">
```

4. Personnalisez les styles selon vos souhaits. En plus des bordures, vous pouvez appliquer une large gamme d'effets CSS aux images, tels que des filtres, de l'opacité, des transitions et des animations. Voici quelques exemples de code CSS qui peuvent être utilisés pour ajouter des effets aux images :

```css
/* Ajouter un effet d'ombre portée */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Ajouter un effet de filtre en niveaux de gris */
.my-image {
  filter: grayscale(100%);
}

/* Ajouter un effet de transition de zoom au survol */
.my-image {
  transition: transform 0,3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```

Ce ne sont que quelques exemples parmi les nombreux effets CSS et les bordures que vous pouvez utiliser pour améliorer vos images. Expérimentez avec différents styles pour trouver ceux qui fonctionnent le mieux pour votre design.
