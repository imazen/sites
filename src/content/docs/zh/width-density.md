---
title: 宽度和像素密度描述符
description: 在`srcset`中使用宽度和像素密度描述符的示例
taskInputHash: 43b724a74c26793e
lang: zh
ignore: '/* cSpell:locale zh,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
了解在`srcset`中的宽度（w）和像素密度（x）描述符。使用示例并使用Markdown。

>`srcset`是一个HTML属性，允许开发人员提供具有不同分辨率或像素密度的多个图像源，并让浏览器根据设备的显示特性选择适当的图像。`srcset`属性使用`URL`和`w`或`x`描述符的组合来指定图像。
## 宽度（`w`）描述符

>`w`描述符用于指定图像的宽度，以像素为单位。当我们想要提供浏览器可以选择适合可用屏幕空间的图像的维度时，就会使用它。

>在`srcset`中使用`w`描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Example Image">
```



>在上面的例子中，我们已经向浏览器提供了三个图像及其相应的宽度（以像素为单位）。浏览器将选择最接近可用屏幕空间的图像。
## 像素密度（`x`）描述符

>`x`描述符用于指定图像的像素密度，即物理像素与CSS像素的比率。 当我们想要向浏览器提供具有不同像素密度的相同图像的不同版本时，我们会使用它。

>在`srcset`中使用`x`描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Example Image">
```


>在上面的例子中，我们已经向浏览器提供了三个图像及其相应的像素密度。浏览器将选择最接近设备屏幕的像素密度的图像。

>请注意，`w`和`x`描述符可以同时在同一个`srcset`属性中使用，以便向浏览器提供更多的选择。
