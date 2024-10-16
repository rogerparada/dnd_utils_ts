import SpellSummary from "@/src/components/spells/SpellsList";
import Pagination from "@/src/components/ui/Pagination";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";
import "@/src/assets/css/clases.css";

async function spellsCount() {
	return await prisma.spell.count();
}

async function searchSpells(pageSize: number, skip: number) {
	return await prisma.spell.findMany({
		take: pageSize,
		skip,
		include: {
			classes: {
				include: {
					class: true,
				},
			},
		},
	});
}

export type SpellWithClasses = Awaited<ReturnType<typeof searchSpells>>;

export default async function SpellPage({ searchParams }: { searchParams: { page: string; items: string } }) {
	const pageSize = +searchParams.items || 20;
	const page = +searchParams.page || 1;
	const skip = (page - 1) * pageSize;

	if (page < 0) return redirect("/spells");
	const spells = await searchSpells(pageSize, skip);
	const totalSpells = await spellsCount();
	const totalPages = Math.ceil(totalSpells / pageSize);

	return (
		<>
			<h1 className="text-5xl font-black">Spells List</h1>

			<SpellSummary spells={spells} />

			<Pagination page={page} totalPages={totalPages} route={`/spells?`} items={pageSize} />
		</>
	);
}
