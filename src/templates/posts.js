import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	RefreshIcon,
	PencilAltIcon,
	HomeIcon,
	ChevronRightIcon,
	DocumentIcon,
	FolderOpenIcon,
	HashtagIcon,
	LightningBoltIcon,
	ViewListIcon,
	ClockIcon,
} from "@heroicons/react/outline";
import {
	FacebookShareButton,
	TwitterShareButton,
	LineShareButton,
	HatenaShareButton,
	FacebookIcon,
	TwitterIcon,
	LineIcon,
	HatenaIcon,
} from "react-share";
import kebabCase from "lodash/kebabCase";
// Custom Component
import Seo from "../components/Seo";
import SideBar from "../components/SideBar";
import NewArticles from "../components/NewArticles";
import TemplateTitle from "../components/TemplateTitle";
import { AffiliateTypeB } from "../components/Affiliate";

/////////////////////  Post Components  ////////////////////

const Posts = ({ data }) => {
	// GatsbyImage Component
	const image = getImage(data.markdownRemark.frontmatter.thumbnail);
	const ogImage = `${data.site.siteMetadata.siteUrl}${data.markdownRemark.frontmatter.thumbnail.childImageSharp.original.src}`;
	// TableOfContents Component
	const Toc = (props) => {
		return (
			<div className="toc">
				<div
					className="text-sm"
					dangerouslySetInnerHTML={{
						__html: props.data,
					}}
				/>
			</div>
		);
	};
	// パンくず
	const Breadcrumb = () => {
		return (
			<ol
				itemScope
				itemType="https://schema.org/BreadcrumbList"
				className="flex items-center gap-1 p-1 text-gray-600 w-full text-sm font-bold whitespace-nowrap overflow-x-scroll"
			>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<Link
						itemProp="item"
						to="/"
						className="flex items-center gap-1 hover:underline"
					>
						<HomeIcon className="w-4 h-4 inline-block text-gray-700 align-bottom" />
						<span itemProp="name">Top</span>
						<ChevronRightIcon className="w-4 h-4 inline-block text-gray-700" />
					</Link>
					<meta itemProp="position" content="1" />
				</li>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<Link
						itemProp="item"
						to={`/categories/${kebabCase(
							data.markdownRemark.frontmatter.categories
						)}/`}
						className="flex items-center gap-1 hover:underline"
					>
						<FolderOpenIcon className="w-4 h-4 inline-block text-gray-500" />
						<span itemProp="name" className="inline-block">
							{data.markdownRemark.frontmatter.categories}
						</span>
						<ChevronRightIcon className="w-4 h-4 inline-block text-gray-700" />
					</Link>
					<meta itemProp="position" content="2" />
				</li>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
					// className="overflow-hidden overflow-ellipsis whitespace-nowrap hidden lg:block"
				>
					<Link
						itemProp="item"
						to={data.markdownRemark.fields.slug}
						className="flex items-center gap-1 hover:underline"
					>
						<DocumentIcon className="w-4 h-4 inline-block text-gray-700" />
						<span itemProp="name">{data.markdownRemark.frontmatter.title}</span>
					</Link>
					<meta itemProp="position" content="3" />
				</li>
			</ol>
		);
	};
	// SNS shareicon&link Component
	const SnsShare = () => {
		return (
			<div className="py-10 px-8 bg-purple-100 border-dashed border-purple-400 border">
				<p className="text-center font-bold text-lg mb-2 text-gray-800">
					SHARE
				</p>
				<div className="flex items-center justify-center">
					<TwitterShareButton
						url={`${data.site.siteMetadata.siteUrl}${data.markdownRemark.fields.slug}`}
						title={`${data.markdownRemark.frontmatter.title} @okuhira_studio より`}
						className="mr-2 hover:opacity-60 duration-300"
					>
						<TwitterIcon round size={48} />
					</TwitterShareButton>
					<FacebookShareButton
						url={`${data.site.siteMetadata.siteUrl}${data.markdownRemark.fields.slug}`}
						title={data.markdownRemark.frontmatter.title}
						className="mr-2 hover:opacity-60 duration-300"
					>
						<FacebookIcon round size={48} />
					</FacebookShareButton>
					<LineShareButton
						url={`${data.site.siteMetadata.siteUrl}${data.markdownRemark.fields.slug}`}
						title={data.markdownRemark.frontmatter.title}
						className="mr-2 hover:opacity-60 duration-300"
					>
						<LineIcon round size={48} />
					</LineShareButton>
					<HatenaShareButton
						url={`${data.site.siteMetadata.siteUrl}${data.markdownRemark.fields.slug}`}
						title={data.markdownRemark.frontmatter.title}
						className="hover:opacity-60 duration-300"
					>
						<HatenaIcon round size={48} />
					</HatenaShareButton>
				</div>
			</div>
		);
	};

	/////////////////////  Post Page  ////////////////////

	return (
		<Layout>
			<Seo
				pagetitle={data.markdownRemark.frontmatter.title}
				pagedescription={data.markdownRemark.frontmatter.description}
				ogImage={ogImage}
			/>
			<div className="container px-2 py-8 mx-auto lg:flex">
				<main className="lg:w-3/4 lg:mr-4">
					<nav>
						<Breadcrumb />
					</nav>
					<TemplateTitle
						TemplateTitle={data.markdownRemark.frontmatter.title}
					/>
					<div className="flex items-center justify-end font-bold text-right text-xs mb-4">
						<time
							className="text-gray-400 block"
							// itemProp="datePublished"
							dateTime={data.markdownRemark.createdAt}
						>
							<span className="mr-1">
								<PencilAltIcon className="inline-block w-4 h-4" />
							</span>
							{data.markdownRemark.frontmatter.createdAt}
						</time>
						<time
							className="text-gray-600 block ml-2"
							// itemProp="modified"
							dateTime={data.markdownRemark.frontmatter.updateAt}
						>
							<span className="mr-1">
								<RefreshIcon className="inline-block w-4 h-4" />
							</span>
							{data.markdownRemark.frontmatter.updateAt}
						</time>
					</div>
					<article className="slow-fadein-animation">
						<GatsbyImage
							image={image}
							alt={data.markdownRemark.frontmatter.title}
							className="bg-purple-50 shadow-md"
						/>
						{/* 目次 SP */}
						<div className="my-2 lg:mb-0">
							<h2 className="pb-2 border-b border-purple-100 text-center">
								<ViewListIcon className="h-4 w-4 inline-block text-purple-500 mr-2" />
								<span className="text-sm font-bold text-gray-800">目次</span>
							</h2>
							<nav className="p-4 flex items-center justify-center bg-purple-100">
								<Toc data={data.markdownRemark.tableOfContents} />
							</nav>
						</div>
						<p className="text-sm text-gray-800 my-8 md:mb-0 flex items-center justify-center">
							<ClockIcon className="h-4 w-4 inline-block mr-1" />
							この記事は 約 {data.markdownRemark.timeToRead} 分で読めます！
						</p>
						<div
							className="markdown"
							dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
						/>
						<SnsShare />
						<div className="mt-2">
							<ul className="flex items-center">
								<li className="p-1">
									<Link
										to={`/categories/${kebabCase(
											data.markdownRemark.frontmatter.categories
										)}/`}
										className="text-sm text-gray-700"
									>
										<FolderOpenIcon className="text-gray-500 w-4 h-4 mr-1 inline-block" />
										<span className="inline-block font-bold">
											{data.markdownRemark.frontmatter.categories}
										</span>
									</Link>
								</li>
								{data.markdownRemark.frontmatter.tags.map((tag) => (
									<li className="p-1" key={`/tags/${kebabCase(tag)}/`}>
										<Link
											to={`/tags/${kebabCase(tag)}/`}
											className="text-blue-500 hover:underline"
										>
											<HashtagIcon className="inline-block w-4 h-4 text-blue-500 mr-px" />
											<span className="inline-block text-sm">{tag}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</article>
					{/* 目次 PC */}
				</main>
				<aside className="block mt-8 lg:mt-0 lg:w-1/4">
					<SideBar />
					{/* <AffiliateTypeA /> */}
					<div className="sticky top-10 mb-8">
						<div className="hidden lg:block my-8">
							<h2 className="pb-2 border-b border-purple-100">
								<ViewListIcon className="h-4 w-4 inline-block text-purple-500 mr-2" />
								<span className="text-sm font-bold text-gray-800">目次</span>
							</h2>
							<nav className="pl-1 max-h-80 overflow-y-scroll">
								<Toc data={data.markdownRemark.tableOfContents} />
							</nav>
						</div>
						<AffiliateTypeB />
					</div>
				</aside>
			</div>
			{/* 新着記事 */}
			<div className="container px-2 py-8 mx-auto lg:flex">
				<div className="lg:w-3/4 lg:mr-4 px-2 pb-10 lg:px-0">
					<div className="mb-8">
						<h3 className="text-gray-700 text-lg font-bold italic px-2 mb-2">
							新着記事
							<LightningBoltIcon className="inline-block w-6 h-6 ml-1 align-text-bottom text-yellow-400" />
						</h3>
						<NewArticles />
					</div>
					<div className="text-center">
						<Link
							className="text-lg font-bold border-2 border-gray-100 block bg-white text-gray-700 w-full p-4 hover:bg-purple-50 hover:border-purple-200 duration-300 rounded shadow"
							to="/"
						>
							<HomeIcon className="w-6 h-6 mr-1 inline-block align-text-bottom text-gray-700" />
							トップページにいく
						</Link>
					</div>
				</div>
				{/* <aside className="block mt-8 lg:mt-0 lg:w-1/4">
					<div className="lg:sticky lg:top-20">
						<Ad />
					</div>
				</aside> */}
			</div>
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
			timeToRead
			frontmatter {
				title
				description
				createdAt(formatString: "YYYY-MM-DD")
				updateAt(formatString: "YYYY-MM-DD")
				tags
				categories
				thumbnail {
					childImageSharp {
						gatsbyImageData(
							placeholder: TRACED_SVG
							formats: [AUTO, WEBP, AVIF]
							layout: CONSTRAINED
							width: 756
							height: 467
						)
						original {
							src
						}
					}
				}
			}
		}
		site {
			siteMetadata {
				siteUrl
			}
		}
	}
`;
