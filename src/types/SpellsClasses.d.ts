import { Classes, Spell, SpellClass } from "@prisma/client";

export type Color = {
	bg: string;
	text: string;
	border: string;
};

export type Colors = {
	[key: string]: Color;
};

export type ClassImage = {
	src: string;
	alt: string;
};

export type ClassImages = {
	[key: string]: ClassImage;
};

export type Ability = {
	en: string;
	es: string;
	de: string;
};

export type Abilities = {
	[key: string]: Ability;
};

export type FullSpellClass = SpellClass & { class: Classes };

export type FullSpell = Spell & {
	classes: FullSpellClass[];
};

export type SpellClasses = Spell & {
	classes: SpellClass[];
};

export type Dice = {
	faces?: number;
	value: number;
	primary?: string;
	secondary?: string;
	tertiary?: string;
	symbols?: string;
	rolling?: boolean;
	empty?: boolean;
	id: number;
};
