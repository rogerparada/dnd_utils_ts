"use client";
import { Classes, SpellClass } from "@prisma/client";
import { useEffect, useState } from "react";

type MultiClassSelectorProps = {
	classes: Pick<Classes, "id" | "name" | "lang_es">[];
	selected?: SpellClass[];
};

type ClassCheckbox = {
	[key: string]: boolean;
};

export default function MultiClassSelector({ classes, selected }: MultiClassSelectorProps) {
	const [clases, setClases] = useState<number[]>([]);
	const [checkboxes, setCheckboxes] = useState<ClassCheckbox>({ Druid: false });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = +e.target.name;
		const key = e.target.id;
		const value = e.target.checked;
		setCheckboxes({ ...checkboxes, [key]: value });

		if (!value) {
			setClases(clases.filter((id) => id !== name).sort((a, b) => a - b));
			return;
		}
		setClases([...clases, name].sort((a, b) => a - b));
	};

	useEffect(() => {
		const newCheckboxes = classes.reduce((collection, clase) => {
			const value = selected?.find((c) => clase.id === c.classId);
			const active = !!value;
			return { ...collection, [clase.name]: active };
		}, {});

		if (selected) {
			setClases(selected.map((c) => c.classId));
		}

		setCheckboxes(newCheckboxes);
	}, [classes, selected]);

	return (
		<div className="grid grid-cols-5 items-center">
			<label htmlFor="concentration" className="col-span-2 md:col-span-1 font-bold">
				Clases:
			</label>
			<div className="border border-slate-600 w-full col-span-4 p-5 rounded-lg grid grid-cols-3 text-sm">
				{classes.map((clase) => (
					<div className="space-x-2" key={`class-${clase.id}`}>
						<input type="checkbox" name={"" + clase.id} id={clase.name} onChange={handleChange} checked={checkboxes[clase.name] || false} />
						<span>{clase.lang_es}</span>
					</div>
				))}
				<input type="hidden" name="clases" value={clases.join(",")} />
			</div>
		</div>
	);
}
