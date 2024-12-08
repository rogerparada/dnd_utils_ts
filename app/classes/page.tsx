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
		<div className="container mx-auto min-h-screen mt-5 flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center items-center"></div>
			<span className="text-3xl lg:text-6xl font-black text-whiten text-white">Selecciona tu clase</span>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10 justify-center">
				{classes.map((clase, index) => {
					const color = colors[clase.name] || colors["None"];
					const classImage = images[clase.name] || colors["None"];
					return (
						<div
							id="card"
							className="w-40 h-56 border border-slate-500 rounded-xl flex flex-col items-center p-1 bg-amber-100 shadow-lg"
							key={`card-${index}`}
						>
							<Link
								href={`/classes/${clase.name}`}
								className={`${color.bg} w-full h-full border border-slate-700 rounded-lg flex flex-col items-center `}
							>
								<div className="relative h-32 w-32 lg:w-64 lg:h-64 flex-1">
									<Image src={classImage.src} alt={classImage.alt} fill />
								</div>
								<div className={`h-12 p-3 border-t rounded-b-md border-slate-700 w-full text-center font-black bg-amber-100`}>
									<span className="text-slate-700">{clase.name}</span>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
			<div id="footer" className="flex flex-col items-center text-xs justify-center text-white mt-20">
				<span>
					Diseñado por{" "}
					<a href="rogerparada.com" className="font-black">
						Roger Parada
					</a>
				</span>
				<span>Creado para uso didáctico y no comercial</span>
				<span>Materiales &copy; 2024 Dungeons & Dragons. </span>
				<span>Todos los derechos reservados.</span>
			</div>
		</div>
	);
}
