import { StateCreator } from "zustand";
import { Attributes, FullPlayer, Skills } from "../types";
import { calculateLevel } from "../utils";

export type PlayerSliceType = {
	player: FullPlayer;
	setPlayer: (player: FullPlayer) => void;
	changeExperiencePoints: (exp: number) => void;
	changeDescription: (name: string, value: string) => void;
	changeAttributes: (name: string, value: number) => void;
	changeAttributesProficiency: (name: string, proficiency: boolean) => void;
	changeSkillsProficiency: (name: string, proficiency: boolean) => void;
	resetPlayer: () => void;
};

const MIN_EXP = 0;
const MAX_EXP = 355000;

const defaultAttributes: Attributes = {
	Charisma: { value: 10, proficiency: false },
	Constitution: { value: 10, proficiency: false },
	Dexterity: { value: 10, proficiency: false },
	Intelligence: { value: 10, proficiency: false },
	Strength: { value: 10, proficiency: false },
	Wisdom: { value: 10, proficiency: false },
};

const defaultSkill: Skills = {
	Acrobatics: false,
	AnimalHandling: false,
	Arcana: false,
	Athletics: false,
	Deception: false,
	History: false,
	Insight: false,
	Intimidation: false,
	Investigation: false,
	Medicine: false,
	Nature: false,
	Perception: false,
	Performance: false,
	Persuasion: false,
	Religion: false,
	SleightOfHand: false,
	Stealth: false,
	Survival: false,
};

const defaultPlayer: FullPlayer = {
	name: "",
	className: "",
	level: 1,
	race: "",
	userId: "",
	background: "",
	alignment: "",
	experience: 0,
	proficiency: 2,
	skills: defaultSkill,
	attributes: defaultAttributes,
};

export const createPlayerSlice: StateCreator<PlayerSliceType> = (set, get) => ({
	player: defaultPlayer,

	setPlayer: (player) => {
		set(() => ({
			player,
		}));
	},
	changeExperiencePoints: (exp) => {
		const level = calculateLevel(exp);

		const proficiency = Math.floor((level - 1) / 4) + 2;

		if (exp >= MIN_EXP && exp <= MAX_EXP) {
			set((state) => ({
				player: { ...state.player, experience: exp, level, proficiency },
			}));
		}
	},
	changeDescription: (name, value) => {
		set((state) => ({
			player: { ...state.player, [name]: value },
		}));
	},
	changeAttributes: (name, value) => {
		if (value >= 0 && value <= 20) {
			set((state) => ({
				player: {
					...state.player,
					attributes: {
						...state.player.attributes,
						[name]: { value, proficiency: false },
					},
				},
			}));
		}
	},
	changeAttributesProficiency: (name, proficiency) => {
		const key = name as keyof Attributes;
		const value = get().player.attributes[key].value;

		set((state) => ({
			player: {
				...state.player,
				attributes: {
					...state.player.attributes,
					[key]: { value, proficiency },
				},
			},
		}));
	},
	changeSkillsProficiency: (name, proficiency) => {
		set((state) => ({
			player: {
				...state.player,
				skills: {
					...state.player.skills,
					[name]: proficiency,
				},
			},
		}));
	},
	resetPlayer: () => {
		set(() => ({
			player: defaultPlayer,
		}));
	},
});
