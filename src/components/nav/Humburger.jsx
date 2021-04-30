import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { slide as Menu } from "react-burger-menu";
// Custom Components
import {
	Emojiicon,
	Homeicon,
	Phoneicon,
	Staricon,
	Menuicon,
	Crossicon,
	Fireicon,
} from "../icon/Heroicon";

const HumburgerMenu = (props) => {
	const links = [
		{ id: 1, title: "Home", url: "/", icon: <Homeicon /> },
		{ id: 2, title: "About", url: "/", icon: <Emojiicon /> },
		{ id: 3, title: "Service", url: "/", icon: <Staricon /> },
		{ id: 4, title: "Contact", url: "/", icon: <Phoneicon /> },
	];

	return (
		<>
			<h1 className="absolute top-4 left-4 text-gray-600">
				<Fireicon />
			</h1>
			<Menu
				{...props}
				right
				customBurgerIcon={<Menuicon />}
				customCrossIcon={<Crossicon />}
			>
				<figure className="mb-12">
					<StaticImage
						src="../../images/18.jpeg"
						alt="18号"
						placeholder="tracedSVG"
						className="rounded-full w-40 h-40"
					/>
				</figure>
				{links.map((link) => {
					return (
						<Link
							to={link.url}
							key={link.id}
							className="block py-6 text-md text-gray-400 hover:text-gray-100"
						>
							<span className="mr-4 align-text-bottom text-gray-600">
								{link.icon}
							</span>
							{link.title}
						</Link>
					);
				})}
			</Menu>
		</>
	);
};

export default HumburgerMenu;
