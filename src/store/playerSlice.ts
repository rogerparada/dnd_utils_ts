import { StateCreator } from "zustand";
import { Attributes, Player } from "../types/Player";

export type PlayerSliceType = {
	player: Player;
	attributes: Attributes;
	changeExperiencePoints: (exp: number) => void;
	changeDescription: (name: string, value: string) => void;
	changeAttributes: (name: string, value: number) => void;
};

const MIN_EXP = 0;
const MAX_EXP = 355000;

const defaultAttributes: Attributes = {
	Strength: { raw: 0, value: 0 },
	Dexterity: { raw: 0, value: 0 },
	Constitution: { raw: 0, value: 0 },
	Intelligence: { raw: 0, value: 0 },
	Wisdom: { raw: 0, value: 0 },
	Charisma: { raw: 0, value: 0 },
};
const defaultPlayer: Player = {
	name: "",
	realName: "",
	playerClass: "",
	level: 1,
	race: "",
	background: "",
	alignment: "",
	experiencePoints: 0,
};

export const createPlayerSlice: StateCreator<PlayerSliceType> = (set) => ({
	player: defaultPlayer,
	attributes: defaultAttributes,
	changeExperiencePoints: (exp) => {
		const newLevel = (points: number) => {
			if (points < 300) return 1;
			if (points < 900) return 2;
			if (points < 2700) return 3;
			if (points < 6500) return 4;
			if (points < 14000) return 5;
			if (points < 23000) return 6;
			if (points < 34000) return 7;
			if (points < 48000) return 8;
			if (points < 64000) return 9;
			if (points < 85000) return 10;
			if (points < 100000) return 11;
			if (points < 120000) return 12;
			if (points < 140000) return 13;
			if (points < 165000) return 14;
			if (points < 195000) return 15;
			if (points < 225000) return 16;
			if (points < 265000) return 17;
			if (points < 305000) return 18;
			if (points < 355000) return 19;
			return 20;
		};

		if (exp >= MIN_EXP && exp <= MAX_EXP) {
			set((state) => ({
				player: { ...state.player, experiencePoints: exp, level: newLevel(exp) },
			}));
		}
	},
	changeDescription: (name, value) => {
		set((state) => ({
			player: { ...state.player, [name]: value },
		}));
	},
	changeAttributes: (name, value) => {
		const calculateAttribute = (value: number) => {
			if (value == 0) {
				return { raw: value, value: 0 };
			}
			if (value === 1) {
				return { raw: value, value: -5 };
			}
			if (value === 2 || value === 3) {
				return { raw: value, value: -4 };
			}
			if (value === 4 || value === 5) {
				return { raw: value, value: -3 };
			}
			if (value === 6 || value === 7) {
				return { raw: value, value: -2 };
			}
			if (value === 8 || value === 9) {
				return { raw: value, value: -1 };
			}
			if (value === 10 || value === 11) {
				return { raw: value, value: 0 };
			}
			if (value === 12 || value === 13) {
				return { raw: value, value: 1 };
			}
			if (value === 14 || value === 15) {
				return { raw: value, value: 2 };
			}
			if (value === 16 || value === 17) {
				return { raw: value, value: 3 };
			}
			if (value === 18 || value === 19) {
				return { raw: value, value: 4 };
			}
			if (value === 20 || value === 21) {
				return { raw: value, value: 5 };
			}
			return { raw: value, value: 0 };
		};
		if (value >= 0 && value <= 20) {
			set((state) => ({
				...state,
				attributes: {
					...state.attributes,
					[name]: calculateAttribute(value),
				},
			}));
		}
	},
});
