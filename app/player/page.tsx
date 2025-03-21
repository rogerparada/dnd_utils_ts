import PlayersTable from "@/src/components/spells/ui/tables/PlayersTable";
import { prisma } from "@/src/lib/prisma";
import { AuthTokenSchema } from "@/src/schema";
import { checkLogin } from "@/src/utils/auth";
import { Player } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";

const getPlayersData = async (userId: string): Promise<Player[] | undefined> => {
	return await prisma.player.findMany({
		where: {
			userId,
		},
	});
};

export default async function PlayersPage() {
	const result = AuthTokenSchema.safeParse(checkLogin());
	if (!result.success) redirect("/player/new");
	const playerData = await getPlayersData(result.data.id);

	if (playerData && playerData.length > 0)
		return (
			<div className="mt-10 lg:container mx-auto">
				<Link href={"/player/new"} className="p-4 bg-red-600 text-white font-black rounded-md">
					Crear uno nuevo
				</Link>
				<PlayersTable players={playerData} />
			</div>
		);
	return (
		<div className="w-full lg:container flex flex-col justify-center items-center text-black bg-white h-56 gap-4">
			<span>No tienes personajes </span>
			<Link href={"/player/new"} className="p-4 bg-blue-500 dark:bg-red-600 text-white font-black rounded-md">
				Crear uno nuevo
			</Link>
		</div>
	);
}
