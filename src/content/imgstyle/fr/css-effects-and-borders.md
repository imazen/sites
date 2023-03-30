---
title: Effets CSS et bordures
description: Comment ajouter des effets CSS et des bordures à une image
taskInputHash: 971cb9a44680dc77
lang: fr
---
Pour ajouter des effets CSS et des bordures à une image, vous pouvez suivre les étapes suivantes :

1. Sélectionnez l'élément image dans votre code HTML. Vous pouvez le faire en utilisant un sélecteur d'ID ou de classe, ou en sélectionnant directement l'élément `<img>`.
2. Définissez un sélecteur de classe ou d'ID CSS qui applique les styles désirés à l'image. Par exemple, vous pouvez utiliser le code suivant pour créer une simple bordure autour de l'image :

```css
.ma-image {
  border: 2px solid black;
}
```

3. Appliquez le sélecteur de classe ou d'ID CSS à l'élément image. Par exemple, si vous avez utilisé le sélecteur `.ma-image` à l'étape 2, vous pouvez ajouter le code suivant à votre HTML pour appliquer les styles à l'image :

```arduino
<img src="chemin/vers/image.jpg" class="ma-image">
```

4. Personnalisez les styles comme souhaité. En plus des bordures, vous pouvez appliquer une large gamme d'effets CSS aux images, tels que des filtres, de l'opacité, des transitions et animations. Voici quelques exemples de code CSS qui peuvent être utilisés pour ajouter des effets aux images :

```css
/* Ajouter un effet d'ombre portée */
.ma-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Ajouter un effet de filtre de niveaux de gris */
.ma-image {
  filter: grayscale(100%);
}

/* Ajouter un effet de transition de zoom au survol */
.ma-image {
  transition: transform 0.3s ease;
}
.ma-image:hover {
  transform: scale(1.1);
}
```

Ce ne sont que quelques exemples parmi les nombreux effets CSS et bordures que vous pouvez utiliser pour améliorer vos images. Expérimentez avec différents styles pour trouver ceux qui fonctionnent le mieux pour votre conception.
