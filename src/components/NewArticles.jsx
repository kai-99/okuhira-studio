import React from "react";
import { PencilAltIcon, FolderOpenIcon } from "@heroicons/react/outline";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

const NewArticles = () => {
	// 記事の並び順は投稿日を基準
	// 新着記事は最新4件表示
	const data = useStaticQuery(
		graphql`
			{
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___createdAt] }
					limit: 4
				) {
					nodes {
						html
						fields {
							slug
						}
						frontmatter {
							createdAt(formatString: "YYYY-MM-DD")
							updateAt(formatString: "YYYY-MM-DD")
							title
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
		<div className="md:flex md:flex-wrap">
			{data.allMarkdownRemark.nodes.map((node) => {
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

export default NewArticles;
