import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	RefreshIcon,
	PencilAltIcon,
	ClipboardListIcon,
	HomeIcon,
	HashtagIcon,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import { Helmet } from "react-helmet";
import {
	FacebookShareButton,
	TwitterShareButton,
	LineShareButton,
	LinkedinShareButton,
	FacebookIcon,
	TwitterIcon,
	LineIcon,
	LinkedinIcon,
} from "react-share";

const Posts = ({ data }) => {
	// GatsbyImage Component
	const image = getImage(data.markdownRemark.frontmatter.hero);
	// TableOfContents Component
	const Toc = (props) => {
		return (
			<div className="toc">
				<div
					className="toc__content"
					dangerouslySetInnerHTML={{
						__html: props.data,
					}}
				/>
			</div>
		);
	};
	// SNS shareicon&link Component
	const SnsShare = () => {
		return (
			<div className="pb-8 px-8">
				<p className="text-center font-bold text-lg mb-2">
					Share
					<HeartIcon className="h-6 w-6 inline-block ml-1 text-purple-400 align-text-bottom" />
				</p>
				<div className="flex items-center justify-center">
					<TwitterShareButton className="mr-2">
						<TwitterIcon round size={48} />
					</TwitterShareButton>
					<FacebookShareButton className="mr-2">
						<FacebookIcon round size={48} />
					</FacebookShareButton>
					<LineShareButton className="mr-2">
						<LineIcon round size={48} />
					</LineShareButton>
					<LinkedinShareButton>
						<LinkedinIcon round size={48} />
					</LinkedinShareButton>
				</div>
			</div>
		);
	};
	return (
		<Layout>
			<Helmet>
				<title>
					{data.markdownRemark.frontmatter.title} {"  "}|{"  "}
					{data.site.siteMetadata.title}
				</title>
			</Helmet>
			<main className="lg:w-3/4 lg:mr-8">
				<h1 className="font-bold text-center text-xl lg:text-2xl my-4 text-gray-800">
					{data.markdownRemark.frontmatter.title}
				</h1>
				<div className="flex items-center justify-between mb-1 font-bold">
					<Link
						className="border border-purple-400 bg-purple-200 px-2 py-1 text-sm text-gray-700 rounded-full"
						to={`/tags/${data.markdownRemark.frontmatter.tags}/`}
					>
						<span className="inline-block italic">
							<HashtagIcon className="inline-block w-4 h-4" />
							{data.markdownRemark.frontmatter.tags}
						</span>
					</Link>
					<div className="flex">
						<time className="text-gray-600 block text-right text-xs lg:text-sm mr-4">
							<span className="mr-1">
								<PencilAltIcon className="inline-block w-4 h-4" />
							</span>
							{data.markdownRemark.frontmatter.createdDate}
						</time>
						<time className="text-gray-600 block text-right text-xs lg:text-sm">
							<span className="mr-1">
								<RefreshIcon className="inline-block w-4 h-4" />
							</span>
							{data.markdownRemark.frontmatter.updateDate}
						</time>
					</div>
				</div>
				<article className="bg-white rounded shadow-sm">
					<figure className="text-center mb-4">
						<GatsbyImage
							image={image}
							alt={data.markdownRemark.frontmatter.title}
						/>
					</figure>
					{/* 目次 SP */}
					<div className="lg:hidden bg-white border border-gray-100 mb-8 rounded">
						<div className="bg-gray-700 text-center py-3">
							<p className="font-bold text-gray-100">
								<ClipboardListIcon className="h-6 w-6 inline-block text-purple-400 mr-2 align-bottom" />
								もくじ
							</p>
						</div>
						<nav className="p-4 bg-purple-50">
							<Toc data={data.markdownRemark.tableOfContents} />
						</nav>
					</div>
					<div
						className="markdown"
						dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
					/>
					<div className="px-10">
						<hr className="my-8" />
					</div>
					<SnsShare />
				</article>
				<div className="my-4 text-center">
					<Link
						className="text-md border-2 block bg-white text-gray-800 w-full p-4 hover:bg-purple-50 hover:border-purple-200 duration-300 rounded-sm"
						to="/"
					>
						<HomeIcon className="w-6 h-6 mr-1 inline-block align-bottom" />
						記事一覧ページにいく
					</Link>
				</div>
			</main>
			{/* 目次 PC */}
			<aside className="hidden lg:block lg:w-1/4">
				<div className="bg-white border border-gray-100 mb-8 rounded sticky top-20 shadow-sm">
					<div className="bg-gray-700 text-center py-8 rounded-t-md">
						<p className="font-bold text-gray-100">
							<ClipboardListIcon className="h-6 w-6 inline-block text-purple-400 mr-2 align-bottom" />
							もくじ
						</p>
					</div>
					<nav className="p-4">
						<Toc data={data.markdownRemark.tableOfContents} />
					</nav>
				</div>
			</aside>
		</Layout>
	);
};
export default Posts;

export const query = graphql`
	query PostsQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			tableOfContents
			frontmatter {
				title
				createdDate
				updateDate
				tags
				hero {
					childImageSharp {
						gatsbyImageData(
							placeholder: TRACED_SVG
							formats: [AUTO, WEBP, AVIF]
							layout: CONSTRAINED
							width: 730
							height: 500
						)
					}
				}
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;
