import { redirect } from "next/navigation";
import Heading from "@/src/components/ui/Heading";
import Pagination from "@/src/components/ui/Pagination";
import { prisma } from "@/src/lib/prisma";
import PlayersTable from "@/src/components/spells/ui/tables/PlayersTable";

async function playersCount() {
	return await prisma.player.count();
}

async function getPlayers(skip: number, pageSize: number) {
	return await prisma.player.findMany({
		take: pageSize,
		skip,
	});
}

export default async function PlayersPage({ searchParams }: { searchParams: { page: string } }) {
	const page = +searchParams.page || 1;
	const pageSize = 10;
	const skip = (page - 1) * 10;

	if (page < 0) redirect("/admin/players");

	const totalSpellsData = playersCount();
	const spellsData = getPlayers(skip, pageSize);
	const [spells, totalSpells] = await Promise.all([spellsData, totalSpellsData]);
	const totalPages = Math.ceil(totalSpells / pageSize);
	return (
		<>
			<Heading className="mt-10">Administrar personajes</Heading>
			<div className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-10">{/* TODO: Implementar buscador */}</div>
			<PlayersTable players={spells} showOwner />
			<Pagination page={page} totalPages={totalPages} route="/admin/players/?" items={pageSize} />
		</>
	);
}
