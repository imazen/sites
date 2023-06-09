---
title: px ≠ ピクセル
description: デバイスpx ≠ ブラウザpx ≠ 画像px
taskInputHash: 73be94d33f113c9c
lang: ja
ignore: '/* cSpell:locale ja,en*/'
sidebar_sort_priority: 900
date_published: '2023-03-26'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
### デバイスピクセル ≠ ブラウザpx ≠ 画像px

Appleのおかげで、CSSとHTMLのピクセル（ `px` ）は**ほとんど常に複数のデバイス/プリンターピクセルにマップされます**。私の携帯電話の `devicePixelRatio` は3.875です。[あなたのものは？](https://www.mydevice.io/)

デスクトップの `devicePixelRatio` は、ブラウザーズームによって変化しますが、デフォルトは1.5です（私の `System> Display> Scale` は150％です）。

画像ファイル（SVGを除く）は、ピクセルのグリッドにデコードされます。 **画像ピクセルをデバイスピクセルと1：1の比率で完璧に表示するのは非常に難しいですが、 `srcset` を使用すれば、それに十分に近づけることができます**。ただし、完璧なマッピングが必要な正当な理由がある場合は、少しのJavaScriptを使用して、ロード後にHTML要素のサイズを調整することができます。しかし、ここではそのような禁じられた技は明かされません。

> 他の絶対単位（in、pc、pt、mm、cm、Q）は、CSSピクセルの数とすべてが96dpiであると想定されています。開発者は絶対単位を避けます。なぜなら、フォントサイズまたはビューポート/コンテナの寸法から派生した単位を使用する方が一般的には良いからです。ユーザーが `Accessibility > Text Size` の乗数を調整、ブラウザーズーム、またはデバイスを回転させると、ミスマッチした単位がレイアウトを壊す可能性があります。言うまでもなく、サイトを出荷する前にこれらすべてのことを行う必要があります。
