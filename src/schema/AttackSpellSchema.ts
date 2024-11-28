import { z } from "zod";

export const AttackSpellSchema = z.object({
	id: z.string(),
	name: z.string(),
	bonus: z
		.string()
		.trim()
		.transform((value) => parseInt(value))
		.refine((value) => value >= 0)
		.or(z.number().min(0, { message: "bonus is required" })),
	damage: z.string(),
});

export const PartialAttackSpellSchema = z.object({
	name: z.string(),
	bonus: z
		.string()
		.trim()
		.transform((value) => parseInt(value))
		.refine((value) => value >= 0)
		.or(z.number().min(0, { message: "bonus is required" })),
	damage: z.string(),
});

export type AttackSpell = z.infer<typeof AttackSpellSchema>;
export type PartialAttackSpell = z.infer<typeof PartialAttackSpellSchema>;
