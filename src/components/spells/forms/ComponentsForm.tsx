"use client";

import { Spell } from "@prisma/client";
import { useEffect, useState } from "react";

type ComponentsFormProps = {
	components?: Spell["components"];
	material?: Spell["material"];
};

type CheckBoxes = {
	verbal: boolean;
	somatic: boolean;
	material: boolean;
};

export default function ComponentsForm({ components, material }: ComponentsFormProps) {
	const [checkboxes, setCheckboxes] = useState<CheckBoxes>({ verbal: false, somatic: false, material: false });
	const [component, setComponent] = useState(components);

	const checkComponents = (checkboxes: CheckBoxes) => {
		const { verbal, somatic, material } = checkboxes;
		const text = `${verbal ? "V," : ""}${somatic ? "S," : ""}${material ? "M" : ""}`;
		return text[text.length - 1] === "," ? text.slice(0, text.length - 1) : text;
	};

	const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
		const key = event.target.name;
		const newCheckboxes = {
			...checkboxes,
			[key]: event.target.checked,
		};

		setComponent(checkComponents(newCheckboxes));
		setCheckboxes(newCheckboxes);
	};

	useEffect(() => {
		if (components) {
			let verbal = false;
			let somatic = false;
			let material = false;
			const str = components.split(",");
			str.forEach((s) => {
				if (s === "V") verbal = true;
				else if (s === "S") somatic = true;
				else if (s === "M") material = true;
			});
			setCheckboxes({ verbal, somatic, material });
		}
	}, [components]);

	return (
		<div className="grid grid-cols-5 items-baseline my-3">
			<label className="col-span-2 md:col-span-1 font-bold">Componente:</label>
			<div className="flex gap-3 mt-3 md:mt-0 md:items-center flex-col md:flex-row">
				<div className="flex gap-3 text-sm items-center font-bold">
					<label htmlFor="verbal">V</label>
					<input type="checkbox" name="verbal" checked={checkboxes.verbal} onChange={handleChecked} />
					<label htmlFor="somatic">S</label>
					<input type="checkbox" name="somatic" checked={checkboxes.somatic} onChange={handleChecked} />
					<label htmlFor="material">M</label>
					<input type="checkbox" name="material" checked={checkboxes.material} onChange={handleChecked} />
				</div>
			</div>
			<div className="col-span-5 md:col-span-3 mt-3 md:mt-0">
				<div className={`w-full ${!checkboxes.material && "hidden"}`}>
					<input type="text" name="materials" className="w-full text-sm" defaultValue={material} />
				</div>
				<input type="hidden" name="component" value={component} />
			</div>
		</div>
	);
}
