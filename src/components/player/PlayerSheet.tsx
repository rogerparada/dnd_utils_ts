import AttributeBox from "./controls/AttributeBox";
import Characteristics from "./controls/Characteristics";
import DescriptionBox from "./controls/Boxes/DescriptionBox";
import EnchantsWeapon from "./controls/EnchantsWeapon";
import ExperienceInput from "./controls/ExperienceInput";
import HitDices from "./controls/HitDices";
import LevelCalculator from "./controls/LevelCalculator";
import MultipleBox from "./controls/MultipleBox";
import PassivePerceptionBox from "./controls/PassivePerceptionBox";
import PlatesBox from "./controls/Plates/PlatesBox";
import RoundAttributeBox from "./controls/RoundAttributeBox";
import SalvationBox from "./controls/Boxes/SalvationBox";
import Salvations from "./controls/Salvations";
import SelectorPlayer from "./controls/SelectorPlayer";
import ShieldBox from "./Shields/ShieldBox";
import SimpleTextbox from "./controls/SimpleTextbox";
import SkillsBox from "./controls/Boxes/SkillsBox";
import SquareShieldBox from "./Shields/SquareShieldBox";

import { useTranslations } from "next-intl";
import { useAppStore } from "@/src/store/useAppStore";
import { alignment, classes, races, background } from "@/src/Global";

export default function PlayerSheet() {
	const t = useTranslations("player");

	const player = useAppStore((state) => state.player);
	const proficiency = useAppStore((state) => state.proficiency);
	const dexterity = useAppStore((state) => state.attributes.Dexterity);

	return (
		<>
			<div id="header" className="my-5 md:flex w-full border-black border-2 rounded-lg gap-2 p-3 bg-white">
				<div id="playerName" className="playerName p-5 md:w-1/3 w-full">
					<SimpleTextbox name="name" label={t("CharacterName")} value={player.name} />
					<LevelCalculator />
				</div>
				<div id="character" className="border-solid border-2 border-black p-5 w-full md:w-2/3 grid md:grid-cols-3 rounded-lg gap-3">
					<div className="">
						<SelectorPlayer items={classes} label={t("Class")} name="playerClass" value={player.playerClass} />
						<SelectorPlayer items={races} label={t("Race")} name="race" value={player.race} />
					</div>
					<div className="">
						<SelectorPlayer items={background} label={t("Background")} name="background" value={player.background} />
						<SelectorPlayer items={alignment} label={t("Alignment")} name="alignment" value={player.alignment} />
					</div>

					<div className="w-full">
						<SimpleTextbox name="realName" label={t("PlayerName")} value={player.realName} />
						<ExperienceInput name="Experience" label={t("ExpPoints")} value={player.experiencePoints} />
					</div>
				</div>
			</div>
			<div
				id="columnas"
				className="grid md:grid-cols-2 xl:grid-cols-3 border-black w-full border-2 my-5 rounded-lg min-h-96 md:gap-8 xl:gap-5 p-5 bg-white"
			>
				<div id="col1" className="w-full">
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
				</div>
				<div id="col2" className="">
					<div className="bg-gray-300 w-full rounded-xl p-3 flex flex-col md:gap-3">
						<div className="flex justify-center gap-3">
							<ShieldBox name={t("AC")} />
							<SquareShieldBox name={t("Initiative")} value={dexterity.value} />
							<SquareShieldBox name={t("Speed")} />
						</div>
						<MultipleBox name="puntos" labels={[t("HP"), t("THP")]} />
						<div className="hits w-full border-2 flex gap-4">
							<HitDices />
							<Salvations pass={0} fails={0} />
						</div>
					</div>

					<EnchantsWeapon />
					<PlatesBox name="mne" label={t("MoneyEquipment")} />
				</div>
				<div id="col3" className="flex flex-col">
					<div className="bg-gray-300 w-full p-5 rounded-xl">
						<MultipleBox name="puntos" labels={[t("PersonalityTraits"), t("Ideals"), t("Bonds"), t("Flaws")]} />
					</div>
					<DescriptionBox name="rya" label={t("TraitsAttributes")} max />
				</div>
			</div>
		</>
	);
}
