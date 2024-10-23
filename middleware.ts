import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const { auth: middleware } = NextAuth(authConfig);

const publicRoutes = ["/", "/auth/login", "/auth/register", "/auth/registered", "/spells", "/spells/search", "/classes", "/api/verify-email"];

export default middleware((req) => {
	const { nextUrl, auth } = req;
	const isLoggedIn = !!auth?.user;
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isClassRoute = nextUrl.pathname.startsWith("/classes/");
	if (!isPublicRoute && !isClassRoute && !isLoggedIn) {
		return NextResponse.redirect(new URL("/auth/login", nextUrl));
	}
	return NextResponse.next();
});

export const config = {
	matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", "/(api|trpc)(.*)"],
};
