import React from "react";
import styles from "../../styles/about/about.module.css"; // Import your custom CSS module
import Image from "next/image";
import imageStyles from "../../styles/mainHeading/image.module.css";
const About = () => {
	return (
		<div className={`${styles.aboutContainer} py-5`}>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className={imageStyles.imageWrapper}>
							<Image
								className={imageStyles.coderImg}
								src="/homeimg.jpg"
								width={500}
								height={500}
								alt="hunting coder image"
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className={styles.aboutText}>
							<h2>Welcome to Hunting Coder</h2>
							<p>
								Hunting Coder is a platform for passionate
								developers who hunt for quality code, SEO
								optimization, bug fixes, and more. Our dedicated
								coders share their findings and insights through
								blogs, helping others on their coding journey.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
