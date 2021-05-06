module.exports = {
	flags: {
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
		PRESERVE_WEBPACK_CACHE: true,
		DEV_SSR: true,
		PARALLEL_SOURCING: true,
		FUNCTIONS: true,
	},
	siteMetadata: {
		title: `うぇぶこーだー.com`,
		description: "うぇぶこーだーの学習帳！",
		siteUrl: "https://gatsby-tailwindcss-customblog.netlify.app/",
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 700,
						},
					},
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							icon: false,
							maintainCase: false,
							removeAccents: true,
							elements: [`h2`, `h3`, `h4`],
						},
					},
					`gatsby-remark-code-titles`,
					`gatsby-remark-prismjs`,
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
				name: `src`,
				path: `${__dirname}/src/`,
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
