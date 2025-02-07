---
title: Examples using <picture> element
description: >-
  Provides examples using the <picture> element, for responsive images, art
  direction and different image formats
date_published: '2025-02-07'
date_modified: '2025-02-07'
---

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

## Breakpoints

In responsive design, breakpoints are used to define when the layout of a website or application should change based on the size of the viewport. Breakpoints are typically defined using media queries in CSS, which apply different styles depending on the screen width. These breakpoints can be used in conjunction with the `<picture>` element to provide different image sources for different screen sizes.

For example, in the first example above, we used the `media` attribute to specify the screen width under which each source should be used. When the screen width is greater than or equal to 768 pixels, the `image-large.jpg` source will be used; when the screen width is greater than or equal to 480 pixels but less than 768 pixels, the `image-medium.jpg` source will be used; and when the screen width is less than 480 pixels, the `image-small.jpg` source will be used. This allows us to serve appropriately sized images for each device, reducing page load times and improving user experience.

Breakpoints can be defined at any screen size, and multiple breakpoints can be used to create layouts that respond to a wide range of devices. By combining breakpoints with the `<picture>` element, you can create flexible and responsive designs that look great on any device.
