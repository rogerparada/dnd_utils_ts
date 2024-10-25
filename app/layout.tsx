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
			<body className="bg-red-600 dark:bg-black">{children}</body>
		</html>
	);
}
