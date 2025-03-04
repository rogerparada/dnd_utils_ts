import { useAppStore } from "@/src/store/useAppStore";
import ListBoxItem from "./ListBoxItem";
import { attributes } from "@/src/Global";

type SalvationBoxProps = {
	name: string;
};

export default function SalvationBox({ name }: SalvationBoxProps) {
	const attributesStore = useAppStore((state) => state.player.attributes);

	return (
		<div className="mt-3 border-solid border-2 p-3 overflow-hidden relative w-full rounded-lg border-black">
			{attributes.map((a, i) => (
				<ListBoxItem name={a} value={attributesStore[a].value} checked={attributesStore[a].proficiency} key={`${a}-${i}`} />
			))}
			<div className="flex justify-center relative -bottom-1 text-center mt-2">
				<span className="uppercase text-xs font-bold">{name}</span>
			</div>
		</div>
	);
}
