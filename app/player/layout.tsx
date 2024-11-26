import PlayerBar from "@/src/components/player/ui/PlayerBar";

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative">
			<PlayerBar />
			<div id="player" className=" w-full xl:container mx-auto lg:pt-5 lg:px-0">
				{children}
			</div>
		</div>
	);
}
