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
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			extend: {
				backgroundImage: {
					"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
					"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				},
				spacing: {
					"100": "25rem",
					"128": "32rem",
					"144": "36rem",
					"160": "40rem",
				},
			},
		},
	},
	plugins: [addDynamicIconSelectors(), tailwindForms],
};
export default config;
