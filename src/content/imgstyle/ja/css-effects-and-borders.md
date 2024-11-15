---
title: CSS効果と枠線
description: 画像にCSS効果と枠線を追加する方法
taskInputHash: 9dddb11f36487799
lang: ja
date_published: '2023-03-29'
date_modified: '2024-11-15'
date_updated: '2024-11-15'
---
画像に対してCSS効果や枠線を追加するには、以下の手順を実行します:

1. HTMLコード内の画像要素を選択します。IDやクラスセレクタを使用して選択するか、直接`<img>`要素を選択することができます。

2. 画像に適用したいスタイルを定義するCSSクラスまたはIDセレクタを作成します。例えば、画像の周りにシンプルな枠線を作成するには、次のコードを使用できます:

```css
.my-image {
  border: 2px solid black;
}
```

3. CSSクラスまたはIDセレクタを画像要素に適用します。例えば、ステップ2で`.my-image`セレクタを使用した場合、次のコードをHTMLに追加して画像にスタイルを適用できます:

```html
<img src="path/to/image.jpg" class="my-image">
```

4. スタイルを必要に応じてカスタマイズします。枠線の他に、フィルタや不透明度、トランジション、アニメーションなど、さまざまなCSS効果を画像に適用できます。画像に効果を追加するために使用できるCSSコードの例を以下で紹介します:

```css
/* ドロップシャドウ効果を追加する */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* グレースケールフィルター効果を追加する */
.my-image {
  filter: grayscale(100%);
}

/* ホバー時のズームトランジション効果を追加する */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```

これらは、画像を強化するために使用できるCSS効果と枠線のほんの一例に過ぎません。異なるスタイルを試して、デザインに最適なものを見つけてください。
