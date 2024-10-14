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
