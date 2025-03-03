"use server";
import { prisma } from "@/src/lib/prisma";
import { sendVerificationEmail } from "@/src/lib/resend";
import { UserCreateFormSchema } from "@/src/schema";
import { hashPassword } from "@/src/utils/auth";
import { nanoid } from "nanoid";

export default async function createUser(data: unknown): Promise<{ error: string[] } | undefined> {
	const response = UserCreateFormSchema.safeParse(data);

	try {
		if (!response.success) {
			const error = response.error.issues.map((issue) => issue.message);
			return {
				error,
			};
		}
		const userExist = await prisma.user.count({ where: { username: response.data.username } });
		if (userExist > 0) {
			return { error: ["El usuario ya esta en uso"] };
		}
		const emailExist = await prisma.user.count({ where: { email: response.data.email } });
		if (emailExist > 0) {
			return { error: ["El email ya esta en uso"] };
		}

		const password = await hashPassword(response.data.password);

		await prisma.user.create({
			data: {
				username: response.data.username,
				email: response.data.email,
				password,
			},
		});

		const token = nanoid();
		try {
			await prisma.verificationToken.create({
				data: {
					identifier: response.data.email,
					token,
					expires: new Date(Date.now() + 1000 * 3600 * 24),
				},
			});
		} catch (error) {
			console.log("Token creation: ", error);
			return { error: ["Error al validar usuario, por favor consulte con el administrador"] };
		}

		const sendMail = await sendVerificationEmail(response.data.username, token, response.data.email);
		if (sendMail?.error) {
			return { error: ["Error al enviar el email de verificación"] };
		}
	} catch (error) {
		console.log(error);
		return { error: ["No se ha podido completar el registro"] };
	}
}
