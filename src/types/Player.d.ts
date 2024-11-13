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
	Strength: { raw: number; value: number };
	Dexterity: { raw: number; value: number };
	Constitution: { raw: number; value: number };
	Intelligence: { raw: number; value: number };
	Wisdom: { raw: number; value: number };
	Charisma: { raw: number; value: number };
};
