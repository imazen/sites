---
title: 画像に余白を付ける
description: CSSとアスペクト比を使用して画像を中央に配置する上での余白の付け方
taskInputHash: 8e90740fd7e9b211
lang: ja
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
CSSとアスペクト比を使用して画像を中央に配置し、余白を付ける方法は次のとおりです：
1. まず、`<div>`または`<figure>`などのコンテナ要素に画像を包み込む必要があります。これにより、コンテナ内の画像に影響を与えるスタイルを適用できるようになります。
2. コンテナの`position`プロパティを`relative`に設定します。これにより、コンテナ内の画像を配置できます。
3. コンテナに`::after`疑似要素を追加します。これは画像のアスペクト比を維持し、余白を作成するために使用されます。
4. `::after`疑似要素の`content`プロパティを空の文字列に設定します。これによりエレメントが作成されます。
5. `::after`疑似要素の`padding-bottom`プロパティを、画像のアスペクト比に対応するパーセンテージ値に設定します。たとえば、画像のアスペクト比が4：3の場合、パディングを`75％`に設定します（3/4 = 0.75なので）。これにより、画像の下に余白が作成されます。
6. `::after`疑似要素の`position`プロパティを`absolute`に設定します。これにより、要素をコンテナ内に配置します。
7. `::after`疑似要素の`top`、`left`、`bottom`、`right`プロパティをすべて`0`に設定します。これにより、要素がコンテナを埋め、余白が作成されます。
8. 最後に、画像自体の`position`プロパティを`absolute`に設定します。これにより、`top`、`left`、`bottom`、`right`プロパティを使用してコンテナ内で画像を中央に配置できます。

以下は、アスペクト比が4：3の画像を中央に配置し、余白を追加するために使用するCSSコードの例です。

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 アスペクト比 */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
```

この例では、`.container`要素は画像のコンテナです。 `::after`疑似要素は余白を作成し、画像のアスペクト比を維持するために使用されます。 `img`要素は`position：absolute`に設定されているため、`top`、`left`、`bottom`、`right`プロパティを使用してコンテナ内で中央に配置することができます。

画像の`max-width`と`max-height`プロパティを`100％`に設定することにより、画像は利用可能なスペースに合わせてスケーリングされ、そのアスペクト比を維持します。これにより、`::after`疑似要素によって作成された余白は常に画像のサイズに比例します。
