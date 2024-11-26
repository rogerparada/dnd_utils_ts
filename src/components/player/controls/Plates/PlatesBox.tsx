import React from "react";
import Plates from "./Plates";

type Props = {
	name: string;
	label: string;
};

export default function PlatesBox({ name, label }: Props) {
	const labels = ["Cooper", "Silver", "Electron", "Gold", "Platinum"];
	return (
		<div className="mt-3 border-solid border-2 p-3 overflow-hidden w-full border-black bg-white rounded-lg">
			<div className="plates absolute -ml-8 flex flex-col gap-4">
				{labels.map((item, index) => {
					return <Plates key={item} label={item} index={index} />;
				})}
			</div>
			<div className="flex justify-end">
				<textarea name={name} id={name} className="border-0 text-xs pl-5 min-h-80 gap-1 ml-4 md:w-4/5 "></textarea>
			</div>

			<div className="flex justify-center relative -bottom-1 text-center mt-2">
				<span className="uppercase text-xs font-bold">{label}</span>
			</div>
		</div>
	);
}
