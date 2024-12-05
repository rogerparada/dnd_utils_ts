import { User } from "@prisma/client";

import bcrypt from "bcrypt";
export const hashPassword = async (password: string) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

export const users = async () => {
	const admin: User = {
		id: "firstAdmin",
		username: "Roger",
		email: "roger.parada10@gmail.com",
		emailVerified: new Date(Date.now()),
		password: await hashPassword("Password1"),
		role: "admin",
		image: "",
		createdAt: new Date(Date.now()),
		updatedAt: new Date(Date.now()),
	};

	return [admin];
};
