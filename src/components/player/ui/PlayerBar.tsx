"use client";

import { createNewPlayer } from "@/actions/player/create-player.action";
import { useAppStore } from "@/src/store/useAppStore";

type PlayerBarProps = {
	username?: string;
};

export default function PlayerBar({ username }: PlayerBarProps) {
	const player = useAppStore((state) => state.player);
	const attributes = useAppStore((state) => state.attributes);
	const skills = useAppStore((state) => state.skillProficiency);

	const savePlayer = () => {
		const newPlayer = {
			name: player.name,
			className: player.playerClass,
			race: player.race,
			background: player.background,
			alignment: player.alignment,
			userId: "",
			experience: player.experiencePoints,
			level: player.level,
			attributes,
			skills,
		};

		createNewPlayer(newPlayer);
	};

	return (
		<div className="fixed bottom-0 z-30 bg-red-600 dark:bg-black w-full h-14 p-2">
			<div className="container mx-auto flex gap-2">
				<span className="flex-1"></span>
				{!username && <span className="text-center text-sm font-black">Inicia sesión para guardar tu progreso</span>}
				{username && (
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
