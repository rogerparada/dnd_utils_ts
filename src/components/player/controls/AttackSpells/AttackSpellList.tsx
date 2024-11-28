"use client";

import { useTranslations } from "next-intl";
import AddAttackSpell from "./AddAttackSpell";
import { useAppStore } from "@/src/store/useAppStore";
import EditAttackSpell from "./EditAttackSpell";
import { useState } from "react";

export default function AttackSpellList() {
	const t = useTranslations("player");

	const items = useAppStore((state) => state.attackSpellsThrows);

	const [addItem, setAddItem] = useState(false);

	return (
		<div className="border-black border-2 bg-white mt-3 rounded-lg min-h-80 relative px-3 py-6 overflow-auto">
			<div className="flex justify-start flex-row w-full gap-4 text-xs uppercase font-black mb-2">
				<div className="w-6/12 ml-3">
					<span className="">{t("Name")}</span>
				</div>
				<div className="w-2/12">
					<span className="">{t("Bonus").substring(0, 5)}.</span>
				</div>
				<div className="w-4/12">
					<span className="">{t("DamageType")}</span>
				</div>
				<span className="w-2/12"></span>
			</div>
			<div className="flex flex-col gap-1 pb-5">
				{items.map((item) => (
					<EditAttackSpell key={item.id} item={item} />
				))}
				{!addItem && (
					<div className="flex w-full">
						<span className="flex-1"></span>
						<button
							className="w-8 h-8 border-black text-sm p-1 text-white bg-black flex items-center justify-center rounded-lg"
							onClick={() => setAddItem(true)}
						>
							<span className="icon-[topcoat--plus]" />
						</button>
					</div>
				)}
				{addItem && <AddAttackSpell success={setAddItem} />}
			</div>
			<div className="flex flex-col absolute bottom-1 left-0 text-center mt-2 w-full justify-center bg-white h-8">
				<span className="uppercase text-xs font-black">{t("AttacksSpellCastings")}</span>
			</div>
		</div>
	);
}
