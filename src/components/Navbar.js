import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a
						className="navbar-brand"
						href="#">
						Hunting Coder
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse d-flex justify-content-lg-end"
						id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="/about">
									About
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="/contact">
									Contact
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="blog">
									Blog
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
