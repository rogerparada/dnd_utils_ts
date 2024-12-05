"use client";

import createUser from "@/actions/register-user-action";
import LoginDice from "@/src/components/ui/LoginDice";
import { Dice } from "@/src/types";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
	const [error, setError] = useState("");

	const dice: Dice = { value: 20, id: 1, primary: "rgb(59 130 246)", secondary: "rgb(59 130 246)", symbols: "white" };

	const handleSubmit = async (formData: FormData) => {
		const data = {
			username: formData.get("username"),
			email: formData.get("email"),
			password: formData.get("password"),
			password_confirm: formData.get("password_confirm"),
		};
		const response = await createUser(data);
		if (response?.error) {
			console.log(response.error);
			setError(response.error);
			return;
		}
		redirect("/auth/registered");
	};

	return (
		<>
			<div className="bg-white shadow max-w-xl p-5 pb-10 h-screen md:h-auto mx-auto md:mt-20 text-black">
				<div className="flex justify-center my-5">
					<LoginDice dice={dice} />
				</div>
				<form action={handleSubmit} className="space-y-5 mx-12">
					{error && <div className="p-4 bg-red-500 text-white uppercase font-black text-center text-xs">{error}</div>}

					<div className="w-full borde-2 border-blue-400 rounded-lg flex">
						<div className="bg-blue-500 text-white p-2 w-10 flex justify-center items-center rounded-l-lg">
							<span className="icon-[bxs--user]" />
						</div>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Nombre de usuario"
							className="rounded-r-lg flex-1 focus:border"
							required
							aria-required
						/>
					</div>
					<div className="w-full borde-2 border-blue-400 rounded-lg flex">
						<div className="bg-blue-500 text-white p-2 w-10 flex justify-center items-center rounded-l-lg">
							<span className="icon-[material-symbols--mail]" />
						</div>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Correo electrónico"
							className="rounded-r-lg flex-1 focus:border"
							required
							aria-required
						/>
					</div>
					<div className="w-full borde-2 border-blue-400 rounded-lg flex">
						<div className="bg-blue-500 text-white p-2 w-10 flex justify-center items-center rounded-l-lg">
							<span className="icon-[game-icons--key]" />
						</div>
						<input type="password" name="password" id="password" placeholder="Contraseña" className="rounded-r-lg flex-1" required />
					</div>
					<div className="w-full borde-2 border-blue-400 rounded-lg flex">
						<div className="bg-blue-500 text-white p-2 w-10 flex justify-center items-center rounded-l-lg">
							<span className="icon-[game-icons--key]" />
						</div>
						<input
							type="password"
							name="password_confirm"
							id="password_confirm"
							placeholder="Repetir contraseña"
							className="rounded-r-lg flex-1"
							required
						/>
					</div>
					<input type="submit" value="Crear cuenta" className="bg-blue-500 text-white uppercase font-black text-sm p-3 w-full rounded-lg" />
				</form>
			</div>

			<div className="text-center mt-5 space-y-3">
				<div>
					<span>Tienes una cuenta </span>
					<Link href={"/auth/login"} className="text-blue-300">
						Inicia sesión
					</Link>
				</div>
				<div>
					<span>Olvidaste tu contraseña, recupérala </span>
					<Link href={"/auth/login"} className="text-blue-300">
						aquí
					</Link>
				</div>
			</div>
		</>
	);
}
