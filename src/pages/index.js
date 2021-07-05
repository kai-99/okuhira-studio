import React from "react";
// Custom Components
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import AllArticles from "../components/AllArticles";
import NewArticles from "../components/NewArticles";
import SideBar from "../components/SideBar";

const IndexPage = () => {
	return (
		<>
			<Layout>
				<Seo />
				<div className="container px-2 py-8 mt-12 mx-auto lg:flex">
					<main className="lg:w-3/4">
						<section className="mb-8">
							<div className="pl-2 flex justify-start items-center font-bold mb-2">
								<h2 className="text-gray-800 text-2xl italic">
									New articles &#x1f680;
								</h2>
							</div>
							<NewArticles />
						</section>
						<section className="mb-8">
							<div className="pl-2 flex justify-start items-center font-bold mb-2">
								<h2 className="text-gray-800 text-2xl italic">
									All articles &#x1f680;
								</h2>
							</div>
							<AllArticles />
						</section>
					</main>
					<aside className="block mt-8 lg:mt-0 lg:w-1/4">
						<div className="lg:sticky lg:top-20">
							<SideBar />
						</div>
					</aside>
				</div>
			</Layout>
		</>
	);
};

export default IndexPage;
