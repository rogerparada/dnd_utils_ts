import MenuBar from "@/src/components/ui/MenuBar";
import { AuthTokenSchema } from "@/src/schema";
import { checkAccessRole, checkLogin } from "@/src/utils/auth";

export default async function layout({ children }: { children: React.ReactNode }) {
	const result = AuthTokenSchema.safeParse(checkLogin());
	const authorized = await checkAccessRole(result.data?.id);
	return (
		<>
			<MenuBar username={result.data?.username} isAdmin={authorized} />
			<div className="lg:container m-0 lg:mx-auto p-3 md:pt-5 md:px-5 px-0">{children}</div>
		</>
	);
}
