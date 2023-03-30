---
title: 使用 <picture> 元素的示例
description: 提供使用 <picture> 元素的示例，用于响应式图片、艺术指导和不同的图片格式。
taskInputHash: 84ee999fd4dc56dc
lang: zh
---
以下是使用 `<picture>` 元素的几个示例及其解释：

1\. 响应式图片的示例：

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="一张图片" />
</picture>
```

解释：在此示例中，使用 `<picture>` 元素为不同的屏幕大小提供不同的图像源。`<source>` 元素使用 `srcset` 属性和 `media` 属性指定不同的图像源及其应使用的条件。当 `<source>` 元素中指定的条件未满足时，使用 `<img>` 元素作为回退方案，以确保旧版浏览器可正常浏览图片。

2\. 艺术指导的示例：

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />
  <img src="image-portrait.jpg" alt="一张图片" />
</picture>
```

解释：在此示例中，使用 `<picture>` 元素为不同的设备方向提供不同的图像源。`<source>` 元素使用 `media` 属性，将属性值设置为 `(orientation: landscape)`，以为宽屏提供图像源，而 `<img>` 元素提供纵向屏幕的图像源。

3\. 不同图片格式的示例：

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.png" type="image/png" />
  <img src="image.jpg" alt="一张图片" />
</picture>
```

解释：在此示例中，使用 `<picture>` 元素为不同的图片格式提供不同的图像源。`<source>` 元素使用 `srcset` 属性和 `type` 属性指定不同的图像源及其格式。而 `<img>` 元素则用于旧版浏览器无法支持 `<picture>` 元素时的回退方案。

## 断点

在响应式设计中，断点用于定义网站或应用程序界面根据视口大小而应更改布局的位置。通常使用 CSS 中的媒体查询定义断点，根据屏幕宽度应用不同的样式。这些断点可与 `<picture>` 元素一起使用，为不同的屏幕大小提供不同的图像源。

例如，在上面的第一个示例中，使用 `media` 属性指定了每个条件下应使用的屏幕宽度。当屏幕宽度大于或等于 768 像素时，将使用 `image-large.jpg` 图像源；当屏幕宽度大于或等于 480 像素但小于 768 像素时，将使用 `image-medium.jpg` 图像源；当屏幕宽度小于 480 像素时，将使用 `image-small.jpg` 图像源。这样就可以为每个设备提供相应大小的图像，从而减少页面加载时间，提高用户体验。

可以在任何屏幕大小上定义断点，并且可以使用多个断点创建响应广泛的设备布局。通过结合使用断点和 `<picture>` 元素，您可以创建灵活且响应灵敏的设计，适用于任何设备。
