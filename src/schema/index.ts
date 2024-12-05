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

export const SearchSchema = z.object({
	search: z.string().trim().min(1, "The search cannot be empty"),
});

export const UserCreateFormSchema = z
	.object({
		username: z.string().min(2, { message: "Se requiere un nombre de usuario" }),
		email: z.string().email().min(2, { message: "Se requiere un email de registro" }),
		password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
		password_confirm: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
	})
	.refine((value) => value.password === value.password_confirm, { message: "Las contraseñas no coinciden", path: ["password_confirm"] });

export const UserLoginFormSchema = z.object({
	username: z.string().min(2, { message: "Se requiere un usuario de registro" }),
	password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export const CharacterTypeEnum = z.enum(["Player", "Enemy", "Ally", "Neutral", "Boss"]);

export const CharacterSchema = z.object({
	id: z.string().min(1, { message: "Id is required" }),
	name: z.string().min(1, { message: "Name is required" }),
	type: CharacterTypeEnum,
	image: z.string().url().optional(),
	initiative: z
		.string()
		.min(1, "Initiative required")
		.transform((value) => parseInt(value))
		.refine((value) => value >= 1, { message: "Initiative cannot be less than 0" })
		.or(z.number()),
	disabled: z.boolean().default(false).optional(),
});

export const AuthTokenSchema = z.object({
	id: z.string(),
	username: z.string(),
	role: z.enum(["user", "admin"]),
	iat: z.string(),
	exp: z.string().refine(
		(value) => {
			const date = new Date(value);
			if (isNaN(date.getTime())) throw new Error("Invalid Format");

			const currentDate = new Date();
			return date >= currentDate;
		},
		{ message: "Token expired or invalid date" }
	),
});

export type UserLogin = z.infer<typeof UserLoginFormSchema>;
export type UserCreate = z.infer<typeof UserCreateFormSchema>;
export type Character = z.infer<typeof CharacterSchema>;
export type CharacterType = z.infer<typeof CharacterTypeEnum>;
