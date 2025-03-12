import { Character } from "@/src/schema";
import { useCombatStore } from "@/src/store/useCombatStore";

type PlayerListItemProps = {
	player: Character;
};

export default function PlayerListItem({ player }: PlayerListItemProps) {
	const modifyInitiative = useCombatStore((state) => state.modifyInitiative);
	const deletePlayer = useCombatStore((state) => state.deletePlayer);
	const combatMode = useCombatStore((state) => state.combatMode);

	return (
		<div
			className={`w-full h-10 ${
				combatMode ? "bg-slate-200 text-slate-700 font-black" : "bg-white text-black"
			} border-b border-slate-400 last-of-type:border-0 flex justify-between items-center`}
		>
			<div className="flex flex-1">
				<span className="w-10 text-center px-3">{player.initiative}</span>
				<span className="ml-5 flex-1">{player.name} </span>
			</div>
			<div className="flex h-9">
				<button className={`bg-blue-500 text-white w-8 ${combatMode ? "hidden" : ""}`} onClick={() => modifyInitiative(player.id, 1)}>
					<span className="icon-[uiw--up]" />
				</button>
				<button className={`bg-blue-500 text-white w-8 ${combatMode ? "hidden" : ""}`} onClick={() => modifyInitiative(player.id, -1)}>
					<span className="icon-[uiw--down]" />
				</button>
				<button className={`bg-red-500 text-white w-8 ${combatMode ? "hidden" : ""}`} onClick={() => deletePlayer(player.id)}>
					<span className="icon-[tabler--x]" />
				</button>
			</div>
		</div>
	);
}
