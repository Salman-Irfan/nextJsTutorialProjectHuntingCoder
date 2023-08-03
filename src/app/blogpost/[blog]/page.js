"use client";
import Link from "next/link";
import React from "react";

const Blog = ({ params }) => {
	console.log(params);
	return (
		<div>
			Blog details
			<h4>{params.blog}</h4>
		</div>
	);
};

export default Blog;
