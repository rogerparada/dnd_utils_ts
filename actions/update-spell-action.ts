"use server";
import { prisma } from "@/src/lib/prisma";
import { SpellSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function updateSpell(data: unknown, id: number) {
	try {
		const response = SpellSchema.safeParse(data);
		if (!response.success) {
			return {
				errors: response.error.issues,
			};
		}
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}

	revalidatePath("/admin/spells");
}
