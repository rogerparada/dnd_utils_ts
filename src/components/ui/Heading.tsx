type HeadingProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
	return <h1 className={`text-4xl md:text-5xl font-black ${className}`}>{children}</h1>;
}
