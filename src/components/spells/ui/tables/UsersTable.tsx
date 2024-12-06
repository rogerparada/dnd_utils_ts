import { User } from "@prisma/client";
import Link from "next/link";

type UsersTableProps = {
	users: User[];
};

export default function UsersTable({ users }: UsersTableProps) {
	return (
		<div className="px-4 sm:px-6 lg:px-8 mt-20">
			<div className="mt-8 flow-root ">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
						<table className="min-w-full divide-y divide-gray-300 ">
							<thead>
								<tr>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
										Nombre de usuario
									</th>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
										E-mail
									</th>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
										Verificado
									</th>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
										Rol
									</th>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
										Creado
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{users.map((user) => (
									<tr key={user.id}>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{user.username}</td>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{user.email}</td>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
											<input type="checkbox" checked={!!user.emailVerified} disabled />
										</td>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{user.role}</td>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
											{user.createdAt.toLocaleDateString()}
										</td>

										<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
											<Link href={`/admin/users/${user.id}/edit`} className="text-blue-400 hover:text-blue-500">
												Editar<span className="sr-only">, {user.username}</span>
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
