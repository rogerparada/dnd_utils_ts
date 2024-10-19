"use server";

import { prisma } from "@/src/lib/prisma";
import { MultiClassSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function createSpellClasses(spellId: number, classes: string) {
	const response = MultiClassSchema.safeParse(classes);
	if (!response.success) {
		return {
			errors: response.error.issues,
		};
	}

	const data = response.data.map((classId) => {
		return { classId, spellId };
	});

	await prisma.spellClass.createMany({ data });

	revalidatePath("/admin/spells");
}
