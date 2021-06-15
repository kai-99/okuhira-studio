import React from "react";
import {
	RefreshIcon,
	PencilAltIcon,
	FolderOpenIcon,
} from "@heroicons/react/outline";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

const AllArticles = () => {
	const data = useStaticQuery(
		graphql`
			{
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___createdAt] }
				) {
					nodes {
						html
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
		`
	);

	return (
		<div>
			{data.allMarkdownRemark.nodes.map((node) => {
				return (
					<div className="bg-white mb-4 relative" key={node.frontmatter.title}>
						<Link
							className="md:flex lg:hover:shadow hover:bg-purple-50 md:border-2 hover:border-purple-200 duration-300 block"
							to={node.fields.slug}
						>
							<GatsbyImage
								image={getImage(node.frontmatter.thumbnail)}
								alt={node.frontmatter.title}
								className="w-auto h-auto md:w-40 md:h-24 object-cover bg-purple-50"
							/>
							<div className="flex flex-col p-2 md:flex-1">
								<h2 className="font-bold text-sm md:text-base text-gray-800 mb-4 md:mb-0 flex-1">
									{node.frontmatter.title}
								</h2>
								<div className="flex justify-between items-center font-bold">
									<div>
										<Link
											className="border-2 bg-white hover:bg-yellow-50 duration-300 hover:border-yellow-200 px-2 py-1 text-sm text-gray-700 rounded-full mr-1"
											to={`/categories/${kebabCase(
												node.frontmatter.categories
											)}/`}
										>
											<p className="inline-block">
												<FolderOpenIcon className="inline-block w-4 h-4 text-blue-500 mr-1" />
												<span className="inline-block text-sm">
													{node.frontmatter.categories}
												</span>
											</p>
										</Link>
									</div>
									<div className="md:flex md:justify-end">
										<time
											itemProp="datepublished"
											className="text-gray-600 block text-right text-xs md:mr-4"
										>
											<span className="md:hidden">投稿日</span>{" "}
											<span className="mr-1">
												<PencilAltIcon className="inline-block w-3 h-3" />
											</span>
											{node.frontmatter.createdAt}
										</time>
										<time
											itemProp="modified"
											className="text-gray-600 block text-right text-xs"
										>
											<span className="md:hidden">更新日</span>{" "}
											<span className="mr-1">
												<RefreshIcon className="inline-block w-3 h-3" />
											</span>
											{node.frontmatter.updateAt}
										</time>
									</div>
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default AllArticles;
