import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const { auth: middleware } = NextAuth(authConfig);

const publicRoutes = ["/", "/auth/login", "/auth/register", "/auth/registered", "/spells"];

export default middleware((req) => {
	const { nextUrl, auth } = req;
	const isLoggedIn = !!auth?.user;
	console.log(isLoggedIn);

	if (!publicRoutes.includes(nextUrl.pathname) && !isLoggedIn) {
		return NextResponse.redirect(new URL("/auth/login", nextUrl));
	}
	return NextResponse.next();
});

export const config = {
	matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", "/(api|trpc)(.*)"],
};
