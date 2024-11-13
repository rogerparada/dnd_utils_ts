import { useAppStore } from "@/src/store/useAppStore";

import SkillBoxItem from "./SkillBoxItem";

type SalvationBoxProps = {
	name: string;
};

export default function SalvationBox({ name }: SalvationBoxProps) {
	const attributes = useAppStore((state) => state.attributes);
	return (
		<div className="mt-3 border-solid border-2 p-3 overflow-hidden relative w-full rounded-lg border-black">
			<SkillBoxItem name="Acrobacias" value={attributes.Strength.value} dependence="Fuerza" />
			<SkillBoxItem name="Atletismo" value={attributes.Strength.value} dependence="Fuerza" />
			<SkillBoxItem name="C. Arcano" value={attributes.Intelligence.value} dependence="Inteligencia" />
			<SkillBoxItem name="Engaño" value={attributes.Charisma.value} dependence="Carisma" />
			<SkillBoxItem name="Historia" value={attributes.Intelligence.value} dependence="Inteligencia" />
			<SkillBoxItem name="Interpretación" value={attributes.Charisma.value} dependence="Carisma" />
			<SkillBoxItem name="Juego de Manos" value={attributes.Dexterity.value} dependence="Destreza" />
			<SkillBoxItem name="Medicina" value={attributes.Wisdom.value} dependence="Sabiduría" />
			<SkillBoxItem name="Naturaleza" value={attributes.Intelligence.value} dependence="Inteligencia" />
			<SkillBoxItem name="Percepción" value={attributes.Wisdom.value} dependence="Sabiduría" />
			<SkillBoxItem name="Perspicacia" value={attributes.Wisdom.value} dependence="Sabiduría" />
			<SkillBoxItem name="Persuasión" value={attributes.Charisma.value} dependence="Carisma" />
			<SkillBoxItem name="Religión" value={attributes.Intelligence.value} dependence="Inteligencia" />
			<SkillBoxItem name="Sigilo" value={attributes.Dexterity.value} dependence="Destreza" />
			<SkillBoxItem name="Supervivencia" value={attributes.Wisdom.value} dependence="Sabiduría" />
			<SkillBoxItem name="T. animales" value={attributes.Wisdom.value} dependence="Sabiduría" />
			<div className="flex justify-center relative -bottom-1 text-center mt-2">
				<span className="uppercase text-xs font-bold">{name}</span>
			</div>
		</div>
	);
}
