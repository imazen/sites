---
title: px ≠ 像素
description: 设备像素 ≠ 浏览器像素 ≠ 图像像素
taskInputHash: 75742aca9ccfa689
lang: zh
sidebar_sort_priority: 900
---
### 设备像素 ≠ 浏览器 px ≠ 图片 px

多亏了 Apple，CSS 和 HTML 像素（`px`）**几乎总是映射到多个设备/打印机像素**上。我的手机的 devicePixelRatio 是 3.875；[你的是多少？](https://www.mydevice.io/)

我的桌面 devicePixelRatio 会随着浏览器缩放而改变，但默认值为 1.5（毕竟我的 `System > Display > Scale` 是 150%）。

图像文件（不包括 SVG）解码为像素网格。**要让图像像素以 1:1 的比例显示到设备像素上，有着令人恼火的难度 - 但使用 `srcset` 可以达到足够接近**，如果您确实有需要完美映射的理由，一些 JavaScript 代码可以在加载后调整 HTML 元素大小，尽管这些黑科技将不会在此透露。

> 其他绝对单位（如 in、pc、pt、mm、cm、Q）都是以 CSS 像素的数量为基础定义的，而且假设所有东西都是 96dpi。开发者尽量避免使用绝对单位，因为更好的做法通常是使用从字体大小或视口/容器尺寸派生出来的单位。如果用户调整其 `Accessibility > Text Size` 的倍增器、缩放浏览器或旋转设备，则可能会导致单位不匹配而破坏布局。毫无疑问，在发布网站之前，您应该将所有这些操作都执行一遍。
