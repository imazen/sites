---
taskInputHash: fa005e5f0d4944f4
title: |-
  記事のタイトルと説明も注意深く翻訳してください。& や < または > は使用しないでください。

   画像にパディングを追加する
description: CSSとアスペクト比を使用して画像をセンタリングし、パディングを追加する方法
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: ja
---
CSSとアスペクト比を使用して画像のセンタリングとパディングを行う方法は次の通りです：
1. まず、画像を`<div>`や`<figure>`などのコンテナ要素でラップする必要があります。これにより、コンテナに適用されたスタイルが内部の画像に影響を与えます。
2. コンテナの`position`プロパティを`relative`に設定します。これにより、コンテナ内の画像を位置決めできます。
3. コンテナに`::after`疑似要素を追加します。これは、画像のアスペクト比を維持し、パディングを作成するために使用されます。
4. `::after`疑似要素の`content`プロパティを空の文字列に設定します。これは要素を作成するために必要です。
5. `::after`疑似要素の`padding-bottom`プロパティを、画像のアスペクト比に対応するパーセンテージ値に設定します。たとえば、画像のアスペクト比が4:3の場合、パディングを`75%`に設定します（3/4 = 0.75のため）。これにより、画像の下にパディングが作成されます。
6. `::after`疑似要素の`position`プロパティを`absolute`に設定します。これにより、要素がコンテナ内に位置決めされます。
7. `::after`疑似要素の`top`、`left`、`bottom`、`right`プロパティを`0`に設定します。これにより、要素がコンテナ全体を埋め、パディングを作成します。
8. 最後に、画像自体の`position`プロパティを`absolute`に設定します。これにより、`top`、`left`、`bottom`、`right`プロパティを使用して画像をコンテナ内でセンタリングできます。

以下は、4:3のアスペクト比で画像をセンタリングし、パディングを設定するためのCSSコードの例です：

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3のアスペクト比 */
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

この例では、`.container`要素が画像のコンテナです。`::after`疑似要素は、パディングを作成し画像のアスペクト比を維持するために使用されます。`img`要素は`position: absolute`に設定され、`top`、`left`、`bottom`、`right`プロパティを使用してコンテナ内でセンタリングされます。

画像の`max-width`および`max-height`プロパティを`100%`に設定することで、画像は利用可能なスペースに合わせてスケーリングされ、そのアスペクト比を維持します。これにより、`::after`疑似要素によって作成されたパディングは、常に画像のサイズに比例します。
