---
taskInputHash: 1033ff53248e3654
title: ギャラリーにタップしてフルスクリーン画像を見るを追加する
description: ギャラリーにタップしてフルスクリーン画像を見るオプションを追加する方法
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: ja
---
ギャラリーに「タップしてフルスクリーンイメージを見る」オプションを追加するには、JavaScriptとCSSを使用して、ユーザーが画像をタップしたときに画像をフルスクリーンモードで表示するオーバーレイを作成できます。

こちらが基本的なアプローチです:

1. まず、ギャラリー用のコンテナを作成し、表示したいすべての画像を追加します。

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- ここにもっと画像を追加 -->
</div>
```

2. 次に、ギャラリーおよび画像をスタイル設定するためにCSSを追加します。

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

3. 次に、JavaScriptを使用して各画像にクリックイベントリスナーを追加します。ユーザーが画像をクリックすると、JavaScriptはオーバーレイを作成し、画像をフルスクリーンモードで表示します。

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // オーバーレイを作成
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // 画像要素を作成
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // 画像要素をオーバーレイに追加
    overlay.appendChild(fullScreenImage);
    
    // オーバーレイをページに追加
    document.body.appendChild(overlay);
  });
});
```

4. 最後に、オーバーレイとフルスクリーン画像をスタイル設定するためにCSSを追加します。

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

これらの手順で、ユーザーが画像をタップすることでフルスクリーンモードで画像を表示できるギャラリーが出来上がります。
