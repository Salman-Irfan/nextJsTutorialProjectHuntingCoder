import Link from "next/link";
import React from "react";

const Blog = () => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/blogpost/1">blog 1</Link>
				</li>
				<li>
					<Link href="/blogpost/2">blog 2</Link>
				</li>
				<li>
					<Link href="/blogpost/3">blog 3</Link>
				</li>
				<li>
					<Link href="/blogpost/4">blog 4</Link>
				</li>
			</ul>
		</div>
	);
};

export default Blog;
