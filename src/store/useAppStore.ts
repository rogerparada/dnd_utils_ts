import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createPlayerSlice, PlayerSliceType } from "./playerSlice";
import { createEquipmentSlice, EquipmentSliceType } from "./equipmentSlice";
import { PlayerSpellSliceType, createPlayerSpellSlice } from "./spellsSlice";

export const useAppStore = create<PlayerSliceType & EquipmentSliceType & PlayerSpellSliceType>()(
	devtools(
		persist(
			(...a) => ({
				...createPlayerSlice(...a),
				...createEquipmentSlice(...a),
				...createPlayerSpellSlice(...a),
			}),
			{ name: "dnd-storage" }
		)
	)
);
