module.exports = {
	flags: {
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PRESERVE_WEBPACK_CACHE: true,
		DEV_SSR: false,
		PARALLEL_SOURCING: false,
		FUNCTIONS: false,
	},
	siteMetadata: {
		title: `Web Jr`,
		lang: `ja`,
		locale: `ja_JP`,
		description: `Web Jr`,
		siteUrl: `https://webjr.gatsbyjs.io/`,
		social: {
			twitter: {
				name: `Lazuli`,
				id: `https://twitter.com/`,
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
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://webjr.gatsbyjs.io",
				sitemap: "https://webjr.gatsbyjs.io/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [
					"G-47L0EF8PQS", // Google Analytics / GA
				],
				pluginConfig: {
					head: true,
				},
			},
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://webjr.gatsbyjs.io`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Web Jr`,
				short_name: `Web Jr`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#A78BFA`,
				display: `minimal-ui`,
				icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
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
					`gatsby-remark-responsive-iframe`,
					`gatsby-remark-code-titles`,
					`gatsby-remark-prismjs`,
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 732,
							linkImagesToOriginal: false,
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
				color: `#A78BFA`,
				showSpinner: true,
			},
		},
	],
};
