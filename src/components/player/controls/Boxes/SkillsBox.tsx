import { useAppStore } from "@/src/store/useAppStore";

import ListBoxSkillItem from "./ListBoxSkillItem";
import { skillsDependencies } from "@/src/Global";

type SalvationBoxProps = {
	name: string;
};

export default function SalvationBox({ name }: SalvationBoxProps) {
	const attributes = useAppStore((state) => state.attributes);
	const skillProficiency = useAppStore((state) => state.skillProficiency);

	return (
		<div className="mt-3 border-solid border-2 p-3 overflow-hidden relative w-full rounded-lg border-black">
			{skillsDependencies.map((skill, i) => (
				<ListBoxSkillItem
					name={skill.name}
					value={attributes[skill.dependence].value}
					dependence={skill.dependence}
					checked={skillProficiency[skill.name]}
					key={`${skill.name}-${i}`}
				/>
			))}

			<div className="flex justify-center relative -bottom-1 text-center mt-2">
				<span className="uppercase text-xs font-bold">{name}</span>
			</div>
		</div>
	);
}
