"use server";
import { prisma } from "@/src/lib/prisma";
import { UserCreateFormSchema } from "@/src/schema";
import { hashPassword } from "@/src/utils/auth";
import { v4 as uuidV4 } from "uuid";

export default async function createUser(data: unknown) {
	const response = UserCreateFormSchema.safeParse(data);

	if (!response.success) {
		return {
			errors: response.error.issues,
		};
	}
	const userExist = await prisma.user.count({ where: { email: response.data.email } });
	if (userExist > 0) {
		return { errors: [{ message: "El email ya esta en uso" }] };
	}
	const id = uuidV4();
	const password = await hashPassword(response.data.password);

	await prisma.user.create({
		data: {
			id,
			name: response.data.name,
			email: response.data.email,
			password,
		},
	});
}
