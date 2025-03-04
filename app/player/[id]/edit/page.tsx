import PlayerSheet from "@/src/components/player/PlayerSheet";
import PlayerBar from "@/src/components/player/ui/PlayerBar";
import { prisma } from "@/src/lib/prisma";
import { AuthTokenSchema } from "@/src/schema";
import { Attributes, FullPlayer } from "@/src/types";
import { checkLogin } from "@/src/utils/auth";

async function getPlayerData(id: string): Promise<FullPlayer | undefined> {
	try {
		const player = await prisma.player.findUnique({ where: { id } });

		const skills = await prisma.playerSkills.findFirst({
			where: { playerId: id },
		});
		// const spellsWeapons = await prisma.spellsWeapon.findMany({ where: { playerId: id } });
		// const money = (await prisma.money.findFirst({ where: { playerId: id } })) ?? { pc: 0, pp: 0, pe: 0, po: 0, ppt: 0 };
		const dbAttr = await prisma.playerAttributes.findFirst({ where: { playerId: id } });

		if (dbAttr !== null && skills !== null && player !== null) {
			const attributes: Attributes = {
				Strength: { value: dbAttr.Strength, proficiency: dbAttr.StrengthProficiency },
				Dexterity: { value: dbAttr.Dexterity, proficiency: dbAttr.DexterityProficiency },
				Constitution: { value: dbAttr.Constitution, proficiency: dbAttr.ConstitutionProficiency },
				Intelligence: { value: dbAttr.Intelligence, proficiency: dbAttr.IntelligenceProficiency },
				Wisdom: { value: dbAttr.Wisdom, proficiency: dbAttr.WisdomProficiency },
				Charisma: { value: dbAttr.Charisma, proficiency: dbAttr.CharismaProficiency },
			};

			return { ...player, attributes, skills };
		}
	} catch (error) {
		console.log("DB ERROR:", error);
	}
}

export default async function editPlayerPage({ params }: { params: { id: string } }) {
	const result = AuthTokenSchema.safeParse(checkLogin());
	if (!result.success) {
		result.error.issues.forEach((issue) => console.log("Edit: Player", { issue }));
	}
	const userInfo = {
		username: result.data?.username,
		userId: result.data?.id,
	};

	const player = await getPlayerData(params.id);

	if (!player) return <div>Not valid data</div>;

	if (player.userId !== userInfo.userId) return <div className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20">Not allowed to edit</div>;

	return (
		<>
			<div id="player" className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20">
				<PlayerSheet newPlayer={player} userInfo={userInfo} />
			</div>
			<PlayerBar userInfo={userInfo} edit />
		</>
	);
}
