import { redirect } from "next/navigation";

import AdminSideBar from "@/src/components/AdminSideBar";
import { checkLogin } from "@/src/utils/auth";
import { AuthTokenSchema } from "@/src/schema";

export default function layout({ children }: { children: React.ReactNode }) {
	const result = AuthTokenSchema.safeParse(checkLogin());
	console.log("🚀 ~ layout ~ result:", result);
	if (!result.success) return redirect("/");
	if (result.data.role !== "admin") return redirect("/");

	return (
		<div className="flex">
			<AdminSideBar />
			<div className="flex-1 p-5">{children}</div>
		</div>
	);
}
