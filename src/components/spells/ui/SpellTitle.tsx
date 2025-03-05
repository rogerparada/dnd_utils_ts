import { Color } from "@/src/types";
import Link from "next/link";
import formatName from "./RitualFormatter";

type SpellTitleProps = {
	name: string;
	color: Color;
	id: number;
};

export default function SpellTitle({ name, color, id }: SpellTitleProps) {
	return (
		<div className="uppercase pl-10 pr-2 font-bold text-sm pt-2">
			<Link href={`/spells/spell/${id}`} target="_blank">
				{formatName(name, color)}
			</Link>
		</div>
	);
}
