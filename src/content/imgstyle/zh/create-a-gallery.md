---
taskInputHash: 8989aab0a38919d5
title: |-
  同时仔细翻译文章的标题和描述；不要使用 & 或 < 或 >

   创建画廊
description: 如何在网站上创建画廊
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: zh
---
以下是在网站上创建图片画廊的一般步骤：

1. 为您的图片画廊创建一个新的 HTML 文件。您可以将其命名为“gallery.html”之类的名字。
2. 将 HTML 结构添加到您的文件中。通常包括带有标题和任何必要 CSS 样式表的头部，以及您将实际添加画廊的主体部分。
3. 使用 `<div>` 标签为您的画廊创建一个容器。给它一个 ID 或类名，以便日后进行样式设计。
4. 在容器内，使用 `<img>` 标签添加单独的图片元素。您可以将源属性设置为图像文件路径或 URL，并根据需要添加任何替代文本或说明。
5. 用 CSS 为您的画廊设计样式。您可以使用 display、width、height、margin、padding 和 border 等属性来控制画廊的布局和外观。

以下是创建简单图片画廊的示例代码：

```html
<!DOCTYPE html>
<html>
<head>
	<title>我的图片画廊</title>
	<style>
		.gallery {
			display: flex; /* 显示样式：弹性盒子布局 */
			flex-wrap: wrap; /* 自动换行 */
			justify-content: center; /* 居中对齐 */
		}
		.gallery img {
			width: 300px; /* 宽度 */
			height: 200px; /* 高度 */
			margin: 10px; /* 外边距 */
			object-fit: cover; /* 确保图片保持其纵横比 */
			border: 2px solid black; /* 边框 */
		}
	</style>
</head>
<body>
	<div class="gallery">
		<img src="image1.jpg" alt="Image 1">
		<img src="image2.jpg" alt="Image 2">
		<img src="image3.jpg" alt="Image 3">
		<img src="image4.jpg" alt="Image 4">
		<img src="image5.jpg" alt="Image 5">
		<img src="image6.jpg" alt="Image 6">
	</div>
</body>
</html>
```

在此示例中，画廊容器的类名是“gallery”，并使用弹性盒布局（flexbox）来将图片排列成网格。每个图像的宽度为 300px，高度为 200px，外边距为 10px，边框为 2px 实线黑色。`object-fit` 属性用于确保图片即使不在相同大小仍能保持其比例。

您可以自定义此代码以适应您的特定需求和设计偏好。
