import Link from "next/link";
import React from "react";

type UserMenuProps = {
	username: string;
	hideMenu: boolean;
	isAdmin?: boolean;
	handleClose: (key: string) => void;
};

export default function UserMenu({ username, hideMenu, handleClose, isAdmin }: UserMenuProps) {
	return (
		<>
			<div className="md:hidden">
				<div className="flex flex-col justify-end pr-1 items-center font-black w-full gap-2 min-h-10 ">
					<div className="flex justify-end gap-2 w-full mt-2">
						<span>Usuario</span>
						<button className="h-full flex items-center w-10 relative" onClick={() => handleClose("user")}>
							<span className="icon-[fa-solid--user-circle] text-2xl text-white" />
						</button>
					</div>

					<div className={`flex flex-col w-full transition-all ease-in-out duration-300 ${hideMenu ? "max-h-0 opacity-0" : "max-h-96 opacity-100"}`}>
						<button className="flex gap-2 text-left w-full p-1 items-center px-3" disabled>
							Bienvenido {username} {isAdmin || "Error"}
						</button>
						<hr className="border-red-800 dark:border-slate-400" />
						<button className="flex gap-2 w-full p-1 items-center  px-3">Perfil</button>
						<hr className="border-red-800 dark:border-slate-400" />
						<button className="flex gap-2 w-full p-1 items-center px-3">Personajes</button>
						{isAdmin && (
							<>
								<hr className="border-red-800 dark:border-slate-400" />
								<Link href={"/admin"} className="flex gap-2 w-full p-1 items-center px-3">
									Panel de Administrador
								</Link>
							</>
						)}
						<hr className="border-red-800 dark:border-slate-400" />
						<button className="flex gap-2 w-full p-1 items-center px-3">Cerrar sesión</button>
					</div>
				</div>
			</div>
			<div className="relative hidden md:block">
				<button className="h-full flex items-center w-10 relative" onClick={() => handleClose("user")}>
					<span className="icon-[fa-solid--user-circle] text-2xl text-white" />
				</button>
				<div className="text-slate-800 z-40 absolute top-12 right-4 text-sm" hidden={hideMenu}>
					<button
						className="triangle-container flex gap-2 bg-white text-left w-32 p-1 items-center rounded-t-md border border-b-0 border-slate-400 px-3"
						disabled
					>
						Bienvenido {username}
					</button>
					<hr className="text-slate-400" />
					<button className="flex gap-2 bg-white w-32 p-1 items-center border-x border-slate-400 px-3">Perfil</button>
					<hr className="text-slate-400" />
					<button className="flex gap-2 bg-white w-32 p-1 items-center border-x border-slate-400 px-3">Personajes</button>
					<hr className="text-slate-400" />
					{isAdmin && (
						<>
							<Link href={"/admin"} className="flex gap-2 bg-white w-32 p-1 items-center border-x border-slate-400 px-3">
								Panel de Administrador
							</Link>
							<hr className="text-slate-400" />
						</>
					)}
					<button className="flex gap-2 bg-white w-32 p-1 items-center border border-t-0 border-slate-400 px-3 rounded-b-md">Cerrar sesión</button>
				</div>
			</div>
		</>
	);
}
