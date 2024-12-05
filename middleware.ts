import { NextRequest, NextResponse } from "next/server";

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

export default function middleware(req: NextRequest) {
	const { nextUrl, cookies, headers } = req;

	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isClassRoute = nextUrl.pathname.startsWith("/classes/");

	const resp = NextResponse.next();
	const locale = cookies.get("NEXT_LOCALE");
	const authCookie = cookies.get("auth_token");

	if (!locale) {
		const acceptLanguage = headers.get("accept-language") || "";
		const language = acceptLanguage.split(",")[0];
		resp.cookies.set("NEXT_LOCALE", language);
	}

	if (!isPublicRoute && !isClassRoute && authCookie) {
		return NextResponse.redirect(new URL("/auth/login", nextUrl));
	}

	return resp;
}

export const config = {
	matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", "/(api|trpc)(.*)"],
};
