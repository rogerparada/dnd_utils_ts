import { useCombatStore } from "@/src/store/useCombatStore";

type CombatButtonProps = {
	enabled: boolean;
};

export default function CombatButton({ enabled }: CombatButtonProps) {
	const combatMode = useCombatStore((state) => state.combatMode);
	const changeCombatMode = useCombatStore((state) => state.changeCombatMode);

	return (
		<button
			className="w-full text-center bg-red-500 p-2 font-bold text-white mb-10 disabled:bg-slate-300"
			onClick={() => changeCombatMode()}
			disabled={enabled}
		>
			{!combatMode ? "Iniciar Combate" : "Detener Combate"}
		</button>
	);
}
