import { verifyJWT } from "@/src/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	console.log("Enter middleware");
	const token = localStorage.getItem("userToken");
	if (token) {
		const validation = verifyJWT(token);
		if (validation) {
			return NextResponse.redirect(new URL("/", request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/auth/", "/", "/auth/login"],
};
