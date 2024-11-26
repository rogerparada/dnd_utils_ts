import { Colors, ClassImages, Abilities } from "./types";
import { ClassSelect, HabilitesItem, ItemSelect, SkillDependence } from "./types/Player";

export const colors: Colors = {
	Bard: { bg: "bg-fuchsia-400", text: "text-fuchsia-400", border: "border-fuchsia-400" },
	Warlock: { bg: "bg-violet-700", text: "text-violet-700", border: "border-violet-700" },
	Cleric: { bg: "bg-slate-400", text: "text-slate-400", border: "border-slate-400" },
	Druid: { bg: "bg-green-500", text: "text-green-500", border: "border-green-500" },
	Ranger: { bg: "bg-lime-800", text: "text-lime-800", border: "border-lime-800" },
	Sorcerer: { bg: "bg-red-500", text: "text-red-500", border: "border-red-500" },
	Wizard: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-600" },
	Paladin: { bg: "bg-amber-300", text: "text-amber-300", border: "border-amber-300" },
	None: { bg: "bg-cyan-900", text: "text-cyan-900", border: "border-cyan-900" },
};

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

export const abilities: Abilities = {
	Strength: {
		en: "Strength",
		es: "Fuerza",
		de: "Stärke",
	},
	Dexterity: {
		en: "Dexterity",
		es: "Destreza",
		de: "Geschicklichkeit",
	},
	Constitution: {
		en: "Constitution",
		es: "Constitución",
		de: "Konstitution",
	},
	Intelligence: {
		en: "Intelligence",
		es: "Inteligencia",
		de: "Intelligenz",
	},
	Wisdom: {
		en: "Wisdom",
		es: "Sabiduría",
		de: "Weisheit",
	},
	Charisma: {
		en: "Charisma",
		es: "Carisma",
		de: "Charisma",
	},
};

const clases: ClassSelect[] = [
	{ name: "Bárbaro", spellCaster: false },
	{ name: "Bardo", spellCaster: true },
	{ name: "Brujo", spellCaster: true },
	{ name: "Clérigo", spellCaster: true },
	{ name: "Druida", spellCaster: true },
	{ name: "Explorador", spellCaster: true },
	{ name: "Guerrero", spellCaster: false },
	{ name: "Hechicero", spellCaster: true },
	{ name: "Mago", spellCaster: true },
	{ name: "Paladín", spellCaster: true },
	{ name: "Picaro", spellCaster: false },
	{ name: "Monje", spellCaster: false },
];
const races: ItemSelect[] = [
	{
		name: "Enano",
		sub: [{ name: "Enano de las colinas" }, { name: "Enano de las montañas" }, { name: "Druegar" }],
	},
	{
		name: "Elfo",
		sub: [{ name: "Alto Elfo" }, { name: "Elfo de los bosques" }, { name: "Elfo Oscuro (Drow)" }],
	},
	{
		name: "Mediano",
		sub: [{ name: "Mediano Pies Ligeros" }, { name: "Mediano Fornido" }],
	},
	{
		name: "Humano",
		sub: [],
	},
	{
		name: "Dracónido",
		sub: [],
	},
	{
		name: "Gnomo",
		sub: [{ name: "Gnomo del bosque" }, { name: "Gnomo de la Roca" }],
	},
	{
		name: "SemiElfo",
		sub: [],
	},
	{
		name: "SemiOrco",
		sub: [],
	},
	{
		name: "Tiefling",
		sub: [],
	},
];
const trasfondo: ItemSelect[] = [
	{ name: "Acólito" },
	{ name: "Charlatán" },
	{ name: "Criminal" },
	{ name: "Artista" },
	{ name: "Héroe del Pueblo" },
	{ name: "Artesano Gremial" },
	{ name: "Ermitaño" },
	{ name: "Noble" },
	{ name: "Forastero" },
	{ name: "Sabio" },
	{ name: "Marinero" },
	{ name: "Soldado" },
	{ name: "Huérfano" },
];
const alineamiento: ItemSelect[] = [
	{ name: "Legal Bueno" },
	{ name: "Neutral Bueno" },
	{ name: "Caótico Bueno" },
	{ name: "Legal Neutral" },
	{ name: "Neutral" },
	{ name: "Caótico Neutral" },
	{ name: "Legal Maligno" },
	{ name: "Neutral Maligno" },
	{ name: "Caótico Maligno" },
];

const chars: Record<string, number> = {
	Fuerza: 0,
	Destreza: 0,
	Constitución: 0,
	Inteligencia: 0,
	Sabiduría: 0,
	Carisma: 0,
};

const habilidades: HabilitesItem[] = [
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

const escuelas: string[] = ["Abjuración", "Adivinación", "Conjuración", "Encantamiento", "Evocación", "Ilusión", "Nigromancia", "Transmutación"];

const skillsDependencies: SkillDependence[] = [
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

export { clases, races, alineamiento, trasfondo, habilidades, chars, escuelas, skillsDependencies };
