import z from "zod";

export const PlayerSchema = z.object({
	className: z.string(),
	name: z.string(),
	race: z.string(),
	background: z.string(),
	alignment: z.string(),
	experience: z.number(),
	level: z.number(),
	proficiency: z.number(),
});

export const SkillSchema = z.object({
	Acrobatics: z.boolean(),
	AnimalHandling: z.boolean(),
	Arcana: z.boolean(),
	Athletics: z.boolean(),
	Deception: z.boolean(),
	History: z.boolean(),
	Insight: z.boolean(),
	Intimidation: z.boolean(),
	Investigation: z.boolean(),
	Medicine: z.boolean(),
	Nature: z.boolean(),
	Perception: z.boolean(),
	Performance: z.boolean(),
	Persuasion: z.boolean(),
	Religion: z.boolean(),
	SleightOfHand: z.boolean(),
	Stealth: z.boolean(),
	Survival: z.boolean(),
});

export const AttributeSchema = z.object({
	Strength: z.object({ value: z.number(), proficiency: z.boolean() }),
	Dexterity: z.object({ value: z.number(), proficiency: z.boolean() }),
	Constitution: z.object({ value: z.number(), proficiency: z.boolean() }),
	Intelligence: z.object({ value: z.number(), proficiency: z.boolean() }),
	Wisdom: z.object({ value: z.number(), proficiency: z.boolean() }),
	Charisma: z.object({ value: z.number(), proficiency: z.boolean() }),
});

export const FullPlayerSchema = PlayerSchema.extend({
	userId: z.string().min(1, "UserId no valido"),
	attributes: AttributeSchema,
	skills: SkillSchema,
});
