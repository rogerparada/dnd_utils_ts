import { redirect } from "next/navigation";

import SpellSearchForm from "@/src/components/spells/forms/SpellSearchForm";
import UsersTable from "@/src/components/spells/ui/tables/UsersTable";
import Heading from "@/src/components/ui/Heading";
import Pagination from "@/src/components/ui/Pagination";
import Link from "next/link";
import { prisma } from "@/src/lib/prisma";

async function usersCount() {
	return await prisma.user.count();
}

async function getUsers(skip: number, pageSize: number) {
	return await prisma.user.findMany({
		take: pageSize,
		skip,
	});
}

export default async function UsersPage({ searchParams }: { searchParams: { page: string } }) {
	const page = +searchParams.page || 1;
	const pageSize = 10;
	const skip = (page - 1) * 10;

	if (page < 0) redirect("/admin/users");

	const totalSpellsData = usersCount();
	const spellsData = getUsers(skip, pageSize);
	const [spells, totalSpells] = await Promise.all([spellsData, totalSpellsData]);
	const totalPages = Math.ceil(totalSpells / pageSize);

	return (
		<>
			<Heading className="mt-10">Administrar usuarios</Heading>
			<div className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-10">
				<Link href={"spells/new"} className="p-3 bg-blue-400 text-white font-bold">
					Nuevo conjuro
				</Link>
				<SpellSearchForm />
			</div>
			<UsersTable users={spells} />
			<Pagination page={page} totalPages={totalPages} route="/admin/users/?" items={pageSize} />
		</>
	);
}
