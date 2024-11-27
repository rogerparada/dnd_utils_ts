import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const readLanguageCookie = (): string => {
	const cookieStore = cookies();
	const localeCookie = cookieStore.get("NEXT_LOCALE")?.value || "en";
	return localeCookie;
};

export default getRequestConfig(async () => {
	const locale = readLanguageCookie();

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
