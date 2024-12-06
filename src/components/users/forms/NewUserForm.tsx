import Heading from "../../ui/Heading";

export default function NewUserForm({ children }: { children: React.ReactNode }) {
	return (
		<div className="max-w-3xl mx-auto mt-5">
			<Heading className="text-black">Crear usuario</Heading>
			<form action="" className="mt-5 space-y-4">
				{children}
				<button type="submit" className="w-full text-center p-2 dark:bg-red-600 bg-blue-400 text-white font-black">
					Crear usuario
				</button>
			</form>
		</div>
	);
}
