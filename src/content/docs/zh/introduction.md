---
title: '`srcset`与`<img>`sizes'
description: 2023年响应式图像的高效且具有个人意见的指南
taskInputHash: c8fe1f1e28c8cbe2
lang: zh
sidebar_sort_priority: 1000
---
**关于2023年图像的高效且具有个人意见的指南**

请检查侧边栏以进行深入了解。这是升级那些`<img>`标签以处理现代设备在其各种大小和像素密度中的快速参考。您应该[知道像素!=像素](/zh/pixels-not-pixels)，而且`devicePixelRatio` 更可能是 3.875 而不是 1:1。现代手机为了可读性而假装是 320-428px 宽（在 CSS 像素中），但每个 CSS 像素有很多设备像素。

> 如果您的图像尺寸永远不会改变，无论您将浏览器窗口缩小到多窄，您都应该使用 [密度描述符](/zh/density-descriptors)。这通常适用于标志、图标和按钮。

你知道你的[断点](/zh/breakpoints)是什么吗？你需要这些数字来调整下面的方案 - 至少是主内容区域停止增长的视口宽度断点。

### 简单方法

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="狗骑自行车" />

<!-- 我们假设您在 700 像素处有一个断点。 
      并且在该视口宽度下，此图像占用100％的宽度，但是
      当视口更大时，图像被限制为800个CSS像素 -->

<!-- 这假设您正在使用符合 RIAPI 标准的图像服务器，如 Imageflow。 
     实时图像变体制作对于开发者的理智非常重要。-->
