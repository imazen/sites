---
title: 宽度和密度描述符
description: 在`srcset`中使用宽度和密度描述符的示例
taskInputHash: c57df7b62d51259b
lang: zh
---
了解`srcset`中的宽度（`w`）和密度（`x`）描述符。使用示例并使用Markdown语言。

>`srcset`是一个HTML属性，允许开发者提供多个具有不同分辨率或像素密度的图像源，并根据设备的显示特征选择适当的图像。`srcset`属性结合`URL`和`w`或`x`描述符来指定图像。
## 宽度(`w`)描述符

>`w`描述符用于指定图像的像素宽度，它表明我们希望提供浏览器图像的尺寸，以便它为可用屏幕空间选择最合适的图像。

>在`srcset`中使用`w`描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Example Image">
```



>在上面的示例中，我们提供了三个不同宽度（以像素为单位）的图像及其对应。浏览器将选择与可用屏幕空间最接近的图像。
## 密度（`x`）描述符

>`x`描述符用于指定图像的像素密度，即物理像素与CSS像素的比率。它用于为浏览器提供相同图像的不同版本，具有不同的像素密度。

>在`srcset`中使用`x`描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Example Image">
```


>在上面的示例中，我们提供了三个不同像素密度的图像及其对应。浏览器将选择与设备屏幕最接近的像素密度的图像。

>请注意，`w`和`x`描述符可以一起在同一`srcset`属性中使用，以便为浏览器提供更多的选择。
