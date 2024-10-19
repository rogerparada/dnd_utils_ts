import jwt from "jsonwebtoken";

type UserPayload = {
	id: string;
};

export function getJWT(payload: UserPayload) {
	const secret = process.env.SECRET_KEY;
	return jwt.sign(payload, secret!, { expiresIn: "30d" });
}

export function verifyJWT(token: string) {
	const secret = process.env.SECRET_KEY;
	return jwt.verify(token, secret!);
}
