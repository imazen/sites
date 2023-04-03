---
title: 将“点击查看全屏图像”添加到图库
description: 如何为图库添加“点击查看全屏图像”选项
taskInputHash: 262c64e44b6bbc93
lang: zh
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
要在图库中添加“点击查看全屏图像”的选项，可以使用JavaScript和CSS创建一个覆盖层，在用户点击图像时显示全屏模式的图像。

下面是一个基本方法：
1. 首先，创建一个图库容器，并添加所有要显示的图像。

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- 在这里添加更多图片 -->
</div>
```


2. 接下来，添加一些CSS来为图库和图像添加样式。

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery img {
  width: 100%;
  height: auto;
  margin: 5px;
}
```


3. 现在，使用JavaScript为每个图像添加单击事件侦听器。当用户单击图像时，JavaScript将创建一个覆盖层，并以全屏模式显示图像。

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // 创建覆盖层
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // 创建图像元素
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // 将图像元素添加到覆盖层
    overlay.appendChild(fullScreenImage);
    
    // 将覆盖层添加到页面
    document.body.appendChild(overlay);
  });
});
```


4. 最后，添加一些CSS来为覆盖层和全屏图像添加样式。

```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-screen-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```



经过这些步骤，现在您应该拥有一个允许用户通过点击来在全屏模式下查看图像的图库了。
