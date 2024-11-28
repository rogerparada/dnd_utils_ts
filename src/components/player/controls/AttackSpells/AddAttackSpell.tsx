import { useAppStore } from "@/src/store/useAppStore";

import { PartialAttackSpellSchema } from "@/src/schema/AttackSpellSchema";
import AttackSpellForm from "./AttackSpellForm";

type Props = {
	success: (value: boolean) => void;
};

export default function AddAttackSpell({ success }: Props) {
	const addAttackOrSpell = useAppStore((state) => state.addAttackOrSpell);

	const handleSubmit = (formData: FormData) => {
		const data = {
			name: formData.get("name"),
			bonus: formData.get("bonus"),
			damage: formData.get("damage"),
		};

		const result = PartialAttackSpellSchema.safeParse(data);

		if (result.success) {
			addAttackOrSpell(result.data);
		}

		success(false);
	};

	return (
		<form action={handleSubmit} className="flex h-10 gap-1 items-center">
			<AttackSpellForm />
			<div className="flex h-10 gap-2 items-center w-2/12">
				<button type="submit" className="w-8 h-8 border-black text-sm p-1 text-white bg-black flex items-center justify-center rounded-lg">
					<span className="icon-[topcoat--plus]" />
				</button>
				<button type="reset" className="w-8 h-8 border-black text-sm p-1 text-white bg-black flex items-center justify-center rounded-lg">
					<span className="icon-[material-symbols--delete]" />
				</button>
			</div>
		</form>
	);
}
