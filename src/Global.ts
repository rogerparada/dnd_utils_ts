import { Colors, ClassImages } from "./types";
import { Attributes, ClassSelect, HabilitesItem, ItemSelect, SkillDependence } from "./types/Player";

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
