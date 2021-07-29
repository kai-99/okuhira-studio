import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { FolderOpenIcon } from "@heroicons/react/outline";

const Category = () => {
	const data = useStaticQuery(
		graphql`
			query {
				categoryGroup: allMarkdownRemark(limit: 2000) {
					group(field: frontmatter___categories) {
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
					<FolderOpenIcon className="h-4 w-4 inline-block text-gray-500 mr-1" />
					<span className="text-sm font-bold text-gray-900">カテゴリー</span>
				</h3>
			</div>
			<nav className="mb-4 lg:mb-8">
				<ul className="flex flex-col">
					{data.categoryGroup.group.map((cat) => (
						<li
							className="mb-2 last:mb-0 hover:opacity-80 duration-300"
							key={cat.fieldValue}
						>
							<Link
								to={`/categories/${kebabCase(cat.fieldValue)}/`}
								className="flex bg-white items-center justify-between font-bold text-gray-700"
							>
								<p className="px-4">
									<FolderOpenIcon className="inline-block w-4 h-4 text-gray-500 mr-1" />
									<span className="inline-block text-sm">{cat.fieldValue}</span>
								</p>
								<span className="font-bold w-10 h-10 bg-gray-600 text-gray-100 flex items-center justify-center p-2">
									{cat.totalCount}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default Category;
