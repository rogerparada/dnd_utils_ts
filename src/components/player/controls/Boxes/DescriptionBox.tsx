type DescriptionBoxProps = {
	name: string;
	label: string;
	text?: string;
	big?: boolean;
	max?: boolean;
};

export default function DescriptionBox({ name, label, text, big, max }: DescriptionBoxProps) {
	const size = `w-full text-xs ${big ? "min-h-72" : max ? "text-xs w-full min-h-96 flex-1" : "min-h-24"}`;

	return (
		<div className="mt-3 border-solid border-2 p-3 overflow-hidden relative w-full border-black bg-white flex-1">
			<div className="flex flex-col h-full">
				<textarea name={name} id={name} className={size}>
					{text}
				</textarea>
				<div className="flex justify-center relative -bottom-1 text-center mt-2">
					<span className="uppercase text-xs font-bold">{label}</span>
				</div>
			</div>
		</div>
	);
}
