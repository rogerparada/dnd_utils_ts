import { prisma } from "@/src/lib/prisma";
import { UserCreateFormSchema } from "@/src/schema";
import { v4 as uuidV4 } from "uuid";

export default async function createUser(data: unknown) {
	const response = UserCreateFormSchema.safeParse(data);

	if (!response.success) {
		return {
			errors: response.error.issues,
		};
	}
	const id = uuidV4();
	await prisma.user.create({
		data: { ...response.data, id },
	});
}
