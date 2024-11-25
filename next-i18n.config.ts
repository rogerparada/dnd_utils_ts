import path from "path";

const nextI18NextConfig = {
	i18n: {
		locales: ["en", "es", "de"],
		defaultLocale: "es",
	},
	localePath: path.resolve("./public/locales"),
};

export default nextI18NextConfig;
