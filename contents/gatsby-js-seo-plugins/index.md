---
title: Gatsby.js SEO 対策におすすめのプラグイン
description: "Gatsby.jsには普通にやると難しいことを、プラグインを使用することで複雑な処理をよしなやってくれます。この記事では、数あるプラグインの中からGatsby.jsで作成したサイトのSEO対策をする際におすすめのプラグインを紹介します。"
createdAt: "2021-07-04"
updateAt: "2021-07-10"
thumbnail: ./hero.png
tags: ["Gatsby.js"]
categories: "SEO"
---

## はじめに

この記事では、Gatsby.js で作成したサイトの SEO 対策におすすめのプラグインを紹介していきます。SEO そのものについての踏み込んだ話はしていませんので、ご了承下さい。

## プラグインの使い方

[Gatsby.js 公式プラグイン](https://www.gatsbyjs.com/plugins) ページを参照し、拡張したい機能に応じて `npm` 経由でプラグインをインストールします。

```bash
npm install gatsby-plugin-xxx
```

`npm` 経由でインストールしたプラグインは、`gatsby-config.js` ファイルにそのプラグインで設定して初めて使用できます。プラグインの設定方法は主に 2 種類あります。

1. `plugins: [...]` 内にプラグインのみ設定
1. `plugins: [...]` 内にプラグインとその拡張機能を設定

```jsx{5}:title=gatsby-config.jsファイルの設定①プラグインのみ設定
module.exports = {
	siteMetadata: {
		// サイトの基本情報等の設定
	},
	plugins: [`gatsby-plugin-xxx`],
};
```

```jsx{5-12}:title=gatsby-config.jsファイルの設定②プラグインとその拡張機能を設定
module.exports = {
	siteMetadata: {
		// サイトの基本情報等の設定
	},
	plugins: [
		{
			resolve: `gatsby-plugin-xxx`,
			options: {
        // プラグインの拡張を設定
			},
		},
	],
};
```

## SEO 対策のプラグイン

**gatsby-plugin-react-helmet**

公式ドキュメント：[gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)

`<head>...</head>` 要素内のメタデータをコンポーネント化し、使いまわす事が出来ます。  
`react-helmet` と一緒に使用する為、`gatsby-plugin-react-helmet` と `react-helmet` の両方をインストールします。

```bash
npm install gatsby-plugin-react-helmet react-helmet
```

```jsx
module.exports = {
	plugins: [`gatsby-plugin-react-helmet`],
};
```

---

**gatsby-plugin-sitemap**

公式ドキュメント：[gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)

作成したプロジェクトのサイトマップを生成します。

```bash
npm install gatsby-plugin-sitemap
```

```jsx
module.exports = {
	plugins: [`gatsby-plugin-sitemap`],
};
```

<p class="notice">gatsby-plugin-sitemap は4系からデフォルトの書き出しファイルが変わっているようです<br>4系以前は /sitemap.xml でしたが、 /sitemap/sitemap-0.xml になっています</p>

生成されたサイトマップは、 `/sitemap/sitemap-0.xml` で確認出来ます。  
サイトマップの生成はビルド後にしか確認できないので、そこだけ注意が必要です。

```bash:title=ビルド後の確認方法
gatsby build && gatsby serve
# http://localhost:9000/sitemap/sitemap-0.xml にアクセスし、確認できます。
```

デプロイ後のサイトマップは `https://www.example.com/sitemap/sitemap-0.xml` で確認できます。同様に、Google Serch Console にサイトマップを送信する際は、`https://www.example.com/sitemap/sitemap-0.xml` で送信します。

---

**gatsby-plugin-robots-txt**

公式ドキュメント：[gatsby-plugin-robots-txt](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/)

作成したプロジェクトの `robots.txt` を作成します。

```bash
npm install gatsby-plugin-robots-txt
```

```jsx
module.exports = {
	plugins: [
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://www.example.com",
				sitemap: "https://www.example.com/sitemap/sitemap-0.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
	],
};
```

---

**gatsby-plugin-canonical-urls**

公式ドキュメント：[gatsby-plugin-canonical-urls](https://www.gatsbyjs.com/plugins/gatsby-plugin-canonical-urls/)

生成された HTML ファイルの正規リンクを定義します。

```bash
npm install gatsby-plugin-canonical-urls
```

```jsx
module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://www.example.com`,
			},
		},
	],
};
```

## Gatsby.js を学べる書籍

- [Web サイト高速化のための 静的サイトジェネレーター活用入門](https://amzn.to/2UqDR3X)
