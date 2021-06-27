import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { FolderOpenIcon, HashtagIcon } from "@heroicons/react/outline";

const SideBar = () => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
				categoryGroup: allMarkdownRemark(limit: 2000) {
					group(field: frontmatter___categories) {
						fieldValue
						totalCount
					}
				}
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
		<div className="my-8">
			<div className="mb-4">
				<h3 className="pb-2 border-b border-purple-100">
					<FolderOpenIcon className="h-4 w-4 inline-block text-gray-500 mr-1" />
					<span className="text-sm font-bold text-gray-800">カテゴリー</span>
				</h3>
			</div>
			<nav className="mb-4">
				<ul className="flex flex-wrap lg:flex-col">
					{data.categoryGroup.group.map((cat) => (
						<li className="pb-2" key={cat.fieldValue}>
							<Link
								to={`/categories/${kebabCase(cat.fieldValue)}/`}
								className="flex bg-white items-center justify-between border-2 hover:bg-purple-50 duration-300 hover:border-purple-200 rounded-full font-bold text-gray-700 hover:shadow-lg"
							>
								<p className="px-4">
									<FolderOpenIcon className="inline-block w-4 h-4 text-gray-500 mr-1" />
									<span className="inline-block text-sm">{cat.fieldValue}</span>
								</p>
								<span className="font-bold w-10 h-10 bg-gray-600 text-gray-100 flex items-center justify-center p-2 rounded-full">
									{cat.totalCount}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="mb-4">
				<h3 className="pb-2 border-b border-purple-100">
					<HashtagIcon className="h-4 w-4 inline-block text-blue-500 mr-1" />
					<span className="text-sm font-bold text-gray-800">ハッシュタグ</span>
				</h3>
			</div>
			<nav>
				<ul className="flex flex-wrap">
					{data.tagGroup.group.map((tag) => (
						<li className="pb-2" key={tag.fieldValue}>
							<Link
								to={`/tags/${kebabCase(tag.fieldValue)}/`}
								className="flex bg-white items-center justify-between text-blue-500 hover:underline"
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
		</div>
	);
};

export default SideBar;
