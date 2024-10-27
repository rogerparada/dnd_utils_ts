export const hashPassword = async (password: string) => {
	const bcrypt = require("bcrypt");
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

export const checkPassword = async (enteredPassword: string, storedPassword: string) => {
	const bcrypt = require("bcrypt");
	return await bcrypt.compare(enteredPassword, storedPassword);
};
