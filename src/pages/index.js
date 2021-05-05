import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// Custom Components
import Layout from "../components/Layout";
import NewArticles from "../components/Home/NewArticles";

const IndexPage = ({ data }) => {
	return (
		<>
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
			</Helmet>
			<Layout>
				<main className="lg:w-3/4 mx-auto">
					<NewArticles />
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
