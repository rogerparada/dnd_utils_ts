"use client";

export default function LogOutButton() {
	const handleClick = () => {
		localStorage.removeItem("auth_token");
		console.log("Borrado");
	};

	return (
		<button className="bg-white rounded-lg text-red-600 p-2" onClick={() => handleClick()}>
			Cerrar sesión
		</button>
	);
}
