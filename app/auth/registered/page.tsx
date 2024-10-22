import { auth } from "@/auth";
import LogOutButton from "@/src/components/ui/LogOutButton";

export default async function RegisteredPage() {
	const session = await auth();
	if (!session) return "Sin sesión";
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<div className="">{JSON.stringify(session)}</div>
			<div className="">Se ha registrado correctamente, por favor verifica tu email para activar tu cuenta</div>
			<LogOutButton />
		</div>
	);
}
