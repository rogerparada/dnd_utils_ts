import { z } from "zod";

export const SpellSchema = z.object({
	name: z.string(),
	level: z
		.string()
		.trim()
		.transform((value) => parseInt(value))
		.refine((value) => value >= 0)
		.or(z.number().min(0, { message: "Level is required" })),
	casting: z.string(),
	range: z.string(),
	duration: z.string(),
	components: z.string(),
	concentration: z
		.string()
		.trim()
		.transform((value) => value === "on")
		.or(z.boolean()),
	description: z.string(),
	material: z.string(),
	school: z.string(),
});

export const MultiClassSchema = z
	.string()
	.min(1, { message: "One class is required" })
	.transform((str) => str.split(",").map((s) => +s))
	.or(z.array(z.number()));
