"use client";

import { changeLanguage } from "@/actions/auth/create-languageCookie.action";

type LanguageProps = {
	hideMenu: boolean;
	handleClose: (key: string) => void;
};

const setLanguage = async (lang: string) => {
	await changeLanguage(lang);
};

export default function Language({ hideMenu, handleClose }: LanguageProps) {
	const handleClick = async (lang: string) => {
		setLanguage(lang);
		handleClose("language");
	};

	return (
		<>
			<div className="md:hidden">
				<div className="flex justify-end pr-4 items-center font-black w-full">
					<span>Idioma</span>
					<button className="text-white text-2xl p-2 rounded-md w-auto h-10 flex justify-center gap-2" onClick={() => handleClose("language")}>
						<span className="icon-[ion--language]" />
					</button>
				</div>

				<div className={`flex flex-col w-full transition-all ease-in-out duration-300 ${hideMenu ? "max-h-0 opacity-0" : "max-h-40 opacity-100"}`}>
					<button className="flex gap-2 w-full p-1 items-center px-3" onClick={() => handleClick("es")}>
						<span className="icon-[circle-flags--es]" />
						<span>Spanish{hideMenu}</span>
					</button>
					<hr className="border-red-800 dark:border-slate-700" />
					<button className="flex gap-2 w-full p-1 items-center px-3" onClick={() => handleClick("en")}>
						<span className="icon-[circle-flags--uk]" />
						<span>English</span>
					</button>
					<hr className="border-red-800 dark:border-slate-700" />
					<button className="flex gap-2 w-full p-1 items-center rounded-b-md  px-3" onClick={() => handleClick("de")}>
						<span className="icon-[circle-flags--de]" />
						<span>German</span>
					</button>
				</div>
			</div>
			<div className="relative hidden md:block">
				<button className="border-red 8ext-2xl p-2 rounded-md w-auto h-10 flex justify-center gap-2" onClick={() => handleClose("language")}>
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
		</>
	);
}
