type HeadingProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
	return <h1 className={`text-4xl md:text-5xl font-black text-black mb-10 dark:text-white ${className}`}>{children}</h1>;
}
