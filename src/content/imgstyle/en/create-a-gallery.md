---
title: Create a gallery
description: How to create a gallery on a website
date_published: '2023-03-29'
date_modified: '2023-03-29'
date_updated: "2023-03-31T15:01:44-06:00"
---

Here are the general steps to create an image gallery on a website:
1. Create a new HTML file for your image gallery. You can name it something like "gallery.html".
2. Add the HTML structure to your file. This typically includes the head section with a title and any necessary CSS stylesheets, and the body section where you'll add the actual gallery. 
3. Create a container for your gallery using a `<div>` tag. Give it an ID or a class so you can style it later. 
4. Inside the container, add individual image elements using the `<img>` tag. You can set the source attribute to the image file path or URL, and add any alt text or captions as needed.
5. Style your gallery with CSS. You can use properties like display, width, height, margin, padding, and border to control the layout and appearance of your gallery.

Here's an example code for creating a simple image gallery:

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



In this example, the gallery container has a class of "gallery" and is styled using flexbox to arrange the images in a grid. Each image has a width of 300px, a height of 200px, a margin of 10px, and a border of 2px solid black. The object-fit property is used to make sure the images maintain their aspect ratio even if they are not the same size.

You can customize this code to fit your specific needs and design preferences.
