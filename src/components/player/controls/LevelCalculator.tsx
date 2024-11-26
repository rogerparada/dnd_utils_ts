import { useTranslations } from "next-intl";
import { useAppStore } from "@/src/store/useAppStore";

export default function LevelCalculator() {
	const t = useTranslations("player");

	const level = useAppStore((state) => state.player.level);

	return (
		<div className="mt-10 text-3xl">
			<b>{t("Level")}</b> {level}
		</div>
	);
}
