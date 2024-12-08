import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const readLanguageCookie = (): string => {
	const languages = ["es", "en", "de"];
	const cookieStore = cookies();

	const localeCookie = cookieStore.get("NEXT_LOCALE")?.value || "en";
	if (!languages.includes(localeCookie)) {
		const lang = localeCookie.split("-")[0];
		return languages.includes(lang) ? lang : "en";
	}
	return localeCookie;
};

export default getRequestConfig(async () => {
	const locale = readLanguageCookie();

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
