import CharBoxItem from "./ListBoxItem";

type CharBoxProps = {
	name: string;
};

export default function CharBox({ name }: CharBoxProps) {
	return (
		<div className="mt-3 border-solid border-2 p-3 overflow-hidden relative w-full rounded-lg border-black">
			<CharBoxItem name="Fuerza" value={0} />
			<div className="flex justify-center relative -bottom-1 text-center mt-2">
				<span className="uppercase text-xs font-bold">{name}</span>
			</div>
		</div>
	);
}
