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
		name: z.string().min(2, { message: "Se requiere un nombre de usuario" }),
		email: z.string().email().min(2, { message: "Se requiere un email de registro" }),
		password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
		password_confirm: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
	})
	.refine((value) => value.password === value.password_confirm, { message: "Las contraseñas no coinciden", path: ["password_confirm"] });

export const UserLoginFormSchema = z.object({
	email: z.string().email().min(2, { message: "Se requiere un email de registro" }),
	password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export type UserLogin = z.infer<typeof UserLoginFormSchema>;
export type UserCreate = z.infer<typeof UserCreateFormSchema>;
