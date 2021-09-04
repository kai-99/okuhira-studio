import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div className="bg-white" id="#top">
			<Header />
			<div className="max-w-5xl lg:mx-auto mt-12 lg:mt-0 opacity-animation relative">
				{props.children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
