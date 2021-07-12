module.exports = {
	flags: {
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PRESERVE_WEBPACK_CACHE: true,
		DEV_SSR: false,
		PARALLEL_SOURCING: false,
		FUNCTIONS: false,
	},
	siteMetadata: {
		title: `OKUHIRA STUDIO`,
		lang: `ja`,
		locale: `ja_JP`,
		description: `当サイトはOKUHIRAが運営している、個人ブログです。`,
		siteUrl: `https://okuhira.studio/`,
		social: {
			twitter: {
				name: `OKUHIRA STUDIO`,
				id: `https://twitter.com/okuhira_studio`,
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
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `OKUHIRA STUDIO`,
				short_name: `OKUHIRA STUDIO`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#A78BFA`,
				display: `minimal-ui`,
				icon: `static/thumb.png`, // This path is relative to the root of the site.
				icon_options: {
					purpose: `maskable`,
				},
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
				color: `#C4B5FD`,
				showSpinner: true,
			},
		},
		{
			// https://www.gatsbyjs.com/plugins/gatsby-plugin-gatsby-cloud/
			resolve: `gatsby-plugin-gatsby-cloud`,
			options: {
				allPageHeaders: [
					"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
				],
			},
		},
	],
};
