---
title: Examples using <picture> element
description: Provides examples using the <picture> element, for responsive images,
  art direction and different image formats
---

Provide several examples for using the `<picture>` element and concisely explain each

Here are a few examples of using the `<picture>` element and their explanations:

1\. Example for responsive images:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="An image" />
</picture>
```

Explanation: In this example, the `<picture>` element is used to provide different image sources for different screen sizes. The `<source>` elements specify the different image sources using the "srcset" attribute and "media" attribute to specify the conditions under which each source should be used. The `<img>` element is used as a fallback for older browsers or when the conditions specified in the `<source>` elements are not met.

2\. Example for art direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="An image" />
</picture>
```

Explanation: In this example, the `<picture>` element is used to provide different image sources depending on the orientation of the device. The `<source>` element with the "media" attribute set to "(orientation: landscape)" specifies an image source for wide screens, while the `<img>` element specifies an image source for portrait screens.

3\. Example for different image formats:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="An image" />
</picture>
```

Explanation: In this example, the `<picture>` element is used to provide different image sources for different image formats. The `<source>` elements specify different image sources using the "srcset" attribute and the "type" attribute to specify the image format. The `<img>` element is used as a fallback for older browsers that don't support the `<picture>` element.
