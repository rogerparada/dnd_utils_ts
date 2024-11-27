export default function MessageBox({ children, className }: { children: React.ReactNode; className?: string }) {
	return <div className={!className ? "italic text-black text-sm w-full text-center" : className}>{children}</div>;
}
