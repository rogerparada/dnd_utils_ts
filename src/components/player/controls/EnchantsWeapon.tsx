import EnchantWeaponItem from "./EnchantWeaponItem";

export default function EnchantsWeapon() {
	return (
		<div className="border-black border-2 bg-white mt-3 rounded-lg min-h-80 relative px-3 py-6">
			<button className="borderButton absolute right-0 -top-0 border-2 border-black text-xl" onClick={() => {}}>
				+
			</button>

			<div className="flex justify-start flex-row w-full gap-1 text-xs uppercase">
				<div className="w-5/12">
					<span className="">Nombre</span>
				</div>
				<div className="w-2/12">
					<span className="">Bonif.</span>
				</div>
				<div className="w-5/12">
					<span className="">Daño/Tipo</span>
				</div>
			</div>
			<div className="flex flex-col gap-2 pb-5">
				<EnchantWeaponItem />
			</div>

			<div className="flex flex-col absolute bottom-1 left-0 text-center mt-2 w-full justify-center bg-white h-8">
				<span className="uppercase text-xs font-black">Ataques y lanzamiento de conjuros</span>
			</div>
		</div>
	);
}
