"use client";
import Plate from "./Plate";

type SpellsPlatesProps = {
	level: number;
	total: number;
	used: number;
	name: string;
};

export default function SpellsPlates({ level, total, used, name }: SpellsPlatesProps) {
	return (
		<div className="relative w-full text-3xl">
			<Plate level={level} />
			<input
				type="number"
				name={name}
				id={name}
				value={total}
				className="w-16 md:w-14 lg:w-16 text-center font-bold border-0 p-0 text-3xl md:text-2xl absolute top-6 left-16 md:top-4 md:left-10 lg:top-5"
				onChange={() => {}}
				pattern="[0-9]*"
			/>
			{total > 0 && (
				<input
					type="number"
					name={`${name}_used`}
					id={`${name}_used`}
					value={used}
					className="w-32 md:w-24 text-center border-0 p-0 text-3xl md:text-xl lg:text-2xl absolute top-6 right-12 md:top-5 md:right-10"
					onChange={() => {}}
					pattern="[0-9]*"
				/>
			)}
		</div>
	);
}
