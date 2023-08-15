// pages/api/blogs.js
export async function getServerSideProps() {
	// Fetch data from the API
	const res = await fetch("http://localhost:3000/api/blogs");
	const blogs = await res.json();

	return { props: { blogs } };
}
