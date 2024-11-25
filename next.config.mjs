/** @type {import('next').NextConfig} */

const nextConfig = {
	webpack: (config) => {
		config.externals = [...config.externals, "bcrypt"];
		return config;
	},
	i18n: {
		locales: ["en", "es", "de"],
		defaultLocale: "es",
	},
};

export default nextConfig;
