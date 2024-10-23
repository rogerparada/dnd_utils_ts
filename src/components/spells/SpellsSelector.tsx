"use client";
import { Classes } from "@prisma/client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type SpellsSelectorProps = {
	clases?: Pick<Classes, "name" | "lang_es">[];
};

export default function SpellsSelector({ clases }: SpellsSelectorProps) {
	const params = useParams();
	const searchParams = useSearchParams();
	const router = useRouter();

	const [values, setValues] = useState({ clase: "", level: "0", items: "10" });

	const levels = Array.from({ length: 10 }, (_, i) => i);

	useEffect(() => {
		if (typeof params.name === "string") {
			const clase = params.name;
			const level = searchParams.get("level") || "";
			const items = searchParams.get("items") || "10";
			setValues({ clase, level, items });
		}
	}, [params, searchParams]);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const name = event.target.name;
		const newValues = {
			...values,
			[name]: event.target.value,
		};
		const route =
			(newValues.level ? `/classes/${newValues.clase}?level=${newValues.level}` : `${newValues.clase}`) +
			(+newValues.items > 10 ? `${newValues.level ? "&" : "?"}items=${newValues.items}` : "");

		router.push(route);
	};

	return (
		<div className="my-5 flex flex-col lg:flex-row gap-4 md:items-center">
			<label htmlFor="clase" className="font-black">
				Clase:
			</label>
			<select name="clase" onChange={handleChange} value={values.clase}>
				{clases?.map((clase, index) => (
					<option key={`class-${index}`} value={clase.name}>
						{clase.lang_es}
					</option>
				))}
			</select>

			<label htmlFor="level" className="font-black">
				Nivel:
			</label>
			<select name="level" onChange={handleChange} value={values.level}>
				<option value="">-- Selecciona uno --</option>
				{levels.map((level) => (
					<option key={`level-${level}`} value={level}>
						{level > 0 ? level : `${level} - Trucos`}
					</option>
				))}
			</select>
			<label htmlFor="items" className="font-black">
				Hechizos por pagina:
			</label>
			<select name="items" onChange={handleChange} value={values.items}>
				<option value={10}>10</option>
				<option value={20}>20</option>
				<option value={50}>50</option>
			</select>
		</div>
	);
}
