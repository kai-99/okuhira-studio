import React from "react";
import Hashtag from "./Hashtag";
import Category from "./Category";

const SideBar = () => {
	return (
		<div className="my-8">
			<Category />
			<Hashtag />
		</div>
	);
};

export default SideBar;
