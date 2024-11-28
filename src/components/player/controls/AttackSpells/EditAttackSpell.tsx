"use client";

import { AttackSpell, AttackSpellSchema } from "@/src/schema/AttackSpellSchema";
import AttackSpellForm from "./AttackSpellForm";
import { useAppStore } from "@/src/store/useAppStore";
import { useState } from "react";

type EditAttackSpellProps = {
	item: AttackSpell;
};

export default function EditAttackSpell({ item }: EditAttackSpellProps) {
	const deleteAttackOrSpell = useAppStore((state) => state.deleteAttackOrSpell);
	const updateAttackOrSpell = useAppStore((state) => state.updateAttackOrSpell);

	const [editMode, setEditMode] = useState(false);

	const handleSubmit = (formData: FormData) => {
		const data = {
			id: item.id,
			name: formData.get("name"),
			bonus: formData.get("bonus"),
			damage: formData.get("damage"),
		};

		const result = AttackSpellSchema.safeParse(data);

		if (result.success) {
			updateAttackOrSpell(result.data);
			setEditMode(false);
			return;
		}
		console.log(result.error);
	};

	return (
		<form action={handleSubmit} className="flex h-10 gap-2">
			<AttackSpellForm item={item} disabled={!editMode} />
			<div className="flex h-10 gap-2 items-center w-2/12">
				{!editMode && (
					<button
						className="w-8 h-8 border-black text-sm p-1 text-white bg-black flex items-center justify-center rounded-lg"
						onClick={() => setEditMode(true)}
					>
						<span className="icon-[ci--edit]" />
					</button>
				)}
				{editMode && (
					<button type="submit" className="w-8 h-8 border-black text-sm p-1 text-white bg-black flex items-center justify-center rounded-lg">
						<span className="icon-[material-symbols--save]" />
					</button>
				)}

				<button
					className="w-8 h-8 border-black text-sm p-1 text-white bg-black flex items-center justify-center rounded-lg"
					onClick={() => deleteAttackOrSpell(item.id)}
				>
					<span className="icon-[material-symbols--delete]" />
				</button>
			</div>
		</form>
	);
}
