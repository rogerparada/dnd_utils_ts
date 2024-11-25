import { useAppStore } from "@/src/store/useAppStore";

export default function LevelCalculator() {
	const level = useAppStore((state) => state.player.level);

	return (
		<div className="mt-10 text-3xl">
			<b>Nivel:</b> {level}
		</div>
	);
}
