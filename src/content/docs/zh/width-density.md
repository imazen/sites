---
title: 宽度和密度描述符
description: 在 `srcset` 中使用宽度和密度描述符的示例
taskInputHash: ac2cf702b6a1af7b
lang: zh
---
了解 `srcset` 中的宽度（`w`）和密度（`x`）描述符。使用示例并使用 Markdown。

>`srcset` 是一种 HTML 属性，允许开发人员提供具有不同分辨率或像素密度的多个图像源，并让浏览器根据设备的显示特性选择适当的图像。`srcset` 属性使用 `URL` 和 `w` 或 `x` 描述符的组合来指定图像。

## 宽度（`w`）描述符

>`w` 描述符用于指定图像的像素宽度。当我们想要提供浏览器图像的尺寸，以便它可以选择适合的图像以占用可用的屏幕空间时，会使用它。

>在 `srcset` 中使用 `w` 描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Example Image">
```

>在上面的示例中，我们提供了三张图片及其对应的像素宽度。浏览器将选择最接近可用屏幕空间的图像。

## 密度（`x`）描述符

>`x` 描述符用于指定图像的像素密度，即物理像素与 CSS 像素的比率。当我们想要为不同像素密度的相同图像提供不同版本时，会使用它。

>在 `srcset` 中使用 `x` 描述符的语法如下：

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Example Image">
```

>在上面的示例中，我们提供了三张图片及其相应的像素密度。浏览器将选择最接近设备屏幕的像素密度的图像。

>请注意，`w` 和 `x` 描述符可以一起在同一个 `srcset` 属性中使用，以为浏览器提供更多的选择。
