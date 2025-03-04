import React from "react";
import SimpleTextbox from "./controls/SimpleTextbox";
import LevelCalculator from "./controls/LevelCalculator";
import SelectorPlayer from "./controls/SelectorPlayer";
import { alignment, background, classes, races } from "@/src/Global";
import { Player } from "@/src/types/Player";
import { useTranslations } from "next-intl";
import ExperienceInput from "./controls/ExperienceInput";

type PlayerHeaderProps = {
	player: Player;
	username?: string;
};

export default function PlayerHeader({ player, username }: PlayerHeaderProps) {
	const t = useTranslations("player");
	return (
		<>
			<div id="playerName" className="playerName p-5 md:w-1/3 w-full">
				<SimpleTextbox name="name" label={t("CharacterName")} value={player?.name} />
				<LevelCalculator />
			</div>
			<div id="character" className="border-solid border-2 border-black p-5 w-full md:w-2/3 grid md:grid-cols-3 rounded-lg gap-3">
				<div className="">
					<SelectorPlayer items={classes} label={t("Class")} name="className" value={player?.className} />
					<SelectorPlayer items={races} label={t("Race")} name="race" value={player?.race} />
				</div>
				<div className="">
					<SelectorPlayer items={background} label={t("Background")} name="background" value={player?.background} />
					<SelectorPlayer items={alignment} label={t("Alignment")} name="alignment" value={player?.alignment} />
				</div>

				<div className="w-full">
					<SimpleTextbox name="realName" label={t("PlayerName")} value={username ?? ""} />
					<ExperienceInput name="Experience" label={t("ExpPoints")} value={player?.experience} />
				</div>
			</div>
		</>
	);
}
