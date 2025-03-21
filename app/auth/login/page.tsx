"use client";
import { useState } from "react";
import { login } from "@/actions/auth/login-user-action";
import { Dice } from "@/src/types";
import Link from "next/link";
import LoginDice from "@/src/components/ui/LoginDice";
import { redirect } from "next/navigation";
import ErrorBanner from "@/src/components/ui/ErrorBanner";

export default function LoginPage({ searchParams }: { searchParams: { verified: string } }) {
	const [dice, setDice] = useState<Dice>({
		id: 1,
		value: 1,
		primary: "rgb(255,0,0)",
		secondary: "rgb(255,0,0)",
		symbols: "white",
		empty: true,
		rolling: true,
	});

	const [error, setError] = useState<React.ReactNode>();

	const verified = searchParams.verified;

	const handleSubmit = async (formData: FormData) => {
		setDice({ ...dice, rolling: true });
		const data = {
			username: formData.get("username"),
			password: formData.get("password"),
		};

		const response = await login(data);

		if (!response.success && response.errors) {
			const error = response.errors.map((issue, index) => <span key={`issue-${index}`}>{issue}</span>);
			setError(<div className="flex flex-col gap-2">{error}</div>);
			setDice({ ...dice, empty: false, value: 1, rolling: false });
			return;
		}
		setDice({ ...dice, empty: false, value: 20, rolling: false });

		redirect("/");
	};

	return (
		<>
			<div className="bg-white shadow max-w-xl p-5 pb-10 h-screen md:h-auto mx-auto md:mt-20">
				<div className="flex justify-center my-5">
					<LoginDice dice={dice} />
				</div>
				{verified && (
					<div className="p-4 bg-green-500 text-white uppercase font-black text-center text-xs mx-12 mb-10">
						Has verificado tu cuenta, por favor inicia sesión
					</div>
				)}
				<form action={handleSubmit} className="space-y-5 mx-12">
					{error && <ErrorBanner>{error}</ErrorBanner>}
					<div className="w-full borde-2 border-blue-400 rounded-lg flex">
						<div className="bg-blue-500 text-white p-2 w-10 flex justify-center items-center rounded-l-lg">
							<span className="icon-[lucide--user]" />
						</div>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Usuario"
							className="rounded-r-lg flex-1 focus:border-2 focus:border-blue-500 text-sm"
							required
							aria-required
						/>
					</div>
					<div className="w-full borde-2 border-blue-400 rounded-lg flex">
						<div className="bg-blue-500 text-white p-2 w-10 flex justify-center items-center rounded-l-lg">
							<span className="icon-[game-icons--key]" />
						</div>
						<input type="password" name="password" id="password" placeholder="Contraseña" className="rounded-r-lg flex-1 text-sm" required />
					</div>
					<input type="submit" value="Iniciar sesión" className="bg-blue-500 text-white uppercase font-black text-sm p-3 w-full rounded-lg" />
				</form>
			</div>

			<div className="text-center mt-5 text-white">
				<span>Necesitas una cuenta, regístrate </span>
				<Link href={"/auth/register"} className="text-blue-300">
					aquí
				</Link>
			</div>
		</>
	);
}
