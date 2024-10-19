import { prisma } from "@/src/lib/prisma";
import { UserCreateFormSchema } from "@/src/schema";
import { hashPassword } from "@/src/utils/auth";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidV4 } from "uuid";

export async function POST(req: NextRequest) {
	const body = await req.json();
	const response = UserCreateFormSchema.safeParse(body);
	if (!response.success) {
		return NextResponse.json({ message: "Error al crear usuario", errors: response.error.issues }, { status: 403 });
	}

	const userExist = await prisma.user.count({ where: { email: response.data.email } });
	if (userExist > 0) {
		return NextResponse.json({ message: "El email ya esta en uso" }, { status: 409 });
	}
	const id = uuidV4();
	const password = await hashPassword(response.data.password);

	await prisma.user.create({
		data: {
			id,
			name: response.data.name,
			email: response.data.email,
			password,
		},
	});

	return NextResponse.json({ message: "User Created" });
}
