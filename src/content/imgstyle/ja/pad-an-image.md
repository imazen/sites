---
title: 画像の余白を作成する
description: CSSとアスペクト比を使用して画像を中央揃えし、余白を作成する方法
taskInputHash: 6a58944d4b373491
lang: ja
---
以下のようにCSSとアスペクト比を使用して画像を中央揃えし、余白を作成できます。

1. まず、画像を`<div>`または`<figure>`などのコンテナ要素で囲む必要があります。これにより、コンテナ内の画像に影響を与えるスタイルを適用できます。
2. コンテナの`position`プロパティを`relative`に設定します。これにより、コンテナ内の画像を位置指定できます。
3. コンテナに`::after`擬似要素を追加します。これは、画像のアスペクト比を維持し、余白を作成するために使用されます。
4. `::after`擬似要素の`content`プロパティを空の文字列に設定します。これは要素を作成するために必要です。
5. `::after`擬似要素の`padding-bottom`プロパティを、画像のアスペクト比に対応するパーセンテージ値に設定します。たとえば、画像のアスペクト比が4：3の場合、パディングを`75％`に設定します（3/4=0.75）。
6. `::after`擬似要素の`position`プロパティを`absolute`に設定します。これにより、要素がコンテナ内に配置されます。
7. `::after`擬似要素の`top`、`left`、`bottom`、および`right`プロパティを`0`に設定します。これにより、要素がコンテナを埋め、余白が作成されます。
8. 最後に、画像自体の`position`プロパティを`absolute`に設定します。これにより、`top`、`left`、`bottom`、および`right`プロパティを使用して画像をコンテナ内に中央揃えできます。

以下は、アスペクト比が4：3の画像を中央揃えして余白を付けるために使用するCSSコードの例です。

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3アスペクト比 */
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

この例では、`.container`要素が画像のコンテナです。 `::after`擬似要素は余白を作成し、画像のアスペクト比を維持するために使用されます。 `img`要素は `position: absolute`で設定されているため、`top`、`left`、`bottom`、および`right`プロパティを使用してコンテナ内で中央揃えすることができます。

画像の`max-width`および`max-height`プロパティを`100％`に設定することにより、画像は利用可能なスペースに合わせて拡大縮小されながら、そのアスペクト比を維持します。つまり、`::after`擬似要素によって作成される余白は、常に画像のサイズに比例しています。
