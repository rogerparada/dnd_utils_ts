import { abilities } from "../Global";
import { Ability } from "../types";

export const getAbilityTranslation = (ability: string, lang: string = "en") => {
	const key = lang as keyof Ability;
	return abilities[ability][key] ?? ability;
};
