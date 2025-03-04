"use server";

import { prisma } from "@/src/lib/prisma";
import { FullPlayerSchema } from "@/src/schema/PlayerSchema";
import { Attributes, FullPlayer, Money, Skills, SpellsWeapon } from "@/src/types/Player";
import { verifyJWT } from "@/src/utils/jwt";
import { cookies } from "next/headers";

export async function createNewPlayer(player: FullPlayer): Promise<boolean> {
	const validatePlayer = FullPlayerSchema.safeParse(player);

	if (!validatePlayer.success) {
		validatePlayer.error.issues.forEach((issue) => console.log("Error Player Validation: ", issue.message));
		return false;
	}

	const cookieStore = cookies();
	const cookieToken = cookieStore.get("auth_token")?.value;

	if (!cookieToken) return false;

	const userToken = verifyJWT(cookieToken);

	if (userToken && typeof userToken === "object") {
		try {
			const { attributes, skills, ...newPlayer } = validatePlayer.data;
			const createdPlayer = await prisma.player.create({
				data: newPlayer,
			});
			console.log(createdPlayer);

			const playerId = createdPlayer.id;
			createAttributes(playerId, attributes);
			createSkills(playerId, skills);
			// createPlayerSpellsWeapons(playerId, spellsWeapons);
			// createPlayerMoney(playerId, money);
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	return true;
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
export async function createPlayerMoney(playerId: string, money: Money) {
	await prisma.playerSkills.create({
		data: {
			playerId,
			...money,
		},
	});
	console.log(playerId, money);
}
export async function createPlayerSpellsWeapons(playerId: string, spellsWeapons: SpellsWeapon[]) {
	await prisma.playerSkills.createMany({
		data: {
			playerId,
			...spellsWeapons,
		},
	});
	console.log(playerId, spellsWeapons);
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
