"use server";
import { prisma } from "@/src/lib/prisma";
import { sendVerificationEmail } from "@/src/lib/resend";
import { UserCreateFormSchema } from "@/src/schema";
import { hashPassword } from "@/src/utils/auth";
import { nanoid } from "nanoid";

export default async function createUser(data: unknown) {
	const response = UserCreateFormSchema.safeParse(data);

	try {
		if (!response.success) {
			return {
				error: "Invalid Data",
			};
		}
		const userExist = await prisma.user.count({ where: { email: response.data.email } });
		if (userExist > 0) {
			return { error: "El email ya esta en uso" };
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
		await prisma.verificationToken.create({
			data: {
				identifier: response.data.email,
				token,
				expires: new Date(Date.now() + 1000 * 3600 * 24),
			},
		});

		const sendMail = await sendVerificationEmail(response.data.username, token, response.data.email);
		if (sendMail?.error) {
			return { error: "Error al enviar el email de verificación" };
		}
	} catch (error) {
		console.log(error);
		return { error: "No se ha podido completar el registro" };
	}
}
