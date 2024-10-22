import { auth } from "@/auth";
import AdminSideBar from "@/src/components/AdminSideBar";
import { redirect } from "next/navigation";

export default async function layout({ children }: { children: React.ReactNode }) {
	const session = await auth();
	if (session?.user.role !== "admin") {
		return redirect("/");
	}
	return (
		<div className="flex">
			<AdminSideBar />
			<div className="flex-1 p-5">{children}</div>
		</div>
	);
}
