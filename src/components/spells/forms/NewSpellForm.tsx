"use client";

import { createSpell } from "@/actions/spells/create-spell-action";
import { createSpellClasses } from "@/actions/spells/create-spellClasses-action";
import { useRouter } from "next/navigation";

export default function NewSpellForm({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	const handleSubmit = async (formData: FormData) => {
		const data = {
			name: formData.get("name"),
			level: formData.get("level"),
			casting: formData.get("casting"),
			range: formData.get("range"),
			duration: formData.get("duration"),
			concentration: formData.get("concentration") || false,
			description: formData.get("description"),
			components: formData.get("component"),
			school: formData.get("school"),
			material: formData.get("materials"),
		};
		const classes = formData.get("clases")?.toString();
		const response = await createSpell(data);
		if (response?.errors) {
			console.log(response.errors);
			return;
		}
		await createSpellClasses(response.id, classes!);
		router.push("/admin/spells");
	};

	return (
		<div className="bg-white md:mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
			<form action={handleSubmit} className="space-y-4">
				{children}
				<input
					type="submit"
					value="Guardar cambios"
					className="bg-blue-400 hover:bg-blue-500 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
				/>
			</form>
		</div>
	);
}
