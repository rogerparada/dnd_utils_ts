"use client";
import { SearchSchema } from "@/src/schema";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SpellSearchForm() {
	const router = useRouter();
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	const handleSearchForm = (formData: FormData) => {
		const data = {
			search: formData.get("search"),
		};

		const result = SearchSchema.safeParse(data);
		if (!result.success) {
			result.error.issues.forEach((issue) => console.log(issue.message));
			return;
		}
		params.set("search", result.data.search);
		router.push(`${pathName.includes("/search") ? pathName : pathName + "/search"}?${params.toString()}`);
	};

	return (
		<form action={handleSearchForm} className="flex items-center text-black">
			<input type="text" placeholder="Buscar conjuro" className="p-2 placeholder-gray-400 w-full h-12" name="search" />
			<input type="submit" value="Buscar" className="bg-blue-400 hover:bg-blue-500 uppercase text-white cursor-pointer p-3 text-sm font-black h-12" />
		</form>
	);
}
