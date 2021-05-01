import React from "react";
import { Helmet } from "react-helmet";
// Custom Components
import Layout from "../components/Layout";
import PopularArticles from "../components/Home/PopularArticles";
import NewArticles from "../components/Home/NewArticles";
import SideBar from "../components/Home/SideBar";
import CategoryList from "../components/Home/CategoryList";

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Gatsby</title>
			</Helmet>
			<Layout>
				<main className="w-3/4 mr-8">
					<PopularArticles />
					<hr className="my-8 h-px bg-gradient-to-r from-gray-300" />
					<CategoryList />
					<hr className="my-8 h-px bg-gradient-to-r from-gray-300" />
					<NewArticles />
				</main>
				<SideBar />
			</Layout>
		</>
	);
};

export default IndexPage;
