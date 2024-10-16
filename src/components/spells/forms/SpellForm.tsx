import { prisma } from "@/src/lib/prisma";
import { Spell } from "@prisma/client";
import ComponentsForm from "./ComponentsForm";

async function getClases() {
	return await prisma.classes.findMany();
}

type SpellFormProps = {
	spell?: Spell;
};

export default async function SpellForm({ spell }: SpellFormProps) {
	const levels = Array.from({ length: 10 }, (_, i) => i);
	const clases = await getClases();
	console.log(spell?.concentration);

	return (
		<>
			<div className="grid grid-cols-5 gap-2 items-center">
				<label htmlFor="name" className="font-bold">
					Nombre:
				</label>
				<input type="text" name="name" className="col-span-4" defaultValue={spell?.name} />
			</div>
			<div className="grid grid-cols-5 gap-2 mb-3 items-center">
				<label className="font-bold" htmlFor="class">
					Clase:
				</label>
				<select className="w-full col-span-4 h6" name="class">
					{clases.map((clase) => (
						<option value={clase.name}>{clase.lang_es}</option>
					))}
				</select>
			</div>

			<div className="grid grid-cols-5 gap-2 items-center">
				<label htmlFor="school" className="font-bold">
					Escuela:
				</label>
				<select className="w-full col-span-4" name="school">
					{clases.map((clase) => (
						<option value={clase.name}>{clase.lang_es}</option>
					))}
				</select>
			</div>

			<div className="grid grid-cols-5 gap-2 items-center">
				<label htmlFor="level" className="font-bold">
					Nivel:
				</label>
				<select className="w-full col-span-4" name="level">
					{levels.map((level) => (
						<option value={level}>{level}</option>
					))}
				</select>
			</div>
			<div className="grid grid-cols-5 gap-2 items-center">
				<label htmlFor="casting" className="font-bold">
					Casting:
				</label>
				<input type="text" name="casting" className="col-span-4" placeholder="1 acción" defaultValue={spell?.casting} />
			</div>
			<div className="grid grid-cols-5 gap-2 items-center">
				<label htmlFor="range" className="font-bold">
					Rango:
				</label>
				<input type="text" name="range" className="col-span-4" placeholder="Lanzador" defaultValue={spell?.range} />
			</div>
			<div className="grid grid-cols-5 gap-2">
				<label htmlFor="duration" className="font-bold">
					Duración:
				</label>
				<input type="text" name="duration" className="col-span-4" placeholder="Instantáneo" defaultValue={spell?.duration} />
			</div>
			<ComponentsForm components={spell?.components} material={spell?.material} />
			<div className="grid grid-cols-5 items-center">
				<label htmlFor="concentration" className="col-span-2 md:col-span-1 font-bold">
					Concentración:
				</label>
				<input type="checkbox" name="concentration" defaultChecked={spell?.concentration} />
			</div>
			<div className="md:grid md:grid-cols-5 gap-2 font-bold">
				<label htmlFor="sDes">Descripción:</label>
				<textarea name="description" className="w-full col-span-4 text-sm h-52 font-thin" defaultValue={spell?.description} />
			</div>
		</>
	);
}
