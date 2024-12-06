import { User } from "@prisma/client";

type UserFromProps = {
	user?: User;
};

export default async function UserForm({ user }: UserFromProps) {
	return (
		<>
			<div className="flex flex-col gap-2">
				<label htmlFor="name" className="text-white font-black">
					Nombre de usuario:
				</label>
				<input name="name" type="text" placeholder="Nombre de usuario" defaultValue={user?.username} />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="text-white font-black">
					Email
				</label>
				<input name="email" type="text" placeholder="E-mail" defaultValue={user?.email} />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="password" className="text-white font-black">
					Password
				</label>

				<input
					name="password"
					type="password"
					placeholder={user ? "Cambiar contraseña" : "Dejar ne blanco para generar una contraseña aleatoria"}
					className="flex-1 h-10"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="rol" className="text-white font-black">
					Rol
				</label>
				<select name="role" id="role" defaultValue={user?.role}>
					<option value="user">Usuario</option>
					<option value="collaborator">Colaborador</option>
					<option value="admin">Administrador</option>
				</select>
			</div>
		</>
	);
}
