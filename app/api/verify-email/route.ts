import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const token = searchParams.get("token");

	if (!token) {
		return NextResponse.json({ message: "Token no valido" }, { status: 404 });
	}

	const tokenExists = await prisma.verificationToken.findFirst({
		where: {
			token,
		},
	});

	if (!tokenExists) {
		return NextResponse.json({ message: "Token no valido" }, { status: 404 });
	}

	const { identifier } = tokenExists;

	await prisma.user.update({
		where: {
			email: identifier,
		},
		data: {
			emailVerified: new Date(),
		},
	});

	redirect("/auth/login?verified=true");
}
