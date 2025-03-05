import SpellSearchForm from "@/src/components/spells/forms/SpellSearchForm";
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
		orderBy: {
			name: "asc",
		},
	});
}

export default async function SpellsAdminPage({ searchParams }: { searchParams: { page: string; items: string } }) {
	const page = +searchParams.page || 1;
	const pageSize = +searchParams.items || 100;
	const skip = (page - 1) * pageSize;

	if (page < 0) redirect("/admin/spells");
	const totalSpellsData = spellsCount();
	const spellsData = getSpells(skip, pageSize);
	const [spells, totalSpells] = await Promise.all([spellsData, totalSpellsData]);
	const totalPages = Math.ceil(totalSpells / pageSize);
	console.log({ page, pageSize, skip, totalSpells });
	return (
		<div className="p-5">
			<Heading className="mt-10">Administrar conjuros</Heading>
			<div className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-10">
				<Link href={"spells/new"} className="p-3 bg-blue-400 text-white font-bold">
					Nuevo conjuro
				</Link>
				<SpellSearchForm />
			</div>
			<SpellsTable spells={spells} />
			<Pagination page={page} totalPages={totalPages} route="/admin/spells/?" items={pageSize} />
		</div>
	);
}
