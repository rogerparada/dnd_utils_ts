import { Money as MoneyPrisma, SpellsWeapon as SpellsWeaponPrisma, SpellsWeapon, PlayerSkills, Player as PlayerPrisma, Spell } from "@prisma/client";

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

// export type Attack = {
// 	id: number;
// 	name?: string;
// 	bonus?: string | number;
// 	damage?: string;
// };

export type Attribute = "Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma";

export type Attributes = {
	Strength: { value: number; proficiency: boolean };
	Dexterity: { value: number; proficiency: boolean };
	Constitution: { value: number; proficiency: boolean };
	Intelligence: { value: number; proficiency: boolean };
	Wisdom: { value: number; proficiency: boolean };
	Charisma: { value: number; proficiency: boolean };
};

export type Player = Omit<PlayerPrisma, "id" | "userId">;
export type Skills = Omit<PlayerSkills, "id" | "playerId">;
export type Money = Pick<MoneyPrisma, "pc" | "pp" | "pe" | "po" | "ppt">;
export type SpellsWeapon = Pick<SpellsWeaponPrisma, "id" | "name" | "DamageType" | "bonus">;

export type FullPlayer = Player & {
	id?: string;
	userId: string;
	attributes: Attributes;
	skills: Skills;
};

export type SkillDependence = { name: keyof Skills; dependence: keyof Attributes };

export type UserInfo = {
	username?: string;
	userId?: string;
};

export type PlayerSpellsItem = {
	level: number;
	items: { id: Spell["id"]; name: Spell["name"] }[];
};
