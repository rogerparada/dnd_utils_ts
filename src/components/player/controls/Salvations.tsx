"use client";
import { useTranslations } from "next-intl";

type Props = {
	pass: number;
	fails: number;
};

export default function Salvations({}: Props) {
	const t = useTranslations("player");

	return (
		<div className="w-1/2 border-2 border-gray-800 h-32 bg-white rounded-md px-5 pt-5 relative">
			<div className="mb-5">
				<div className="flex justify-between mb-3">
					<label htmlFor="success" className="text-xs">
						{t("Success")}
					</label>
					<div className="flex justify-center gap-3">
						<input type="checkbox" name="success" className="rounded-full w-5 h-5" />-
						<input type="checkbox" name="success" className="rounded-full w-5 h-5" />-
						<input type="checkbox" name="success" className="rounded-full w-5 h-5" />
					</div>
				</div>
				<div className="flex justify-between gap-3">
					<label htmlFor="fails" className="text-xs">
						{t("Fails")}
					</label>
					<div className="flex justify-center gap-3">
						<input type="checkbox" name="fails" className="rounded-full w-5 h-5" />-
						<input type="checkbox" name="fails" className="rounded-full w-5 h-5" />-
						<input type="checkbox" name="fails" className="rounded-full w-5 h-5" />
					</div>
				</div>
			</div>
			<div className="flex flex-col absolute bottom-1 left-0 text-center mt-2 w-full justify-center">
				<span className="uppercase text-xs font-medium">{t("DeathSaving")}</span>
				<span className="uppercase text-xs font-medium">{t("DeathSavingThrows")}</span>
			</div>
		</div>
	);
}
