import { usePlayerStore } from "@/src/store/playerStore";

export default function CombatButton() {
	const combatMode = usePlayerStore((state) => state.combatMode);
	const changeCombatMode = usePlayerStore((state) => state.changeCombatMode);

	return (
		<button className="w-full text-center bg-purple-500 p-2 font-bold text-white mb-10" onClick={() => changeCombatMode()}>
			{!combatMode ? "Iniciar Combate" : "Detener Combate"}
		</button>
	);
}
