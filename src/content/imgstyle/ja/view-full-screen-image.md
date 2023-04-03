---
title: ギャラリーにフルスクリーン表示のためのタップを追加する方法
description: ギャラリーにタップしてフルスクリーン表示するオプションを追加する方法
taskInputHash: 44235a54a6e8dc70
lang: ja
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
"Tap to view full-screen image"というオプションをギャラリーに追加するには、JavaScriptとCSSを使用して、ユーザーがタップすると画像をフルスクリーンモードで表示するオーバーレイを作成します。

次の基本的なアプローチを使用できます。
1.最初に、ギャラリーのコンテナを作成して、表示するすべての画像を追加します。

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!--ここに画像を追加-->
</div> 
```


2.次に、CSSを追加して、ギャラリーと画像をスタイルします。

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


3.次に、JavaScriptを使用して、各画像にクリックイベントリスナーを追加します。ユーザーが画像をクリックすると、JavaScriptはオーバーレイを作成し、画像をフルスクリーンモードで表示します。

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    //オーバーレイを作成
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    //画像要素を作成
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');

    //画像要素をオーバーレイに追加
    overlay.appendChild(fullScreenImage);

    //オーバーレイをページに追加
    document.body.appendChild(overlay);
  });
});
```


4.最後に、CSSを追加して、オーバーレイとフルスクリーン画像をスタイルします。

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


これらのステップで、ユーザーはタップすることで画像をフルスクリーンモードで表示できるギャラリーを持つはずです。
