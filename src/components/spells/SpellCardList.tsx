import { Spell } from "@prisma/client";
import SpellDescription from "./SpellDescription";
import Modifiers from "./Modifiers";
import Casting from "./Casting";
import { colors } from "@/src/Global";

type SpellCardListProps = {
	className: string;
	spells: Spell[];
};

export default async function SpellCardList({ className, spells }: SpellCardListProps) {
	const color = colors[className];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-black">
			{spells.map((spell) => {
				const description = spell.material ? "**Requiere:** " + spell.material + ". \n \n  " + spell.description : spell.description;

				return (
					<div className={`${color.bg} w-auto flex flex-col gap-2 p-3 relative h-[34rem]`} key={spell.id}>
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
								{className}&nbsp;
								{/* TODO: Admin Button */}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
