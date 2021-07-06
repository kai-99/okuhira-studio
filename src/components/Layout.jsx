import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { ChevronUpIcon } from "@heroicons/react/outline";

const Layout = (props) => {
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
	// Header Componet
	const Header = () => {
		return (
			<>
				<header className="w-full top-0 h-12 z-50 fixed lg:static shadow-sm bg-purple-300">
					<div className="max-w-5xl mx-auto h-12 flex items-center justify-center px-2">
						<Link to="/">
							<h1 className="font-mono text-xl text-white">
								{data.site.siteMetadata.title}
							</h1>
						</Link>
					</div>
				</header>
			</>
		);
	};
	// Footer Component
	const Footer = () => {
		return (
			<footer className="w-full bg-white">
				<div className="max-w-5xl mx-auto">
					<div className="flex items-center justify-center px-2 text-gray-800 text-sm h-12">
						<p>
							<span>Copyright &copy;</span>
							<time
								itemProp="datepublished"
								dateTime={new Date().getFullYear()}
							>
								{new Date().getFullYear()}
							</time>
							<Link to="/" className="px-1">
								{data.site.siteMetadata.title}
							</Link>
						</p>
					</div>
				</div>
			</footer>
		);
	};
	// Layout Component
	return (
		<div className="bg-white" id="#top">
			<Header />
			<div className="max-w-5xl lg:mx-auto opacity-animation relative">
				{props.children}
				<a
					href="#top"
					className="w-14 h-14 fixed bottom-10 right-5 lg:right-40 text-center border-2 border-purple-400 bg-white text-purple-400 flex items-center justify-center rounded-full shadow transform hover:-translate-y-1.5 duration-300"
				>
					<ChevronUpIcon className="inline-block w-6 h-6" />
				</a>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
