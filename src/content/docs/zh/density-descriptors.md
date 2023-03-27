---
title: 密度描述符和 Srcset（源集）
description: 在 `srcset` 中使用密度描述符的示例
taskInputHash: 1e78ae21fde0486b
lang: zh
---
Srcset（源集）与密度描述符提供了一种简单而有效的方法，可以向每个用户的设备传递最适合的图像，从而提高性能和用户体验。本指南将向您展示如何使用 Srcset（源集）与密度描述符的基本要点，并为您提供标记示例。

## 什么是 Srcset（源集）与密度描述符？

Srcset（源集）是一种 HTML 属性，旨在允许您为单个`<img>`元素指定多个图像源。密度描述符（`x`）与 Srcset（源集）一起使用，根据用户显示器的像素密度提供不同分辨率的图像。

## 何时使用 Srcset（源集）与密度描述符？

在以下情况下使用 Srcset（源集）与密度描述符尤其有用：
1. 为高 DPI 显示器（例如 Retina 显示器）提供高分辨率图像，并提供低分辨率图像给标准显示器。
2. 通过向每个用户的设备传递最合适的图像大小来提高页面性能。

## 实施 Srcset（源集）与密度描述符

要使用 Srcset（源集）与密度描述符，请执行以下步骤：
1. 使用不同的分辨率准备您的图像。
2. 将`srcset`属性添加到`<img>`元素中，包括图像源和相应的密度描述符。
3. 添加`sizes`属性（可选），以指定将按屏幕上显示的大小。

### 标记示例

以下是在标记中实现 Srcset（源集）与密度描述符的示例：

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="An example image">
```



此标记示例包括：
- **src**：默认图像源，在浏览器不支持 Srcset（源集）时显示。
- **srcset**：图像源及其密度描述符（1x、2x、3x）的列表。浏览器将根据用户的显示器选择最适合的图像。
- **alt**：为辅助功能而提供的图像描述。

就是这样！您已成功实现了 Srcset（源集）与密度描述符，从而提高了网站的性能和用户体验。