import React from "react";
import ShieldBox from "./Shields/ShieldBox";
import SquareShieldBox from "./Shields/SquareShieldBox";
import MessageBox from "../ui/MessageBox";
import { useTranslations } from "next-intl";
import MultipleBox from "./controls/MultipleBox";
import HitDices from "./controls/HitDices";
import SavingThrows from "./controls/SavingThrows";
import AttackSpellList from "./controls/AttackSpells/AttackSpellList";
import PlatesBox from "./controls/Plates/PlatesBox";

type PLayerEquipmentProps = {
	dexterity: number;
	speed: number;
	special?: boolean;
};

export default function PLayerEquipment({ dexterity, speed, special = false }: PLayerEquipmentProps) {
	const message = useTranslations("message");
	const t = useTranslations("player");

	return (
		<>
			<div className="bg-gray-300 w-full rounded-xl p-3 flex flex-col md:gap-3">
				<div className="flex justify-center gap-3">
					<ShieldBox name={t("AC")} />
					<SquareShieldBox name={t("Initiative")} value={dexterity} ability />
					<SquareShieldBox name={t("Speed")} value={speed} special={special} />
				</div>
				{special && (
					<MessageBox>
						<sup>*</sup>
						{message("SpeedSpecial")}
					</MessageBox>
				)}
				<MultipleBox name="puntos" labels={[t("HP"), t("THP")]} />
				<div className="hits w-full border-2 flex gap-4">
					<HitDices />
					<SavingThrows pass={0} fails={0} />
				</div>
			</div>

			<AttackSpellList />
			<PlatesBox name="mne" label={t("MoneyEquipment")} />
		</>
	);
}
