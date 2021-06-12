import React from "react";
import { HashtagIcon } from "@heroicons/react/outline";
import { useStaticQuery, graphql, Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

const Hashtag = () => {
	const data = useStaticQuery(
		graphql`
			{
				markdownRemark {
					frontmatter {
						tags
					}
				}
			}
		`
	);
	return (
		<Link
			className="border-2 bg-white hover:bg-yellow-50 duration-300 hover:border-yellow-200 px-2 py-1 text-sm text-gray-700 rounded-full"
			to={`/tags/${kebabCase(data.markdownRemark.frontmatter.tags)}/`}
		>
			<p className="inline-block">
				<HashtagIcon className="inline-block w-4 h-4 text-blue-500 mr-1" />
				<span className="inline-block text-sm">
					{data.markdownRemark.frontmatter.tags}
				</span>
			</p>
		</Link>
	);
};

export default Hashtag;
