import React from "react";
import styles from "../styles/main-heading.css";

const MainHeading = () => {
	return (
		<div className="d-flex justify-content-center align-items-center bg-gradient-dark text-warning text-center py-5">
			<div className="main-heading">
				<h1 className="display-4 display-md-3 display-lg-2">
					HUNTING CODER
				</h1>
				<p className="fs-5 fs-md-4 fs-lg-3 font-italic">
					A blog for Hunting Coders by a Hunting Coder
				</p>
			</div>
		</div>
	);
};

export default MainHeading;
