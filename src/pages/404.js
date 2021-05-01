import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
// Custom Components
import Layout from "../components/Layout";
import SideBar from "../components/Home/SideBar";

const NotFoundPage = () => {
	return (
		<>
			<Helmet>
				<title>NotFoundPage</title>
			</Helmet>
			<Layout>
				<main className="w-3/4 mr-8">
					<div className="">
						<h6 className="text-xl">お探しのページが見つかりません</h6>
						<Link
							className="border-b border-blue-500 text-blue-500 hover:text-blue-300"
							to="/"
						>
							HOMEに戻る
						</Link>
					</div>
				</main>
				<SideBar />
			</Layout>
		</>
	);
};

export default NotFoundPage;
