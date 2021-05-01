module.exports = {
	siteMetadata: {
		title: "Gatsby TailwindCSS Starter",
		description: "Gatsby TailwindCSS MyStarter Template",
		lang: "ja",
		// siteUrl: "https://gatsby-tailwindcss-mystarter-template.netlify.app/",
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify`,
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `rgb(253, 230, 138),`,
				// Disable the loading spinner.
				showSpinner: false,
			},
		},
	],
};
