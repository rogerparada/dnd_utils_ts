import { Spell } from "@prisma/client";
import React from "react";

type CastingProps = {
	type: Spell["casting"];
};

const castingType: { [key: string]: string } = {
	"1 acción": "icon-[ph--circle-fill] text-green-500 border border-white",
	"1 acción adicional": "icon-[mdi--triangle] text-yellow-500 border border-white",
	"1 reacción": "icon-[material-symbols--square] text-red-500 border border-white",
};

export default function Casting({ type }: CastingProps) {
	if (type.includes("hora") || type.includes("minutos") || type.includes("minuto")) {
		return (
			<div className="flex gap-1 items-center">
				<span className="icon-[mdi--clock-time-eight-outline]" />
				<span className="font-thin">{type}</span>
			</div>
		);
	}

	if (castingType[type]) {
		return (
			<div className="space-x-2">
				<span className={castingType[type]} />
				<span>{type}</span>
			</div>
		);
	}

	return <span>{type}</span>;
}
