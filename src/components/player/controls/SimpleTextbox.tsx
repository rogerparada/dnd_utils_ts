import { useAppStore } from "@/src/store/useAppStore";

type SimpleTextboxProps = {
	name: string;
	label: string;
	value: string;
};

export default function SimpleTextbox({ name, label, value }: SimpleTextboxProps) {
	const changeDescription = useAppStore((state) => state.changeDescription);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		changeDescription(name, value);
	};

	return (
		<div className=" mb-2">
			<input type="text" name={name} id={name} className="w-full" value={value || ""} onChange={handleChange} />
			<label className="text-xs font-bold">{label}</label>
		</div>
	);
}
