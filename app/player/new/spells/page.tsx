import SpellsSheet from "@/src/components/player/spells/SpellsSheet";

export default function page({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
	const className = !Array.isArray(searchParams.class) && searchParams.class ? searchParams.class : "";
	const level = searchParams.level ? +searchParams.level : 1;
	console.log(searchParams);
	return (
		<div id="player" className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20">
			<SpellsSheet className={className} level={level} />
		</div>
	);
}
