---
title: 密度指定子とsrcset
description: '`srcset`内で密度指定子を使用する例'
taskInputHash: bec3d5c89aadc6b1
lang: ja
---
## Srcset with Density Descriptorsとは何ですか？

密度指定子を使用したSrcsetは、1つの`<img>`要素に複数の画像ソースを指定できるHTML属性です。 密度指定子（`x`）は、ユーザーのディスプレイのピクセル密度に基づいて異なる解像度の画像を提供するために、Srcsetと組み合わせて使用されます。

## いつSrcset with Density Descriptorsを使用しますか？

密度指定子を使用したSrcsetを使用すると、以下の場合に特に便利です。

1. 高解像度画像を高DPIディスプレイ（例：Retinaディスプレイ）に提供しながら、標準ディスプレイに低解像度の画像を提供する場合。
2. 各ユーザーのデバイスに最適な画像サイズを提供して、ページのパフォーマンスを改善する場合。

## Srcset with Density Descriptorsの実装

密度指定子を使用したSrcsetを使用するには、次の手順に従います。

1. 異なる解像度で画像を準備します。
2. `<img>`要素に`srcset`属性を追加し、画像ソースと対応する密度指定子を含めます。
3. 画面に表示される画像のサイズを指定する場合は、オプションの`sizes`属性を追加します。

### マークアップ例

以下は、マークアップで密度指定子を使用したSrcsetを実装する方法の例です。

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="An example image">
```

このマークアップ例には次のものが含まれます。

- **src** ：ブラウザがsrcsetをサポートしていない場合に表示されるデフォルトの画像ソース。
- **srcset** ：画像ソースとその密度指定子（1x、2x、3x）のリスト。ブラウザは、ユーザーのディスプレイに基づいて最適な画像を選択します。
- **alt** ：アクセシビリティの目的で画像の説明。

以上です！ これで、密度指定子を使用したSrcsetを正常に実装し、Webサイトのパフォーマンスとユーザーエクスペリエンスを向上させました。
