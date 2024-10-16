import EditSpellForm from "@/src/components/spells/forms/EditSpellForm";
import SpellForm from "@/src/components/spells/forms/SpellForm";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

async function getSpell(id: number) {
	return await prisma.spell.findUnique({
		where: {
			id,
		},
	});
}

export default async function EditSpellPage({ params }: { params: { id: string } }) {
	const spell = await getSpell(+params.id);

	if (spell === null) redirect("/");

	return (
		<EditSpellForm>
			<SpellForm spell={spell!} />
		</EditSpellForm>
	);
}
