"use client";
import { useAppStore } from "@/src/store/useAppStore";

import { useEffect, useMemo } from "react";
import { calculateSpeed, speedSpecialModifier } from "@/src/utils";
import PlayerHeader from "./PlayerHeader";
import PlayerCharacteristics from "./PlayerCharacteristics";
import PLayerEquipment from "./PLayerEquipment";
import PlayerTraits from "./PlayerTraits";
import { FullPlayer, UserInfo } from "@/src/types";

type PlayerSheetProps = {
	newPlayer?: FullPlayer;
	userInfo: UserInfo;
};

export default function PlayerSheet({ newPlayer, userInfo }: PlayerSheetProps) {
	const player = useAppStore((state) => state.player);
	const setPlayer = useAppStore((state) => state.setPlayer);
	const proficiency = useAppStore((state) => state.player.proficiency);
	const dexterity = useAppStore((state) => state.player.attributes.Dexterity.value);

	const speed = useMemo(() => calculateSpeed(player.race), [player.race]);
	const special = useMemo(() => speedSpecialModifier(player.className), [player.className]);

	useEffect(() => {
		if (newPlayer) {
			setPlayer(newPlayer);
			console.log(newPlayer);
		}
	}, [newPlayer, setPlayer]);
	if (player) {
		return (
			<>
				<div id="header" className="my-5 md:flex w-full border-black text-black border-2 rounded-lg gap-2 p-3 bg-white">
					<PlayerHeader player={player} username={userInfo.username} />
				</div>
				<div
					id="columnas"
					className="grid md:grid-cols-2 xl:grid-cols-3 border-black w-full border-2 my-5 rounded-lg min-h-96 md:gap-8 xl:gap-5 p-5 bg-white text-black"
				>
					<div id="col1" className="w-full">
						<PlayerCharacteristics proficiency={proficiency} />
					</div>
					<div id="col2" className="">
						<PLayerEquipment dexterity={dexterity} speed={speed} special={special} />
					</div>
					<div id="col3" className="flex flex-col">
						<PlayerTraits />
					</div>
				</div>
			</>
		);
	}
}
