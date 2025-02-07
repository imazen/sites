---
taskInputHash: d196dcc7f2eb312c
title: |-
  記事のタイトルと説明も注意深く翻訳してください。ただし、&、<、>を使用しないでください。

   カルーセルを作成する
description: ウェブサイトでカルーセルを作成する方法
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: ja
---
ウェブサイトで画像カルーセルを作成する一般的な手順は以下の通りです：
1. 新しいHTMLファイルを作成し、画像カルーセル用に名前を付けます。例えば「carousel.html」など。
2. ファイルにHTML構造を追加します。通常は、タイトルや必要なCSSスタイルシートが含まれるヘッドセクションと、実際のカルーセルを追加するボディセクションが含まれます。
3. `<div>`タグを使ってカルーセル用のコンテナを作成します。このコンテナにIDやクラスを付けて後でスタイルを設定できるようにします。
4. コンテナの中に、`<img>`タグを使って個々の画像要素を追加します。ソース属性を画像ファイルのパスやURLに設定し、必要に応じて代替テキストやキャプションを追加します。
5. `<button>`または`<a>`タグを使ってカルーセルにナビゲーションボタンを追加します。左矢印と右矢印用にボタンやリンクが必要です。
6. JavaScriptコードを追加してカルーセルを機能的にします。ナビゲーションボタンのクリックイベントをリッスンし、カルーセルの表示をそれに応じて更新する必要があります。これを行うには、DOM APIまたはjQueryやReactのようなJavaScriptライブラリを使用することができます。

以下は、jQueryを使用してシンプルな画像カルーセルを作成する例のコードです：

```html
<!DOCTYPE html>
<html>
<head>
	<title>マイ画像カルーセル</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
	<style>
		.carousel {
			margin: 50px auto;
		}
		.carousel img {
			width: 100%;
			height: auto;
		}
		.owl-nav {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 100%;
		}
		.owl-prev, .owl-next {
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto;
			width: 50px;
			height: 50px;
			background-color: rgba(0, 0, 0, 0.5);
			color: #fff;
			font-size: 30px;
			text-align: center;
			line-height: 50px;
			cursor: pointer;
			border-radius: 50%;
		}
		.owl-prev {
			left: 0;
		}
		.owl-next {
			right: 0;
		}
	</style>
</head>
<body>
	<div class="carousel owl-carousel owl-theme">
		<img src="image1.jpg" alt="画像 1">
		<img src="image2.jpg" alt="画像 2">
		<img src="image3.jpg" alt="画像 3">
		<img src="image4.jpg" alt="画像 4">
		<img src="image5.jpg" alt="画像 5">
		<img src="image6.jpg" alt="画像 6">
	</div>
	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
	<script>
		$(document).ready(function(){
			$('.carousel').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
```
