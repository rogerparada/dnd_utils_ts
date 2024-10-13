import { Spell } from "@prisma/client";
import React from "react";

type CastingProps = {
	type: Spell["casting"];
};

export default function Casting({ type }: CastingProps) {
	if (type === "1 acción") {
		return <span className="icon-[ph--circle-fill] text-green-500 border border-white"></span>;
	}

	if (type === "1 acción adicional") {
		return <span className="icon-[mdi--triangle] text-yellow-500 border border-white"></span>;
	}
	if (type === "1 reacción") {
		return <span className="icon-[material-symbols--square] text-red-500 border border-white" />;
	}

	if (type.includes("hora") || type.includes("minutos") || type.includes("minuto")) {
		return (
			<div className="flex gap-1 items-center">
				<span className="icon-[mdi--clock-time-eight-outline]" />
				<span className="font-thin">{type}</span>
			</div>
		);
	}

	return <span className="absolute bottom-0 left-2">{type}</span>;
}
