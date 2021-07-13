---
title: "Gatsby.js + Tailwind CSS + Gatsby Cloud の構成でブログを作ってみた"
description: "静的サイトジェネレータのGatsby.jsとCSSフレームワークのTailwind CSS、ホスティングに Gatsby Cloud という構成でブログを作成しました。この記事ではブログを作る際に使用した技術周りの事や、参考になるリンクを紹介しています。"
createdAt: "2021-06-20"
updateAt: "2021-07-13"
thumbnail: "./hero.png"
tags: ["Gatsby.js", "Tailwind CSS"]
categories: "プログラミング"
---

## はじめに

つい最近 Gatsby.js + Tailwind CSS + Gatsby Cloud の構成で当ブログを作成しました。  
このような構成にした理由としては、私は本業で Web 制作をしておりその延長で技術的にスキルアップしたいと模索していたところ、Gatsby.js がとても魅力的に感じたのが経緯です。

この記事では当ブログを作成していく最中工夫した点や、これから個人ブログを作ろうと思っている方に向けて、使用している各技術の概要・参考リンク等をまとめましたので、記事を読みに来てくれた方の参考になれば幸いです。

## 使用技術とサービス

**フレームワーク**

![Gatsbyjs](./gatsby-js.png)

> The hardest parts of the web, made simple.  
> Gatsby is unbelievably fast & smooth.  
> Everything just feels...there.  
> <cite>[Gatsby.js](https://www.gatsbyjs.com/)公式より一部引用</cite>

- 翻訳

> Web の最も難しい部分をシンプルにしました。  
> Gatsby は信じられないほど速く、スムーズです。  
> すべてが「そこにある」という感じです。

[Gatsby.js](https://www.gatsbyjs.com/) は、JavaScript のライブラリである React をベースに作成されています。  
魅力としては、Gatsby.js で作成したサイトは SPA（Single Page Application） で生成される為、内部リンクのページ遷移が非常に高速であり、公式よりスターターテンプレート（10 分程度で Web サイトやブログが作れるテンプレート）や、豊富なプラグイン（拡張機能）が用意されている点です。

- [Gatsby Starters](https://www.gatsbyjs.com/starters/)
- [Gatsby Plugin Library](https://www.gatsbyjs.com/plugins)

スターターテンプレートを使用し、一瞬で自分のブログを作成する事もできれば、実装したい機能に応じてプラグインを導入することで難しい事を殆ど考えず、機能を追加する事が出来ます。  
当ブログで実際に使用しているプラグインや、機能用途に応じたおすすめのプラグインに関しては、今後別の記事で紹介したいと思います。

---

![Tailwind CSS](./tailwind-css.png)

[Tailwind CSS](https://tailwindcss.com/) とは、ユーティリティーファーストの CSS フレームワークです。  
簡単な使用例と、そのクラスに当たるスタイルの詳細を記載します。

```jsx:title=TailwindCSSの使用例
<p className="font-bold text-center">Hello!<span class="text-blue-500 pl-1">Tailwind CSS</span></p>
```

実際の表示

<p class="font-bold text-center">Hello!<span class="text-blue-500 pl-1">Tailwind CSS</span></p>

| Tailwind CSS |     `font-bold`      |     `text-center`     |  `text-blue-500`  |        `pl-1`        |
| :----------: | :------------------: | :-------------------: | :---------------: | :------------------: |
|   Pure CSS   | `font-weight: bold;` | `text-align: center;` | `color: #3B82F6;` | `padding-left: 4px;` |

Tailwind CSS を使用した事がない方でも、付与されているクラス名からある程度、スタイルの状態が推測出来るのではないでしょうか。

上記の例のように、予め Tailwind CSS で用意されている最小単位のクラス名を自分で組み合わせて UI を構築していく仕組みです。

先日 2021 年 6 月 17 日、[Tailwind CSS v2.2](https://blog.tailwindcss.com/tailwindcss-2-2) がリリースされたと同時に、当ブログで使用している Tailwind CSS のバージョンも も v2.1 -> v2.2 にアップデートしました。今回リリースした v2.2 ではこれまで使えなかった、 `before`, `after`, `marker` 等の擬似要素が沢山サポートされました。

- 参考：[Tailwind CSS v2.2 - Tailwind CSS](https://blog.tailwindcss.com/tailwindcss-2-2)

---

**SVG アイコン**

- [heroicons](https://heroicons.com/)

Tailwind CSS（のグループ？） が作成している SVG アイコンで、使用する全てのアイコンは 2 種類（枠線のみ・塗り潰し）から自由に選ぶ事ができ、見た目・使い勝手の良さからこちらをメインで使用する事にしました。

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

これまでビルド機能をメインにサービスを提供していた Gatsby Cloud ですが、2021 年 3 月 3 日に [ホスティング機能をリリース](https://www.gatsbyjs.com/blog/gatsby-cloud-hosting-pricing-plan) したようです。

デプロイ後に Gatsby Cloud のダッシュボードにて、Lighthouse のスコアが自動で計測され表示されるので極端にスコアが低い場合の異変等に気付きやすい点が気に入っています。

![Gatsby Cloud ダッシュボードにてスコア計測](./gatsby-cloud.png)

Gatsby Cloud は [incremental builds](https://www.gatsbyjs.com/blog/2020-04-22-announcing-incremental-builds/) がとても魅力的です。  
変更ファイルの差分を検知してビルドを行うので、ビルド時間が大幅に削減できます。（有料）

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
SEO 対策（各記事の完成度以外） は基本的に、[Lighthouse](https://developers.google.com/web/tools/lighthouse?hl=ja) でサイトのスコアを計測 ⇨ 指摘された箇所を修正 のサイクルで対策していくと良いと思います。

![当サイトのLighthouseのスコア](./Lighthouse-score.png)
<span class="text-gray-600 text-sm">当サイト TOP ページのスコア（計測時の記事数 8）</span>

当サイトで使用している Gatsby.js の SEO に関するプラグインは以下の記事で紹介していますので、気になる方はチェックしてみてください。

- 関連記事：[Gatsby.js SEO 対策におすすめのプラグイン](../gatsby-js-seo-plugins/)

## 今後検証する事

- 検索ボリュームがそこそこある、かつ Web に関する良い商品やサービスがあれば狙って上位表示できるか
- Gatsby.js は SEO 本当に強いのか

<p class="info">上位表示される要素は他にもドメインパワーやライティング、内部対策、被リンク数などあらゆる要素の合計値だとわかるが、それらも踏まえて色々検証していきたいです</p>

## 参考リンク

- [React ベース静的サイトジェネレータ Gatsby の真の力をお見せします | Qiita](https://qiita.com/uehaj/items/1b7f0a86596353587466)
- [React の最強フレームワーク Gatsby.js の良さを伝えたい！！ | Qiita](https://qiita.com/hppRC/items/00739eaf9ae7fc95c1ca)
- [基礎から始める GatsbyJS 入門 | アールエフェクト](https://reffect.co.jp/react/gatsby-basic-tutorial-for-beginners)
- [GatsbyJS で最強のブログを作る | キクナントカドットコム](https://kikunantoka.com/tags/gatsby-js%E3%81%A7%E6%9C%80%E5%BC%B7%E3%81%AE%E3%83%96%E3%83%AD%E3%82%B0%E3%82%92%E4%BD%9C%E3%82%8B/)
- [GatsbyJS + microCMS で Jamstack なオウンドメディアを作ろう | micro CMS](https://blog.microcms.io/gatsby-microcms-media)

## Gatsby.js を学べる書籍

- [Web サイト高速化のための 静的サイトジェネレーター活用入門](https://amzn.to/2UqDR3X)
