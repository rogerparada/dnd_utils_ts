"use client";

import { createNewPlayer } from "@/actions/player/create-player.action";
import { useAppStore } from "@/src/store/useAppStore";
import { UserInfo } from "@/src/types";
import Swal from "sweetalert2";

type PlayerBarProps = {
	userInfo?: UserInfo;
	edit?: boolean;
};

export default function PlayerBar({ userInfo, edit }: PlayerBarProps) {
	const player = useAppStore((state) => state.player);
	const resetPlayer = useAppStore((state) => state.resetPlayer);

	const savePlayer = async () => {
		if (!edit) {
			const result = await createNewPlayer({ ...player, ...userInfo });
			if (!result) {
				Swal.fire({ title: "Error al crear personaje", icon: "error" });
				return;
			}
			Swal.fire({ title: "Se ha creado tu personaje", icon: "success" });
			resetPlayer();
		}
	};

	return (
		<div className="fixed bottom-0 z-30 bg-red-600 dark:bg-black w-full h-14 p-2">
			<div className="container mx-auto flex gap-2">
				<span className="flex-1"></span>
				{!userInfo?.username && <span className="text-center text-sm font-black text-white">Inicia sesión para guardar tu progreso</span>}
				{userInfo?.username && (
					<button
						className="bg-white text-red-600 dark:text-black font-black p-2 flex justify-center items-center gap-2"
						onClick={() => savePlayer()}
					>
						<span className="icon-[ri--save-3-fill]" />
						<span className="font-black text-sm">Guardar</span>
					</button>
				)}
			</div>
		</div>
	);
}
