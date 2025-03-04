import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { calculateProficiency, calculateValue } from "@/src/utils";
import { useAppStore } from "@/src/store/useAppStore";

type ListBoxSkillItemProps = {
	name: string;
	value: number;
	dependence: string;
	checked: boolean;
};

export default function ListBoxSkillItem({ name, value, dependence, checked }: ListBoxSkillItemProps) {
	const t = useTranslations("common");

	const changeSkillsProficiency = useAppStore((state) => state.changeSkillsProficiency);
	const proficiency = useAppStore((state) => state.player.proficiency);

	const calculated = useMemo(() => (checked ? calculateProficiency(value, proficiency) : calculateValue(value)), [value, checked, proficiency]);
	const label = useMemo(() => t(name), [name, t]);
	const newDependence = useMemo(() => t(dependence), [dependence, t]);

	const toggleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		changeSkillsProficiency(name, checked);
	};

	return (
		<div className="flex gap-2 mt-2 items-center">
			<input type="checkbox" name={name} id={name} onChange={toggleChecked} className="rounded-full" checked={checked} />
			<label htmlFor={name} className="text-sm border-b-2  w-6 flex justify-center">
				{calculated}
			</label>
			<label className="text-xs">
				{label} <i className="text-gray-600">{`(${newDependence.substring(0, 3)})`}</i>
			</label>
		</div>
	);
}
