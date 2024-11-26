import { useAppStore } from "@/src/store/useAppStore";
import { useMemo } from "react";

import { useTranslations } from "next-intl";

export default function PassivePerceptionBox() {
	const t = useTranslations("common");

	const wisdom = useAppStore((state) => state.attributes.Wisdom.value);
	const perceptionProficiency = useAppStore((state) => state.skillProficiency.Perception);
	const proficiency = useAppStore((state) => state.proficiency);

	const calculated = useMemo(
		() => (perceptionProficiency ? 10 + Math.floor((wisdom - 10) / 2) + proficiency : 10 + Math.floor((wisdom - 10) / 2)),
		[wisdom, perceptionProficiency, proficiency]
	);

	return (
		<div className="flex items-center pt-2">
			<div className="w-10">
				<input
					type="text"
					name="passivePerception"
					id="passivePerception"
					defaultValue={calculated}
					className="rounded-full border-solid border-2 w-16 h-16 text-2xl text-center border-black font-extrabold"
				/>
			</div>
			<div className="ml-8 border-solid border-2 w-full border-black h-12 pl-3 flex items-center">
				<label htmlFor="passivePerception" className="text-xs font-semibold uppercase">
					{t("Passive Perception")}
				</label>
			</div>
		</div>
	);
}
