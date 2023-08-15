import React from "react";

const Blog = ({ props }) => {
	return (
		<div>
			This is Blog Component
			<div>
				<h1>Welcome to Next.js SSR Example</h1>
			</div>
			<p>{props}</p>
		</div>
	);
};

export const getServerSideProps = () => {
	const repo = "any random string";
	return { props: { repo } };
};

export default Blog;
