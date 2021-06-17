import React from "react";

const TemplateTitle = (props) => {
	return (
		<h1 className="font-bold text-center md:text-xl px-2 py-4 md:py-8 text-gray-800 tracking-wide fast-fadein-animation">
			{props.TemplateTitle}
		</h1>
	);
};

export default TemplateTitle;