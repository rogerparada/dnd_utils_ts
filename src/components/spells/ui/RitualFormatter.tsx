import { Color } from "../../../types";

export default function formatName(name: string, color: Color, width: string = "w-10", height: string = "h-10", fontSize: string = "text-3xl") {
	const regex = /(.*)\(ritual\)(.*)/;
	const match = name.toLocaleLowerCase().match(regex);
	if (!match) return name;

	return (
		<>
			{match[1]}
			<div
				className={`${width} ${height} z-10 absolute top-0 right-0 bg-white flex items-center justify-center rounded-bl-2xl border ${color.border} ${fontSize} ${color.text}`}
			>
				<span className="icon-[game-icons--pentacle]" />
			</div>
		</>
	);
}
