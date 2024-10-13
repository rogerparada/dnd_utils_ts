import { Spell } from "@prisma/client";
import React from "react";

type ModifiersProps = {
	spell: Spell;
};

export default function Modifiers({ spell }: ModifiersProps) {
	return (
		<div id="modificadores" className="flex text-xs gap-2 pl-2 font-light">
			<div className="italic font-bold">{spell.school}</div>
			<div className="font-bold">{spell.components}</div>
			{spell.concentration && <div className="text-lg leading-3">{spell.concentration && <span className="icon-[lucide--focus]" />}</div>}
			<div> {spell.range}</div>
			<div> {spell.duration}</div>
		</div>
	);
}
