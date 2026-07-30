---
taskInputHash: c84ff0ac0058808c
title: '`<picture>` 要素の使用例'
description: レスポンシブな画像、アートディレクション、異なる画像フォーマットにおける `<picture>` 要素の使用例を提供します
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: ja
---
以下は `<picture>` 要素の使用例とその説明です：

1\. レスポンシブな画像の例:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="An image" />
</picture>
```

説明: この例では、`<picture>` 要素を使用して、異なる画面サイズに合わせた異なる画像ソースを提供しています。`<source>` 要素は、"srcset" 属性と "media" 属性を使用して、各ソースを使用する条件を指定しています。`<img>` 要素は、古いブラウザや `<source>` 要素で指定された条件が満たされない場合のフォールバックとして使用されます。

2\. アートディレクションの例:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="An image" />
</picture>
```

説明: この例では、デバイスの向きに応じて異なる画像ソースを提供するために `<picture>` 要素を使用しています。"media" 属性が "(orientation: landscape)" に設定された `<source>` 要素は、横向き画面用の画像ソースを指定し、`<img>` 要素は縦向き画面用の画像ソースを指定しています。

3\. 異なる画像フォーマットの例:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="An image" />
</picture>
```

説明: この例では、異なる画像フォーマットに対して異なる画像ソースを提供するために `<picture>` 要素を使用しています。`<source>` 要素は、"srcset" 属性と "type" 属性を使用して画像フォーマットを指定しています。`<img>` 要素は、`<picture>` 要素をサポートしない古いブラウザのためのフォールバックとして使用されます。

## ブレークポイント

レスポンシブデザインでは、ビューポートのサイズに基づいてウェブサイトやアプリケーションのレイアウトが変わるタイミングを定義するためにブレークポイントが使用されます。ブレークポイントは通常、CSS のメディアクエリを使用して定義され、画面幅に応じた異なるスタイルを適用します。これらのブレークポイントは、`<picture>` 要素と組み合わせて、異なる画面サイズに合わせた画像ソースを提供することができます。

例えば、上記の最初の例では、`media` 属性を使用して、各ソースを使用する画面幅を指定しました。画面幅が768ピクセル以上の場合は `image-large.jpg` ソースが使用され、480ピクセル以上768ピクセル未満の場合は `image-medium.jpg` ソースが使用され、480ピクセル未満の場合は `image-small.jpg` ソースが使用されます。これにより、各デバイスに適したサイズの画像を提供し、ページ読み込み時間を短縮し、ユーザーエクスペリエンスを向上させることができます。

ブレークポイントは任意の画面サイズで定義でき、複数のブレークポイントを使用して幅広いデバイスに対応するレイアウトを作成できます。ブレークポイントと `<picture>` 要素を組み合わせることで、どのデバイスでも見栄えの良い柔軟でレスポンシブなデザインを作成することができます。
