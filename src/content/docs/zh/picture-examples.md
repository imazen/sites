---
taskInputHash: c74c1bdd30cda3e0
title: 使用 `<picture>` 元素的示例
description: 提供使用 `<picture>` 元素的示例，包括响应式图像、艺术方向和不同图像格式
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: zh
---
以下是使用 `<picture>` 元素的一些示例及其解释：

1\. 响应式图像示例：

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="一张图像" />
</picture>
```

解释：在此例中，使用 `<picture>` 元素为不同屏幕尺寸提供不同的图像源。`<source>` 元素使用 "srcset" 属性和 "media" 属性指定使用每个源的条件。`<img>` 元素作为旧浏览器的备用方案使用，或用于未满足 `<source>` 元素中指定的条件时。

2\. 艺术方向示例：

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="一张图像" />
</picture>
```

解释：在此例中，使用 `<picture>` 元素根据设备的方向提供不同的图像源。`<source>` 元素的 "media" 属性设置为 "(orientation: landscape)"，指定宽屏幕的图像源，而 `<img>` 元素指定纵向屏幕的图像源。

3\. 不同图像格式的示例：

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="一张图像" />
</picture>
```

解释：在此例中，使用 `<picture>` 元素为不同的图像格式提供不同的图像源。`<source>` 元素使用 "srcset" 属性和 "type" 属性指定图像格式。`<img>` 元素作为不支持 `<picture>` 元素的旧浏览器的备用方案使用。

## 断点

在响应式设计中，断点用于定义何时根据视口大小更改网站或应用程序的布局。断点通常通过 CSS 中的媒体查询定义，根据屏幕宽度应用不同的样式。这些断点可以与 `<picture>` 元素结合使用，为不同屏幕尺寸提供不同的图像源。

例如，在上面的第一个示例中，我们使用 `media` 属性指定屏幕宽度阈值。当屏幕宽度大于或等于 768 像素时，将使用 `image-large.jpg` 源；当屏幕宽度大于或等于 480 像素但小于 768 像素时，将使用 `image-medium.jpg` 源；当屏幕宽度小于 480 像素时，将使用 `image-small.jpg` 源。这使我们能够为每个设备提供合适大小的图像，减少页面加载时间并提高用户体验。

断点可以在任何屏幕尺寸下定义，可以使用多个断点来创建响应于各种设备的布局。通过将断点与 `<picture>` 元素结合，您可以创建外观精美的灵活响应设计，适用于任何设备。
