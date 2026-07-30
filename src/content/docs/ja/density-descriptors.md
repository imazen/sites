---
taskInputHash: c904c759f007e376
title: Density descriptors と srcset
description: '`srcset`でのdensity descriptorsの使用例'
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: ja
---
Srcset with density descriptorsは、各ユーザーのデバイスに最も適した画像を配信するためのシンプルで効果的な方法を提供し、パフォーマンスとユーザーエクスペリエンスを向上させます。このガイドでは、density descriptorsを使用したsrcsetの基本と、便利なマークアップ例を紹介します。

## Density DescriptorsとSrcsetとは？

Srcsetは、単一の`<img>`要素に対して複数の画像ソースを指定できるように設計されたHTML属性です。Density descriptors (`x`)は、ユーザーのディスプレイのピクセル密度に基づいて異なる解像度の画像を提供するために、srcsetとともに使用されます。

## Density DescriptorsとSrcsetを使用するタイミング

Density descriptorsとsrcsetを使用すると特に便利なシーンは以下の通りです：
1. 高DPIディスプレイ（例：Retinaディスプレイ）に高解像度画像を表示しつつ、標準ディスプレイには低解像度画像を提供したい場合。
2. 各ユーザーのデバイスに最適な画像サイズを配信することで、ページのパフォーマンスを向上させたい場合。

## Density DescriptorsとSrcsetの実装方法

Density descriptorsとsrcsetを使うためには、以下の手順を実行します：
1. あなたの画像を異なる解像度で準備します。
2. `<img>`要素に`srcset`属性を追加し、画像ソースと対応するdensity descriptorsを含めます。
3. `sizes`属性（任意）を追加して、画面に表示される画像のサイズを指定します。

### マークアップの例

Density descriptorsとsrcsetを使用してマークアップを実装する例を以下に示します：

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="An example image">
```

このマークアップ例には以下が含まれています：
- **src** : ブラウザがsrcsetをサポートしていない場合に表示されるデフォルトの画像ソース。
- **srcset** : 画像ソースとそのdensity descriptors（1x, 2x, 3x）のリスト。ブラウザはユーザーのディスプレイに基づいて最適な画像を選択します。
- **alt** : アクセシビリティのために画像を説明するテキスト。

これで完了です！Srcsetとdensity descriptorsを実装することで、ウェブサイトのパフォーマンスとユーザーエクスペリエンスを向上させることができました。
