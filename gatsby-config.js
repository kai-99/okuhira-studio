module.exports = {
	flags: {
		DEV_SSR: false,
	},
	siteMetadata: {
		title: `z-idia`,
		description: "Gatsby TailwindCSS MyStarter Template",
		lang: "ja",
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
							elements: [`h2`, `h3`, `h4`],
						},
					},
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
				color: `#374251`,
				showSpinner: true,
			},
		},
	],
};
