import Casting from "./Casting";
import Modifiers from "./Modifiers";
import Markdown from "markdown-to-jsx";
import ListItem from "./ListItem";
import { colors } from "@/src/Global";
import { SpellWithClasses } from "@/app/spells/page";
import SpellTitle from "./ui/SpellTitle";

type SpellCardListProps = {
	className: string;
	spells: SpellWithClasses;
};

export default async function SpellCardList({ className, spells }: SpellCardListProps) {
	const color = colors[className];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 text-black">
			{spells.map((spell) => {
				const description = spell.material ? "**Requiere:** " + spell.material + ". \n \n  " + spell.description : spell.description;

				return (
					<div className={`${color.bg} w-auto flex flex-col gap-2 p-3 relative h-[34rem]`} key={spell.id}>
						<div className={`w-10 h-10 z-10 absolute top-0 left-0 bg-white flex items-center rounded-br-2xl border ${color.border}`}>
							<span className={`w-full text-center text-xl font-black ${color.text}`}>{spell.level}</span>
						</div>
						<div className="w-full bg-white flex-1 overflow-hidden">
							<SpellTitle name={spell.name} color={color} />
							<hr className="my-2" />
							<Modifiers spell={spell} />
							<hr className="my-2" />
							<div className="px-3">
								<Markdown
									className="text-xs space-y-4 overflow-auto"
									options={{
										overrides: {
											li: ListItem,
											thead: { props: { className: `${color.bg} text-white text-left uppercase text-xxs` } },
											tr: { props: { className: `border ${color.border}` } },
											td: { props: { className: `border ${color.border} px-1 text-xxs` } },
											th: { props: { className: `border ${color.border} px-1` } },
										},
										wrapper: "article",
									}}
								>
									{description}
								</Markdown>
							</div>
						</div>
						<div className="grid grid-cols-2 text-xs text-white pr-2">
							<Casting type={spell.casting} />
							<div className="text-right">{spell.classes.map((clase) => clase.class.lang_es).join(", ")}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
