import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hunting Coder",
	description: "A blog for hunting coders by a coder",
	keywords:
		"nex js, hunting coder blog, hunting coder, next js tutorial project",
};

export default function RootLayout({ children }) {
	return (
		<>
			<html lang="en"></html>
			<body className={inter.className}>
				<Navbar/>
				{children}
			</body>
		</>
	);
}
