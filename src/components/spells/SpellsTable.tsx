import { SpellWithClasses } from "@/app/spells/page";
import { Spell } from "@prisma/client";
import Link from "next/link";

type SpellsTableProps = {
	spells: SpellWithClasses;
};

export default function SpellsTable({ spells }: SpellsTableProps) {
	return (
		<div className="px-4 sm:px-6 lg:px-8 mt-20">
			<div className="mt-8 flow-root ">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
						<table className="min-w-full divide-y divide-gray-300 ">
							<thead>
								<tr>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
										Hechizo
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Nivel
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Lanzamiento
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Duración
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Componentes
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Escuela
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Clases
									</th>
									<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
										<span className="sr-only">Actions</span>
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{spells.map((spell) => (
									<tr key={spell.id}>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{spell.name}</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{spell.level}</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{spell.casting}</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{spell.duration}</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{spell.components}</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{spell.school}</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{spell.classes.map((clase) => clase.class.lang_es).join(", ")}
										</td>
										<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
											<Link href={`/admin/spells/${spell.id}/edit`} className="text-blue-400 hover:text-blue-500">
												Editar<span className="sr-only">, {spell.name}</span>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
