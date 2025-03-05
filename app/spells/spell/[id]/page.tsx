import ListItem from "@/src/components/spells/ListItem";
import { magicSchoolColors } from "@/src/Global";
import { prisma } from "@/src/lib/prisma";
import Markdown from "markdown-to-jsx";
import formatName from "@/src/components/spells/ui/RitualFormatter";
import FullSpellCardModifiers from "@/src/components/spells/FullSpellCardModifiers";

async function getSpell(id: number) {
	return prisma.spell.findUnique({
		where: { id },
		include: {
			classes: {
				include: {
					class: true,
				},
			},
		},
	});
}

export default async function SpellPage({ params }: { params: { id: string } }) {
	const id = Number(params.id);
	const spell = await getSpell(id);
	if (spell) {
		const color = magicSchoolColors[spell.school];

		return (
			<div className={`${color.bg} w-auto flex flex-col gap-2 p-3 lg:p-5 relative min-h-[600px]`} key={spell.id}>
				<div className={`w-12 lg:w-16 h-12 lg:h-16 z-10 absolute top-0 left-0 bg-white flex items-center rounded-br-2xl border ${color.border}`}>
					<span className={`w-full text-center text-3xl lg:text-4xl font-black ${color.text}`}>{spell.level}</span>
				</div>
				<div className="w-full bg-white flex-1 overflow-hidden">
					<h1 className="text-2xl font-extrabold pl-16 mt-2 uppercase">
						{formatName(spell.name, color, "w-12 lg:w-16", "h-12 lg:h-16", "text-4xl lg:text-6xl")}
					</h1>
					<hr className="my-2" />

					<FullSpellCardModifiers spell={spell} />
					<hr className="my-2" />
					<div className="px-3">
						<Markdown
							className="text-xs lg:text-sm space-y-4 overflow-auto mb-5"
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
							{spell.description}
						</Markdown>
					</div>
				</div>
			</div>
		);
	}
}
