module.exports = {
	flags: {
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PRESERVE_WEBPACK_CACHE: true,
		DEV_SSR: false,
		PARALLEL_SOURCING: false,
		FUNCTIONS: false,
	},
	siteMetadata: {
		title: `Lazuli Coder`,
		lang: `ja`,
		locale: `ja_JP`,
		description: `Lazuli Coder（ラズリ コーダー）は、Web制作で役に立つ知識を、Web制作初学者の方、コーダーやWebデザイナーに向けて情報発信しているメディアです`,
		siteUrl: `https://lapis-lazuli.dev/`,
		social: {
			twitter: {
				name: `Lazuli Coder`,
				id: `https://twitter.com/lazuli_coder`,
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
				host: "https://lapis-lazuli.dev",
				sitemap: "https://lapis-lazuli.dev/sitemap.xml",
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
				siteUrl: `https://lapis-lazuli.dev`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Lazuli Coder`,
				short_name: `Lazuli`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#ffffff`,
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
					`gatsby-remark-code-titles`,
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// aliases: {},
							showLineNumbers: true,
							noInlineHighlight: false,
						},
					},
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
							margin: 48,
							background: "rgba(249, 250, 251, 0.8)",
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
