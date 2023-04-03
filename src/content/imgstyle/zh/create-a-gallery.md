---
title: 创建一个图库
description: 如何在网站上创建图库
taskInputHash: 84ed0f83c84e027d
lang: zh
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
以下是创建网页图片库的一般步骤：

1. 创建一个新的 HTML 文件用于图片库。可以将其命名为“gallery.html”等名称。
2. 在文件中添加 HTML 结构。通常包括 head 部分，包括标题和任何必要的 CSS 样式表，以及 body 部分，您将在其中添加实际的工厂。
3. 使用 `<div>` 标签创建容器。给它一个 ID 或一个类，以便您以后可以为其设置样式。
4. 在容器中，使用 `<img>` 标记添加单个图像元素，可以将源属性设置为图像文件路径或 URL，并根据需要添加任何 alt 文本或字幕。
5. 使用 CSS 样式设置您的图库。您可以使用 `display`、`width`、`height`、`margin`、`padding` 和 `border` 等属性来控制图库的布局和外观。

以下是创建简单图库的示例代码：

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Image Gallery</title>
	<style>
		.gallery {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.gallery img {
			width: 300px;
			height: 200px;
			margin: 10px;
			object-fit: cover;
			border: 2px solid black;
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

在此示例中，图库容器具有“gallery ”类，并使用 flexbox 设置样式来在网格中排列图像。每个图像的宽度为 300px，高度为 200px，具有 10px 的外边距和 2px 的黑色边框。使用 `object-fit` 属性确保图像即使大小不同，也能保持其纵横比例。

您可以根据需要自定义此代码以适应特定需求和设计喜好。
