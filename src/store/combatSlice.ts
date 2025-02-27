import { StateCreator } from "zustand";
import { Character } from "../schema";

export type CombatSliceType = {
	players: Character[];
	combatMode: boolean;
	fillPlayers: (players: Character[]) => void;
	addPlayer: (player: Character) => void;
	deletePlayer: (id: Character["id"]) => void;
	modifyInitiative: (id: Character["id"], initiative: number) => void;
	clearPlayers: () => void;
	changeCombatMode: () => void;
	nextInCombat: () => void;
};

export const createCombarSlice: StateCreator<CombatSliceType> = (set, get) => ({
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
	nextInCombat: () => {
		const newPlayers = get().players;
		const firstPlayer = newPlayers.shift();
		if (newPlayers && firstPlayer) {
			set(() => ({
				players: [...newPlayers, firstPlayer],
			}));
		}
	},
});
