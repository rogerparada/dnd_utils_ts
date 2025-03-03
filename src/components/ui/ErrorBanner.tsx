export default function ErrorBanner({ children }: { children: React.ReactNode }) {
	return <div className="p-4 bg-red-500 text-white uppercase font-black text-center text-xs">{children}</div>;
}
