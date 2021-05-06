import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// Custom Components
import Layout from "../components/Layout";
import AllArticles from "../components/Home/AllArticles";

const IndexPage = ({ data }) => {
	return (
		<>
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
			</Helmet>
			<Layout>
				<main className="lg:w-3/4 mx-auto">
					<AllArticles />
				</main>
			</Layout>
		</>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
