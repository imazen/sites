---
title: ブラウザーが選択する方法
description: '`srcset`属性にリストされた画像の中からブラウザーが選択する方法'
taskInputHash: c272925d0cc63780
lang: ja
---
ブラウザは、`srcset`属性にリストされた画像の中からどの画像を選択するのでしょうか？デバイスとビューポートに基づいて、幅と密度指定の両方について例を挙げながら、ステップバイステップで解説します。

- HTMLで `srcset` 属性を使用する場合、ブラウザーは提供されたリストから最適な画像を選択するために一連のルールを使用します。これらのルールは、デバイスの表示特性（解像度、ピクセル密度）とビューポートのサイズに依存します。 `srcset`属性により、幅に基づく異なる画像（`w`ディスクリプタを使用）またはピクセル密度に基づく異なる画像（`x`ディスクリプタを使用）を指定できます。 それぞれのケースについて、例を挙げて説明しましょう。

1\. 幅ディスクリプタ(`w`)の場合:

次の `srcset`属性がある場合を考えます:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

ブラウザは以下の手順に従います。    

a. デバイスのDPR（デバイス・ピクセル・レシオ）を決定します。例えば、標準のディスプレイのDPRは1であり、高解像度（Retina）ディスプレイのDPRは2以上です。

b. 各画像の有効な幅を計算します。幅ディスクリプタをDPRで掛け算します。DPRが1のデバイスの場合:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. 有効な幅をビューポートの幅と比較します。ビューポートの幅が420pxである場合、ブラウザは、有効な幅がビューポートの幅以上の最小の画像を選択します。この場合、 `example-medium.jpg`を選択します。

1\. ピクセル密度ディスクリプタ(`x`)の場合:

次の `srcset`属性がある場合を考えます:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

ブラウザは以下の手順に従います。    

a. デバイスのDPR（デバイス・ピクセル・レシオ）を決定します。例えば、標準のディスプレイのDPRは1であり、高解像度（Retina）ディスプレイのDPRは2以上です。

b. `srcset` 内の `x`ディスクリプタとデバイスのDPRを比較します。この場合、以下のディスクリプタを持つ3つの画像があります:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. デバイスのDPRに最も近い `x`ディスクリプタを持つ画像を選択します。DPRが1のデバイスの場合、ブラウザは `example-1x.jpg`を選択します。DPRが2のデバイスの場合、 `example-2x.jpg`を選択します。

幅ディスクリプタ (`w`)を使用する場合、`sizes`属性を `srcset`属性と組み合わせて使用して、異なるビューポート幅で画像がどのように表示されるかについて詳細な情報を提供することもできます。これは特に便利です。 ここに例を示します。

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
