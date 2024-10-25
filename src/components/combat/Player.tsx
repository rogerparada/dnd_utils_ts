import { Character } from "@/src/schema";
import { usePlayerStore } from "@/src/store/playerStore";
import { Color } from "@/src/types";
import Image from "next/image";

type PlayerProps = {
	player: Character;
};

type FullCharacter = {
	[key: string]: Color & { image: string };
};

const colors: FullCharacter = {
	Player: { bg: "bg-white", text: "text-blue-500", border: "border-blue-500", image: "/PlayerIcons/knight-2-svgrepo-com.svg" },
	Enemy: { bg: "bg-white", text: "text-red-500", border: "border-red-500", image: "/PlayerIcons/set-troll-svgrepo-com.svg" },
	Ally: { bg: "bg-white", text: "text-green-500", border: "border-green-500", image: "/PlayerIcons/baby-2-svgrepo-com.svg" },
	Neutral: { bg: "bg-white", text: "text-amber-500", border: "border-amber-500", image: "/PlayerIcons/little-red-riding-hood-2-svgrepo-com.svg" },
	Boss: { bg: "bg-white", text: "text-purple-500", border: "border-purple-900", image: "/PlayerIcons/dragon-svgrepo-com.svg" },
};

export default function Player({ player }: PlayerProps) {
	const combatMode = usePlayerStore((state) => state.combatMode);
	const nextInCombat = usePlayerStore((state) => state.nextInCombat);

	const color = colors[player.type];
	return (
		<button
			className={`min-w-32 h-40 border-4 ${color.border} rounded-lg flex flex-col ${color.bg} shadow-lg ${
				combatMode ? "first-of-type:w-36 first-of-type:h-48 first-of-type:opacity-100 opacity-50" : ""
			}`}
			disabled={player.disabled}
			onClick={() => nextInCombat(player.id)}
		>
			<div className="relative w-full rounded-t-lg flex-1">
				<Image src={player.image || colors[player.type].image} alt={player.type} fill />
			</div>
			<div className={`w-full border-t rounded-b-lg text-center ${color.border}`}>
				<span className={`font-black ${color.text}`}>{player.name}</span>
			</div>
		</button>
	);
}
