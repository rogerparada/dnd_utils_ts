import bcrypt from "bcrypt";
import { verifyJWT } from "./jwt";

export const hashPassword = async (password: string) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

export const checkPassword = async (enteredPassword: string, storedPassword: string) => {
	return await bcrypt.compare(enteredPassword, storedPassword);
};

export const checkLogin = () => {
	const { cookies } = require("next/headers");
	const cookieStore = cookies();
	const auth = cookieStore.get("auth_token");
	const value = auth?.value;

	if (!value) return undefined;

	return verifyJWT(value);
};
