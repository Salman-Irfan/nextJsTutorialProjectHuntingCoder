import React from "react";
import styles from "../../styles/blog/blog.module.css";
import Link from "next/link";

const BlogsFrontEnd = async () => {
	const blogs = await fetchBlogs();
	return (
		<div className="container">
			<div className="row">
				{blogs.map((blogitem) => (
					<div
						key={blogitem.slug}
						className="col-md-6 col-lg-4">
						<div className="blogItem text-center py-4">
							<Link href={`/blogpost/${blogitem.slug}`}>
								<h3>{blogitem.title}</h3>
							</Link>
							<p>
								{blogitem.content.substr(0, 100)}
								<Link href={`/blogpost/${blogitem.slug}`}>
									... Read More
								</Link>
							</p>
							<p>Author: {blogitem.author}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
async function fetchBlogs() {
	let blogsResponse = await fetch(`http://localhost:3000/api/blogs`);
	return blogsResponse.json();
}
export default BlogsFrontEnd;
