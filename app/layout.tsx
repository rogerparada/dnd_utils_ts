import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Dnd Utils",
	description: "Dungeons and Dragons Fan Page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-slate-200">
				<div className="container mx-auto pt-5">{children}</div>
			</body>
		</html>
	);
}
