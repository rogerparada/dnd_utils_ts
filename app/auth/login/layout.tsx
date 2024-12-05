import { checkLogin } from "@/src/utils/auth";
import { redirect } from "next/navigation";
import React from "react";

export default function loginLayout({ children }: { children: React.ReactNode }) {
	const isLogged = checkLogin();
	if (!!isLogged) return redirect("/");
	return <>{children}</>;
}
