import EditSpellForm from "@/src/components/spells/forms/EditSpellForm";
import SpellForm from "@/src/components/spells/forms/SpellForm";
import Heading from "@/src/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

async function getSpell(id: number) {
	return await prisma.spell.findUnique({
		where: {
			id,
		},
		include: {
			classes: true,
		},
	});
}

export default async function EditSpellPage({ params }: { params: { id: string } }) {
	const spell = await getSpell(+params.id);

	if (spell === null) redirect("/");

	return (
		<EditSpellForm>
			<>
				<Heading>Editando {spell.name}</Heading>
				<SpellForm spell={spell!} />
			</>
		</EditSpellForm>
	);
}
