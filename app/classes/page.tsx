import { colors } from "@/src/Global";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";

async function getClasses() {
	return await prisma.classes.findMany();
}

export default async function page() {
	const classes = await getClasses();

	return (
		<div className="flex flex-col gap-5 ">
			{classes.map((clase) => {
				const color = colors[clase.name] || colors["None"];
				return (
					<Link
						href={`/classes/${clase.name}`}
						key={clase.id}
						className={`${color.bg} w-full text-center p-2 uppercase font-black text-white rounded-lg `}
					>
						{clase.lang_es + " " + clase.name}
					</Link>
				);
			})}
		</div>
	);
}
