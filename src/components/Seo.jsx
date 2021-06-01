import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = (props) => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						lang
						locale
						siteUrl
					}
				}
			}
		`
	);

	// title
	const title = props.pagetitle
		? `${props.pagetitle} | ${data.site.siteMetadata.title}`
		: data.site.siteMetadata.title;
	// description
	const description =
		props.pagedescription || data.site.siteMetadata.description;
	// og:image
	const imgurl = props.ogImage || `${data.site.siteMetadata.siteUrl}/thumb.jpg`;
	const imgw = props.pageimgw || 1280;
	const imgh = props.pageimgh || 640;

	return (
		<Helmet>
			{/* Basic */}
			<html lang={data.site.siteMetadata.lang} />
			<title>{title}</title>
			<meta name="description" content={description} />
			{/* OGP */}
			<meta property="og:site_name" content={data.site.siteMetadata.title} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:locale" content={data.site.siteMetadata.locale} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={imgurl} />
			<meta property="og:image:width" content={imgw} />
			<meta property="og:image:height" content={imgh} />
			<meta name="twitter:card" content="summary" />
			{/* <meta name="twitter:site" content="" /> */}
			{/* <meta name="twitter:creator" content="" /> */}
		</Helmet>
	);
};

export default Seo;
