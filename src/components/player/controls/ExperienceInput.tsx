import { useAppStore } from "@/src/store/useAppStore";

type NumericInputProps = {
	name: string;
	label: string;
	value?: number;
};

export default function ExperienceInput({ name, label, value }: NumericInputProps) {
	const changeExperiencePoints = useAppStore((state) => state.changeExperiencePoints);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = +e.target.value;
		changeExperiencePoints(value);
	};

	return (
		<div className=" mb-2">
			<input type="number" name={name} id={name} className="w-full text-right" value={value || 0} onChange={handleChange} />
			<label className="text-xs font-bold">{label}</label>
		</div>
	);
}
