---
title: 使用 <picture> 元素的例子
description: 提供使用 <picture> 元素的示例，用于可响应式图片、艺术向导和不同的图片格式。
taskInputHash: 84ee999fd4dc56dc
lang: zh
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
以下是使用 `<picture>` 元素的一些例子以及它们的解释：

1\. 可响应式图片的例子：

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="一张图片" />
</picture>
```

解释：在这个例子中，`<picture>` 元素用于为不同的屏幕尺寸提供不同的图片源。`<source>` 元素使用 `srcset` 和 `media` 属性指定不同的图片源以及使用每个源的条件。当 `<source>` 元素中指定的条件未满足时，`<img>` 元素将作为后备图像用于旧版浏览器。

2\. 艺术向导的例子：

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />
  <img src="image-portrait.jpg" alt="一张图片" />
</picture>
```

解释：在这个例子中，`<picture>` 元素用于根据设备的方向提供不同的图片源。`<source>` 元素使用 `media` 属性，并将其设置为 `(orientation: landscape)`，以提供宽屏幕幅面的图片源，而 `<img>` 元素则提供纵向屏幕幅面的图片源。

3\. 不同图片格式的例子：

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.png" type="image/png" />
  <img src="image.jpg" alt="一张图片" />
</picture>
```

解释：在这个例子中，`<picture>` 元素用于为不同的图片格式提供不同的图片源。`<source>` 元素使用 `srcset` 和 `type` 属性指定不同的图片源以及其图片格式，而 `<img>` 元素用作不支持 `<picture>` 元素的旧版浏览器的后备图像。

## 断点

在响应式设计中，断点用于定义网站或应用程序的布局在视口尺寸变化时应如何变化。断点通常使用 CSS 中的媒体查询定义，根据屏幕宽度应用不同的样式。可以将这些断点与 `<picture>` 元素结合使用，以为不同的屏幕尺寸提供不同的图片源。

例如，在上面的第一例中，我们使用 `media` 属性指定了屏幕宽度，从而指定应使用每个源的哪个屏幕宽度。当屏幕宽度大于或等于 768 像素时，将使用 `image-large.jpg` 源；当屏幕宽度大于或等于 480 像素但小于 768 像素时，将使用 `image-medium.jpg` 源；当屏幕宽度小于 480 像素时，将使用 `image-small.jpg` 源。这些操作可以为每个设备提供大小合适的图像，从而减少页面加载时间并提高用户体验。

断点可以根据任何屏幕尺寸定义，可以使用多个断点创建能够响应广泛设备的布局。通过将断点与 `<picture>` 元素相结合，可以创建出灵活、响应式的设计，无论在任何设备上都表现出色。
