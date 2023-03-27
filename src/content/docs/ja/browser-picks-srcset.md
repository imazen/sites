---
title: ブラウザーが選択する方法
description: srcset属性にリストされた画像の選択方法
taskInputHash: a3664c3c872e855d
lang: ja
---
ブラウザーは、`srcset`属性にリストされた画像から適切な画像を選択するためにどのように決定するのでしょうか？デバイス、ビューポートに基づいて幅、密度のそれぞれの特定方法と例を挙げて解説します。

- HTMLで`srcset`属性を使う場合、ブラウザーは提供された画像リストから最適な画像を選択するために一連の規則を使用します。これらの規則は、デバイスのディスプレイ特性（解像度、ピクセル密度）とビューポートサイズに依存します。 `srcset`属性を使用すると、幅（`w`ディスクリプタを使用）またはピクセル密度（`x`ディスクリプタを使用して）に基づいて異なる画像を指定できます。それぞれの場合について、例を挙げながら説明していきましょう。

1\. 幅ディスクリプター（`w`）：

次の`srcset`属性があるとします：

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

ブラウザーは以下の手順を踏みます：

a. デバイスのDPR（デバイスピクセル比）を決定します。標準ディスプレイの場合、DPRは1で、高解像度（Retina）ディスプレイの場合、DPRは2以上です。

b. `srcset`内の各画像の有効幅を計算します。幅ディスクリプターにDPRを乗算します。DPRが1のデバイスの場合：

- example-small.jpg：400 \* 1 = 400px

- example-medium.jpg：800 \* 1 = 800px

- example-large.jpg：1600 \* 1 = 1600px

c. 有効幅をビューポート幅と比較します。ビューポート幅が420pxであると仮定します。ブラウザーは、有効幅がビューポート幅以上の最小の画像を選択します。この場合、`example-medium.jpg`が選択されます。

 1\. ピクセル密度ディスクリプター（`x`）：

次の`srcset`属性があるとします：

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

ブラウザーは以下の手順を踏みます：

a. デバイスのDPR（デバイスピクセル比）を決定します。標準ディスプレイの場合、DPRは1で、高解像度（Retina）ディスプレイの場合、DPRは2以上です。

b. `srcset`内の `x` ディスクリプターをデバイスのDPRと比較します。この場合、次のディスクリプターがある 3 つの画像があります：

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. DPRに最も近い`x`ディスクリプターに基づいて画像を選択します。DPRが1のデバイスの場合、ブラウザは`example-1x.jpg`を選択します。DPRが2の場合、`example-2x.jpg`を選択します。

幅ディスクリプター（`w`）を使用するときに、`sizes`属性を`srcset`属性と組み合わせて使用して、異なるビューポート幅で画像がどのように表示されるかについてのより詳細な情報を提供することもできます。これは、特に幅ディスクリプター（`w`）を使用する場合に役立ちます。以下は例です：

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
