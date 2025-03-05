import Pagination from "@/src/components/ui/Pagination";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";
import "@/src/assets/css/clases.css";
import Heading from "@/src/components/ui/Heading";
import SpellCardList from "@/src/components/spells/SpellCardList";
import SpellSearchForm from "@/src/components/spells/forms/SpellSearchForm";

async function spellsCount(search: string) {
	return await prisma.spell.count({
		where: {
			name: {
				contains: search,
			},
		},
	});
}

async function searchSpells(search: string, pageSize: number, skip: number) {
	return await prisma.spell.findMany({
		take: pageSize,
		skip,
		where: {
			name: {
				contains: search,
			},
		},
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

export default async function SpellPage({ searchParams }: { searchParams: { search: string; page: string; items: string } }) {
	const pageSize = +searchParams.items || 20;
	const page = +searchParams.page || 1;
	const skip = (page - 1) * pageSize;
	const search = searchParams.search;

	if (page < 0) return redirect("/spells");
	const spells = await searchSpells(search, pageSize, skip);
	const totalSpells = await spellsCount(search);
	const totalPages = Math.ceil(totalSpells / pageSize);

	return (
		<>
			<Heading className="my-10">Lista de conjuros</Heading>
			<div className="w-full my-5 flex items-end justify-end">
				<SpellSearchForm />
			</div>
			<SpellCardList spells={spells} school />
			<Pagination page={page} totalPages={totalPages} route={`/spells/search?search=${search}&`} items={pageSize} />
		</>
	);
}
