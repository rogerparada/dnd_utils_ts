"use server";

import { prisma } from "@/src/lib/prisma";
import { MultiClassSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function updateSpellClasses(spellId: number, classes: string) {
	const response = MultiClassSchema.safeParse(classes);
	if (!response.success) {
		return {
			errors: response.error.issues,
		};
	}

	response.data.forEach(async (classId) => {
		const spell = await prisma.spellClass.findFirst({ where: { spellId, classId } });
		if (!spell) {
			await prisma.spellClass.create({
				data: {
					spellId,
					classId,
				},
			});
		}
	});

	const spellClases = await prisma.spellClass.findMany({
		where: {
			spellId,
			classId: { notIn: response.data },
		},
	});

	spellClases.forEach(async (spellClass) => {
		await prisma.spellClass.delete({
			where: { id: spellClass.id },
		});
	});

	revalidatePath("/admin/spells");
}
