import Link from "next/link";
import React from "react";
import styles from "../../../styles/appFolder/blog/blog.module.css"; // Import your CSS file for styling

// ... (import statements and other code)

const Blog = async ({ params }) => {
	const myBlog = await fetchSpecificBlog(params); // Pass params to the function
	function createMarkup(c) {
		return { __html: c };
	}
	return (
		<div className={`container text-center ${styles.blogContainer}`}>
			<h1
				className={`${styles.title} ${styles.textEffect} ${
					myBlog ? styles.textLoaded : ""
				}`}>
				{myBlog ? (
					<span className={`${styles.textLoaded}`}>
						{" "}
						{myBlog.title}{" "}
					</span>
				) : (
					<span className={`${styles.textLoading}`}>
						{" "}
						Title of the page{" "}
					</span>
				)}
			</h1>
			<h4>{params.blog}</h4>
			<div className={`text-justify ${styles.content}`}>
				<div
					className={`d-inline-block ${styles.textEffect} ${
						myBlog ? styles.textLoaded : ""
					}`}>
					{myBlog ? (
						<span
							className={`${styles.textLoaded}`}
							dangerouslySetInnerHTML={createMarkup(
								myBlog.content
							)}></span>
					) : (
						<span className={`${styles.textLoading}`}>
							Loading content...
						</span>
					)}
					{myBlog ? (
						<span className={`${styles.textLoaded}`}>
							{myBlog.author}
						</span>
					) : (
						<span className={`${styles.textLoading}`}>
							Loading author...
						</span>
					)}
				</div>
				<div>
					{myBlog ? null : (
						<div
							className="spinner-border text-primary"
							role="status"></div>
					)}
				</div>
			</div>
		</div>
	);
};

async function fetchSpecificBlog(params) {
	// Remove the destructuring here
	let blogsResponse = await fetch(
		`http://localhost:3000/api/getblog?slug=${params.blog}`
	);
	return blogsResponse.json();
}

export default Blog;
