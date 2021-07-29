import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { HashtagIcon } from "@heroicons/react/outline";

const Hashtag = () => {
	const data = useStaticQuery(
		graphql`
			query {
				tagGroup: allMarkdownRemark(limit: 2000) {
					group(field: frontmatter___tags) {
						fieldValue
						totalCount
					}
				}
			}
		`
	);
	return (
		<section>
			<div className="mb-4">
				<h3 className="pb-2 border-b border-purple-100">
					<HashtagIcon className="h-4 w-4 inline-block text-blue-500 mr-1" />
					<span className="text-sm font-bold text-gray-900">ハッシュタグ</span>
				</h3>
			</div>
			<nav className="bg-white pt-4 pr-4 pb-2">
				<ul className="flex flex-wrap">
					{data.tagGroup.group.map((tag) => (
						<li className="pb-2" key={tag.fieldValue}>
							<Link
								to={`/tags/${kebabCase(tag.fieldValue)}/`}
								className="flex items-center justify-between text-blue-500 hover:opacity-80"
							>
								<p className="pl-4">
									<HashtagIcon className="inline-block w-4 h-4 text-blue-500 mr-px" />
									<span className="inline-block text-sm">{tag.fieldValue}</span>
								</p>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default Hashtag;
