---
title: '`srcset`和`<img>`的`sizes`'
description: 2023年响应式图像的高效和有见地的指南
taskInputHash: c8fe1f1e28c8cbe2
lang: zh
sidebar_sort_priority: 1000
---
**2023 年图像的高效而有见地的指南**

请查看边栏以深入了解。这是快速参考，用于对现代设备的各种大小和像素密度处理那些`<img>`标签的升级。你应该[知道像素并不等同于像素](/zh/pixels-not-pixels)，而且`devicePixelRatio`更可能是3.875而不是1:1。现代手机为了可读性而假装是320-428像素宽度（在CSS像素中），但每个CSS像素有许多设备像素。

> 如果您的图像永远不会改变大小，无论浏览器窗口变得多窄，您应该使用[密度描述符](/zh/density-descriptors)。这通常适用于徽标，图标和按钮。

您知道自己的[断点](/zh/breakpoints)是什么吗？您需要这些数字来微调下面的解决方案，至少需要根据主内容区域停止增长的视口宽度断点。


### 简单方法

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="狗骑自行车" />

<!-- 我们假设您在700px处进行了断点。 
    并且在该视口宽度以下，该图像占用100％的宽度，但是
    当视口更大时，图像被限制在800 CSS像素内 -->

<!-- 这假定您正在使用符合RIAPI标准的图像服务器，如Imageflow。 
     动态生成图像变量对于开发人员的精神健康至关重要。 -->
```
