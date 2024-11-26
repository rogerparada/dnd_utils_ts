import { useTranslations } from "next-intl";

export default function HitDices() {
	const t = useTranslations("player");
	return (
		<div className="bg-white border-2 border-gray-800 w-1/2 h-32 rounded-md p-2">
			<div className="flex items-center">
				<label className="text-xs">{t("Total")}</label>
				<input type="text" className="border-0 border-b-2 w-4/5 h-6" />
			</div>
			<input type="text" className="font-bolder text-3xl w-full text-center border-0 focus:border-0 mt-2" defaultValue={"1d8"} />
			<div className="flex justify-center relative -bottom-1 text-center mt-2">
				<span className="uppercase text-xs font-bold">{t("HitDices")}</span>
			</div>
		</div>
	);
}
