import LogOutButton from "@/src/components/ui/LogOutButton";

export default async function RegisteredPage() {
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<div className="">Se ha registrado correctamente, por favor verifica tu email para activar tu cuenta</div>
			<LogOutButton />
		</div>
	);
}
