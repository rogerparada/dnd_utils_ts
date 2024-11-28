import { StateCreator } from "zustand";

import { nanoid } from "nanoid";
import { AttackSpell, PartialAttackSpell } from "../schema/AttackSpellSchema";

export type EquipmentSliceType = {
	attackSpellsThrows: AttackSpell[];
	addAttackOrSpell: (item: PartialAttackSpell) => void;
	updateAttackOrSpell: (value: AttackSpell) => void;
	deleteAttackOrSpell: (id: string) => void;
};

export const createEquipmentSlice: StateCreator<EquipmentSliceType> = (set) => ({
	attackSpellsThrows: [],
	addAttackOrSpell: (item) => {
		const newItem = { ...item, id: nanoid() };
		set((state) => ({
			attackSpellsThrows: [...state.attackSpellsThrows, newItem],
		}));
	},
	updateAttackOrSpell: (value) => {
		set((state) => ({
			attackSpellsThrows: state.attackSpellsThrows.map((item) => (item.id === value.id ? value : item)),
		}));
	},
	deleteAttackOrSpell: (id) => {
		set((state) => ({
			attackSpellsThrows: state.attackSpellsThrows.filter((item) => item.id !== id),
		}));
	},
});
