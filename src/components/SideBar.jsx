import React from "react";
import { HashtagIcon, LightBulbIcon } from "@heroicons/react/solid";
import { useStaticQuery, graphql, Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

const SideBar = () => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
				allMarkdownRemark(limit: 2000) {
					group(field: frontmatter___tags) {
						fieldValue
						totalCount
					}
				}
			}
		`
	);

	return (
		<div className="bg-white border border-gray-100 mb-8 rounded shadow-sm">
			<div className="bg-gray-700 rounded-t-md py-6 text-center">
				<p className="font-bold italic text-gray-100">
					<LightBulbIcon className="h-6 w-6 inline-block text-yellow-400 mr-2 align-bottom" />
					キーワード
				</p>
			</div>
			<div>
				<ul className="py-4">
					{data.allMarkdownRemark.group.map((tag) => (
						<li key={tag.fieldValue}>
							<Link
								to={`/tags/${kebabCase(tag.fieldValue)}/`}
								className="flex items-center justify-between border-2 hover:bg-yellow-50 duration-300 hover:border-yellow-200 rounded-full font-bold italic text-gray-700 hover:shadow-xl"
							>
								<span className="px-4">
									<HashtagIcon className="inline-block w-4 h-4 text-blue-500" />
									{tag.fieldValue}
								</span>
								<span className="font-bold w-10 h-10 bg-gray-600 text-gray-100 flex items-center justify-center p-2 rounded-full">
									{tag.totalCount}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
