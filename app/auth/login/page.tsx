"use client";
import { useState } from "react";
import { login } from "@/actions/login-user-action";
import { Dice } from "@/src/types";
import Link from "next/link";
import LoginDice from "@/src/components/ui/LoginDice";
import { redirect } from "next/navigation";

export default function LoginPage() {
	const [dice, setDice] = useState<Dice>({
		id: 1,
		value: 1,
		primary: "rgb(255,0,0)",
		secondary: "rgb(255,0,0)",
		symbols: "white",
		empty: true,
		rolling: true,
	});

	const [error, setError] = useState("");

	const handleSubmit = async (formData: FormData) => {
		setDice({ ...dice, rolling: true });
		const data = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		const response = await login(data);
		if (response?.error) {
			setError(`Pifia - ${response.error}`);
			setDice({ ...dice, empty: false, value: 1, rolling: false });
			return;
		}

		console.log(response);
		setDice({ ...dice, empty: false, value: 20, rolling: false });
		redirect("/");
	};

	return (
		<>
			<div className="bg-white shadow max-w-xl p-5 pb-10 h-screen md:h-auto mx-auto md:mt-20">
				<div className="flex justify-center my-5">
					<LoginDice dice={dice} />
				</div>
				<form action={handleSubmit} className="space-y-5 mx-12">
					{error && <div className="p-4 bg-red-500 text-white uppercase font-black text-center text-xs">{error}</div>}
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
					<input type="submit" value="Iniciar sesión" className="bg-blue-500 text-white uppercase font-black text-sm p-3 w-full rounded-lg" />
				</form>
			</div>

			<div className="text-center mt-5">
				<span>Necesitas una cuenta, regístrate </span>
				<Link href={"/auth/register"} className="text-blue-300">
					aquí
				</Link>
			</div>
		</>
	);
}
