import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import {
	RefreshIcon,
	PencilAltIcon,
	HashtagIcon,
} from "@heroicons/react/outline";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const PopularPostList = () => {
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
		<section>
			<div>
				<p className="pl-2 font-bold text-gray-600 text-sm italic">
					記事一覧
					<CheckIcon className="h-5 w-5 ml-1 text-purple-400 inline-block align-bottom" />
				</p>
				<h2 className="text-gray800 text-2xl font-bold italic pt-0 pb-2 px-2 mb-2">
					All articles
				</h2>
			</div>
			<div>
				{data.allMarkdownRemark.nodes.map((node) => {
					return (
						<div
							className="bg-white mb-16 md:mb-4 relative"
							key={node.frontmatter.title}
						>
							<Link
								className="md:flex hover:shadow-xl hover:bg-purple-50 md:border-2 hover:border-purple-200 duration-300"
								to={node.fields.slug}
							>
								<GatsbyImage
									image={getImage(node.frontmatter.thumbnail)}
									alt={node.frontmatter.title}
									className="w-full h-72 md:w-36 md:h-24 object-cover"
								/>
								<div className="flex flex-col p-2 md:flex-1">
									<h2 className="font-bold text-sm md:text-lg text-gray-800 mb-4">
										{node.frontmatter.title}
									</h2>
									<div className="flex justify-between items-center font-bold">
										<div className="border-2 bg-white inline-block px-2 py-1 text-sm text-gray-700 rounded-full">
											<span className="inline-block italic">
												<HashtagIcon className="inline-block w-4 h-4 text-blue-500" />
												{node.frontmatter.tags}
											</span>
										</div>
										<div className="md:flex md:justify-end">
											<time className="text-gray-600 block text-right text-xs md:mr-4">
												<span className="md:hidden">投稿日</span>{" "}
												<span className="mr-1">
													<PencilAltIcon className="inline-block w-3 h-3" />
												</span>
												{node.frontmatter.createdAt}
											</time>
											<time className="text-gray-600 block text-right text-xs">
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
		</section>
	);
};

export default PopularPostList;
