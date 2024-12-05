import { cookies } from "next/headers";

export async function createAuthCookie(token: string) {
	const cookieStore = cookies();

	// Crear la cookie
	cookieStore.set("auth_token", token, {
		httpOnly: true, // No accesible desde el cliente
		secure: process.env.NODE_ENV === "production", // Solo para HTTPS en producción
		sameSite: "strict", // Ayuda a prevenir ataques CSRF
		path: "/", // Válido para toda la app
		maxAge: 60 * 60 * 24 * 7, // Expira en 7 días
	});

	return { success: true };
}
