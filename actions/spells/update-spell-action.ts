"use server";
import { prisma } from "@/src/lib/prisma";
import { SpellSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function updateSpell(data: unknown, id: number) {
	const response = SpellSchema.safeParse(data);

	if (!response.success) {
		return {
			errors: response.error.issues,
		};
	}

	await prisma.spell.update({
		where: { id },
		data: response.data,
	});

	revalidatePath("/admin/spells");
}
