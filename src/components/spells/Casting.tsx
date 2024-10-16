import { Spell } from "@prisma/client";
import React from "react";

type CastingProps = {
	type: Spell["casting"];
};

export default function Casting({ type }: CastingProps) {
	if (type === "1 acción") {
		return (
			<div className="space-x-2">
				<span className="icon-[ph--circle-fill] text-green-500 border border-white" />
				<span>{type}</span>
			</div>
		);
	}

	if (type === "1 acción adicional") {
		return (
			<div className="space-x-2">
				<span className="icon-[mdi--triangle] text-yellow-500 border border-white" />
				<span>{type}</span>
			</div>
		);
	}
	if (type === "1 reacción") {
		return (
			<div className="space-x-2">
				<span className="icon-[material-symbols--square] text-red-500 border border-white" />
				<span>{type}</span>
			</div>
		);
	}

	if (type.includes("hora") || type.includes("minutos") || type.includes("minuto")) {
		return (
			<div className="flex gap-1 items-center">
				<span className="icon-[mdi--clock-time-eight-outline]" />
				<span className="font-thin">{type}</span>
			</div>
		);
	}

	return <span>{type}</span>;
}
