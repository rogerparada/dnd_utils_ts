type SpellDescriptionProps = {
	description: string;
};

export default function SpellDescription({ description }: SpellDescriptionProps) {
	function transformText(text: string) {
		const split = text.split("\n");
		const result = split.map((t, index) => {
			if (t.startsWith("-")) {
				return (
					<p className="text-ellipsis overflow-hidden" key={`bold-${index}`}>
						<span className="icon-[icon-park-outline--dot]" /> {formatText(t.slice(2))}
					</p>
				);
			}

			return (
				<p className="text-ellipsis overflow-hidden" key={`text-${index}`}>
					{formatText(t)}
				</p>
			);
		});
		return result;
	}

	function formatText(text: string) {
		const parts = text.split(/(\*\*.*?\*\*)/g);
		return parts.map((part, index) => {
			if (part.startsWith("**") && part.endsWith("**")) {
				return <b key={index}>{part.slice(2, -2)}</b>;
			}
			return <>{part}</>;
		});
	}

	return (
		<div id="description" className="w-full text-xs px-3 pb-3 max-h-[24.7rem] overflow-clip space-y-2 text-pretty">
			{transformText(description)}
		</div>
	);
}
