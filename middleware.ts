import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
	const { cookies, headers } = req;

	const resp = NextResponse.next();
	const locale = cookies.get("NEXT_LOCALE");

	if (!locale) {
		const acceptLanguage = headers.get("accept-language") || "";
		const language = acceptLanguage.split(",")[0];
		resp.cookies.set("NEXT_LOCALE", language);
	}

	return resp;
}

export const config = {
	matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", "/(api|trpc)(.*)"],
};
