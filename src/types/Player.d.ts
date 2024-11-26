export type ItemSelect = {
	name: string;
	sub?: ItemSelect[];
};

export type ClassSelect = {
	name: string;
	spellCaster: boolean;
};

export type HabilitesItem = Characteristic & { depende: string };

export type onChangeChar = ({ name, value }: Pick<Characteristic, "name" | "value">) => void;

export type Attack = {
	id: number;
	name?: string;
	bonus?: string | number;
	damage?: string;
};

export type Player = {
	name: string;
	realName: string;
	level: number;
	playerClass: string;
	race: string;
	background: string;
	alignment: string;
	experiencePoints: number;
};

export type Attributes = {
	Strength: { value: number; proficiency: boolean };
	Dexterity: { value: number; proficiency: boolean };
	Constitution: { value: number; proficiency: boolean };
	Intelligence: { value: number; proficiency: boolean };
	Wisdom: { value: number; proficiency: boolean };
	Charisma: { value: number; proficiency: boolean };
};

export type Skills = {
	Acrobatics: boolean;
	AnimalHandling: boolean;
	Arcana: boolean;
	Athletics: boolean;
	Deception: boolean;
	History: boolean;
	Insight: boolean;
	Intimidation: boolean;
	Investigation: boolean;
	Medicine: boolean;
	Nature: boolean;
	Perception: boolean;
	Performance: boolean;
	Persuasion: boolean;
	Religion: boolean;
	SleightOfHand: boolean;
	Stealth: boolean;
	Survival: boolean;
};

export type SkillDependence = { name: keyof Skills; dependence: keyof Attributes };
