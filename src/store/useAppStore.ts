import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CombatSliceType, createCombarSlice } from "./combatSlice";
import { createPlayerSlice, PlayerSliceType } from "./playerSlice";

export const useAppStore = create<CombatSliceType & PlayerSliceType>()(
	devtools(
		persist(
			(...a) => ({
				...createCombarSlice(...a),
				...createPlayerSlice(...a),
			}),
			{ name: "dnd-storage" }
		)
	)
);
