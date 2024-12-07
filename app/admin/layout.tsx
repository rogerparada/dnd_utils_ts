import { redirect } from "next/navigation";

import AdminSideBar from "@/src/components/AdminSideBar";
import { checkLogin } from "@/src/utils/auth";
import { AuthTokenSchema } from "@/src/schema";
import { prisma } from "@/src/lib/prisma";
import MenuBar from "../../src/components/ui/MenuBar";

const checkAccessRole = async (userId: string): Promise<boolean> => {
	const user = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	});

	if (!user) return false;
	if (user.role === "admin") return true;
	return false;
};

export default async function layout({ children }: { children: React.ReactNode }) {
	const result = AuthTokenSchema.safeParse(checkLogin());

	if (!result.success) {
		result.error.issues.forEach((issue) => console.log({ issue }));
		return redirect("/");
	}

	const authorized = await checkAccessRole(result.data.id);
	if (!authorized) return redirect("/");

	return (
		<>
			<MenuBar username={result.data.username} isAdmin={authorized} />
			<div className="flex">
				<AdminSideBar />
				<div className="flex-1">{children}</div>
			</div>
		</>
	);
}
