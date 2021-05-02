import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// Custom Components
import Layout from "../components/Layout";
import PopularArticles from "../components/Home/PopularArticles";
import NewArticles from "../components/Home/NewArticles";
import SideBar from "../components/Home/SideBar";
// import CategoryList from "../components/Home/CategoryList";

const IndexPage = ({ data }) => {
	return (
		<>
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
			</Helmet>
			<Layout>
				<main className="lg:w-3/4 lg:mr-8">
					<PopularArticles />
					{/* <hr className="my-8 h-px bg-gradient-to-r from-gray-300" />
					<CategoryList /> */}
					<hr className="my-8 h-px bg-gradient-to-r from-gray-300" />
					<NewArticles />
				</main>
				<SideBar />
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
