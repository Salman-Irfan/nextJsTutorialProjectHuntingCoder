import React from "react";
import styles from "../../styles/blog/blog.module.css";
import Link from "next/link";

// step 1: collect all the data from blogdata directory
// Step 2: iterate them and dispay them on blogpost link
const Blog = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-4">
						<div className="blogItem text-center py-4">
							<Link href={"/blogpost/learn-javascript"}>
								<h3>How to learn JavaScript</h3>
							</Link>
							<p>
								JavaScript is a language used to develop logic
								for the web
							</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="blogItem text-center py-4">
							<h3>How to learn JavaScript</h3>
							<p>
								JavaScript is a language used to develop logic
								for the web
							</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="blogItem text-center py-4">
							<h3>How to learn JavaScript</h3>
							<p>
								JavaScript is a language used to develop logic
								for the web
							</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="blogItem text-center py-4">
							<h3>How to learn JavaScript</h3>
							<p>
								JavaScript is a language used to develop logic
								for the web
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
