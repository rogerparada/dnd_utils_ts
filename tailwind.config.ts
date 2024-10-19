import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";
import tailwindForms from "@tailwindcss/forms";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontSize: {
				xxs: "0.65rem",
			},
			lineHeight: {
				xxs: "0.75rem",
			},
		},
	},
	plugins: [addDynamicIconSelectors(), tailwindForms],
};
export default config;
