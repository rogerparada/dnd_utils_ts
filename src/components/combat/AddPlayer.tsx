"use client";

import { CharacterSchema } from "@/src/schema";
import { useAppStore } from "@/src/store/useAppStore";
import { nanoid } from "nanoid";

export default function AddPlayer() {
	const initiative = Array.from({ length: 20 }, (_, i) => i + 1);

	const addPlayer = useAppStore((state) => state.addPlayer);
	const handleSubmit = (formData: FormData) => {
		const data = {
			id: nanoid(),
			name: formData.get("name"),
			type: formData.get("type"),
			initiative: formData.get("initiative"),
		};

		const result = CharacterSchema.safeParse(data);
		if (!result.success) {
			console.log("Validation errors:", result.error.flatten().fieldErrors);
			return;
		}
		addPlayer({ ...result.data, id: nanoid() });
	};

	return (
		<form action={handleSubmit} className="space-y-5">
			<div className="">
				<label htmlFor="name" className="text-white">
					Nombre:
				</label>
				<input type="text" name="name" className="w-full" />
			</div>
			<div className="flex flex-col">
				<label htmlFor="type" className="text-white">
					Type:
				</label>
				<select name="type">
					<option value={"Player"}>Jugador</option>
					<option value={"Enemy"}>Enemigo</option>
					<option value={"Ally"}>Aliado</option>
					<option value={"Neutral"}>Neutral</option>
					<option value={"Boss"}>Boss</option>
				</select>
			</div>
			<div className="flex flex-col">
				<label htmlFor="initiative" className="text-white">
					Type:
				</label>
				<select name="initiative">
					{initiative.reverse().map((i) => (
						<option value={i} key={i}>
							{i}
						</option>
					))}
				</select>
			</div>
			<input type="submit" value="Añadir" className="w-full text-center bg-sky-500 p-2 font-bold text-white" />
		</form>
	);
}
