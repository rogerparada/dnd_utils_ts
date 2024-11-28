import Characteristics from "./controls/Characteristics";
import AttributeBox from "./controls/Boxes/AttributeBox";
import RoundAttributeBox from "./controls/RoundAttributeBox";
import SalvationBox from "./controls/Boxes/SalvationBox";
import SkillsBox from "./controls/Boxes/SkillsBox";
import PassivePerceptionBox from "./controls/PassivePerceptionBox";
import DescriptionBox from "./controls/Boxes/DescriptionBox";
import { useTranslations } from "next-intl";

type PlayerCharacteristicsProps = {
	proficiency: number;
};

export default function PlayerCharacteristics({ proficiency }: PlayerCharacteristicsProps) {
	const t = useTranslations("player");
	return (
		<>
			<div className="flex gap-3 flex-col xl:flex-row">
				<Characteristics />
				<div className="w-full ">
					<AttributeBox name="inspiración" label={t("Inspiration")} />
					<RoundAttributeBox name="bonus" label={t("ProficiencyBonus")} value={"+" + proficiency} />
					<SalvationBox name={t("SavingThrows")} />
					<SkillsBox name={t("Skills")} />
				</div>
			</div>
			<div className="w-full">
				<PassivePerceptionBox />
				<DescriptionBox name="oce" label={t("OtherProficienciesLanguages")} big />
			</div>
		</>
	);
}
