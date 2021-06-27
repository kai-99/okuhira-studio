import React from "react";
import { PencilAltIcon, FolderOpenIcon } from "@heroicons/react/outline";
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
							createdAt(formatString: "YYYY-MM-DD")
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
		<div className="md:flex">
			{data.allMarkdownRemark.nodes.map((node) => {
				return (
					<div
						className="md:mr-4 mb-4 relative md:w-1/2"
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
							<div className="flex justify-between items-center font-bold">
								<Link
									className="block hover:opacity-80"
									to={`/categories/${kebabCase(node.frontmatter.categories)}/`}
								>
									<FolderOpenIcon className="inline-block w-4 h-4 text-gray-500 mr-1" />
									<span className="inline-block text-sm text-gray-700">
										{node.frontmatter.categories}
									</span>
								</Link>
								<time
									itemProp="datepublished"
									dateTime={node.frontmatter.createdAt}
									className="text-gray-700 block text-xs"
								>
									<span className="mr-1">
										<PencilAltIcon className="inline-block w-3 h-3" />
									</span>
									{node.frontmatter.createdAt}
								</time>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AllArticles;
