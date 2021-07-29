import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { MenuIcon, XIcon, HomeIcon } from "@heroicons/react/outline";
import Category from "./Category";
import Hashtag from "./Hashtag";
import GoogleAds from "./GoogleAds";

const Header = () => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						social {
							twitter {
								id
							}
						}
					}
				}
			}
		`
	);
	const Button = (props) => {
		return (
			<>
				<input className="hidden" id="nav-checkbox" type="checkbox" />
				<label className="" htmlFor="nav-checkbox">
					<span className="inline-block p-2 cursor-pointer duration-100 rounded-full hover:bg-purple-50 border-purple-50 hover:border-purple-200">
						{props.children}
					</span>
				</label>
			</>
		);
	};
	const ActiveBackground = () => {
		return (
			<label
				className="hidden z-40 fixed top-0 right-0 w-full h-full bg-black opacity-0 duration-300 nav-bg"
				htmlFor="nav-checkbox"
			>
				<span></span>
			</label>
		);
	};
	return (
		<>
			<header className="bg-white w-full top-0 h-12 z-50 fixed lg:static">
				<div className="max-w-5xl mx-auto h-12 flex items-center justify-between px-2">
					<Link to="/">
						<p className="font-mono text-xl text-gray-900">
							{data.site.siteMetadata.title} &#128640;
						</p>
					</Link>
					<Button>
						<MenuIcon className="inline-block w-6 h-6" />
					</Button>
					{/* 🍔 */}
					<ActiveBackground />
					<div className="fixed overflow-auto top-0 right-0 z-50 h-full bg-purple-50 shadow-2xl duration-300 text-left nav-content">
						<div className="flex items-center justify-end h-12 px-2 lg:px-4 bg-white">
							<Button>
								<XIcon className="inline-block w-6 h-6" />
							</Button>
						</div>
						<div className="p-2 lg:p-4">
							<div className="mb-2 lg:mb-4">
								<Category />
								<Hashtag />
							</div>
							<div className="mb-2 lg:mb-4">
								<GoogleAds>
									<ins
										className="adsbygoogle"
										style={{
											display: `inline-block`,
											width: `416px`,
											height: `277px`,
										}}
										data-ad-client="ca-pub-4800021914562133"
										data-ad-slot="7073445439"
									></ins>
								</GoogleAds>
							</div>
							<div className="mb-2 lg:mb-4 text-center">
								<Link
									className="text-lg font-bold border-2 border-gray-100 block bg-white text-gray-700 w-full p-4 hover:bg-purple-50 hover:border-purple-200 duration-300 rounded shadow"
									to="/"
								>
									<HomeIcon className="w-6 h-6 mr-1 inline-block align-text-bottom text-gray-700" />
									トップページにいく
								</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
