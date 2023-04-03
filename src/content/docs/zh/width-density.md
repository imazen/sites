---
title: 宽度和像素密度描述符
description: 在 `srcset` 中使用宽度和像素密度描述符的示例
taskInputHash: cb9466618b61758c
lang: zh
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
了解 `srcset` 中的宽度 (`w`) 和像素密度 (`x`) 描述符。使用示例并使用 Markdown。

>`srcset`是HTML属性，允许开发人员使用不同分辨率或像素密度提供多个图像源，并根据设备显示特性选择适当的图像。`srcset`属性使用`URL`和`w`或`x`描述符的组合来指定这些图像。
## 宽度 (`w`) 描述符

> `w`描述符用于指定图像的像素宽度。当我们想要提供浏览器图像的尺寸时，以便它可以根据可用的屏幕空间选择适当的图像时，就使用它。

> 在`srcset`中使用`w`描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Example Image">
```



> 在上面的示例中，我们提供了三个图像及其相应的像素宽度给浏览器。浏览器将选择最接近可用屏幕空间的图像。
## 像素密度 (`x`) 描述符

> `x`描述符用于指定图像的像素密度，即物理像素与CSS像素的比率。当我们想要提供相同图像的不同版本以提供不同像素密度的图像时，就使用`x`描述符。

> 在`srcset`中使用`x`描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Example Image">
```


> 在上面的示例中，我们提供了三个图像及其相应的像素密度给浏览器。浏览器将选择与设备屏幕最接近的像素密度的图像。

> 请注意，`w`和`x`描述符可以在同一个`srcset`属性中一起使用，以提供更多的选择供浏览器选择。
