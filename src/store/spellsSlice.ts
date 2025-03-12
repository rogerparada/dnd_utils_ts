import { StateCreator } from "zustand";
import { PlayerSpellsItem } from "../types";
import { Spell } from "@prisma/client";

export type PlayerSpellSliceType = {
	spells: Spell["id"][];
	addSpell: (id: Spell["id"]) => void;
	removeSpell: (id: Spell["id"]) => void;
	clearSpells: () => void;
};

export const createPlayerSpellSlice: StateCreator<PlayerSpellSliceType> = (set, get) => ({
	spells: [],
	addSpell: (id) => {
		const spells = get().spells;

		if (spells.includes(id)) return;
		set((state) => ({
			spells: [...state.spells, id],
		}));
	},
	removeSpell: (id) => {
		set((state) => ({
			spells: state.spells.filter((s) => s !== id),
		}));
	},
	clearSpells: () => {
		set(() => ({
			spells: [],
		}));
	},
});
