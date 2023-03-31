---
title: 密度描述符与srcset
description: 在`srcset`中使用密度描述符的示例
taskInputHash: 8c3e0dc73b98c364
lang: zh
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Srcset with density descriptors（带密度描述符的Srcset）提供了一种简单而有效的方法，为每个用户的设备提供最合适的图像，提高了性能和用户体验。本指南将引导您了解如何使用带密度描述符的srcset，并为您提供标记示例。
## 什么是带密度描述符的Srcset？

Srcset是一种HTML属性，旨在让您为单个`<img>`元素指定多个图像源。密度描述符(`x`)与srcset结合使用，根据用户显示器的像素密度提供不同分辨率的图像。
## 何时使用带密度描述符的Srcset

在以下情况下，使用带密度描述符的srcset尤其有用：
1. 为高DPI显示器（例如Retina显示器）提供高分辨率图像，同时为标准显示器提供低分辨率图像。
2. 通过为每个用户的设备提供最适合的图像大小，提高页面性能。
## 实现带密度描述符的Srcset

要使用带密度描述符的srcset，请按照以下步骤操作：
1. 以不同的分辨率准备图像。
2. 向`<img>`元素添加`srcset`属性，包括图像源和相应的密度描述符。
3. （可选）添加`sizes`属性以指定图像在屏幕上显示的大小。
### 标记示例

以下是如何在您的标记中实现带密度描述符的srcset的示例：

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="An example image">
```



此标记示例包括： 
- **src**: 默认的图像源，如果浏览器不支持srcset则显示。
- **srcset**: 图像源和其密度描述符（1x，2x，3x）的列表。根据用户显示器选择最适合的图像。
- **alt**: 图像的说明，用于无障碍目的。

就是这样！您已成功实现了带密度描述符的srcset，提高了网站的性能和用户体验。
