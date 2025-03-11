"use client";

import { Spell } from "@prisma/client";

type SpellsSelectorProps = {
	spells?: {
		level: number;
		items: { id: Spell["id"]; name: Spell["name"] }[];
	}[];
};

function formatName(name: string) {
	const newName = (s: string): string => `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`;

	const regex = /(.*)\(ritual\)(.*)/;
	const match = name.toLocaleLowerCase().match(regex);
	if (!match) return <span>{newName(name)}</span>;
	return (
		<>
			{newName(match[1])}
			<div className="z-10 absolute top-0 right-0 bg-white flex items-center justify-center rounded-bl-lg rounded-tr-md border w-6 h-6 text-2xl border-b-slate-700 border-l-slate-700">
				<span className="icon-[game-icons--pentacle]" />
			</div>
		</>
	);
}

export default function PlayerSpellsSelector({ spells }: SpellsSelectorProps) {
	return (
		<div className="w-full flex flex-col min-h-32 border border-1 border-black rounded-md gap-2">
			{spells &&
				spells.map((spell, index) => (
					<div className="p-3" key={index}>
						<span>{spell.level === 0 ? "Trucos" : `Nivel ${spell.level}`}</span>
						<div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
							{spell.items.map((item) => (
								<div className="flex gap-3 items-center border border-slate-700 p-3 rounded-lg relative text-sm" key={item.name}>
									<input type="checkbox" name="" id="" />
									{formatName(item.name)}
								</div>
							))}
						</div>
					</div>
				))}
		</div>
	);
}
