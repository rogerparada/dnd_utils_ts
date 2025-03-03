"use server";

import { UserLoginFormSchema } from "@/src/schema";
import { checkPassword } from "../../src/utils/auth";
import { prisma } from "@/src/lib/prisma";
import { createAuthCookie } from "@/src/utils/cookies";
import { getJWT } from "@/src/utils/jwt";

export async function login(data: unknown): Promise<{ success: boolean; errors?: string[] }> {
	try {
		const response = UserLoginFormSchema.safeParse(data);
		if (!response.success) {
			return {
				success: false,
				errors: response.error.issues.map((issue) => issue.message),
			};
		}
		const { username, password } = response.data;

		const user = await prisma.user.findUnique({
			where: {
				username,
			},
		});

		if (!user) return { success: false, errors: ["User not found"] };

		const check = await checkPassword(password, user.password!);

		if (!check) {
			return { success: false, errors: ["User not found"] };
		}

		const token = getJWT({ id: user.id, username: user.username });

		return await createAuthCookie(token);
	} catch (error) {
		console.log(error);
		return { success: false, errors: ["Error 500"] };
	}
}
