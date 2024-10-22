"use server";
import { signIn } from "@/auth";
import { UserLoginFormSchema } from "@/src/schema";
import { error } from "console";
import { AuthError } from "next-auth";

export async function login(data: unknown) {
	try {
		const response = UserLoginFormSchema.safeParse(data);
		if (!response.success) {
			return {
				errors: response.error.issues,
			};
		}
		const { email, password } = response.data;
		await signIn("credentials", {
			email,
			password,
			redirect: false,
		});
		return {
			success: true,
		};
	} catch (error) {
		if (error instanceof AuthError) {
			return { error: error.cause?.err?.message };
		}
		console.log(typeof error);
		return { error: "Error 500" };
	}
	/*const response = UserLoginFormSchema.safeParse(data);
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

	const checkPass = await checkPassword(password, user.password!);

	if (!checkPass) {
		return { errors: [{ message: "Credenciales no válidas" }] };
	}

	if (!user.emailVerified) {
		return { errors: [{ message: "Debe confirmar su email" }] };
	}

	return getJWT({ id: user.id, name: user.username!, role: user.role });*/
}
