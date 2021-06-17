import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	HomeIcon,
	ChevronRightIcon,
	HashtagIcon,
} from "@heroicons/react/outline";
import kebabCase from "lodash/kebabCase";
// Custom Components
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import Seo from "../components/Seo";
import TemplateTitle from "../components/TemplateTitle";

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges } = data.allMarkdownRemark;
	// SEO Only Fanction
	const seoTitle = `${tag}に関する記事一覧`;
	// パンくず
	const Breadcrumb = () => {
		return (
			<ol
				itemScope
				itemType="https://schema.org/BreadcrumbList"
				className="flex items-center gap-1 p-1 text-gray-600 w-full text-sm font-bold"
			>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<Link
						itemProp="item"
						to="/"
						className="flex items-center gap-1 hover:underline"
					>
						<HomeIcon className="w-4 h-4 inline-block text-gray-700 align-bottom" />
						<span itemProp="name">Home</span>
						<ChevronRightIcon className="w-4 h-4 inline-block text-gray-700" />
					</Link>
					<meta itemProp="position" content="1" />
				</li>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<Link
						itemProp="item"
						to={`/tags/${kebabCase(tag)}/`}
						className="flex items-center gap-1 hover:underline"
					>
						<HashtagIcon className="w-4 h-4 inline-block text-gray-500" />
						<span itemProp="name" className="inline-block">
							{tag}
						</span>
						<ChevronRightIcon className="w-4 h-4 inline-block text-gray-700" />
					</Link>
					<meta itemProp="position" content="2" />
				</li>
			</ol>
		);
	};

	return (
		<Layout>
			<Seo pagetitle={seoTitle} pagedescription={seoTitle} />
			<div className="container px-2 py-8 mt-12 mx-auto lg:flex">
				<main className="md:w-3/4 lg:mr-8">
					<Breadcrumb />
					<section>
						<div className="mb-4 flex items-center justify-center">
							<HashtagIcon className="inline-block w-4 h-4 md:w-6 md:h-6 text-blue-500 align-text-bottom mr-1" />
							<TemplateTitle TemplateTitle={tag} />
						</div>
						<div>
							{edges.map(({ node }) => {
								return (
									<div
										className="bg-white mb-4 relative"
										key={node.fields.slug}
									>
										<Link
											className="md:flex lg:hover:shadow hover:bg-purple-50 md:border-2 hover:border-purple-200 duration-300 block"
											to={node.fields.slug}
										>
											<GatsbyImage
												image={getImage(node.frontmatter.thumbnail)}
												alt={node.frontmatter.title}
												className="w-auto h-auto md:w-40 md:h-24 object-cover focus:bg-purple-50"
											/>
											<div className="flex flex-col p-2 md:flex-1">
												<h2 className="font-bold text-sm md:text-base text-gray-800 mb-2 md:mb-0 flex-1">
													{node.frontmatter.title}
												</h2>
												<div className="mt-2">
													<ul className="flex items-center ">
														{node.frontmatter.tags.map((tag) => {
															return (
																<li
																	className="mr-1"
																	key={`/tags/${kebabCase(tag)}/`}
																>
																	<HashtagIcon className="inline-block w-4 h-4 text-blue-500 mr-px" />
																	<span className="inline-block text-sm text-blue-500">
																		{tag}
																	</span>
																</li>
															);
														})}
													</ul>
												</div>
											</div>
										</Link>
									</div>
								);
							})}
						</div>
					</section>
				</main>
				<aside className="block mt-8 lg:mt-0 lg:w-1/4">
					<div className="lg:sticky lg:top-20">
						<SideBar />
					</div>
				</aside>
			</div>
		</Layout>
	);
};

export default Tags;

export const pageQuery = graphql`
	query ($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___createdAt], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						createdAt(formatString: "YYYY.MM.DD")
						updateAt(formatString: "YYYY.MM.DD")
						title
						tags
						categories
						thumbnail {
							childImageSharp {
								gatsbyImageData(
									placeholder: TRACED_SVG
									formats: [AUTO, WEBP, AVIF]
									layout: CONSTRAINED
								)
							}
						}
					}
				}
			}
		}
	}
`;
