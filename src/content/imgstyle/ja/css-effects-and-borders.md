---
title: CSSエフェクトとボーダー
description: 画像にCSSエフェクトとボーダーを追加する方法
taskInputHash: 279000ebf22e6f15
lang: ja
ignore: '/* cSpell:locale ja,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
画像にCSSエフェクトやボーダーを追加するには、次の手順を使用できます。

1. HTMLコードの中で、画像要素を選択します。これはIDやクラスセレクターを使用するか、直接`<img>`要素を選択することで行うことができます。

2. 画像に所望のスタイルを適用するCSSクラスまたはIDセレクターを定義します。例えば、次のコードを使用して画像の周囲にシンプルな枠線を作成できます。

```css
.my-image {
  border: 2px solid black;
}
```

3. CSSクラスまたはIDセレクターを画像要素に適用します。例えば、ステップ2で`.my-image`セレクターを使用した場合、以下のコードをHTMLに追加して画像にスタイルを適用できます。

```arduino
<img src="path/to/image.jpg" class="my-image">
```

4. 必要に応じてスタイルをカスタマイズします。ボーダーに加えて、多様なCSSエフェクトを画像に適用できます。フィルタ、不透明度、トランジション、アニメーションなどがあります。以下は、画像にエフェクトを追加するために使用できるCSSコードの例です。

```css
/* ドロップシャドウエフェクトを追加 */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* グレースケールフィルタエフェクトを追加 */
.my-image {
  filter: grayscale(100%);
}

/* ホバー時にズームトランジションエフェクトを追加 */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```

これらは、あなたの画像を強化するために使用できる多様なCSSエフェクトやボーダーの一部です。異なるスタイルを試して、デザインに最適なものを見つけてください。
