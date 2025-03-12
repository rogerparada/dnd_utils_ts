"use client";

import { Spell } from "@prisma/client";
import PlayerSpellItem from "./PlayerSpellItem";
import { useAppStore } from "@/src/store/useAppStore";

type SpellsSelectorProps = {
	spells?: {
		level: number;
		items: { id: Spell["id"]; name: Spell["name"] }[];
	}[];
};

export default function PlayerSpellsSelector({ spells }: SpellsSelectorProps) {
	const clear = useAppStore((state) => state.clearSpells);
	return (
		<div className="w-full flex flex-col min-h-32 border border-1 border-black rounded-md p-3">
			<button onClick={() => clear()}>Clear</button>
			{spells &&
				spells.map((spell, index) => (
					<details className="group mb-2" key={index}>
						<summary className="cursor-pointer font-bold pl-6 relative flex items-center list-none appearance-none">
							<span className="icon-[uiw--plus-square-o] absolute left-0 transition-transform group-open:hidden" />
							<span className="icon-[uiw--minus-square-o] absolute left-0 transition-transform hidden group-open:inline" />
							{spell.level === 0 ? "Trucos" : `Nivel ${spell.level}`}
						</summary>
						<div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
							{spell.items.map((item) => (
								<PlayerSpellItem {...item} key={item.id} />
							))}
						</div>
					</details>
				))}
		</div>
	);
}
