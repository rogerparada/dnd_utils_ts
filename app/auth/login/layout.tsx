import { checkLogin } from "@/src/utils/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function loginLayout({ children }: { children: React.ReactNode }) {
	const isLogged = await checkLogin();
	if (!!isLogged) return redirect("/");
	return <>{children}</>;
}
