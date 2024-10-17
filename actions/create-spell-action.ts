"use server";
import { prisma } from "@/src/lib/prisma";
import { SpellSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function createSpell(data: unknown) {
	const response = SpellSchema.safeParse(data);
	if (!response.success) {
		return {
			errors: response.error.issues,
		};
	}
	const spell = await prisma.spell.create({
		data: response.data,
	});

	revalidatePath("/admin/spells");
	return { id: spell.id };
}
