import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CombatSliceType, createCombarSlice } from "./combatSlice";
import { createPlayerSlice, PlayerSliceType } from "./playerSlice";
import { createEquipmentSlice, EquipmentSliceType } from "./equipmentSlice";

export const useAppStore = create<CombatSliceType & PlayerSliceType & EquipmentSliceType>()(
	devtools(
		persist(
			(...a) => ({
				...createCombarSlice(...a),
				...createPlayerSlice(...a),
				...createEquipmentSlice(...a),
			}),
			{ name: "dnd-storage" }
		)
	)
);
