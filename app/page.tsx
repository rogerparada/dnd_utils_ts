import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
	const cards = [
		{ name: "Conjuros", link: "/spells", icon: "icon-[arcticons--angband] " },
		{ name: "Clases", link: "/classes", icon: "icon-[arcticons--summoners-war]" },
		{ name: "Personajes", link: "/player", icon: "icon-[arcticons--sgame]" },
		{ name: "Master", link: "/master/combat", icon: "icon-[arcticons--rpg-dice]" },
	];
	return (
		<div className="map-pattern">
			<div className="container mx-auto h-screen flex flex-col justify-center items-center">
				<span className="text-3xl lg:text-6xl font-black text-whiten text-slate-700">Bienvenido a Dnd Utils</span>
				<div className="flex flex-wrap gap-2 mt-10 justify-center">
					{cards.map((card, index) => (
						<div
							id="card"
							className="w-40 h-56 border border-slate-500 rounded-xl flex flex-col items-center p-1 bg-amber-100 shadow-lg"
							key={`card-${index}`}
						>
							<Link href={card.link} className="w-full h-full border border-slate-700 rounded-lg flex flex-col items-center bg-amber-50">
								<span className={`${card.icon} text-9xl flex-1 text-slate-700`} />
								<div className="h-12 p-3 border-t rounded-b-md border-slate-700 w-full text-center font-black bg-amber-200">
									<span className="text-slate-700">{card.name}</span>
								</div>
							</Link>
						</div>
					))}
				</div>
				<div id="footer" className="flex flex-col items-center text-xs justify-center text-slate-700 mt-20">
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
		</div>
	);
}
