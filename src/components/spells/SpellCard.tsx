import { Spell } from "@prisma/client";
import { Color } from "@/src/types";
import SpellDescription from "./SpellDescription";
import Modifiers from "./Modifiers";
import Casting from "./Casting";

type Props = {
	spell: Spell;
	color: Color;
	name: string;
};

export default function SpellCard({ name, spell, color }: Props) {
	const description = spell.material ? "**Requiere:** " + spell.material + ". \n \n  " + spell.description : spell.description;

	return (
		<div className={`${color.bg} w-auto flex flex-col gap-2 p-3 relative h-[32rem]`} key={spell.id}>
			<div className={`w-10 h-10 z-10 absolute top-0 left-0 bg-white flex items-center rounded-br-2xl border ${color.border}`}>
				<span className={`w-full text-center text-xl font-black ${color.text}`}>{spell.level}</span>
			</div>
			<div className="w-full bg-white flex-1 overflow-hidden">
				<div className="uppercase pt-2 pl-10 pr-2 font-bold text-sm">{spell.name}</div>
				<hr className="my-2" />
				<Modifiers spell={spell} />
				<hr className="my-2" />
				<SpellDescription description={description} />
			</div>
			<div className="text-xs text-white grid grid-cols-2 px-2 w-full items-center">
				<div className="">
					<Casting type={spell.casting} />
				</div>

				<div className="text-right">
					{name}&nbsp;
					{/* TODO: Admin Button */}
				</div>
			</div>
		</div>
	);
}
