import { calculateValue } from "@/src/utils";
import { useMemo } from "react";

type ShieldBoxProps = {
	name: string;
	value?: number;
};

export default function ShieldBox({ name, value = 0 }: ShieldBoxProps) {
	const calculated = useMemo(() => calculateValue(value), [value]);
	return (
		<div id={name} className="grid text-center w-24 md:w-32 h-32 md:h-32  gap-1 mb-5 md:m-auto">
			<div className={"m-auto z-0 w-32 mt-3"}>
				<svg id="Square" data-name="Capa 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.74 250">
					<polygon
						points="1.61 22.27 23.92 .67 241.41 .67 267.7 22.27 267.7 223.04 243.8 249.33 25.51 249.33 1.61 225.43 1.61 22.27"
						style={{ fill: "#fff", stroke: "#1d1d1b", strokeMiterlimit: 10 }}
					/>
					<path d="m16.3,25.55c-.35,65.83-.7,131.66-1.04,197.5" style={{ fill: "none", stroke: "#1d1d1b", strokeMiterlimit: 10 }} />
					<path d="m251.12,23.18v203.63" style={{ fill: "none", stroke: "#1d1d1b", strokeMiterlimit: 10 }} />
					<g>
						<path
							d="m1.61,55.05c1.96-7.12,6.36-19.51,16.58-31.87C28.6,10.59,40.19,3.91,46.87.67"
							style={{ fill: "none", stroke: "#1d1d1b", strokeMiterlimit: 10 }}
						/>
						<path
							d="m267.7,55.05c-1.96-7.12-6.36-19.51-16.58-31.87-10.41-12.59-22.01-19.28-28.68-22.51"
							style={{ fill: "none", stroke: "#1d1d1b", strokeMiterlimit: 10 }}
						/>
						<path
							d="m1.61,194.95c1.96,7.12,6.36,19.51,16.58,31.87,10.41,12.59,22.01,19.28,28.68,22.51"
							style={{ fill: "none", stroke: "#1d1d1b", strokeMiterlimit: 10 }}
						/>
						<path
							d="m267.7,194.95c-1.96,7.12-6.36,19.51-16.58,31.87-10.41,12.59-22.01,19.28-28.68,22.51"
							style={{ fill: "none", stroke: "#1d1d1b", strokeMiterlimit: 10 }}
						/>
					</g>
					<g>
						<text y={50} x="50%" fontSize={25} textAnchor="middle" style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
							{name}
						</text>
						<text fontSize={135} y={200} x="50%" textAnchor="middle">
							{calculated}
						</text>
					</g>
				</svg>
			</div>
		</div>
	);
}
