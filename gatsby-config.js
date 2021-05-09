module.exports = {
	flags: {
		// 	PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PRESERVE_WEBPACK_CACHE: true,
		// 	DEV_SSR: true,
		// 	PARALLEL_SOURCING: true,
		// 	FUNCTIONS: true,
	},
	siteMetadata: {
		title: `うぇぶこーだーどっとこむ`,
		lang: `ja`,
		locale: `ja_JP`,
		description: `うぇぶこーだーどっとこむはWeb・IT初学者に向けてわかりやすく解説し、情報発信をしているメディアです。`,
		siteUrl: `https://gatsby-tailwindcss-customblog.netlify.app`,
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-netlify`,
		`gatsby-plugin-breadcrumb`,
		`gatsby-plugin-twitter`,
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://gatsby-tailwindcss-customblog.netlify.app`,
			},
		},
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
							background: "#c4b5fa",
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
