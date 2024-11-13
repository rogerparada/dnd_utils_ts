import ComponentsForm from "./ComponentsForm";
import MultiClassSelector from "./MultiClassSelector";
import { prisma } from "@/src/lib/prisma";
import { SpellClasses } from "@/src/types";

type SpellFormProps = {
	spell?: SpellClasses;
};

async function getClasses() {
	return await prisma.classes.findMany();
}

export default async function SpellForm({ spell }: SpellFormProps) {
	const levels = Array.from({ length: 10 }, (_, i) => i);
	const schools = ["Abjuración", "Adivinación", "Conjuración", "Encantamiento", "Evocación", "Ilusión", "Nigromancia", "Transmutación"];
	const classes = await getClasses();

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center">
				<label htmlFor="name" className="font-bold">
					Nombre:
				</label>
				<input type="text" name="name" className="col-span-4 text-sm" defaultValue={spell?.name} />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center">
				<label htmlFor="school" className="font-bold ">
					Escuela:
				</label>
				<select className="w-full col-span-4 text-sm" name="school" defaultValue={spell?.school}>
					{schools.map((school, index) => (
						<option value={school} key={`school-${index}`}>
							{school}
						</option>
					))}
				</select>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center">
				<label htmlFor="level" className="font-bold">
					Nivel:
				</label>
				<select className="w-full col-span-4 text-sm" name="level" defaultValue={spell?.level}>
					{levels.map((level, index) => (
						<option value={level} key={`level-${index}`}>
							{level}
						</option>
					))}
				</select>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center">
				<label htmlFor="casting" className="font-bold">
					Lanzamiento:
				</label>
				<input type="text" name="casting" className="col-span-4 text-sm" placeholder="1 acción" defaultValue={spell?.casting} />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center">
				<label htmlFor="range" className="font-bold">
					Rango:
				</label>
				<input type="text" name="range" className="col-span-4 text-sm" placeholder="Lanzador" defaultValue={spell?.range} />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-2">
				<label htmlFor="duration" className="font-bold">
					Duración:
				</label>
				<input type="text" name="duration" className="col-span-4 text-sm" placeholder="Instantáneo" defaultValue={spell?.duration} />
			</div>
			<ComponentsForm components={spell?.components} material={spell?.material} />
			<div className="grid grid-cols-5 items-center">
				<label htmlFor="concentration" className="col-span-2 md:col-span-1 font-bold">
					Concentración:
				</label>
				<input type="checkbox" name="concentration" defaultChecked={spell?.concentration} />
			</div>
			<MultiClassSelector classes={classes} selected={spell?.classes} />
			<div className="md:grid md:grid-cols-5 gap-2 font-bold">
				<label htmlFor="sDes">Descripción:</label>
				<textarea name="description" className="w-full col-span-4 text-sm h-52 font-thin" defaultValue={spell?.description} />
			</div>
		</>
	);
}
