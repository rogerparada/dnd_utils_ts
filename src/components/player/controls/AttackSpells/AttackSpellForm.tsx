import { AttackSpell } from "@/src/schema/AttackSpellSchema";

type AttackSpellFormProps = {
	item?: AttackSpell;
	disabled?: boolean;
};

export default function AttackSpellForm({ item, disabled = false }: AttackSpellFormProps) {
	return (
		<>
			<div className="w-6/12">
				<input type="text" name="name" className="w-full text-xs disabled:border-0" defaultValue={item?.name} disabled={disabled} />
			</div>
			<div className="w-2/12">
				<input type="text" name="bonus" className="w-full text-xs disabled:border-0" defaultValue={item?.bonus} disabled={disabled} />
			</div>
			<div className="w-4/12">
				<input type="text" name="damage" className="w-full text-xs disabled:border-0" defaultValue={item?.damage} disabled={disabled} />
			</div>
		</>
	);
}
