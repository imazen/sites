---
title: CSS効果とボーダー
description: 画像にCSS効果とボーダーを追加する方法
taskInputHash: e6d6168962b1aed1
lang: ja
date_published: '2023-03-29'
date_modified: '2023-04-03'
date_updated: '2024-11-15'
---
画像にCSS効果やボーダーを追加するには、以下の手順を使用できます：
1. HTMLコード内で画像要素を選択します。これは、IDまたはクラスセレクタを使用するか、直接`<img>`要素を選択することで行えます。
2. 画像に適用するスタイルを定義するCSSクラスまたはIDセレクタを作成します。たとえば、以下のコードを使用して画像の周囲にシンプルなボーダーを作成できます:

```css
.my-image {
  border: 2px solid black;
}
```

3. CSSクラスまたはIDセレクタを画像要素に適用します。たとえば、ステップ2で`.my-image`セレクタを使用した場合、次のHTMLコードを追加して画像にスタイルを適用できます:

```html
<img src="path/to/image.jpg" class="my-image">
```

4. 必要に応じてスタイルをカスタマイズします。ボーダーに加えて、フィルター、不透明度、トランジション、アニメーションなど、画像に幅広いCSS効果を適用できます。画像に効果を追加するために使用できるCSSコードのいくつかの例を以下に示します:

```css
/* ドロップシャドウ効果を追加 */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* グレースケールフィルター効果を追加 */
.my-image {
  filter: grayscale(100%);
}

/* ホバー時にズームトランジション効果を追加 */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```

これらは、画像を強化するために使用できる多くのCSS効果やボーダーの一部の例に過ぎません。さまざまなスタイルを試して、デザインに最適なものを見つけてください。
