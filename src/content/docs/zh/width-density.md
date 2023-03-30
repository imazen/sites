---
title: 宽度和密度描述符
description: 在 `srcset` 中使用宽度和密度描述符的例子
taskInputHash: c57df7b62d51259b
lang: zh
---
了解 `srcset` 中的宽度 (`w`) 和密度 (`x`) 描述符。使用示例，使用 Markdown。

> `srcset` 是一种 HTML 属性，允许开发人员提供具有不同分辨率或像素密度的多个图像源，并让浏览器根据设备的显示特性选择适当的图像。 `srcset` 属性使用 `URL` 和 `w` 或 `x` 描述符的组合来指定图像。

## 宽度描述符 (`w`)

> `w` 描述符用于指定图像的像素宽度。当我们想要提供浏览器图像的尺寸时，以便它可以根据可用的屏幕空间选择适当的图像时，使用它。

> 在 `srcset` 中使用 `w` 描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Example Image">
```



> 在上面的示例中，我们提供了三个图像和它们对应的像素宽度。浏览器将选择最接近可用屏幕空间的图像。

## 密度描述符 (`x`)

> `x` 描述符用于指定图像的像素密度，这是物理像素与 CSS 像素的比率。当我们想要为浏览器提供具有不同像素密度的相同图像的不同版本时，我们使用它。

> 在 `srcset` 中使用 `x` 描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Example Image">
```


> 在上面的示例中，我们提供了三个图像和它们对应的像素密度。浏览器将选择最接近设备屏幕的像素密度的图像。

> 请注意，`w` 和 `x` 描述符可以在同一个 `srcset` 属性中一起使用，以向浏览器提供更多选择。
