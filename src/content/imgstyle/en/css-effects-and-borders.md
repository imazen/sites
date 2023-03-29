---
title: CSS effects and borders
description: How to add CSS effects and borders to an image
---

To add CSS effects and borders to an image, you can use the following steps: 
1. Select the image element in your HTML code. You can do this by using an ID or class selector, or by selecting the `img` element directly. 
2. Define a CSS class or ID selector that applies the desired styles to the image. For example, you could use the following code to create a simple border around the image:

```css
.my-image {
  border: 2px solid black;
}
```

 
3. Apply the CSS class or ID selector to the image element. For example, if you used the `.my-image` selector in step 2, you could add the following code to your HTML to apply the styles to the image:

```arduino
<img src="path/to/image.jpg" class="my-image">
```


4. Customize the styles as desired. In addition to borders, you can apply a wide range of CSS effects to images, such as filters, opacity, transitions, and animations. Here are some examples of CSS code that can be used to add effects to images:

```css
/* Add a drop shadow effect */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Add a grayscale filter effect */
.my-image {
  filter: grayscale(100%);
}

/* Add a zoom transition effect on hover */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```



These are just a few examples of the many CSS effects and borders you can use to enhance your images. Experiment with different styles to find the ones that work best for your design.
