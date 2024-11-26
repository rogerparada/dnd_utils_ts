import { StateCreator } from "zustand";
import { Attributes, Player, Skills } from "../types/Player";
import { calculateLevel } from "../utils";

export type PlayerSliceType = {
	player: Player;
	proficiency: number;
	attributes: Attributes;
	skillProficiency: Skills;
	changeExperiencePoints: (exp: number) => void;
	changeDescription: (name: string, value: string) => void;
	changeAttributes: (name: string, value: number) => void;
	changeAttributesProficiency: (name: string, proficiency: boolean) => void;
	changeSkillsProficiency: (name: string, proficiency: boolean) => void;
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

export const createPlayerSlice: StateCreator<PlayerSliceType> = (set, get) => ({
	player: defaultPlayer,
	proficiency: 2,
	attributes: defaultAttributes,
	skillProficiency: defaultSkill,
	changeExperiencePoints: (exp) => {
		const level = calculateLevel(exp);

		const proficiency = Math.floor((level - 1) / 4) + 2;

		if (exp >= MIN_EXP && exp <= MAX_EXP) {
			set((state) => ({
				player: { ...state.player, experiencePoints: exp, level },
				proficiency,
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
				...state,
				attributes: {
					...state.attributes,
					[name]: { value, proficiency: false },
				},
			}));
		}
	},
	changeAttributesProficiency: (name, proficiency) => {
		const key = name as keyof Attributes;
		const value = get().attributes[key].value;

		set((state) => ({
			...state,
			attributes: {
				...state.attributes,
				[key]: { value, proficiency },
			},
		}));
	},
	changeSkillsProficiency: (name, proficiency) => {
		set((state) => ({
			...state,
			skillProficiency: {
				...state.skillProficiency,
				[name]: proficiency,
			},
		}));
	},
});
