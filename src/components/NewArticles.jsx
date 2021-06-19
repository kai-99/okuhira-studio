import React from "react";
import {
	RefreshIcon,
	PencilAltIcon,
	FolderOpenIcon,
} from "@heroicons/react/outline";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const NewArticles = () => {
	// 記事の並び順は投稿日を基準
	// 新着記事は最新5件表示
	const data = useStaticQuery(
		graphql`
			{
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___createdAt] }
					limit: 3
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
								<h2 className="font-bold text-sm md:text-base text-gray-800 flex-1">
									{node.frontmatter.title}
								</h2>
								<div className="flex justify-between items-center font-bold">
									<div>
										<FolderOpenIcon className="inline-block w-4 h-4 text-gray-500 mr-1" />
										<span className="inline-block text-sm text-gray-700">
											{node.frontmatter.categories}
										</span>
									</div>
									<div className="md:flex md:justify-end">
										<time
											itemProp="datepublished"
											dateTime={node.frontmatter.createdAt}
											className="text-gray-400 block text-right text-xs md:mr-4"
										>
											<span className="mr-1">
												<PencilAltIcon className="inline-block w-3 h-3" />
											</span>
											{node.frontmatter.createdAt}
										</time>
										<time
											itemProp="modified"
											dateTime={node.frontmatter.updateAt}
											className="text-gray-600 block text-right text-xs"
										>
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

export default NewArticles;
