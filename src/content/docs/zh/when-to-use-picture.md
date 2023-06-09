---
title: 何时使用`<picture>`元素
description: 解释何时应使用`<picture>`元素的特定情况
taskInputHash: 671b0d063b76a959
lang: zh
ignore: '/* cSpell:locale zh,en*/'
date_published: '2023-03-27'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
`picture`元素用于提供多个图像版本，并根据特定条件确定显示哪个版本的图像。它特别适用于针对不同的屏幕尺寸和分辨率优化图像，并常用于响应式网页设计。

以下是一些你可能想要使用`picture`元素的特定情况：

* **视网膜显示器：** 高密度屏幕（如苹果的Retina显示器）具有更高的像素密度，这意味着如果它们未经过高分辨率优化，则图像可能会变得模糊或像素化。使用`picture`元素，您可以提供一个具有正常版本两倍像素的图像版本，因此在Retina显示器上看起来清晰明了。

* **不同的纵横比：** 如果您设计需要显示不同纵横比（如横向对比纵向）的图像的站点，可以使用`picture`元素提供针对每个纵横比进行优化的不同版本的图像。

* **带宽限制：** 图像可以是大文件，占用大量带宽，尤其是在移动设备上。使用`picture`元素，您可以为具有较小屏幕或较慢互联网连接的设备提供较小的图像版本，从而有助于减少页面加载时间。

* **美术指导布局：** 有时您可能希望根据页面其余部分的布局以某种特定方式呈现图像。例如，您可能希望在移动设备上展示某个人的面部特写，但在桌面设备上展示更广阔的景象。`picture`元素允许您提供针对不同布局进行优化的不同图像版本。

总的来说，`picture`元素是一个功能强大的工具，可以帮助您优化图像，以适应各种用例，并确保无论在什么设备或屏幕尺寸上查看，它们都看起来很棒。
