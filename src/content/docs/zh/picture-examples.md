---
title: 使用 <picture> 元素的示例
description: 提供使用 <picture> 元素的示例，包括响应式图片、艺术指导和不同的图片格式。
taskInputHash: 14b6f48db8e81c85
lang: zh
ignore: '/* cSpell:locale zh,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
以下是使用`<picture>`元素的一些示例和它们的解释：

1. 响应式图片示例:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="一张图片" />
</picture>
```

解释：在这个例子中，`<picture>`元素用于为不同的屏幕尺寸提供不同的图像源。`<source>`元素使用`"srcset"`属性和`"media"`属性来指定在哪些条件下使用每个源。当`<source>`元素中指定的条件未达成时，`<img>`元素将作为一个回退选项呈现给旧的浏览器。

2. 艺术指导示例：

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />
  <img src="image-portrait.jpg" alt="一张图片" />
</picture>
```

解释：在这个例子中，`<picture>`元素被用于根据设备的屏幕方向提供不同的图像源。`<source>`元素中的`"media"`属性指定横屏宽屏幕的图像源，而`<img>`元素则指定竖屏设备的图像源。

3. 不同图片格式的示例：

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.png" type="image/png" />
  <img src="image.jpg" alt="一张图片" />
</picture>
```

解释：在这个例子中，`<picture>`元素用于为不同的图片格式提供不同的图像源。`<source>`元素使用`"srcset"`属性和`"type"`属性来指定图片格式。`<img>`元素则作为`<picture>`元素在旧的浏览器中的回退选项。

## 断点

在响应式设计中，断点被用于定义当视口尺寸改变时网站或应用程序的布局应该如何改变。断点通常使用CSS中的媒体查询进行定义，这些查询基于屏幕宽度应用不同的样式。这些断点可以与`<picture>`元素相结合，为不同的屏幕尺寸提供不同的图像源。

例如，在上面的第一个示例中，我们使用了`media`属性来指定每个来源应在哪个屏幕宽度下使用。当屏幕宽度大于或等于768像素时，将使用`image-large.jpg`源；当屏幕宽度大于或等于480像素但小于768像素时，将使用`image-medium.jpg`源；当屏幕宽度小于480像素时，将使用`image-small.jpg`源。这样可以为每个设备提供适当尺寸的图像，减少页面加载时间，提高用户体验。

断点可以在任何屏幕尺寸下定义，并且可以使用多个断点创建响应多种设备的布局。通过将断点与`<picture>`元素相结合，您可以创建灵活的、响应式的设计，它们可以在任何设备上呈现出色。
