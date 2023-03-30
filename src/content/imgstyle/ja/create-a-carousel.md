---
title: 画像カルーセルを作成する
description: ウェブサイトで画像カルーセルを作成する方法
taskInputHash: 0b9f519516c5f51a
lang: ja
---
ウェブサイトで画像のカルーセルを作成する一般的な手順は以下の通りです：
1. 画像カルーセル用の新しいHTMLファイルを作成します。 "carousel.html"のような名前を付けることができます。
2. ファイルにHTML構造を追加します。これには通常、タイトルと必要なCSSスタイルシートを含むヘッドセクションと、実際のカルーセルを追加する本文セクションが含まれます。
3. `<div>`タグを使用してカルーセルのコンテナを作成します。 IDまたはクラスを指定して後でスタイルを設定できます。
4. コンテナ内に、 `<img>`タグを使用して個々の画像要素を追加します。ソース属性を画像ファイルパスまたはURLに設定し、必要に応じてaltテキストまたはキャプションを追加します。
5. `<button>`または`<a>`タグを使用してカルーセルのナビゲーションボタンを追加します。左矢印用のボタンまたはリンクと、右矢印用の別のボタンまたはリンクが必要です。
6. カルーセルを機能させるためのJavaScriptコードを追加します。ナビゲーションボタンでクリックイベントをリッスンし、カルーセルの表示を適切に更新する必要があります。 DOM APIまたはjQueryやReactなどのJavaScriptライブラリを使用してこれを行うことができます。

以下は、jQueryを使用してシンプルな画像カルーセルを作成するためのサンプルコードです：

````html
<!DOCTYPE html>
<html>
<head>
	<title>My Image Carousel</title>
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
		<img src="image1.jpg" alt="Image 1">
		<img src="image2.jpg" alt="Image 2">
		<img src="image3.jpg" alt="Image 3">
		<img src="image4.jpg" alt="Image 4">
		<img src="image5.jpg" alt="Image 5">
		<img src="image6.jpg" alt="Image 6">
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
					0:{```
