import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./src/lib/prisma";
import { UserLoginFormSchema } from "./src/schema";
import { checkPassword } from "./src/utils/auth";
import { nanoid } from "nanoid";
import { sendVerificationEmail } from "./src/lib/resend";

export default {
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				const response = UserLoginFormSchema.safeParse(credentials);
				if (!response.success) {
					console.log(response.error);
					throw new Error("Credenciales no válidas en zod");
				}
				const { email, password } = response.data;

				const user = await prisma.user.findUnique({
					where: {
						email,
					},
				});
				if (!user) {
					throw new Error("Credenciales no válidas");
				}

				const isValid = await checkPassword(password!, user.password!);

				if (!isValid) {
					throw new Error("Credenciales no válidas");
				}

				if (!user.emailVerified) {
					const verifyTokenExists = await prisma.verificationToken.findFirst({
						where: {
							identifier: email,
						},
					});

					if (verifyTokenExists?.identifier) {
						await prisma.verificationToken.delete({
							where: {
								identifier: email,
							},
						});
					}

					const token = nanoid();
					await prisma.verificationToken.create({
						data: {
							identifier: email,
							token,
							expires: new Date(Date.now() + 1000 * 3600 * 24),
						},
					});

					await sendVerificationEmail(user.name!, token, user.email!);

					throw new Error("Se ha enviado un email para verificar tu cuenta");
				}

				return user;
			},
		}),
	],
} satisfies NextAuthConfig;
