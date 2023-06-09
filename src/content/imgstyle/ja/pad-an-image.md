---
title: 画像をパディングする方法
description: CSSとアスペクト比を使用して画像を中央に配置する方法
taskInputHash: 9a5dd6ecc4d98a45
lang: ja
ignore: '/* cSpell:locale ja,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
以下は、CSSとアスペクト比を使用して画像を中央に配置してパディングする方法です：

1. まず最初に、`<div>`や`<figure>`などのコンテナ要素で画像を囲む必要があります。これにより、コンテナにスタイルを適用して、内側の画像に影響を与えることができます。
2. コンテナの `position`プロパティを`relative`に設定します。これにより、コンテナ内の画像を配置できるようになります。
3. コンテナに`::after`疑似要素を追加します。これは、画像のアスペクト比を維持し、パディングを作成するために使用されます。
4. `::after`疑似要素の `content`プロパティを空の文字列に設定します。これは要素を作成するために必要です。
5. `::after`疑似要素の `padding-bottom`プロパティを、画像のアスペクト比に対応するパーセンテージ値に設定します。たとえば、画像のアスペクト比が4：3の場合、パディングを`75％`に設定します（3/4 = 0.75であるため）。これにより、画像の下にパディングが作成されます。
6. `::after`疑似要素の `position`プロパティを`absolute`に設定します。これにより、要素がコンテナ内に配置されます。
7. `::after`疑似要素の `top`、`left`、`bottom`、`right`プロパティを`0`に設定します。これにより、要素がコンテナいっぱいになり、パディングが作成されます。
8. ついに、画像自体の `position`プロパティを`absolute`に設定します。これにより、画像をコンテナ内で中央に配置できるようになり、`top`、`left`、`bottom`、`right`プロパティを使用して操作できます。

以下に、アスペクト比が4：3の画像を中央に配置してパディングするために使用するCSSコードの例を示します。

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

この例では、 `.container`要素は画像のコンテナです。 `::after`疑似要素は、パディングを作成し、画像のアスペクト比を維持するために使用されます。 `img`要素は `position: absolute`に設定されているため、 `top`、`left`、`bottom`、`right`プロパティを使用してコンテナ内で中央に配置されます。

画像の`max-width`と `max-height`プロパティを `100％`に設定することで、画像は利用可能なスペースに合わせてスケーリングされるため、`::after`疑似要素によって作成されたパディングは常に画像のサイズに比例します。
