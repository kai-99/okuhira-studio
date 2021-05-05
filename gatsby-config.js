module.exports = {
	flags: {
		THE_FLAG: false,
	},
	siteMetadata: {
		title: `Kai99`,
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
							offsetY: `200`,
							icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
						</svg>`,
							maintainCase: false,
							removeAccents: true,
							elements: [`h2`, `h4`],
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
