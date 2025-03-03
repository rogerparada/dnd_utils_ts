"use server";

import { prisma } from "@/src/lib/prisma";
import { Attributes, FullPlayer, Skills } from "@/src/types/Player";
import { verifyJWT } from "@/src/utils/jwt";
import { cookies } from "next/headers";

export async function createNewPlayer(player: FullPlayer) {
	const cookieStore = cookies();
	const cookieToken = cookieStore.get("auth_token")?.value;

	if (!cookieToken) return;

	const userToken = verifyJWT(cookieToken);

	if (userToken && typeof userToken === "object") {
		try {
			const { attributes, skills, ...newPlayer } = player;
			newPlayer.userId = userToken.id;
			const createdPlayer = await prisma.player.create({
				data: newPlayer,
			});
			console.log(createdPlayer);

			const playerId = createdPlayer.id;
			createAttributes(playerId, attributes);
			createSkills(playerId, skills);
		} catch (error) {
			console.log(error);
		}
	}
}

export async function createSkills(playerId: string, skills: Skills) {
	await prisma.playerSkills.create({
		data: {
			playerId,
			...skills,
		},
	});
	console.log(playerId, skills);
}

export async function createAttributes(playerId: string, attributes: Attributes) {
	await prisma.playerAttributes.create({
		data: {
			playerId,
			Strength: attributes.Strength.value,
			Dexterity: attributes.Dexterity.value,
			Constitution: attributes.Constitution.value,
			Intelligence: attributes.Intelligence.value,
			Wisdom: attributes.Wisdom.value,
			Charisma: attributes.Charisma.value,
			StrengthProficiency: attributes.Strength.proficiency,
			DexterityProficiency: attributes.Dexterity.proficiency,
			ConstitutionProficiency: attributes.Constitution.proficiency,
			IntelligenceProficiency: attributes.Intelligence.proficiency,
			WisdomProficiency: attributes.Wisdom.proficiency,
			CharismaProficiency: attributes.Charisma.proficiency,
		},
	});
	console.log(playerId, attributes);
}
