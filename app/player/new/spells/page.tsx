import SpellsSheet from "@/src/components/player/spells/SpellsSheet";

export default async function page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
	const sp = await searchParams;
	const className = !Array.isArray(sp.class) && sp.class ? sp.class : "";
	const level = sp.level ? +sp.level : 1;

	return (
		<div id="player" className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20">
			<SpellsSheet className={className} level={level} />
		</div>
	);
}
