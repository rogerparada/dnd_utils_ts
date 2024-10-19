import { serialize } from "cookie";

export function getCookie(token: string) {
	const serialized = serialize("userToken", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: 1000 * 3600 * 24 * 60,
		path: "/",
	});

	return serialized;
}
