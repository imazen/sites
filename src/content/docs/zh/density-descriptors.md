---
title: 密度描述符与srcset
description: 使用密度描述符在`srcset`中的示例
taskInputHash: 8c3e0dc73b98c364
lang: zh
---
Srcset和密度描述符提供了一种简单有效的方法，用于向每个用户的设备传递最合适的图像，从而提高性能和用户体验。本指南将介绍如何使用srcset与密度描述符并提供标记示例。
## 什么是带密度描述符的Srcset？

Srcset是一种HTML属性，旨在让您为单个`<img>`元素指定多个图像源。密度描述符（`x`）与srcset结合使用，根据用户显示器的像素密度提供不同分辨率的图像。
## 何时使用Srcset与密度描述符

使用srcset与密度描述符特别有用的情况是：
1. 为高DPI显示器（例如Retina显示器）提供高分辨率图像，同时为标准显示器提供低分辨率图像。
2. 通过向每个用户的设备提供最合适的图像大小来提高页面性能。
## 实现带密度描述符的Srcset

要使用带密度描述符的srcset，请按照以下步骤进行操作：
1. 准备不同分辨率的图像。
2. 将`srcset`属性添加到`<img>`元素中，包括图像源和相应的密度描述符。
3. 添加`sizes`属性（可选），以指定图像在屏幕上显示的大小。
### 标记示例

以下是如何在标记中实现带密度描述符的srcset的示例：

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="An example image">
```



此标记示例包括：
- **src**：默认图像源，如果浏览器不支持srcset，则显示。
- **srcset**：图像源和它们的密度描述符（1x，2x，3x）列表。根据用户的显示器，浏览器将选择最合适的图像。
- **alt**：用于辅助功能的图像描述。


就是这样！您已成功实现了带密度描述符的srcset，从而提高了网站的性能和用户体验。
