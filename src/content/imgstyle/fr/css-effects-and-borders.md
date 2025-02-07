---
taskInputHash: 5ab18803c007f43e
title: Effets CSS et bordures
description: Comment ajouter des effets CSS et des bordures à une image
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
Pour ajouter des effets CSS et des bordures à une image, vous pouvez suivre les étapes suivantes :  
1. Sélectionnez l'élément image dans votre code HTML. Vous pouvez le faire en utilisant un sélecteur d'ID ou de classe, ou en sélectionnant directement l'élément `<img>`.  
2. Définissez un sélecteur de classe CSS ou d'ID qui applique les styles souhaités à l'image. Par exemple, vous pouvez utiliser le code suivant pour créer une bordure simple autour de l'image :

```css
.my-image {
  border: 2px solid black; /* Bordure simple noire */
}
```

3. Appliquez le sélecteur de classe ou d'ID CSS à l'élément image. Par exemple, si vous avez utilisé le sélecteur `.my-image` à l'étape 2, vous pouvez ajouter le code suivant à votre HTML pour appliquer les styles à l'image :

```html
<img src="path/to/image.jpg" class="my-image">
```

4. Personnalisez les styles selon vos besoins. En plus des bordures, vous pouvez appliquer une large gamme d'effets CSS aux images, tels que des filtres, de l'opacité, des transitions et des animations. Voici quelques exemples de code CSS qui peuvent être utilisés pour ajouter des effets aux images :

```css
/* Ajouter un effet d'ombre portée */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Ombre portée */
}

/* Ajouter un effet de filtre en niveaux de gris */
.my-image {
  filter: grayscale(100%); /* Filtre niveaux de gris */
}

/* Ajouter un effet de zoom sur survol */
.my-image {
  transition: transform 0.3s ease; /* Transition lente sur l'échelle */
}
.my-image:hover {
  transform: scale(1.1); /* Agrandissement à 110% */
}
```

Ce ne sont que quelques exemples des nombreux effets CSS et bordures que vous pouvez utiliser pour améliorer vos images. Expérimentez avec différents styles pour trouver ceux qui conviennent le mieux à votre design.
