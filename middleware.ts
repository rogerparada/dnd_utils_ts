import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const { auth: middleware } = NextAuth(authConfig);

const publicRoutes = [
	"/",
	"/auth/login",
	"/auth/register",
	"/auth/registered",
	"/spells",
	"/spells/search",
	"/classes",
	"/api/verify-email",
	"/master",
	"/master/combat",
	"/player/new",
];

export default middleware((req) => {
	const { nextUrl, auth } = req;
	const isLoggedIn = !!auth?.user;
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isClassRoute = nextUrl.pathname.startsWith("/classes/");

	const resp = NextResponse.next();
	const locale = req.cookies.get("NEXT_LOCALE")?.value;

	if (!locale) {
		const acceptLanguage = req.headers.get("accept-language") || "";
		const language = acceptLanguage.split(",")[0];
		resp.cookies.set("NEXT_LOCALE", language);
	}

	if (!isPublicRoute && !isClassRoute && !isLoggedIn) {
		return NextResponse.redirect(new URL("/auth/login", nextUrl));
	}
	return resp;
});

export const config = {
	matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", "/(api|trpc)(.*)"],
};
