import { useAppStore } from "@/src/store/useAppStore";
import { Spell } from "@prisma/client";
import React from "react";

type PlayerSpellItemProps = {
	name: string;
	id: Spell["id"];
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

export default function PlayerSpellItem({ name, id }: PlayerSpellItemProps) {
	const addSpell = useAppStore((state) => state.addSpell);
	const removeSpell = useAppStore((state) => state.removeSpell);
	const spells = useAppStore((state) => state.spells);

	const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		if (checked) addSpell(id);
		else removeSpell(id);
	};
	return (
		<div className="flex gap-3 items-center border border-slate-700 p-3 rounded-lg relative text-sm" key={name}>
			<input type="checkbox" checked={spells.includes(id)} onChange={handleCheckedChange} />
			{formatName(name)}
		</div>
	);
}
