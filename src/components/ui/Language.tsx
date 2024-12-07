"use client";

import { changeLanguage } from "@/actions/auth/create-languageCookie.action";
import { useState } from "react";

const setLanguage = async (lang: string) => {
	await changeLanguage(lang);
};

export default function Language() {
	const [hideMenu, setHideMenu] = useState(true);

	const handleClick = async (lang: string) => {
		setLanguage(lang);
		setHideMenu(!hideMenu);
	};

	return (
		<div className="relative">
			<button className="text-white text-2xl bg-blue-500 p-2 rounded-md w-auto h-10 flex justify-center gap-2" onClick={() => setHideMenu(!hideMenu)}>
				<span className="icon-[ion--language]" />
			</button>
			<div className="text-slate-800 z-40 absolute -bottom-24 right-0 text-sm" hidden={hideMenu}>
				<button
					className="triangle-container flex gap-2 bg-white w-32 p-1 items-center rounded-t-md border border-b-0 border-slate-400 px-3"
					onClick={() => handleClick("es")}
				>
					<span className="icon-[circle-flags--es]" />
					<span>Spanish</span>
				</button>
				<hr className="text-slate-400" />
				<button className="flex gap-2 bg-white w-32 p-1 items-center border-x border-slate-400 px-3" onClick={() => handleClick("en")}>
					<span className="icon-[circle-flags--uk]" />
					<span>English</span>
				</button>
				<hr className="text-slate-400" />
				<button
					className="flex gap-2 bg-white w-32 p-1 items-center rounded-b-md border border-t-0 border-slate-400 px-3"
					onClick={() => handleClick("de")}
				>
					<span className="icon-[circle-flags--de]" />
					<span>German</span>
				</button>
			</div>
		</div>
	);
}
