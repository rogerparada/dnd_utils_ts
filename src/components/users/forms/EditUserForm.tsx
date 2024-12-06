"use client";
import Heading from "../../ui/Heading";

export default function EditUserForm({ children }: { children: React.ReactNode }) {
	return (
		<div className="max-w-2xl mx-auto mt-5">
			<Heading>Editar usuario</Heading>
			<form className="mt-5 space-y-4 text-black">
				{children}
				<button type="submit" className="w-full text-center p-2 dark:bg-red-600 bg-blue-400 text-white">
					Guardar usuario
				</button>
			</form>
		</div>
	);
}
