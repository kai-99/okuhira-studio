---
title: "Gatsby.js にスライダーを実装するなら React Slick がおすすめ！"
description: ""
createdAt: "2021-08-22"
updateAt: "2021-09-23"
thumbnail: "./hero.png"
tags: ["React", "Gatsby.js"]
categories: "Develop"
---

## はじめに

Gatsby.js プロジェクトにスライダーを実装する際に React Slick というものがあり、非常に簡単に導入できて便利でしたので簡単に紹介します。
<span class="block text-sm text-gray-700">※当記事は Gatsby.js に実装する前提の内容になります</span>

Gatsby.js は React ベースで作られていますので、React Slick に限らず他の React ライブラリも利用することができます。  
jQuery slick の React 版ですので、jQuery slick を扱っていた方はより簡単に利用できるかと思います。

**React Slick 公式サイト**

- [React Slick Documentation](https://react-slick.neostack.com/)
- [React Slick GitHub](https://github.com/akiran/react-slick)

**実装サンプル**

<iframe title="React Slink Sample" src="https://react-slick-demo.netlify.app/" width="600" height="300"></iframe>

この記事では必要最低限の実装しかしていませんが、約 29 種類の実装パターンがあるので興味ある方は公式サイトの方も参考にしてみて下さい。

- [Examples - React Slick Documentation](https://react-slick.neostack.com/docs/example/simple-slider)

## パッケージのインストール

npm でパッケージが公開されているので、必要なパッケージをインストールします。

```bash
$ npm install react-slick
$ npm install slick-carousel
```

## 実装

Gatsby.js は `/gatsby-browser.js` ファイルにスタイル関係は記述しないと反映されないので、React Slick で利用する CSS を記述します。

```js:title=gatsby-browser.js
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
```

スライダー用のコンポーネントを作ります。  
ファイル名・ファイル配置はご自身の環境に応じて適宜変更して下さい。

```jsx:title=src/components/react-slick.js
import React, { Component } from "react";
import Slider from "react-slick";

export default class SlickSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<>
				<Slider {...settings}>
					<figure>
						<img
							src="https://fakeimg.pl/350x200/?text=Slider1&font=lobster"
							alt="/"
						/>
					</figure>
					<figure>
						<img
							src="https://fakeimg.pl/350x200/?text=Slider2&font=lobster"
							alt="/"
						/>
					</figure>
					<figure>
						<img
							src="https://fakeimg.pl/350x200/?text=Slider3&font=lobster"
							alt="/"
						/>
					</figure>
				</Slider>
			</>
		);
	}
}
```

ページでスライダーコンポーネントを読み込みます。

```jsx
import React from "react";
import SlickSlider from "../components/react-slick";

export default function Home() {
	return (
		<div>
			<h1>React Slick</h1>
			<SlickSlider />
		</div>
	);
}
```

以上で簡単にスライダーが実装できました。（以下実際に動きます）

<iframe title="React Slink Sample" src="https://react-slick-demo.netlify.app/" width="600" height="300"></iframe>

---

基本的に以下のハイライトが当たっている箇所を変更して、色々なパターンの実装をすることができます。

```jsx{3-9}
export default class SlickSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			// ...
		);
	}
}
```

## 参考サイト

- [React Slick Documentation](https://react-slick.neostack.com/)
- [React Slick GitHub](https://github.com/akiran/react-slick)
- [Examples - React Slick Documentation](https://react-slick.neostack.com/docs/example/simple-slider)
