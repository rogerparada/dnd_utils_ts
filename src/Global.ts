import { Colors, ClassImages } from "./types";
import { Attribute, Attributes, ClassSelect, HabilitesItem, ItemSelect, SkillDependence } from "./types/Player";

export const colors: Colors = {
	Bard: { bg: "bg-fuchsia-400", text: "text-fuchsia-400", border: "border-fuchsia-400" },
	Warlock: { bg: "bg-violet-700", text: "text-violet-700", border: "border-violet-700" },
	Cleric: { bg: "bg-slate-400", text: "text-slate-400", border: "border-slate-400" },
	Druid: { bg: "bg-green-500", text: "text-green-500", border: "border-green-500" },
	Ranger: { bg: "bg-lime-800", text: "text-lime-800", border: "border-lime-800" },
	Sorcerer: { bg: "bg-red-500", text: "text-red-500", border: "border-red-500" },
	Wizard: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-600" },
	Paladin: { bg: "bg-amber-300", text: "text-amber-300", border: "border-amber-300" },
	Unknown: { bg: "bg-indigo-100", text: "text-indigo-100", border: "border-indigo-100" },
	None: { bg: "bg-cyan-900", text: "text-cyan-900", border: "border-cyan-900" },
};

export const magicSchoolColors: Colors = {
	Abjuration: { bg: "bg-blue-400", text: "text-blue-400", border: "border-blue-400" },
	Conjuration: { bg: "bg-teal-400", text: "text-teal-400", border: "border-teal-400" },
	Divination: { bg: "bg-yellow-500", text: "text-yellow-500", border: "border-yellow-500" },
	Enchantment: { bg: "bg-pink-400", text: "text-pink-400", border: "border-pink-400" },
	Evocation: { bg: "bg-red-400", text: "text-red-400", border: "border-red-400" },
	Illusion: { bg: "bg-purple-400", text: "text-purple-400", border: "border-purple-400" },
	Necromancy: { bg: "bg-gray-700", text: "text-gray-700", border: "border-gray-700" },
	Transmutation: { bg: "bg-green-400", text: "text-green-400", border: "border-green-400" },
} as const;

export const images: ClassImages = {
	Bard: { src: "/images/Classes/Bardo.svg", alt: "Bard" },
	Warlock: { src: "/images/Classes/Brujo.svg", alt: "Warlock" },
	Cleric: { src: "/images/Classes/Clerigo.svg", alt: "Cleric" },
	Druid: { src: "/images/Classes/Druida Invert.svg", alt: "Druid" },
	Ranger: { src: "/images/Classes/Ranger.svg", alt: "Ranger" },
	Sorcerer: { src: "/images/Classes/Hechicero.svg", alt: "Sorcerer" },
	Wizard: { src: "/images/Classes/Mago.svg", alt: "Wizard" },
	Paladin: { src: "/images/Classes/Paladin.svg", alt: "Paladin" },
	None: { src: "/images/Dices/D20.svg", alt: "D20" },
};

export const classes: ClassSelect[] = [
	{ name: "Barbarian", spellCaster: false },
	{ name: "Bard", spellCaster: true },
	{ name: "Warlock", spellCaster: true },
	{ name: "Cleric", spellCaster: true },
	{ name: "Druid", spellCaster: true },
	{ name: "Ranger", spellCaster: true },
	{ name: "Fighter", spellCaster: false },
	{ name: "Sorcerer", spellCaster: true },
	{ name: "Wizard", spellCaster: true },
	{ name: "Paladin", spellCaster: true },
	{ name: "Rogue", spellCaster: false },
	{ name: "Monk", spellCaster: false },
];

export const races: ItemSelect[] = [
	{
		name: "Dwarf",
		sub: [{ name: "Hill Dwarf" }, { name: "Mountain Dwarf" }, { name: "Duergar" }],
	},
	{
		name: "Elf",
		sub: [{ name: "High Elf" }, { name: "Wood Elf" }, { name: "Dark Elf (Drow)" }],
	},
	{
		name: "Halfling",
		sub: [{ name: "Lightfoot Halfling" }, { name: "Stout Halfling" }],
	},
	{
		name: "Human",
		sub: [],
	},
	{
		name: "Dragonborn",
		sub: [],
	},
	{
		name: "Gnome",
		sub: [{ name: "Forest Gnome" }, { name: "Rock Gnome" }],
	},
	{
		name: "Half-Elf",
		sub: [],
	},
	{
		name: "Half-Orc",
		sub: [],
	},
	{
		name: "Tiefling",
		sub: [],
	},
];

export const background: ItemSelect[] = [
	{ name: "Acolyte" },
	{ name: "Charlatan" },
	{ name: "Criminal" },
	{ name: "Entertainer" },
	{ name: "Folk Hero" },
	{ name: "Guild Artisan" },
	{ name: "Hermit" },
	{ name: "Noble" },
	{ name: "Outlander" },
	{ name: "Sage" },
	{ name: "Sailor" },
	{ name: "Soldier" },
	{ name: "Urchin" },
];

export const alignment: ItemSelect[] = [
	{ name: "Lawful Good" },
	{ name: "Neutral Good" },
	{ name: "Chaotic Good" },
	{ name: "Lawful Neutral" },
	{ name: "True Neutral" },
	{ name: "Chaotic Neutral" },
	{ name: "Lawful Evil" },
	{ name: "Neutral Evil" },
	{ name: "Chaotic Evil" },
];

export const chars: Record<string, number> = {
	Fuerza: 0,
	Destreza: 0,
	Constitución: 0,
	Inteligencia: 0,
	Sabiduría: 0,
	Carisma: 0,
};

export const habilidades: HabilitesItem[] = [
	{ name: "Acrobacias", value: 0, depende: "Destreza" },
	{ name: "Atletismo", value: 0, depende: "Fuerza" },
	{ name: "C. Arcano", value: 0, depende: "Inteligencia" },
	{ name: "Engaño", value: 0, depende: "Carisma" },
	{ name: "Historia", value: 0, depende: "Inteligencia" },
	{ name: "Interpretación", value: 0, depende: "Carisma" },
	{ name: "Intimidación", value: 0, depende: "Inteligencia" },
	{ name: "Juego Manos", value: 0, depende: "Destreza" },
	{ name: "Medicina", value: 0, depende: "Sabiduría" },
	{ name: "Naturaleza", value: 0, depende: "Inteligencia" },
	{ name: "Percepción", value: 0, depende: "Sabiduría" },
	{ name: "Perspicacia", value: 0, depende: "Sabiduría" },
	{ name: "Persuasión", value: 0, depende: "Carisma" },
	{ name: "Religión", value: 0, depende: "Inteligencia" },
	{ name: "Sigilo", value: 0, depende: "Destreza" },
	{ name: "Supervivencia", value: 0, depende: "Sabiduría" },
	{ name: "T. Animales", value: 0, depende: "Sabiduría" },
];

export const escuelas: string[] = [
	"Abjuración",
	"Adivinación",
	"Conjuración",
	"Encantamiento",
	"Evocación",
	"Ilusión",
	"Nigromancia",
	"Transmutación",
];

export const skillsDependencies: SkillDependence[] = [
	{ name: "Acrobatics", dependence: "Strength" },
	{ name: "Athletics", dependence: "Strength" },
	{ name: "Arcana", dependence: "Intelligence" },
	{ name: "Deception", dependence: "Charisma" },
	{ name: "History", dependence: "Intelligence" },
	{ name: "Performance", dependence: "Charisma" },
	{ name: "SleightOfHand", dependence: "Dexterity" },
	{ name: "Medicine", dependence: "Wisdom" },
	{ name: "Nature", dependence: "Intelligence" },
	{ name: "Perception", dependence: "Wisdom" },
	{ name: "Insight", dependence: "Wisdom" },
	{ name: "Persuasion", dependence: "Charisma" },
	{ name: "Religion", dependence: "Intelligence" },
	{ name: "Stealth", dependence: "Dexterity" },
	{ name: "Survival", dependence: "Wisdom" },
	{ name: "AnimalHandling", dependence: "Wisdom" },
];

export const attributes: (keyof Attributes)[] = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

export const spellLevelByClass: Record<string, Record<number, number>> = {
	Wizard: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5, 11: 6, 12: 6, 13: 7, 14: 7, 15: 8, 16: 8, 17: 9, 18: 9, 19: 9, 20: 9 },
	Cleric: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5, 11: 6, 12: 6, 13: 7, 14: 7, 15: 8, 16: 8, 17: 9, 18: 9, 19: 9, 20: 9 },
	Druid: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5, 11: 6, 12: 6, 13: 7, 14: 7, 15: 8, 16: 8, 17: 9, 18: 9, 19: 9, 20: 9 },
	Bard: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5, 11: 6, 12: 6, 13: 7, 14: 7, 15: 8, 16: 8, 17: 9, 18: 9, 19: 9, 20: 9 },
	Sorcerer: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5, 11: 6, 12: 6, 13: 7, 14: 7, 15: 8, 16: 8, 17: 9, 18: 9, 19: 9, 20: 9 },
	Paladin: { 1: 0, 2: 1, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 2, 9: 3, 10: 3, 11: 3, 12: 3, 13: 4, 14: 4, 15: 4, 16: 4, 17: 5, 18: 5, 19: 5, 20: 5 },
	Ranger: { 1: 0, 2: 1, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 2, 9: 3, 10: 3, 11: 3, 12: 3, 13: 4, 14: 4, 15: 4, 16: 4, 17: 5, 18: 5, 19: 5, 20: 5 },
	Warlock: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5, 11: 5, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 5, 18: 5, 19: 5, 20: 5 },
};

// type SpellSlotLevels = `slot_${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;

type SpellSlots = Partial<Record<string, number>>;

type CasterProgression = Record<string, SpellSlots>;

type SpellsCaster = Record<"fullCaster" | "halfCaster" | "warlock", CasterProgression>;

const spellsCaster: SpellsCaster = {
	fullCaster: {
		"1": { slot_1: 2 },
		"2": { slot_1: 3 },
		"3": { slot_1: 4, slot_2: 2 },
		"4": { slot_1: 4, slot_2: 3 },
		"5": { slot_1: 4, slot_2: 3, slot_3: 2 },
		"6": { slot_1: 4, slot_2: 3, slot_3: 3 },
		"7": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 1 },
		"8": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 2 },
		"9": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 1 },
		"10": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2 },
		"11": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2, slot_6: 1 },
		"12": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2, slot_6: 1 },
		"13": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2, slot_6: 1, slot_7: 1 },
		"14": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2, slot_6: 1, slot_7: 1 },
		"15": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2, slot_6: 1, slot_7: 1, slot_8: 1 },
		"16": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2, slot_6: 1, slot_7: 1, slot_8: 1 },
		"17": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2, slot_6: 1, slot_7: 1, slot_8: 1, slot_9: 1 },
		"18": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 3, slot_6: 1, slot_7: 1, slot_8: 1, slot_9: 1 },
		"19": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 3, slot_6: 2, slot_7: 1, slot_8: 1, slot_9: 1 },
		"20": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 3, slot_6: 2, slot_7: 2, slot_8: 1, slot_9: 1 },
	},
	halfCaster: {
		"1": {},
		"2": { slot_1: 2 },
		"3": { slot_1: 3 },
		"4": { slot_1: 3 },
		"5": { slot_1: 4, slot_2: 2 },
		"6": { slot_1: 4, slot_2: 2 },
		"7": { slot_1: 4, slot_2: 3 },
		"8": { slot_1: 4, slot_2: 3 },
		"9": { slot_1: 4, slot_2: 3, slot_3: 2 },
		"10": { slot_1: 4, slot_2: 3, slot_3: 2 },
		"11": { slot_1: 4, slot_2: 3, slot_3: 3 },
		"12": { slot_1: 4, slot_2: 3, slot_3: 3 },
		"13": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 1 },
		"14": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 1 },
		"15": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 2 },
		"16": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 2 },
		"17": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 1 },
		"18": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 1 },
		"19": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2 },
		"20": { slot_1: 4, slot_2: 3, slot_3: 3, slot_4: 3, slot_5: 2 },
	},

	warlock: {
		"1": { slot_1: 1 },
		"2": { slot_1: 2 },
		"3": { slot_1: 2 },
		"4": { slot_2: 2 },
		"5": { slot_2: 2 },
		"6": { slot_3: 2 },
		"7": { slot_3: 2 },
		"8": { slot_4: 2 },
		"9": { slot_4: 2 },
		"10": { slot_5: 2 },
		"11": { slot_5: 3 },
		"12": { slot_5: 3 },
		"13": { slot_5: 3 },
		"14": { slot_5: 3 },
		"15": { slot_5: 3 },
		"16": { slot_5: 3 },
		"17": { slot_5: 4 },
		"18": { slot_5: 4 },
		"19": { slot_5: 4 },
		"20": { slot_5: 4 },
	},
};

export const spellsCasters: Record<string, CasterProgression> = {
	Bard: spellsCaster["fullCaster"],
	Cleric: spellsCaster["fullCaster"],
	Druid: spellsCaster["fullCaster"],
	Paladin: spellsCaster["halfCaster"],
	Ranger: spellsCaster["halfCaster"],
	Sorcerer: spellsCaster["fullCaster"],
	Warlock: spellsCaster["warlock"],
	Wizard: spellsCaster["fullCaster"],
};

export const spellCastingAbility: Record<string, Attribute> = {
	Bard: "Charisma",
	Cleric: "Wisdom",
	Druid: "Wisdom",
	Paladin: "Charisma",
	Ranger: "Wisdom",
	Sorcerer: "Charisma",
	Warlock: "Charisma",
	Wizard: "Wisdom",
};
