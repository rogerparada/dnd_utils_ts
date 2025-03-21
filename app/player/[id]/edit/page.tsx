import EditPlayer from "@/src/components/player/EditPlayer";
import PlayerSheet from "@/src/components/player/PlayerSheet";
import PlayerBar from "@/src/components/player/ui/PlayerBar";
import { prisma } from "@/src/lib/prisma";
import { AuthTokenSchema } from "@/src/schema";
import { FullPlayerEditableSchema } from "@/src/schema/PlayerSchema";
import { Attributes, FullPlayer } from "@/src/types";
import { checkLogin } from "@/src/utils/auth";
import Link from "next/link";

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

			const validatePlayer = FullPlayerEditableSchema.safeParse({ ...player, attributes, skills });
			if (!validatePlayer.success) return;
			return validatePlayer.data;
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

	if (!player)
		return (
			<div className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20 flex flex-col justify-center items-center gap-4">
				<span className="text-white text-3xl mt-10">Not valid Data</span>
				<Link href={"/player/new"} className="p-4 bg-blue-600 text-white font-black rounded-md w-56 text-center shadow shadow-red-950">
					Crear un nuevo personaje
				</Link>
			</div>
		);

	if (player.userId !== userInfo.userId)
		return (
			<div className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20 flex flex-col justify-center items-center gap-4">
				<span className="text-white text-3xl mt-10">Not allowed to edit</span>
				<Link href={"/player/new"} className="p-4 bg-blue-600 text-white font-black rounded-md w-56 text-center shadow shadow-red-950">
					Crear un nuevo personaje
				</Link>
			</div>
		);

	return (
		<>
			<EditPlayer newPlayer={player}>
				<PlayerSheet userInfo={userInfo} />
			</EditPlayer>
			<PlayerBar userInfo={userInfo} edit />
		</>
	);
}
