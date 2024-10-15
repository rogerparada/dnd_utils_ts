import { Colors, ClassImages, Abilities } from "./types";

export const colors: Colors = {
	Bard: { bg: "bg-fuchsia-400", text: "text-fuchsia-400", border: "border-fuchsia-400" },
	Warlock: { bg: "bg-violet-700", text: "text-violet-700", border: "border-violet-700" },
	Cleric: { bg: "bg-slate-400", text: "text-slate-400", border: "border-slate-400" },
	Druid: { bg: "bg-green-500", text: "text-green-500", border: "border-green-500" },
	Ranger: { bg: "bg-lime-800", text: "text-lime-800", border: "border-lime-800" },
	Sorcerer: { bg: "bg-red-500", text: "text-red-500", border: "border-red-500" },
	Wizard: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-600" },
	Paladin: { bg: "bg-amber-300", text: "text-amber-300", border: "border-amber-300" },
	None: { bg: "bg-cyan-300", text: "text-cyan-300", border: "border-cyan-300" },
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
