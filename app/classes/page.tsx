import { colors, images } from "@/src/Global";
import { prisma } from "@/src/lib/prisma";
import Image from "next/image";
import Link from "next/link";

async function getClasses() {
	return await prisma.classes.findMany();
}

export default async function page() {
	const classes = await getClasses();

	return (
		<div className="flex flex-wrap justify-center gap-4">
			{classes.map((clase) => {
				const color = colors[clase.name] || colors["None"];
				const classImage = images[clase.name] || colors["None"];
				return (
					<Link href={`/classes/${clase.name}`} key={clase.id} className={`${color.bg} rounded-lg flex flex-col items-center w-36 lg:w-56 xl:w-80`}>
						<div className="relative h-32 w-32 lg:w-64 lg:h-64">
							<Image src={classImage.src} alt={classImage.alt} fill />
						</div>
						<span className="text-center p-2 uppercase font-black text-white">{clase.lang_es}</span>
					</Link>
				);
			})}
		</div>
	);
}
