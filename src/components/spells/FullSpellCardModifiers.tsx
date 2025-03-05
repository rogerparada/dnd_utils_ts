"use client";

import { useTranslations } from "next-intl";
import Casting from "./Casting";
import { FullSpell } from "@/src/types";

type Props = {
	spell: FullSpell;
};

export default function FullSpellCardModifiers({ spell }: Props) {
	const t = useTranslations("magicSchools");
	const m = useTranslations("modifiers");
	return (
		<div className="flex flex-col pl-5 text-xs lg:text-sm gap-2">
			<div>
				<b>{m("School")}: </b>
				{t(spell?.school)}
			</div>
			<div>
				<b>{m("Components")}: </b>
				{spell?.components}
				{spell?.material && <span className="italic"> ({spell?.material})</span>}
			</div>
			{spell?.concentration && (
				<div className="">
					<b>{m("Concentration")}: </b>
					<span className="icon-[lucide--focus]" />
				</div>
			)}
			<div className="flex flex-row gap-2">
				<b>{m("Casting")}: </b>
				<Casting type={spell?.casting} />
			</div>
			<div>
				<b>{m("Range")}: </b>
				{spell?.range}
			</div>
			<div>
				<b>{m("Duration")}: </b>
				{spell?.duration}
			</div>
			<div>
				<b>{m("SpellList")}: </b>
				{spell?.classes.map((clase) => clase.class.lang_es).join(", ")}
			</div>
		</div>
	);
}
