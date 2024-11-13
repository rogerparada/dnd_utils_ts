import { Color } from "@/src/types";

type SpellTitleProps = {
	name: string;
	color: Color;
};

export default function SpellTitle({ name, color }: SpellTitleProps) {
	const formatName = () => {
		const regex = /(.*)\(ritual\)(.*)/;
		const match = name.toLocaleLowerCase().match(regex);
		if (!match) return name;

		return (
			<>
				{match[1]}
				<div
					className={`w-10 h-10 z-10 absolute top-0 right-0 bg-white flex items-center justify-center rounded-bl-2xl border ${color.border} text-3xl ${color.text}`}
				>
					<span className="icon-[game-icons--pentacle]" />
				</div>
			</>
		);
	};

	return <div className="uppercase pt-2 pl-10 pr-2 font-bold text-sm">{formatName()}</div>;
}
