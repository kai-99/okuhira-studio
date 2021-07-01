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
						<span itemProp="name">Top</span>
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
				<main className="md:w-3/4">
					<Breadcrumb />
					<section>
						<div className="mb-4 flex items-center justify-center">
							<HashtagIcon className="inline-block w-4 h-4 md:w-6 md:h-6 text-blue-500 align-text-bottom mr-1" />
							<TemplateTitle TemplateTitle={tag} />
						</div>
						<div className="md:flex md:flex-wrap">
							{edges.map(({ node }) => {
								return (
									<div
										className="md:pr-4 pb-4 relative md:w-1/2"
										key={node.frontmatter.title}
									>
										<Link to={node.fields.slug}>
											<GatsbyImage
												image={getImage(node.frontmatter.thumbnail)}
												alt={node.frontmatter.title}
												className="w-auto h-auto md:w-full object-cover bg-purple-50 shadow hover:duration-300 hover:opacity-80"
											/>
										</Link>
										<div className="flex flex-col p-2 md:flex-1">
											<Link to={node.fields.slug} className="hover:underline">
												<h2 className="font-bold text-sm md:text-base text-gray-800 my-1 flex-1">
													{node.frontmatter.title}
												</h2>
											</Link>
											<ul className="flex items-center ">
												{node.frontmatter.tags.map((tag) => {
													return (
														<li
															className="mr-1"
															key={`/tags/${kebabCase(tag)}/`}
														>
															<Link
																to={`/tags/${kebabCase(tag)}/`}
																className="hover:opacity-80"
															>
																<HashtagIcon className="inline-block w-4 h-4 text-blue-500 mr-px" />
																<span className="inline-block text-sm text-blue-500">
																	{tag}
																</span>
															</Link>
														</li>
													);
												})}
											</ul>
										</div>
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
						title
						tags
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
