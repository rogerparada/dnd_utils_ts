import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { calculateProficiency, calculateValue } from "@/src/utils";
import { useAppStore } from "@/src/store/useAppStore";

type ListBoxItemProps = {
	name: string;
	value: number;
	checked: boolean;
};

export default function ListBoxItem({ name, value, checked }: ListBoxItemProps) {
	const t = useTranslations("common");

	const changeAttributesProficiency = useAppStore((state) => state.changeAttributesProficiency);
	const proficiency = useAppStore((state) => state.player.proficiency);

	const calculated = useMemo(() => (checked ? calculateProficiency(value, proficiency) : calculateValue(value)), [value, checked, proficiency]);
	const label = useMemo(() => t(name), [name, t]);

	const toggleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		changeAttributesProficiency(name, checked);
	};

	return (
		<div className="flex gap-2 mt-2 items-center">
			<input type="checkbox" name={name} id={name} onChange={toggleChecked} className="rounded-full" checked={checked} />
			<label htmlFor={name} className="text-sm border-b-2  w-6 flex justify-center">
				{calculated}
			</label>
			<label className="text-xs">{label}</label>
		</div>
	);
}
