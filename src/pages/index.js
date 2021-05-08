import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// Custom Components
import Layout from "../components/Layout";
import AllArticles from "../components/Home/AllArticles";
import SideBar from "../components/SideBar";

const IndexPage = ({ data }) => {
	return (
		<>
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
			</Helmet>
			<Layout>
				<main className="lg:w-3/4 lg:mr-8">
					<AllArticles />
				</main>
				<aside className="hidden lg:block lg:w-1/4 lg:sticky lg:top-20">
					<SideBar />
				</aside>
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
