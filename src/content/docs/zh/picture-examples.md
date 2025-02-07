---
taskInputHash: 0827c93bcbbb7772
title: 使用 `<picture>` 元素的示例
description: 提供使用 `<picture>` 元素的示例，包括响应式图片、艺术指导和不同图片格式的示例
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: zh
---
以下是使用 `<picture>` 元素的一些示例及其解释：

1\. 响应式图片示例：

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="An image" />
</picture>
```

解释：在此示例中，`<picture>` 元素用于根据不同的屏幕尺寸提供不同的图片源。`<source>` 元素指定不同的图片源，使用 "srcset" 属性和 "media" 属性来指定各个图像源的使用条件。`<img>` 元素则作为旧版浏览器或 `<source>` 元素中条件未满足时的回退方案。

2\. 艺术指导示例：

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="An image" />
</picture>
```

解释：在此示例中，`<picture>` 元素用于根据设备的方向提供不同的图片源。设置了 "media" 属性为 "(orientation: landscape)" 的 `<source>` 元素为宽屏幕指定了一个图片源，而 `<img>` 元素为竖屏幕指定了一个图片源。

3\. 不同图片格式示例：

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="An image" />
</picture>
```

解释：在此示例中，`<picture>` 元素用于为不同的图片格式提供不同的图片源。`<source>` 元素使用 "srcset" 属性和 "type" 属性来指定不同的图片格式。`<img>` 元素用作不支持 `<picture>` 元素的旧版浏览器中的回退方案。

## 断点

在响应式设计中，断点用于定义当网站或应用程序的布局应根据视口大小变化时所需的条件。断点通常使用 CSS 中的媒体查询定义，根据屏幕宽度应用不同的样式。这些断点可以与 `<picture>` 元素结合使用，根据不同的屏幕尺寸提供不同的图片源。

例如，在上面的第一个示例中，我们使用 `media` 属性来指定在特定屏幕宽度下应该使用哪一个图片源。当屏幕宽度大于或等于 768 像素时，将使用 `image-large.jpg` 源；当屏幕宽度大于或等于 480 像素但小于 768 像素时，将使用 `image-medium.jpg` 源；而当屏幕宽度小于 480 像素时，将使用 `image-small.jpg` 源。这使我们能够为每个设备提供适当大小的图片，从而减少页面加载时间并改善用户体验。

断点可以在任何屏幕尺寸下定义，并且可以使用多个断点来创建适应多种设备的布局。通过将断点与 `<picture>` 元素结合，您可以创建在任何设备上都表现出色的灵活和响应式的设计。
