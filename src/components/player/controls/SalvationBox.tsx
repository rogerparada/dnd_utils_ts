import { useAppStore } from "@/src/store/useAppStore";
import ListBoxItem from "./ListBoxItem";
import { Attributes } from "@/src/types/Player";

type SalvationBoxProps = {
	name: string;
};

export default function SalvationBox({ name }: SalvationBoxProps) {
	const attributes = useAppStore((state) => state.attributes);
	const values = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"] as (keyof Attributes)[];

	return (
		<div className="mt-3 border-solid border-2 p-3 overflow-hidden relative w-full rounded-lg border-black">
			{values.map((a, i) => (
				<ListBoxItem name={a} value={attributes[a].value} checked={attributes[a].proficiency} key={`${a}-${i}`} />
			))}
			<div className="flex justify-center relative -bottom-1 text-center mt-2">
				<span className="uppercase text-xs font-bold">{name}</span>
			</div>
		</div>
	);
}
