"use client";

import { useAppStore } from "@/src/store/useAppStore";
import { useTranslations } from "next-intl";

type SpellsHeaderProps = {
	className: string;
};

export default function SpellsHeader({ className }: SpellsHeaderProps) {
	const t = useTranslations("className");
	return (
		<div className="w-full p-4 gap-2 flex flex-col md:flex-row">
			<div className="flex flex-col justify-start w-full md:w-1/3 pl-2">
				<input type="text" className="text-3xl font-bold border border-black text-black" readOnly value={t(className)} />
				<span className="text-sm mt-2 font-bold">Clase Lanzadora de conjuros</span>
				<div className="space-x-2 mt-5">
					<span className="text-sm font-bold">Lanzador Ritual</span>
					<input type="checkbox" name="" id="" disabled />
				</div>
			</div>
			<div className="border border-black flex flex-wrap p-2 flex-1 justify-center md:justify-around items-center gap-3">
				<div className="flex flex-col justify-center text-center p-2">
					<input
						type="text"
						readOnly
						className="mb-2 rounded-lg h-14 w-24 text-center text-3xl font-extrabold border-4 border-double"
						value={"SAB"}
					/>
					<span className="text-xs">Aptitud Mágica</span>
				</div>
				<div className="flex flex-col justify-center text-center p-2 overflow-hidden">
					<input type="text" readOnly className="mb-2 rounded-lg h-14 w-28 text-center text-3xl font-extrabold border-4 border-double" value={"18"} />
					<span className="text-xs">Tiradas de salvación</span>
				</div>
				<div className="flex flex-col justify-center text-center p-2">
					<input type="text" readOnly className="mb-2 rounded-lg h-14 w-24 text-center text-3xl font-extrabold border-4 border-double" value={4} />
					<span className="text-xs">Bonus</span>
				</div>
			</div>
		</div>
	);
}
