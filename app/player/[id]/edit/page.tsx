import PlayerSheet from "@/src/components/player/PlayerSheet";
import { prisma } from "@/src/lib/prisma";
import { Player } from "@/src/types/Player";
import React from "react";

async function getPlayerData(id: string) {
	return prisma.player.findUnique({ where: { id } });
}

export default async function editPlayerPage({ params }: { params: { id: string } }) {
	const player = await getPlayerData(params.id);

	if (!player) return <div>Not valid data</div>;

	const newPlayer: Player = {
		name: player.name,
		realName: player.name,
		level: player.level,
		playerClass: player.className,
		race: player.race,
		alignment: player.alignment,
		background: player.background,
		experiencePoints: player.experience,
	};

	return (
		<div>
			<PlayerSheet newPlayer={newPlayer} />
		</div>
	);
}
