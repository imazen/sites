---
title: ブラウザが選択する方法
description: srcset 属性にリストされた画像のブラウザの選択方法
taskInputHash: c272925d0cc63780
lang: ja
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
ブラウザは、`srcset` 属性にリストされた画像から、どの画像を選ぶのでしょうか？ デバイスとビューポートに基づいて、幅指定と密度指定の両方の例を示しながら、ステップ・バイ・ステップで説明します。

- HTML で `srcset` 属性を使用する場合、ブラウザは提供されたソースリストから最適な画像を選択するための一連のルールを使用します。これらのルールは、デバイスの表示特性（解像度、ピクセル密度）とビューポートのサイズに依存します。 `srcset` 属性には、幅に基づく異なる画像を指定することができます（`w` 記述子を使用）、またはピクセル密度に基づくもの（`x` 記述子を使用）。それぞれの場合について、例を挙げて説明していきます。

1\. 幅指定子 ( `w`) ：

以下のような `srcset` 属性があるとします:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

ブラウザは、以下の手順に従います:

a. デバイスの DPR（デバイス・ピクセル・比）を決定します。たとえば、標準ディスプレイの DPR は 1 であり、高解像度（Retina）ディスプレイの DPR は 2 以上です。

b. `srcset` にある各画像の効果的な幅を計算します。幅記述子に DPR を掛けます。DPR が 1 のデバイスの場合は、以下のようになります:

- example-small.jpg: 400 * 1 = 400px

- example-medium.jpg: 800 * 1 = 800px

- example-large.jpg: 1600 * 1 = 1600px

c. 効果的な幅をビューポートの幅と比較します。ビューポートの幅が 420px であると仮定します。ブラウザは、ビューポートの幅以上の効果的な幅を持つ最小の画像を選択します。この場合、 `example-medium.jpg` が選択されます。

2\. ピクセル密度指定子 (`x`):

以下のような `srcset` 属性があるとします:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

ブラウザは、以下の手順に従います:

a. デバイスの DPR（デバイス・ピクセル・比）を決定します。たとえば、標準ディスプレイの DPR は 1 であり、高解像度（Retina）ディスプレイの DPR は 2 以上です。

b. `srcset` 内の `x` 記述子とデバイスの DPR を比較します。この場合、次の記述子を持つ3つの画像があります:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. 最も近い DPR を持つ `x` 記述子を持つ画像を選択します。DPR が 1 のデバイスの場合、ブラウザは `example-1x.jpg` を選択します。DPR が 2 のデバイスの場合、 `example-2x.jpg` を選択します。

幅指定子 (`w`)を使用する場合は、`sizes` 属性と `srcset` 属性を組み合わせて、異なるビューポート幅でどのように画像が表示されるかについての詳細情報を提供することもできます。以下は例です:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
