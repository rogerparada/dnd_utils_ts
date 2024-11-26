import DescriptionBox from "./Boxes/DescriptionBox";

type MultipleBoxProps = {
	name: string;
	labels: string[];
};

export default function MultipleBox({ name, labels }: MultipleBoxProps) {
	return (
		<div className="multipleBox">
			{labels.map((box, index) => {
				return <DescriptionBox name={`${name}-${index}`} key={`${name}-${index}`} label={box} />;
			})}
		</div>
	);
}
