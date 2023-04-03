---
title: 使用 <picture> 元素的示例
description: 提供使用 <picture> 元素的示例，用于响应式图片、艺术方向和不同的图像格式。
taskInputHash: 948d982e0b7ea61f
lang: zh
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
下面是一些使用 `<picture>` 元素的示例及其说明:

1\. 响应式图片示例:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="An image" />
</picture>
```

说明: 在此示例中，使用 `<picture>` 元素为不同的屏幕尺寸提供不同的图像来源。`<source>` 元素使用 "srcset" 属性和 "media" 属性指定不同的图像来源，以说明应在何种条件下使用每个来源。`<img>` 元素用作旧版浏览器或未达到 `<source>` 元素所指定条件时的备用方案。

2\. 艺术方向示例:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="An image" />
</picture>
```

说明: 在此示例中，使用 `<picture>` 元素根据设备的方向提供不同的图像来源。将 "media" 属性设置为 "(orientation: landscape)" 的 `<source>` 元素指定宽屏幕的图像来源，而 `<img>` 元素指定竖屏幕的图像来源。

3\. 不同图片格式示例:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="An image" />
</picture>
```

说明: 在此示例中，使用 `<picture>` 元素为不同的图像格式提供不同的图像来源。`<source>` 元素使用 "srcset" 属性和 "type" 属性指定不同的图像格式和来源。`<img>` 元素用作不支持 `<picture>` 元素的旧版浏览器的备用方案。

## 断点

在响应式设计中，使用断点定义当视口大小变化时网站或应用程序布局应该如何改变。断点通常使用 CSS 中的媒体查询定义，根据屏幕宽度应用不同的样式。这些断点可以与 `<picture>` 元素结合使用，为不同的屏幕尺寸提供不同的图像来源。

例如，在上面的第一个示例中，我们使用 "media" 属性指定屏幕宽度应使用哪个来源。当屏幕宽度大于或等于 768 像素时，将使用 "image-large.jpg" 来源；当屏幕宽度大于或等于 480 像素但小于 768 像素时，将使用 "image-medium.jpg" 来源；当屏幕宽度小于 480 像素时，将使用 "image-small.jpg" 来源。这使我们能够为每个设备提供适当大小的图像，缩短页面加载时间，提高用户体验。

断点可以在任何屏幕尺寸上定义，可以使用多个断点创建响应多种设备的布局。通过将断点与 `<picture>` 元素结合使用，可以创建灵活、响应式的设计，使其在任何设备上都具有良好的外观。
