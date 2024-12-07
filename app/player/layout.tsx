import PlayerBar from "@/src/components/player/ui/PlayerBar";
import MenuBar from "@/src/components/ui/MenuBar";

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<MenuBar />
			<div id="player" className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0">
				{children}
			</div>
		</>
	);
}
