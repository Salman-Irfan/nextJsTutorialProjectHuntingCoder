"use client";
import Link from "next/link";
import React from "react";
// Step 1: find the file corresponding to the slug / params
// Step 2: Populate them inside the page
const Blog = ({ params }) => {
	return (
		<div className="container text-center">
			<h1>Title of the page</h1>
			<h4>{params.blog}</h4>
			<div className="text-justify">
				<div className="d-inline-block">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi optio voluptatem sapiente aliquam quis perspiciatis. Dolores expedita vel minima, autem atque voluptatum optio quo quam et aut error nihil ratione totam doloribus ipsum delectus necessitatibus ab impedit rem adipisci laudantium? Earum exercitationem nostrum repudiandae recusandae, rem in commodi expedita consequuntur quas praesentium ducimus ipsam deserunt! Necessitatibus repudiandae, nulla quod recusandae consequuntur, sequi blanditiis dolor, nostrum qui voluptates ea excepturi suscipit repellendus commodi alias sed eveniet ratione optio quibusdam fuga dolorum perferendis ipsum sit? Id libero tempore fugiat dolorum, voluptate rem cum et incidunt aperiam debitis voluptatum minima perspiciatis quas sunt.
				</div>
			</div>
		</div>
	);
};

export default Blog;
