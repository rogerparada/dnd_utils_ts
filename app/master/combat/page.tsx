"use client";
import AddPlayer from "@/src/components/combat/AddPlayer";
import CombatButton from "@/src/components/combat/CombatButton";
import Player from "@/src/components/combat/Player";
import PlayerList from "@/src/components/combat/PlayerList";
import Heading from "@/src/components/ui/Heading";
import { Character } from "@/src/schema";
import { usePlayerStore } from "@/src/store/playerStore";
import { useEffect } from "react";

export default function CombatPage() {
	const players = usePlayerStore((state) => state.players);
	const fillPlayers = usePlayerStore((state) => state.fillPlayers);
	const clearPlayers = usePlayerStore((state) => state.clearPlayers);

	const defaultPlayers: Character[] = [
		{ id: "1", name: "Druid", type: "Player", initiative: 1 },
		{ id: "2", name: "Troll", type: "Enemy", initiative: 1 },
		{ id: "3", name: "Archer", type: "Ally", initiative: 1 },
		{ id: "4", name: "Burger", type: "Neutral", initiative: 1 },
		{ id: "5", name: "Boss", type: "Boss", initiative: 2 },
	];

	useEffect(() => {
		if (players.length === 0) {
			fillPlayers(defaultPlayers);
		}
	}, [defaultPlayers, fillPlayers, players.length]);

	return (
		<div className="container mx-auto p-5 min-h-dvh flex flex-col">
			<Heading className="mb-10">Combate</Heading>
			<div className="flex flex-row gap-2 overflow-auto items-baseline">
				{players.map((player, index) => (
					<Player player={player} key={`player-${index}`} />
				))}
			</div>
			<div className="w-full h-full flex border-t border-black mt-3 flex-1">
				<div className="flex-1">
					<PlayerList players={players} />
				</div>
				<div className="w-56 border-l border-black p-5">
					<CombatButton />
					<AddPlayer />
					<button className="w-full text-center bg-red-500 p-2 font-bold text-white mt-10" onClick={() => clearPlayers()}>
						Limpiar lista
					</button>
				</div>
			</div>
		</div>
	);
}
