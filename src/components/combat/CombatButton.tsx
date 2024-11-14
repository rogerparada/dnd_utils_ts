import { useAppStore } from "@/src/store/useAppStore";

export default function CombatButton() {
	const combatMode = useAppStore((state) => state.combatMode);
	const changeCombatMode = useAppStore((state) => state.changeCombatMode);

	return (
		<button className="w-full text-center bg-purple-500 p-2 font-bold text-white mb-10" onClick={() => changeCombatMode()}>
			{!combatMode ? "Iniciar Combate" : "Detener Combate"}
		</button>
	);
}
