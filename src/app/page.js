import Image from "next/image";
import Navbar from "./components/Navbar";
import MainHeading from "./components/MainHeading";
import Blog from "@/app/components/Blog";

export default function Home() {
	return (
		<main>
			<MainHeading />
			<Blog />
		</main>
	);
}
