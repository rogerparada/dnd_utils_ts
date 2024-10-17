import SpellSearchForm from "@/src/components/spells/forms/SpellSearchForm";
import SpellsTable from "@/src/components/spells/SpellsTable";
import Heading from "@/src/components/ui/Heading";
import Pagination from "@/src/components/ui/Pagination";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

async function productsCount(searchParam: string) {
	return await prisma.spell.count({
		where: {
			name: {
				contains: searchParam,
			},
		},
	});
}

async function searchProducts(search: string, skip: number, pageSize: number) {
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

export default async function SearchPage({ searchParams }: { searchParams: { search: string; page: string } }) {
	const search = searchParams.search;
	const page = +searchParams.page || 1;
	const pageSize = 10;
	const skip = (page - 1) * 10;

	if (page < 0) redirect("/admin/products");
	const totalSpellsData = productsCount(search);
	const spellsData = searchProducts(search, skip, pageSize);
	const [spells, totalSpells] = await Promise.all([spellsData, totalSpellsData]);
	const totalPages = Math.ceil(totalSpells / pageSize);

	if (page > totalPages) redirect(`/admin/products/search/?search=${search}`);

	return (
		<>
			<Heading>Resultados para: {search}</Heading>
			<div className="flex flex-col lg:flex-row lg:justify-end gap-5">
				<SpellSearchForm />
			</div>
			{spells.length ? <SpellsTable spells={spells} /> : <p className="text-center">There are not results.</p>}
			<Pagination page={page} totalPages={totalPages} route={`/admin/spells/search/?search=${search}&`} items={pageSize} />
		</>
	);
}
