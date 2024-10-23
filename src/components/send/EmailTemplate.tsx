"use client";
import Link from "next/link";
import React from "react";

type EmailTemplateProps = {
	name: string;
	token: string;
};

export default function EmailTemplate({ name, token }: EmailTemplateProps) {
	const url = process.env.BASE_URL;
	return (
		<>
			<h1 className="text-2xl">Gracias por registrarte {name}</h1>
			<p>Solo falta un paso para verificar tu cuenta</p>
			<Link href={`${url}/api/verify-email?token=${token}`} className="p-3 uppercase bg-blue-600 text-white">
				Verificar mi email
			</Link>
		</>
	);
}
