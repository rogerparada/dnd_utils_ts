import { useMemo } from "react";
import { calculateValue } from "@/src/utils";

type ListBoxItemProps = {
	name: string;
	value: number;
	dependence: string;
};

export default function ListBoxItem({ name, value, dependence }: ListBoxItemProps) {
	const calculated = useMemo(() => calculateValue(value), [value]);

	return (
		<div className="flex gap-2 mt-2 items-center w-full relative">
			<input type="checkbox" name={name} id={name} onChange={() => {}} className="rounded-full" />
			<label htmlFor={name} className="text-sm border-b-2  w-6 flex justify-center">
				{calculated}
			</label>
			<label htmlFor={name} className="text-xs">
				{name} <i className="text-gray-600">{`(${dependence.substring(0, 3)})`}</i>
			</label>
		</div>
	);
}
