import React from "react";
// Custom Components
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import AllArticles from "../components/AllArticles";
import SideBar from "../components/SideBar";

const IndexPage = () => {
	return (
		<>
			<Layout>
				<Seo />
				<div className="container px-2 py-8 mx-auto lg:flex">
					<main className="lg:w-3/4 lg:mr-4">
						<section className="my-8">
							<AllArticles />
						</section>
					</main>
					<aside className="block mt-8 lg:mt-0 lg:w-1/4">
						{/* <div className="lg:sticky lg:top-10"> */}
						<SideBar />
						{/* </div> */}
					</aside>
				</div>
			</Layout>
		</>
	);
};

export default IndexPage;
