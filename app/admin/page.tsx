import { auth } from "@/auth";
import React from "react";

export default async function AdminPage() {
	const session = await auth();

	return (
		<div className="h-full flex flex-col justify-center items-center gap-10">
			<span className="text-4xl font-black">Bienvenido {session?.user.name}</span>
			<span>Este es tu panel de administración ve con cuidado</span>
		</div>
	);
}
