import { useAppStore } from "@/src/store/useAppStore";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const dices: { [key: string]: number } = {
	Barbarian: 12,
	Bard: 8,
	Warlock: 8,
	Cleric: 8,
	Druid: 8,
	Ranger: 10,
	Fighter: 10,
	Sorcerer: 6,
	Wizard: 6,
	Paladin: 10,
	Rogue: 8,
	Monk: 8,
};

export default function HitDices() {
	const t = useTranslations("player");
	const level = useAppStore((state) => state.player.level);
	const playerClass = useAppStore((state) => state.player.playerClass);

	const hitDice = useMemo(() => `${level}d${dices[playerClass] || 6}`, [level, playerClass]);

	return (
		<div className="bg-white border-2 border-gray-800 w-1/2 h-32 rounded-md p-2">
			<div className="flex items-center">
				<label className="text-xs">{t("Total")}</label>
				<input type="text" className="border-0 border-b-2 w-4/5 h-6" />
			</div>
			<input type="text" className="font-bolder text-3xl w-full text-center border-0 focus:border-0 mt-2" defaultValue={hitDice} />
			<div className="flex justify-center relative -bottom-1 text-center mt-2">
				<span className="uppercase text-xs font-bold">{t("HitDices")}</span>
			</div>
		</div>
	);
}
