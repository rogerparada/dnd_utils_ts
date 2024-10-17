import SpellsTable from "@/src/components/spells/SpellsTable";
import Heading from "@/src/components/ui/Heading";
import Pagination from "@/src/components/ui/Pagination";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function spellsCount() {
	return await prisma.spell.count();
}

async function getSpells(skip: number, pageSize: number) {
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

export default async function SpellsAdminPage({ searchParams }: { searchParams: { page: string } }) {
	const page = +searchParams.page || 1;
	const pageSize = 10;
	const skip = (page - 1) * 10;

	if (page < 0) redirect("/admin/products");

	const totalSpellsData = spellsCount();
	const spellsData = getSpells(skip, pageSize);
	const [spells, totalSpells] = await Promise.all([spellsData, totalSpellsData]);
	const totalPages = Math.ceil(totalSpells / pageSize);
	return (
		<>
			<Heading className="mt-10">Administrar conjuros</Heading>
			<div>
				<Link href={"spells/new"} className="p-3 bg-blue-400 text-white font-bold float-right">
					Nuevo conjuro
				</Link>
			</div>
			<SpellsTable spells={spells} />
			<Pagination page={page} totalPages={totalPages} route="/admin/spells/?" items={pageSize} />
		</>
	);
}
