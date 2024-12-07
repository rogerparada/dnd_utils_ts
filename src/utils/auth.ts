import bcrypt from "bcrypt";
import { verifyJWT } from "./jwt";
import { prisma } from "../lib/prisma";

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

export const generateSecurePassword = (): string => {
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowerCase = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";
	const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

	const allCharacters = upperCase + lowerCase + numbers + specialChars;

	const getRandomChar = (chars: string): string => chars[Math.floor(Math.random() * chars.length)];

	const passwordArray = [getRandomChar(upperCase), getRandomChar(lowerCase), getRandomChar(numbers), getRandomChar(specialChars)];

	while (passwordArray.length < 8) {
		passwordArray.push(getRandomChar(allCharacters));
	}

	for (let i = passwordArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
	}

	return passwordArray.join("");
};

export const checkAccessRole = async (userId?: string): Promise<boolean> => {
	if (!userId) return false;
	const user = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	});

	if (!user) return false;
	if (user.role === "admin") return true;
	return false;
};
