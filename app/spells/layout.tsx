export default function layout({ children }: { children: React.ReactNode }) {
	return <div className="container mx-auto md:pt-5 md:px-5 lg:px-0">{children}</div>;
}
