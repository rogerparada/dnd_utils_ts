import SpellCardList from "@/src/components/spells/SpellCardList";
import { images } from "@/src/Global";
import { prisma } from "@/src/lib/prisma";
import { getAbilityTranslation } from "@/src/utils";
import Image from "next/image";
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
	const clases = await prisma.classes.findMany({
		take: 1,
		where: {
			name,
		},
	});

	console.log(clases);
	const id = clases[0].id || 1;
	const result = await prisma.classes.findUnique({
		where: { id },
		include: {
			spells: {
				include: {
					spell: true,
				},
			},
		},
	});

	return result;
}

export default async function ClassPage({ params }: { params: { name: string } }) {
	const id = params.name;
	const clase = await getClassInfo(id);

	if (!clase) return redirect("/");

	const { src, alt } = images[clase.name];
	const characteristics = getAbilityTranslation(clase.primaryChar, "es") + ", " + getAbilityTranslation(clase.secondaryChar, "es");
	const spells = clase.spells.map((spell) => spell.spell);
	return (
		<>
			<div className="mb-5 flex flex-row">
				<div className="w-32 h-32 relative">
					<Image src={src} alt={alt} fill />
				</div>
				<div className="flex flex-col justify-center">
					<h1 className="text-4xl font-black">{clase.lang_es}</h1>
					<p>{clase.description_es}</p>
					<p>{characteristics}</p>
				</div>
			</div>
			<SpellCardList className={clase.name} spells={spells} />
		</>
	);
}
