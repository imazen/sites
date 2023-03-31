---
title: '`srcset` と `<img>` の `sizes`'
description: 2023年のレスポンシブイメージの効率的で主観的なガイド
taskInputHash: fb587f981b4441f1
lang: ja
ignore: '/* cSpell:locale ja,en*/'
sidebar_sort_priority: 1000
date_published: '2023-03-23'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
**2023年のイメージに関する効率的で主観的なガイド**

深堀りについてはサイドバーを参照してください。これは、現代の様々なサイズとピクセル密度に対応するために、`<img>` タグをアップグレードするクイックリファレンスです。pixels != pixels であることを[知っておくべきです](/ja/pixels-not-pixels)。そして、`devicePixelRatio` は1:1よりも3.875程度の方が多いです。現代のスマートフォンは、CSSピクセル単位で320-428pxの幅になるように見せかけますが、CSSピクセル単位あたりの多数のデバイスピクセルがあります。

> ブラウザウィンドウをどんなに狭くしても、画像のサイズが変わらない場合は、[density descriptor](/ja/density-descriptors) を使用する必要があります。これは、ロゴ、アイコン、ボタンなどに適しています。

あなたの[ブレークポイント](/ja/breakpoints)を知っていますか？以下のソリューションを微調整するためにこれらの数値が必要になります-最小限に、メインコンテンツ領域が成長を止めるビューポート幅のブレークポイントが必要です。

### 簡単な方法

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="犬が自転車に乗っている画像" />

<!-- ブレークポイントが700pxであることを仮定しています。 
      そして、そのビューポート幅以下では、この画像は幅の100％を占めますが、
      ビューポートが大きい場合は、画像は800 CSSピクセルに制限されます。-->

<!-- これは、ImageflowなどのRIAPI準拠の画像サーバーを使用していることを前提としています。
     デベロッパーの健全性のため、動的な画像バージョンの生成が必須です。 -->
```
