---
title: "Gatsby.js + Tailwind CSS で爆速なブログ作ってみた"
description: "静的サイトジェネレータのGatsby.jsとCSSフレームワークのTailwind CSSという構成で表示速度の早いブログを作成しました。この記事ではブログを作る際に使用した技術周りの事や、参考になるリンクを紹介しています。"
createdAt: "2021-06-20"
updateAt: "2021-06-23"
thumbnail: "./hero.png"
tags: ["Gatsby.js", "Tailwind CSS"]
categories: "Develop"
---

## はじめに

個人ブログを作りたいなと前々から思っており、つい最近 Gatsby.js + Tailwind CSS + Gatsby Cloud の構成で当ブログを作成しました。  
このような構成にした理由としては、私は本業で Web 制作をしておりその延長で技術的にスキルアップしたいと模索していたところ、Gatsby.js がとても魅力的に感じたのが経緯です。

この記事では当ブログを作成していく最中工夫した点や、これから個人ブログを作ろうと思っている方に向けて、使用している各技術の概要・参考リンク等をまとめましたので、記事を読みに来てくれた方の参考になれば幸いです。

## 使用技術とサービス

**フレームワーク**

- [Gatsby.js](https://www.gatsbyjs.com/)

![Gatsbyjs](./gatsbyjs.png)

Gatsby.js とは、、、、

> The hardest parts of the web, made simple.  
> Gatsby is unbelievably fast & smooth.  
> Everything just feels...there.  
> <cite>[Gatsby.js](https://www.gatsbyjs.com/)公式より一部引用</cite>

- 翻訳

> Web の最も難しい部分をシンプルにしました。  
> Gatsby は信じられないほど速く、スムーズです。  
> すべてが「そこにある」という感じです。

Gatsby.js は、JavaScript のライブラリである React をベースに作成されています。  
魅力としては、Gatsby.js で作成したサイトは SPA（Single Page Application） で生成される為、内部リンクのページ遷移が非常に高速になります。又、公式よりスターターテンプレート（10 分程度で Web サイトやブログが作れるテンプレート）や、豊富なプラグインが用意されている事です。

- [Gatsby Starters](https://www.gatsbyjs.com/starters/)
- [Gatsby Plugin Library](https://www.gatsbyjs.com/plugins)

スターターテンプレートを使用し、一瞬で自分のブログを作成する事もできれば、実装したい機能に応じてプラグインを導入することで難しい事を殆ど考えず、機能を追加する事が出来ます。  
当ブログで実際に使用しているプラグインや、機能用途に応じたおすすめのプラグインに関しては、今後別の記事で紹介したいと思います。

---

- [Tailwind CSS](https://tailwindcss.com/)

![Tailwind CSS](./tailwindcss.png)

TailwindCSS とは、ユーティリティーファーストの CSS フレームワークです。

```jsx:title=TailwindCSSの使用例
<p className="font-bold">Hello!<span class="text-blue-500 pl-1">Tailwind CSS</span></p>
```

**実際の表示**

<p class="tailwind-sample-text">Hello!<span>Tailwind CSS</span></p>

Tailwind CSS を使用した事がない方でも、付与されているクラス名からある程度、スタイルの状態が推測出来るのではないでしょうか。  
上記の例のように、予め Tailwind CSS で用意されている最小単位のクラス名を自分で組み合わせて UI を構築していく仕組みです。

先日 2021 年 6 月 17 日、[Tailwind CSS v2.2](https://blog.tailwindcss.com/tailwindcss-2-2) がリリースされたと同時に、当ブログで使用している Tailwind CSS のバージョンも も v2.1 -> v2.2 にアップデートしました。今回リリースした v2.2 ではこれまで使えなかった、 `before`, `after`, `marker` 等の擬似要素が沢山サポートされました。

- 参考：[Tailwind CSS v2.2 - Tailwind CSS](https://blog.tailwindcss.com/tailwindcss-2-2)

---

**SVG アイコン**

- [Font Awesome](https://fontawesome.com/v5.15/icons)

一部有料アイコンもありますが、十分無料の範囲内 で使用できる有名な SVG アイコンです。  
現状 Twitter のブランドロゴのみ使用していて、それ以外の SVG アイコンは heroicons を使用しています。

- [heroicons](https://heroicons.com/)

> Beautiful hand-crafted SVG icons,  
> by the makers of Tailwind CSS.
> <cite>[heroicons](https://heroicons.com/) 公式より引用</cite>

Tailwind CSS が作成している SVG アイコンで、使用する全てのアイコンは 2 種類（枠線のみ・塗り潰し）から自由に選ぶ事ができ、可愛らしかったのでこちらをメインで使用する事にしました。

```jsx:title=heroiconsの使用例
/**
  塗り潰しのアイコンは末尾がsolid
	import { HashtagIcon } from "@heroicons/react/solid";
*/

import { HashtagIcon } from "@heroicons/react/outline"; // 枠線アイコン

const TagIcon = () => {
	return (
		<div>
			<HashtagIcon className="h-4 w-4 inline-block text-blue-500" />
		</div>
	);
};

export default TagIcon
```

---

**ホスティング**

- [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/)

Netlify や Vercel、Cloudflare Pages の記事が多かったですが、今後のアップデート等の期待も含め Gatsby Cloud を選択しました。  
デプロイ後に Gatsby Cloud のダッシュボードにて、Lighthouse のスコアが自動で計測され表示されるので極端にスコアが低い場合の異変等に気付きやすい点が気に入っています。

## 工夫した点

- ページ遷移時のアニメーション

Gatsby.js で作成したサイトは SPA で生成されており、内部リンクのページ遷移が高速な分変わったことに気づきにくい為、ページ遷移時にはコンテンツ領域にのみ CSS で一瞬チカっとするようなアニメーションを付与しました。こちらは生の CSS で書いています。

```jsx{5}:title=LayoutComponentの一部
const Layout = ({children}) => {
	return (
		<div>
			<Header />
				<main className="fadein">{children}</main>
			<Footer />
		</div>
	);
}
export default Layout
```

```css:title=ページ遷移時のCSSアニメーション
.fadein {
	animation: fadein 0.8s forwards;
}
@keyframes fadein {
	0% {
		opacity: 0.4;
	}
	100% {
		opacity: 1;
	}
}
```

- カテゴリー・タグ機能の実装

今回、公式で用意されているスターターテンプレートを使用していなく`$ npm gatsby init` でまっさらな状態から始めたので、実装する以前の前提知識（node.js, GraphQL 周り等）が不足していた為少し苦戦しました。  
詰まった際は、公式で用意されているスターターテンプレートのソースコードが GitHub 上で公開されているので、実装したい機能に応じて適宜参考にすると良いと思います。

- SEO を意識したマークアップ

こちらは Gatsby.js と直接的には関係のない話ですが、ブログを作ったからには色々な方に読んでいただきたいので基本的な SEO 周りもしっかりと対応しました。  
HTML タグ と SEO は関係ないんだぜ？みたいな話題は多々上がりますが、やらないよりはやったほうがいいよねと考えるタイプ <s>とは言いつつも、一部デザインを優先してアクセシビリティガン無視</s> です。

## まとめ

Gatsby.js をもっと上手に扱えるように、React の値の受け渡し（UI が同じようなコンポーネントも、props での値の受け渡しが上手くいかなく重複して記述している箇所がいくつかある）、node.js や GraphQL 周りの知見も深めていきたいと思います。

## 参考リンク

- [「静的サイトジェネレーター」について網羅的に説明します | Dyno](https://dyno.design/articles/what-is-static-site-generator/)
- [React ベース静的サイトジェネレータ Gatsby の真の力をお見せします | Qiita](https://qiita.com/uehaj/items/1b7f0a86596353587466)
- [React の最強フレームワーク Gatsby.js の良さを伝えたい！！ | Qiita](https://qiita.com/hppRC/items/00739eaf9ae7fc95c1ca)
- [基礎から始める GatsbyJS 入門 | アールエフェクト](https://reffect.co.jp/react/gatsby-basic-tutorial-for-beginners)
- [GatsbyJS で最強のブログを作る | キクナントカドットコム](https://kikunantoka.com/tags/gatsby-js%E3%81%A7%E6%9C%80%E5%BC%B7%E3%81%AE%E3%83%96%E3%83%AD%E3%82%B0%E3%82%92%E4%BD%9C%E3%82%8B/)
- [GatsbyJS + microCMS で Jamstack なオウンドメディアを作ろう | micro CMS](https://blog.microcms.io/gatsby-microcms-media)
