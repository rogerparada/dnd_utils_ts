import { SpellWithClasses } from "@/app/spells/page";
import Casting from "./Casting";
import Modifiers from "./Modifiers";
import Markdown from "markdown-to-jsx";

type Props = {
	spells: SpellWithClasses;
};

export default function SpellsList({ spells }: Props) {
	return (
		<div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
			{spells.map((spell) => (
				<div key={spell.id} className="border-2 p-2 rounded-lg bg-white">
					<details>
						<summary className="text-sm">
							<span className="font-bold">{spell.name}</span>
							<span className="float float-end font-extrabold">{spell.level}</span>
							<span className="px-4 pt-2 text-xs font-thin">{spell.classes.map((clase) => clase.class.lang_es).join(", ")}</span>
						</summary>
						<hr />
						<div className="mt-3">
							<Modifiers spell={spell} />
						</div>
						<div className="font-thin text-xs p-2 text-justify">
							{spell.material && (
								<p className="font-thin mb-3">
									<span className="font-medium">Requiere: </span>
									{spell.material}.
								</p>
							)}
							<div className="description">
								<Markdown>{spell.description}</Markdown>
							</div>
						</div>
						<div className="text-xs mt-2">
							<Casting type={spell.casting} />
						</div>
					</details>
				</div>
			))}
		</div>
	);
}
