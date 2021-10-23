module.exports = {
	siteMetadata: {
		title: `OKUHIRA Blog`,
		lang: `ja`,
		locale: `ja_JP`,
		description: `当サイトは、Webの技術やデザインについて発信している個人ブログです。`,
		siteUrl: `https://okuhira.studio/`,
		social: {
			twitter: {
				name: `OKUHIRA STUDIO`,
				id: `https://twitter.com/okuhira_studio`,
			},
		},
	},
	plugins: [
		{
			resolve: `gatsby-plugin-redirect-to`,
			options: {
				force: true,
				isPermanent: true,
				redirectInBrowser: true,
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-twitter`,
		`gatsby-plugin-catch-links`,
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://okuhira.studio",
				sitemap: "https://okuhira.studio/sitemap/sitemap-0.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [
					"G-X5KQSXH9LS", // Google Analytics / GA
				],
				pluginConfig: {
					head: true,
				},
			},
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://okuhira.studio`,
			},
		},
		`gatsby-plugin-remove-serviceworker`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-responsive-iframe`,
					`gatsby-remark-code-titles`,
					`gatsby-remark-prismjs`,
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1000,
							linkImagesToOriginal: false,
							withWebp: true,
							wrapperStyle: (fluidResult) => (fluidResult.aspectRatio, 1.618),
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
				path: `${__dirname}/contents`,
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `#C4B5FD`,
				showSpinner: true,
			},
		},
		`gatsby-plugin-gatsby-cloud`,
	],
};
