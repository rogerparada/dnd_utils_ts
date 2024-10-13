import SpellCardList from "@/src/components/spells/SpellCardList";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

export const generateStaticParams = async () => {
	const classes = await prisma.classes.findMany();
	return classes.map((clase) => ({ name: clase.name }));
};

export const generateMetadata = async ({ params }: { params: { name: string } }) => {
	const id = params.name ? " ⋅ " + params.name : "";

	return {
		title: `Dnd Utils ${id.replaceAll("_", " ")}`,
	};
};

async function getClassInfo(name: string) {
	return await prisma.classes.findMany({
		where: {
			name,
		},
	});
}

async function getClassSpells(classId: number) {
	const spells = await prisma.spellClass.findMany({
		where: {
			classId,
		},
		include: {
			spell: true,
		},
	});

	return spells.map((item) => item.spell);
}

export default async function ClassPage({ params }: { params: { name: string } }) {
	const id = params.name;
	const clase = (await getClassInfo(id))[0];

	if (!clase) return redirect("/");

	const spells = await getClassSpells(clase.id);

	return (
		<>
			<h1 className="text-4xl font-black">{clase.lang_es}</h1>
			<p>{clase.description_es}</p>
			<SpellCardList className={clase.name} spells={spells} />
		</>
	);
}
