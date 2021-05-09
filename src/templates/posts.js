import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	RefreshIcon,
	PencilAltIcon,
	ClipboardListIcon,
	HashtagIcon,
	// ShareIcon,
	ScissorsIcon,
	HomeIcon,
} from "@heroicons/react/outline";
// import {HomeIcon, ScissorsIcon } from "@heroicons/react/solid";
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
import kebabCase from "lodash/kebabCase";
// Custom Component
import Seo from "../components/Seo";
import SideBar from "../components/SideBar";

const Posts = ({ data }) => {
	// GatsbyImage Component
	const image = getImage(data.markdownRemark.frontmatter.thumbnail);
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
			<div className="pb-10 px-8">
				<p className="text-center font-bold text-lg mb-2 italic">Share</p>
				<div className="flex items-center justify-center">
					{/* <ShareIcon className="h-6 w-6 inline-block mr-4 text-purple-400 align-text-bottom" /> */}
					<TwitterShareButton
						url={data.markdownRemark.fields.slug}
						title={data.markdownRemark.frontmatter.title}
						className="mr-2 hover:opacity-60 duration-300"
					>
						<TwitterIcon round size={48} />
					</TwitterShareButton>
					<FacebookShareButton
						url={data.markdownRemark.fields.slug}
						title={data.markdownRemark.frontmatter.title}
						className="mr-2 hover:opacity-60 duration-300"
					>
						<FacebookIcon round size={48} />
					</FacebookShareButton>
					<LineShareButton
						url={data.markdownRemark.fields.slug}
						title={data.markdownRemark.frontmatter.title}
						className="mr-2 hover:opacity-60 duration-300"
					>
						<LineIcon round size={48} />
					</LineShareButton>
					<LinkedinShareButton
						url={data.markdownRemark.fields.slug}
						title={data.markdownRemark.frontmatter.title}
						className="hover:opacity-60 duration-300"
					>
						<LinkedinIcon round size={48} />
					</LinkedinShareButton>
				</div>
			</div>
		);
	};

	return (
		<Layout>
			<Seo
				pagetitle={data.markdownRemark.frontmatter.title}
				pagedescription={data.markdownRemark.frontmatter.description}
			/>
			<main className="lg:w-3/4 lg:mr-8">
				<h1 className="font-bold text-center text-xl lg:text-2xl my-4 text-gray-800">
					{data.markdownRemark.frontmatter.title}
				</h1>
				<div className="flex items-center justify-between mb-1 font-bold">
					<Link
						className="border-2 bg-white hover:bg-purple-50 duration-300 hover:border-purple-200 px-2 py-1 text-sm text-gray-700 rounded-full"
						to={`/tags/${kebabCase(data.markdownRemark.frontmatter.tags)}/`}
					>
						<span className="inline-block italic">
							<HashtagIcon className="inline-block w-4 h-4 text-blue-500" />
							{data.markdownRemark.frontmatter.tags}
						</span>
					</Link>
					<div className="flex">
						<time className="text-gray-600 block text-right text-xs lg:text-sm mr-4">
							<span className="mr-1">
								<PencilAltIcon className="inline-block w-4 h-4" />
							</span>
							{data.markdownRemark.frontmatter.createdAt}
						</time>
						<time className="text-gray-600 block text-right text-xs lg:text-sm">
							<span className="mr-1">
								<RefreshIcon className="inline-block w-4 h-4" />
							</span>
							{data.markdownRemark.frontmatter.updateAt}
						</time>
					</div>
				</div>
				<article className="bg-white rounded shadow-sm">
					<figure className="text-center md:mb-4">
						<GatsbyImage
							image={image}
							alt={data.markdownRemark.frontmatter.title}
						/>
					</figure>
					{/* 目次 SP */}
					<div className="lg:hidden bg-white my-6 px-2">
						<div className="bg-gray-700 text-center py-3 rounded-t-md">
							<p className="font-bold text-gray-100">
								<ClipboardListIcon className="h-6 w-6 inline-block text-purple-400 mr-2 align-bottom" />
								もくじ
							</p>
						</div>
						<nav className="p-4 border-2 border-gray-700 rounded-b-md">
							<Toc data={data.markdownRemark.tableOfContents} />
						</nav>
					</div>
					<div
						className="markdown"
						dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
					/>
					<div className="px-10 relative">
						<hr className="my-10 border-t-4 border-dotted border-gray-400 block" />
						<ScissorsIcon
							className="absolute z-10 w-6 h-6 inline-block text-gray-700 bg-white"
							style={{ top: `-10px`, left: `49%` }}
						/>
					</div>
					<SnsShare />
				</article>
				<div className="mt-8 text-center">
					<Link
						className="text-lg font-bold border-2 border-gray-50 block bg-white text-gray-700 w-full p-4 hover:bg-purple-50 hover:border-purple-200 duration-300 rounded shadow-sm"
						to="/"
					>
						<HomeIcon className="w-6 h-6 mr-1 inline-block align-text-bottom text-gray-700" />
						トップページにいく
					</Link>
				</div>
			</main>
			{/* 目次 PC */}
			<aside className="hidden lg:block lg:w-1/4">
				<div className="sticky top-20">
					<div className="bg-white border border-gray-100 mb-8 rounded shadow-sm">
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
					<SideBar />
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
			fields {
				slug
			}
			frontmatter {
				title
				description
				createdAt(formatString: "YYYY.MM.DD")
				updateAt(formatString: "YYYY.MM.DD")
				tags
				thumbnail {
					childImageSharp {
						gatsbyImageData(
							placeholder: TRACED_SVG
							formats: [AUTO, WEBP, AVIF]
							layout: CONSTRAINED
							width: 732
							height: 500
						)
					}
				}
			}
		}
	}
`;
