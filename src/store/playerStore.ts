import { create } from "zustand";
import { Character } from "../schema";
import { devtools, persist } from "zustand/middleware";

interface PlayerStore {
	players: Character[];
	combatMode: Boolean;
	fillPlayers: (players: Character[]) => void;
	addPlayer: (player: Character) => void;
	deletePlayer: (id: Character["id"]) => void;
	modifyInitiative: (id: Character["id"], initiative: number) => void;
	clearPlayers: () => void;
	changeCombatMode: () => void;
	nextInCombat: (id: Character["id"]) => void;
}

export const usePlayerStore = create<PlayerStore>()(
	devtools(
		persist(
			(set, get) => ({
				players: [],
				combatMode: false,
				fillPlayers: (newPlayers) => {
					set(() => ({
						players: newPlayers.sort((a, b) => b.initiative - a.initiative),
					}));
				},
				addPlayer: (player) => {
					set(() => ({
						players: [...get().players, player].sort((a, b) => b.initiative - a.initiative),
					}));
				},
				deletePlayer: (id) => {
					set((state) => ({
						players: state.players.filter((player) => player.id !== id),
					}));
				},
				modifyInitiative: (id, initiative) => {
					set((state) => ({
						players: state.players
							.map((player) => {
								if (player.id === id) {
									const newInitiative = player.initiative + initiative;
									if (newInitiative <= 20 && newInitiative >= 1) {
										return { ...player, initiative: newInitiative };
									}
								}
								return player;
							})
							.sort((a, b) => b.initiative - a.initiative),
					}));
				},
				clearPlayers: () => set(() => ({ players: [] })),
				changeCombatMode: () => set((state) => ({ combatMode: !state.combatMode })),
				nextInCombat: (id) => {
					const newPlayers = get().players.map((p) => {
						return { ...p, disabled: true };
					});
					const player = newPlayers.find((p) => p.id === id);
					const restPlayers = newPlayers.filter((p) => p.id !== id);

					if (player && restPlayers) {
						restPlayers[0].disabled = false;
						set(() => ({
							players: [...restPlayers, { ...player, disabled: true }],
						}));
					}
				},
			}),
			{ name: "dnd-storage" }
		)
	)
);
