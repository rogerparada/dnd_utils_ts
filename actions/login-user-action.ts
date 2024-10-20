"use server";
import { prisma } from "@/src/lib/prisma";
import { UserLoginFormSchema } from "@/src/schema";
import { checkPassword } from "@/src/utils/auth";
import { getJWT } from "@/src/utils/jwt";

export async function login(data: unknown) {
	const response = UserLoginFormSchema.safeParse(data);
	if (!response.success) {
		return {
			errors: response.error.issues,
		};
	}
	const { email, password } = response.data;
	const user = await prisma.user.findFirst({
		where: {
			email,
		},
	});
	if (!user) {
		return { errors: [{ message: "Credenciales no válidas" }] };
	}

	const checkPass = await checkPassword(password, user.password);
	console.log(checkPass);
	if (!checkPass) {
		return { errors: [{ message: "Credenciales no válidas" }] };
	}

	if (!user.confirmed) {
		return { errors: [{ message: "Debe confirmar su email" }] };
	}

	return getJWT({ id: user.id, name: user.name, role: user.role });
}
