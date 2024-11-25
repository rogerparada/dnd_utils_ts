import { abilities } from "../Global";
import { Ability } from "../types";

export const getAbilityTranslation = (ability: string, lang: string = "en"): string => {
	const key = lang as keyof Ability;
	return abilities[ability][key] ?? ability;
};

export const calculateValue = (value: number): string => {
	const result = Math.floor((value - 10) / 2);
	return result > 0 ? "+" + result : "" + result;
};

export const calculateProficiencyBonus = (level: number): string => {
	if (level < 1 || level > 20) {
		throw new Error("Level must be between 1 and 20.");
	}
	const result = Math.floor((level - 1) / 4) + 2;
	return "+" + result;
};

export const calculateLevel = (points: number) => {
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
