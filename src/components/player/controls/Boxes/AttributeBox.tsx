type AttributeBoxProps = {
	name: string;
	label: string;
	bonus?: boolean;
};
export default function AttributeBox({ name, label }: AttributeBoxProps) {
	return (
		<div className="flex items-center pt-2">
			<div className="w-10">
				<input type="text" name={name} id={name} className="border-solid border-2 w-16 h-16 text-2xl text-center border-black font-extrabold" />
			</div>
			<div className="ml-8 border-solid border-2 w-full border-black h-12 pl-3 flex items-center">
				<label htmlFor={name} className="text-xs font-semibold uppercase">
					{label}
				</label>
			</div>
		</div>
	);
}
