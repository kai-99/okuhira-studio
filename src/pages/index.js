import React from "react";
// Custom Components
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import AllArticles from "../components/Home/AllArticles";
import SideBar from "../components/SideBar";

const IndexPage = () => {
	return (
		<>
			<Layout>
				<Seo />
				<main className="lg:w-3/4 lg:mr-8">
					<AllArticles />
				</main>
				<aside className="block mt-8 lg:mt-0 lg:w-1/4 lg:sticky lg:top-20">
					<SideBar />
				</aside>
			</Layout>
		</>
	);
};

export default IndexPage;
