"use client";

import { signOut } from "next-auth/react";

export default function LogOutButton() {
	return (
		<button className="bg-white rounded-lg text-red-600 p-2" onClick={() => signOut()}>
			Cerrar sesión
		</button>
	);
}
