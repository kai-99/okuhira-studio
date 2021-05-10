module.exports = {
	flags: {
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PRESERVE_WEBPACK_CACHE: true,
		DEV_SSR: false,
		PARALLEL_SOURCING: true,
		FUNCTIONS: true,
	},
	siteMetadata: {
		title: `うぇぶこーだーどっとこむ`,
		lang: `ja`,
		locale: `ja_JP`,
		description: `うぇぶこーだーどっとこむはWeb・IT初学者に向けてわかりやすく解説し、情報発信をしているメディアです。`,
		siteUrl: `https://gatsbytailwindmyblog.gtsb.io/`,
		social: {
			twitter: {
				name: `うぇぶこーだーどっとこむ`,
				id: `https://twitter.com/webcoder_com`,
			},
		},
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-twitter`,
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://gatsbytailwindmyblog.gtsb.io`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `うぇぶこーだーどっとこむ`,
				short_name: `うぇぶこーだーどっとこむ`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `./static/icon.png`, // This path is relative to the root of the site.
				icon_options: {
					purpose: `maskable`,
				},
			},
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 732,
							linkImagesToOriginal: false,
						},
					},
					{
						resolve: `gatsby-remark-images-medium-zoom`,
						options: {
							margin: 24,
							background: "#f9fafb",
							scrollOffset: 40,
						},
					},
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							icon: false,
							maintainCase: false,
							removeAccents: true,
							elements: [`h2`],
						},
					},
					{
						resolve: "gatsby-remark-external-links",
						options: {
							target: "_blank",
							rel: "noopener noreferrer",
						},
					},
					`gatsby-remark-code-titles`,
					`gatsby-remark-prismjs`,
					"gatsby-remark-copy-linked-files",
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/src/data`,
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `#A78BFA`,
				showSpinner: true,
			},
		},
	],
};
