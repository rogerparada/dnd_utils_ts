"use client";
import AddPlayer from "@/src/components/combat/AddPlayer";
import CombatButton from "@/src/components/combat/CombatButton";
import Player from "@/src/components/combat/Player";
import PlayerList from "@/src/components/combat/PlayerList";
import Heading from "@/src/components/ui/Heading";
import { useAppStore } from "@/src/store/useAppStore";
import { useMemo } from "react";

export default function CombatPage() {
	const players = useAppStore((state) => state.players);
	const clearPlayers = useAppStore((state) => state.clearPlayers);
	const enableButton = useMemo(() => players.length < 2, [players.length]);

	return (
		<div className="container mx-auto p-5 min-h-dvh flex flex-col">
			<Heading className="mb-10">
				{<span className="icon-[game-icons--crossed-swords] text-4xl" />}
				&nbsp;Combate
			</Heading>
			<div className="flex flex-row gap-2 overflow-auto items-baseline">
				{players.map((player, index) => (
					<Player player={player} key={`player-${index}`} />
				))}
			</div>
			<div className="w-full h-full flex border-t border-white mt-3 flex-1">
				<div className="flex-1">
					<PlayerList players={players} />
				</div>
				<div className="w-56 border-l border-white p-5">
					<CombatButton enabled={enableButton} />
					<AddPlayer />
					<button className="w-full text-center bg-red-500 p-2 font-bold text-white mt-10" onClick={() => clearPlayers()}>
						Limpiar lista
					</button>
				</div>
			</div>
		</div>
	);
}
