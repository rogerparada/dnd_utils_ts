import { useAppStore } from "@/src/store/useAppStore";
import ListBoxItem from "./ListBoxItem";

type SalvationBoxProps = {
	name: string;
};

export default function SalvationBox({ name }: SalvationBoxProps) {
	const attributes = useAppStore((state) => state.attributes);
	return (
		<div className="mt-3 border-solid border-2 p-3 overflow-hidden relative w-full rounded-lg border-black">
			<ListBoxItem name="Fuerza" value={attributes.Strength.value} />
			<ListBoxItem name="Destreza" value={attributes.Dexterity.value} />
			<ListBoxItem name="Constitución" value={attributes.Constitution.value} />
			<ListBoxItem name="Inteligencia" value={attributes.Intelligence.value} />
			<ListBoxItem name="Carisma" value={attributes.Charisma.value} />
			<div className="flex justify-center relative -bottom-1 text-center mt-2">
				<span className="uppercase text-xs font-bold">{name}</span>
			</div>
		</div>
	);
}
