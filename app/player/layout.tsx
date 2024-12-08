import MenuBar from "@/src/components/ui/MenuBar";
import { AuthTokenSchema } from "@/src/schema";
import { checkAccessRole, checkLogin } from "@/src/utils/auth";

export default async function PlayerLayout({ children }: { children: React.ReactNode }) {
	const result = AuthTokenSchema.safeParse(checkLogin());
	const authorized = await checkAccessRole(result.data?.id);

	return (
		<>
			<MenuBar username={result.data?.username} isAdmin={authorized} />

			{children}
		</>
	);
}
