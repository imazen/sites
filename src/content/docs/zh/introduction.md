---
title: srcset和<img> sizes
description: 2023年响应式图片的高效且有见解的指南
taskInputHash: 432ac58bb5112c3c
lang: zh
sidebar_sort_priority: 1000
---
**2023年关于图片的高效且有见解的指南**

请查看侧边栏中的深入了解。这里是快速参考，用于升级那些`<img>`标签，以便在各种尺寸和像素密度的现代设备上处理图片。您应该[知道像素并不等于像素](/zh/pixels-not-pixels)，`devicePixelRatio`更可能是3.875而不是1：1。现代手机为了可读性而假装宽度为320-428像素。

> 如果您的图片永远不会改变大小，无论您将浏览器窗口多么窄，您应该使用[密度描述符](/zh/density-descriptors)。这通常适用于徽标、图标和按钮。

您知道您的[断点](/zh/breakpoints)是多少吗？您将需要这些数字来微调下面的解决方案-至少是主要内容区域停止增长的视口宽度断点。


### 简单的方法

```html

<img src = "img.jpg?w=480"
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="狗骑自行车" />

<!-- 我们假设您在700px处有一个断点。并且在该视口宽度下，此图像占据100%宽度，但当视口较大时，图像被限制为800个CSS像素 -->

<!-- 这还假设您正在使用兼容RIA API的图像服务器，例如Imageflow。即时生成图像变体对于开发人员的健康非常重要。 -->
