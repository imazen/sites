---
taskInputHash: 04dd3e990cb08c98
title: 宽度和密度描述符
description: 在 `srcset` 中使用宽度和密度描述符的示例
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: zh
---
理解 `srcset` 中的宽度 (w) 和密度 (x) 描述符。使用示例并使用 Markdown。

> `srcset` 是一个 HTML 属性，允许开发人员提供具有不同分辨率或像素密度的多个图像源，并让浏览器根据设备的显示特性选择合适的图像。`srcset` 属性使用 `URL` 和 `w` 或 `x` 描述符的组合来指定图像。
## 宽度 (`w`) 描述符

> `w` 描述符用于指定图像的宽度（以像素为单位）。当我们希望为浏览器提供图像的尺寸信息，以便其可以选择适合屏幕空间的图像时，使用该描述符。

> 在 `srcset` 中使用 `w` 描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Example Image">
```

> 在上面的例子中，我们为浏览器提供了三张图像及其对应的像素宽度。浏览器将选择与可用屏幕空间宽度最接近的图像。
## 密度 (`x`) 描述符

> `x` 描述符用于指定图像的像素密度，即物理像素与 CSS 像素的比例。当我们希望为浏览器提供同一图像的不同像素密度版本时，使用该描述符。

> 在 `srcset` 中使用 `x` 描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Example Image">
```

> 在上面的例子中，我们为浏览器提供了三张图像及其对应的像素密度。浏览器将选择与设备屏幕像素密度最接近的图像。

> 请注意，`w` 和 `x` 描述符可以在同一个 `srcset` 属性中一起使用，为浏览器提供更多选择。
