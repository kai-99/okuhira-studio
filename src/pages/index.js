import React from "react";
// Custom Components
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import AllArticles from "../components/AllArticles";
// import SideBar from "../components/SideBar";

const IndexPage = () => {
	return (
		<>
			<Layout>
				<Seo />
				<div className="px-2 py-8 mx-auto">
					<main>
						<section className="lg:my-8">
							<AllArticles />
						</section>
					</main>
					{/* <aside className="block mt-8 lg:mt-0 lg:w-1/4">
						<SideBar />
					</aside> */}
				</div>
			</Layout>
		</>
	);
};

export default IndexPage;
