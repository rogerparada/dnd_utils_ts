"use client";

type Props = {
	pass: number;
	fails: number;
};

export default function Salvations({}: Props) {
	return (
		<div className="w-1/2 border-2 border-gray-800 h-32 bg-white rounded-md px-5 pt-5 relative">
			<div className="mb-5">
				<div className="flex justify-between mb-3">
					<label htmlFor="exitos">Éxitos</label>
					<div className="flex justify-center gap-3">
						<input type="checkbox" name="exitos" id="" className="rounded-full w-5 h-5" />-
						<input type="checkbox" name="exitos" id="" className="rounded-full w-5 h-5" />-
						<input type="checkbox" name="exitos" id="" className="rounded-full w-5 h-5" />
					</div>
				</div>
				<div className="flex justify-between">
					<label htmlFor="">Fallos</label>
					<div className="flex justify-center gap-3">
						<input type="checkbox" name="fallos" id="" className="rounded-full w-5 h-5" />-
						<input type="checkbox" name="fallos" id="" className="rounded-full w-5 h-5" />-
						<input type="checkbox" name="fallos" id="" className="rounded-full w-5 h-5" />
					</div>
				</div>
			</div>
			<div className="flex flex-col absolute bottom-1 left-0 text-center mt-2 w-full justify-center">
				<span className="uppercase text-xs font-medium">Salvaciones</span>
				<span className="uppercase text-xs font-medium">Contra Muerte</span>
			</div>
		</div>
	);
}
