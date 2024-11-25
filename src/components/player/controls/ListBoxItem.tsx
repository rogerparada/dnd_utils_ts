import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { calculateValue } from "@/src/utils";

type ListBoxItemProps = {
	name: string;
	label: string;
	value: number;
};

export default function ListBoxItem({ name, value }: ListBoxItemProps) {
	const calculated = useMemo(() => calculateValue(value), [value]);
	const { t } = useTranslation("common");
	return (
		<div className="flex gap-2 mt-2 items-center">
			<input type="checkbox" name={name} id={name} onChange={() => {}} className="rounded-full" />
			<label htmlFor={name} className="text-sm border-b-2  w-6 flex justify-center">
				{calculated}
			</label>
			<label htmlFor={name} className="text-xs">
				{t(name)}
			</label>
		</div>
	);
}
