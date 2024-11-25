import SpellCardList from "@/src/components/spells/SpellCardList";
import SpellsSelector from "@/src/components/spells/SpellsSelector";
import Pagination from "@/src/components/ui/Pagination";
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
	return await prisma.classes.findFirst({
		take: 1,
		where: {
			name,
		},
		include: {
			spells: {
				include: {
					spell: true,
				},
				orderBy: [{ spell: { level: "asc" } }, { spell: { name: "asc" } }],
			},
		},
	});
}

async function getSpells(classId: number, level: number, pageSize: number, skip: number) {
	const where = level > -1 ? { classId, spell: { level } } : { classId };

	const spells = await prisma.spellClass.findMany({
		take: pageSize,
		skip,
		where,
		include: {
			spell: {
				include: {
					classes: {
						include: {
							class: true,
						},
					},
				},
			},
		},
		orderBy: [{ spell: { level: "asc" } }, { spell: { name: "asc" } }],
	});

	return { spells };
}

async function spellsCount(classId: number, level: number) {
	const where = level > -1 ? { classId, spell: { level } } : { classId };
	return await prisma.spellClass.count({
		where,
	});
}

async function getClasses() {
	return await prisma.classes.findMany({
		select: {
			name: true,
			lang_es: true,
		},
	});
}

const PAGE_SIZE = 10;

export default async function ClassPage({
	params,
	searchParams,
}: {
	params: { name: string };
	searchParams: { level: string; page: number; items: number };
}) {
	const name = params.name;
	const level = +searchParams.level;
	const page = +searchParams.page || 1;
	const pageSize = +searchParams.items || PAGE_SIZE;
	const skip = (page - 1) * pageSize;
	const clase = await getClassInfo(name);

	if (!clase || page < 0) return redirect("/classes");

	const classes = await getClasses();
	const spells = (await getSpells(clase.id, level, pageSize, skip)).spells.map((spell) => spell.spell);
	const { src, alt } = images[clase.name];
	const characteristics = getAbilityTranslation(clase.primaryChar, "es") + ", " + getAbilityTranslation(clase.secondaryChar, "es");
	const totalSpells = await spellsCount(clase.id, level);
	const totalPages = Math.ceil(totalSpells / pageSize);
	const route = level ? `/classes/${name}?level=${level}&` : `/classes/${name}?`;
	return (
		<>
			<div className="mb-5 flex md:flex-row flex-col-reverse items-center">
				<div className="w-64 h-64 relative">
					<Image src={src} alt={alt} fill />
				</div>
				<div className="flex flex-col justify-center gap-4">
					<h1 className="text-4xl font-black">{clase.lang_es}</h1>
					<p>{clase.description_es}</p>
					<p>
						<b>Características principales:</b> {characteristics}
					</p>
				</div>
			</div>
			<SpellsSelector clases={classes} />
			<SpellCardList className={clase.name} spells={spells} />
			<Pagination page={page} totalPages={totalPages} route={route} items={pageSize} />
		</>
	);
}
