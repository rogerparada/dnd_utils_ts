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
