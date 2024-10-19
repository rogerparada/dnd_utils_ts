import { prisma } from "@/src/lib/prisma";
import { checkPassword } from "@/src/utils/auth";
import { getJWT } from "@/src/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	return Response.json({ message: "Login" });
}

export async function POST(request: NextRequest) {
	try {
		const { email, password } = await request.json();
		const user = await prisma.user.findFirst({
			where: {
				email,
			},
		});
		if (!user) {
			return NextResponse.json({ message: "Credenciales no válidas" }, { status: 401 });
		}

		const checkPass = await checkPassword(password, user.password);
		if (!checkPass) {
			return NextResponse.json({ message: "Credenciales no válidas" }, { status: 401 });
		}

		if (!user.confirmed) {
			return NextResponse.json({ message: "Debe confirmar su email" }, { status: 403 });
		}

		const token = getJWT({ id: user.id });
		const response = NextResponse.json({ message: "Login OK" });
		response.cookies.set("userToken", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 1000 * 3600 * 24 * 60,
			path: "/",
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
