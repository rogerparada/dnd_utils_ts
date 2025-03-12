import SpellsHeader from "./ui/SpellsHeader";
import SpellsPlates from "./ui/SpellsPlates";
import PlayerSpellsSelector from "./ui/PlayerSpellsSelector";
import { PlayerSpellsItem } from "@/src/types";
import { prisma } from "@/src/lib/prisma";
import { spellLevelByClass, spellsCasters } from "@/src/Global";

type SpellsSheetProps = {
	spells?: PlayerSpellsItem[];
	className: string;
	level: number;
};

async function getSpellsByLevel(className: string, level: number): Promise<PlayerSpellsItem | undefined> {
	const data = await prisma.spell.findMany({
		where: {
			classes: {
				some: {
					class: { name: className },
				},
			},
			level,
		},
		select: {
			id: true,
			name: true,
		},
	});
	return { level, items: data };
}

async function getSpells(className: string, level: number): Promise<PlayerSpellsItem[] | undefined> {
	const spellsList: PlayerSpellsItem[] = [];

	for (let i = 0; i <= level; i++) {
		const spell = await getSpellsByLevel(className, i);
		if (spell) spellsList.push(spell);
	}
	return spellsList;
}

export default async function SpellsSheet({ className, level }: SpellsSheetProps) {
	const casters = ["Wizard", "Cleric", "Druid", "Bard", "Sorcerer", "Paladin", "Ranger", "Warlock"];
	if (casters.includes(className)) {
		const spellLevel = level >= 1 && level <= 20 ? spellLevelByClass[className][level] : -1;
		const levels = Array.from({ length: spellLevel }, (_, i) => i + 1);
		const spells = await getSpells(className, spellLevel);

		return (
			<div className="w-full bg-white border-2 border-black min-h-[600px] rounded-lg text-black">
				<SpellsHeader className={className} />
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-72 lg:w-80 p-2 flex flex-col items-center">
						<div className="w-96 md:w-72 lg:w-80 ml-4">
							{levels.map((item) => (
								<SpellsPlates
									total={spellsCasters[className][level][`slot_${item}`] ?? 0}
									level={item}
									used={0}
									key={`level-${item}`}
									name={`level_${item}`}
								/>
							))}
						</div>
					</div>
					<div className="flex-1 px-4 mb-4">
						<PlayerSpellsSelector spells={spells} />
					</div>
				</div>
			</div>
		);
	}
}
