"use client";

import { spellCastingAbility } from "@/src/Global";
import { useAppStore } from "@/src/store/useAppStore";
import { calculateValue } from "@/src/utils";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

type SpellsHeaderProps = {
	className: string;
};

export default function SpellsHeader({ className }: SpellsHeaderProps) {
	const t = useTranslations("className");
	const tc = useTranslations("common");
	const attributes = useAppStore((state) => state.player.attributes);
	const proficiency = useAppStore((state) => state.player.proficiency);

	const spellCasting = spellCastingAbility[className];
	const modifiers = 8 + proficiency + Math.floor((attributes[spellCasting].value - 10) / 2);

	const bonus = proficiency + Math.floor((attributes[spellCasting].value - 10) / 2);

	return (
		<div className="w-full p-4 gap-2 flex flex-col md:flex-row">
			<div className="flex flex-col justify-start w-full md:w-1/3 pl-2">
				<input type="text" className="text-3xl font-bold border border-black text-black" readOnly value={t(className)} />
				<span className="text-sm mt-2 font-bold">Clase Lanzadora de conjuros</span>
				<div className="space-x-2 mt-5">
					<span className="text-sm font-bold">Lanzador Ritual</span>
					<input type="checkbox" name="" id="" disabled />
				</div>
			</div>
			<div className="border border-black flex flex-wrap p-2 flex-1 justify-center md:justify-around items-center gap-3">
				<div className="flex flex-col justify-center text-center p-2">
					<input
						type="text"
						readOnly
						className="mb-2 rounded-lg uppercase h-14 w-24 text-center text-3xl font-extrabold border-4 border-double"
						value={tc(spellCasting).substring(0, 3)}
					/>
					<span className="text-xs">Aptitud Mágica</span>
				</div>
				<div className="flex flex-col justify-center text-center p-2 overflow-hidden">
					<input
						type="text"
						readOnly
						className="mb-2 rounded-lg h-14 w-28 text-center text-3xl font-extrabold border-4 border-double"
						value={modifiers}
					/>
					<span className="text-xs">Tiradas de salvación</span>
				</div>
				<div className="flex flex-col justify-center text-center p-2">
					<input
						type="text"
						readOnly
						className="mb-2 rounded-lg h-14 w-24 text-center text-3xl font-extrabold border-4 border-double"
						value={`+${bonus}`}
					/>
					<span className="text-xs">Bonus</span>
				</div>
			</div>
		</div>
	);
}
