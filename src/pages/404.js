import React from "react";
import { Helmet } from "react-helmet";
// Custom Components
import Layout from "../components/Layout";
import SideBar from "../components/Home/SideBar";
// import CategoryList from "../components/Home/CategoryList";

const NotFoundPage = () => {
	return (
		<>
			<Helmet>
				<title>Gatsby</title>
			</Helmet>
			<Layout>
				<main className="w-3/4 mr-8">
					<p>ページが見つかりません</p>
					{/* <CategoryList /> */}
				</main>
				<SideBar />
			</Layout>
		</>
	);
};

export default NotFoundPage;
