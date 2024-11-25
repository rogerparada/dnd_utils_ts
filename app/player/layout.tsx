import PlayerBar from "@/src/components/player/ui/PlayerBar";

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative">
			<PlayerBar />
			<div className="container mx-auto pt-5 px-5 lg:px-0">{children}</div>
		</div>
	);
}
