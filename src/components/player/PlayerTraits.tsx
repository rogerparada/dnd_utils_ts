import { useTranslations } from "next-intl";
import React from "react";
import MultipleBox from "./controls/MultipleBox";
import DescriptionBox from "./controls/Boxes/DescriptionBox";

export default function PlayerTraits() {
	const t = useTranslations("player");
	return (
		<>
			<div id="col3" className="flex flex-col">
				<div className="bg-gray-300 w-full p-5 rounded-xl">
					<MultipleBox name="puntos" labels={[t("PersonalityTraits"), t("Ideals"), t("Bonds"), t("Flaws")]} />
				</div>
				<DescriptionBox name="rya" label={t("TraitsAttributes")} max />
			</div>
		</>
	);
}
