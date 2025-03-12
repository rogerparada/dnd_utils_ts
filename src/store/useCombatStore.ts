import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CombatSliceType, createCombatSlice } from "./combatSlice";

export const useCombatStore = create<CombatSliceType>()(
	devtools(
		persist(
			(...a) => ({
				...createCombatSlice(...a),
			}),
			{ name: "dnd-combat-storage" }
		)
	)
);
