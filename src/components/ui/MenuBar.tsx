"use client";

import { useState } from "react";
import Language from "./Language";
import UserMenu from "./UserMenu";
import Link from "next/link";

type MenuBarProps = {
	username?: string;
	isAdmin?: boolean;
};

export default function MenuBar({ username, isAdmin }: MenuBarProps) {
	const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({ language: true, user: true });
	const [hideMenu, setHideMenu] = useState(true);

	const handleCloseMenu = (key: string) => {
		const newItems = { ...openItems };
		const previous = !newItems[key];
		Object.keys(newItems).forEach((objKey) => (newItems[objKey] = true));
		newItems[key] = previous;
		setOpenItems(newItems);
	};

	const handleClickMobileMenu = () => {
		setHideMenu(!hideMenu);
	};

	return (
		<div className="sticky z-40 top-0 md:h-12 w-full shadow-md shadow-red-800 dark:shadow-none text-white flex place-items-center bg-red-600 dark:bg-slate-900">
			<div className="w-full flex flex-col place-items-center gap-0 md:hidden">
				<div className="w-full flex py-4 px-4">
					<div className="logo text-3xl w-56 text-white flex items-center gap-4">
						<span className="icon-[game-icons--dice-twenty-faces-twenty]" />
						<span className="text-xl font-black">Dnd Utilities</span>
					</div>
					<span className="flex-1"></span>
					<span className="icon-[line-md--menu] text-2xl font-black" onClick={() => handleClickMobileMenu()} />
				</div>
				<div className={`w-full transition-all ease-in-out duration-500 ${hideMenu ? "max-h-0 opacity-0" : "max-h-96 opacity-100"}`}>
					<div className="text-white font-black flex flex-col gap-2 w-full">
						<hr className="border border-red-800" />
						<Link className="w-full pr-5 text-right" href={"/spells"}>
							Conjuros
						</Link>
						<hr className="border border-red-800" />
						<Link className="w-full pr-5 text-right" href={"/classes"}>
							Clases
						</Link>
						<hr className="border border-red-800" />
						<Link className="w-full pr-5 text-right" href={"/player/new"}>
							Personajes
						</Link>
						<hr className="border border-red-800" />
						<Link className="w-full pr-5 text-right" href={"/master/combat"}>
							Master
						</Link>
						<hr className="border border-red-800" />
					</div>

					<span className="flex-1"></span>
					<Language hideMenu={openItems["language"]} handleClose={handleCloseMenu} />
					<hr className="border border-red-800" />
					{username && <UserMenu hideMenu={openItems["user"]} username={username} handleClose={handleCloseMenu} />}
					<hr className="border border-red-800" />
				</div>
			</div>
			<div className="hidden w-full md:flex place-items-center px-2 gap-2">
				<div className="logo text-3xl w-56 text-white flex items-center gap-4">
					<span className="icon-[game-icons--dice-twenty-faces-twenty]" />
					<span className="text-xl font-black">Dnd Utilities</span>
				</div>

				<div className="text-white font-black flex gap-4">
					<Link href={"/spells"}>Conjuros</Link>
					<Link href={"/classes"}>Clases</Link>
					<Link href={"/player/new"}>Personajes</Link>
					<Link href={"/master/combat"}>Master</Link>
				</div>

				<span className="flex-1"></span>
				<Language hideMenu={openItems["language"]} handleClose={handleCloseMenu} />
				{username && <UserMenu hideMenu={openItems["user"]} username={username} handleClose={handleCloseMenu} isAdmin={isAdmin} />}
			</div>
		</div>
	);
}
