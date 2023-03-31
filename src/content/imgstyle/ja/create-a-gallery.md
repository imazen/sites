---
title: ギャラリーを作成する
description: ウェブサイトにギャラリーを作成する方法
taskInputHash: 8159c2a6287228bc
lang: ja
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
ウェブサイトに画像ギャラリーを作成する一般的な手順は次のとおりです。
1.画像ギャラリー用の新しいHTMLファイルを作成します。 "gallery.html"のような名前を付けることができます。
2.ファイルにHTML構造を追加します。これには、タイトルや必要なCSSスタイルシートを含むヘッドセクション、実際のギャラリーを追加する本文セクションが通常含まれます。
3.`<div>`タグを使用して、ギャラリーのコンテナを作成します。後でスタイルできるようにIDまたはクラスを付けます。
4.コンテナ内に、`<img>`タグを使用して個々の画像要素を追加します。ソース属性を画像ファイルのパスまたはURLに設定し、必要に応じてaltテキストやキャプションを追加できます。
5.CSSでギャラリーのスタイルを調整します。display、width、height、margin、padding、borderなどのプロパティを使用して、ギャラリーのレイアウトと外観を制御できます。

ここに、シンプルな画像ギャラリーを作成する例のコードがあります。

```html
<!DOCTYPE html>
<html>
<head>
	<title>私の画像ギャラリー</title>
	<style>
		.gallery {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.gallery img {
			width: 300px;
			height: 200px;
			margin: 10px;
			object-fit: cover;
			border: 2px solid black;
		}
	</style>
</head>
<body>
	<div class="gallery">
		<img src="image1.jpg" alt="画像1">
		<img src="image2.jpg" alt="画像2">
		<img src="image3.jpg" alt="画像3">
		<img src="image4.jpg" alt="画像4">
		<img src="image5.jpg" alt="画像5">
		<img src="image6.jpg" alt="画像6">
	</div>
</body>
</html>
```

この例では、ギャラリーコンテナに "gallery"クラスが付けられ、flexboxを使用して画像をグリッド状に配置できるようにスタイルが適用されています。各画像の幅は300px、高さは200px、余白は10px、境界線は2pxの塗りつぶしの黒です。オブジェクト適応プロパティは、画像のサイズが異なる場合でもアスペクト比を維持するようにします。

このコードを必要や好みに合わせてカスタマイズできます。
