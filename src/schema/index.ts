import { z } from "zod";

export const SpellSchema = z.object({
	name: z.string(),
	level: z.string(),
	casting: z.string(),
	range: z.string(),
	duration: z.string(),
	component: z.string(),
	concentration: z
		.string()
		.trim()
		.transform((value) => value === "on")
		.or(z.boolean()),
	description: z.string(),
	school: z.string(),
});
