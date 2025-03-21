"use client";
import { useTranslations } from "next-intl";
import { useAppStore } from "@/src/store/useAppStore";
import { ItemSelect } from "@/src/types/Player";
import { ChangeEvent } from "react";

interface SelectorProps {
	name: string;
	items: ItemSelect[];
	label: string;
	value: string;
}

export default function SelectorPlayer({ items, label, name, value }: SelectorProps) {
	const common = useTranslations("common");
	const t = useTranslations(name);
	const changeDescription = useAppStore((state) => state.changeDescription);

	const handleSelectionChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		const { value, name } = event.target;
		changeDescription(name, value);
	};

	return (
		<div className="w-full mb-2">
			<select name={name} id={name} className="w-full text-sm" onChange={handleSelectionChange} value={value}>
				<option value="">{common("Select")}</option>
				{items &&
					items.map((item) => {
						if (item.sub && item.sub?.length > 0) {
							return (
								<optgroup label={t(item.name)} key={item.name}>
									{item.sub.map((si) => {
										return (
											<option value={si.name} key={si.name}>
												{t(si.name)}
											</option>
										);
									})}
								</optgroup>
							);
						}
						return (
							<option value={item.name} key={item.name}>
								{t(item.name)}
							</option>
						);
					})}
			</select>

			<label className="text-xs ml-2 font-bold">{label}</label>
		</div>
	);
}
