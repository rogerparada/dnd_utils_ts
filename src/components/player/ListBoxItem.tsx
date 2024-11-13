type ListBoxItemProps = {
	name: string;
	value: number;
};

export default function ListBoxItem({ name, value }: ListBoxItemProps) {
	return (
		<div className="flex gap-2 mt-2 items-center">
			<input type="checkbox" name={name} id={name} onChange={() => {}} className="rounded-full" />
			<label htmlFor={name} className="text-sm border-b-2  w-6 flex justify-center">
				{value > 0 ? `+${value}` : value}
			</label>
			<label htmlFor={name} className="text-xs">
				{name}
			</label>
		</div>
	);
}
