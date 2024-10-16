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
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [addDynamicIconSelectors(), tailwindForms],
};
export default config;
