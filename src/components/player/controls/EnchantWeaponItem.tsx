export default function EnchantWeaponItem() {
	return (
		<div className="flex justify-start flex-row w-full h-10 gap-1 items-center">
			<div className="w-5/12">
				<input type="text" className="w-full text-xs" onChange={() => {}} />
			</div>
			<div className="w-2/12">
				<input type="text" className="w-full text-xs" onChange={() => {}} />
			</div>
			<div className="w-4/12">
				<input type="text" className="w-full text-xs" onChange={() => {}} />
			</div>
			<div className="w-1/12 flex justify-center">
				<button
					className="w-6 h-6 rounded-full border text-xs border-red-500 font-bold bg-red-500 text-white active:bg-gray-500 active:border-gray-500"
					onClick={() => {}}
				>
					x
				</button>
			</div>
		</div>
	);
}
