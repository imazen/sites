---
title: '`srcset` 和 `<img>` `sizes`'
description: 2023年响应式图像的高效而有见地的指南
taskInputHash: 37440300dc8e2ebe
lang: zh
sidebar_sort_priority: 1000
---
**2023年图片的高效而有见地的指南**

请查看侧边栏深入学习。这是快速参考，旨在升级 `<img>` 标签以处理各种尺寸和像素密度的现代设备。您应该 [知道像素 ≠ 像素](/zh-cn/pixels-not-pixels) ，并且 `devicePixelRatio` 更有可能接近 3.875 而不是 1:1。现代手机为可读性而假装具有 320-428px 的宽度。

> 如果您的图像永远不会改变大小，无论您将浏览器窗口缩小到多窄，您都应该使用 [密度描述符](/zh-cn/density-descriptors)。这通常适用于徽标、图标和按钮。 

您知道您的 [断点](/zh-cn/breakpoints) 是什么吗？您需要这些数字来微调下面的解决方案-并且至少需要视口宽度断点，其中主内容区域停止增长。

### 简单方法

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="狗骑脚踏车" />

<!-- 我们假设您在 700 像素处有一个断点。  
       如果视口宽度小于该宽度，则该图像将占用整个宽度，当视口较大时，图像将限制在 800 CSS 像素内 -->

<!-- 这还假定您正在使用符合 RIAPI 标准的图像服务器，例如Imageflow。  
      实时生成变体图像对于开发人员的正常工作至关重要。-->
```
