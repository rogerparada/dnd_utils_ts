import { spells } from "./data/spells";
import { clases } from "./data/clases";
import { spellsClass } from "./data/spellClass";
import { prisma } from "../src/lib/prisma";

async function main() {
	try {
		await prisma.spell.createMany({
			data: spells,
		});

		await prisma.classes.createMany({
			data: clases,
		});
		await prisma.spellClass.createMany({
			data: spellsClass,
		});
	} catch (error) {
		console.log(error);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
