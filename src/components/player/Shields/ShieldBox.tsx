type ShieldBoxProps = {
	name: string;
	value?: number;
	square?: boolean | null;
};

export default function ShieldBox({ name, value = 0 }: ShieldBoxProps) {
	return (
		<div id={name} className="grid text-center w-24 md:w-32 h-32 md:h-32  gap-1 mb-5 md:m-auto">
			<div className={"m-auto z-0 w-32 mt-0"}>
				<svg id="Escudo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.53 250">
					<path
						d="m4.07,70.43c4.11-1.79,11.53-5.71,17.73-13.64,10.11-12.92,9.78-27.31,9.55-31.38,25.95-7.5,51.91-15.01,77.86-22.51l74.93,21.14c0,4.68.65,16.19,8.19,27.97,7.01,10.95,16.26,16.31,20.46,18.42,2.3,16.12,2.99,37.33-2.9,60.84-18.8,75.03-88.56,109.69-101.46,115.82-11.62-4.98-77.23-34.38-99.29-104.92C.05,113.1,1.51,87.14,4.07,70.43Z"
						style={{ fill: "#fff", stroke: "#1d1d1b", strokeMiterlimit: 10 }}
					/>
					<path
						d="m14.5,75.89c3.7-1.61,10.38-5.14,15.96-12.28,9.1-11.63,8.8-24.58,8.59-28.24,23.36-6.75,46.72-13.51,70.07-20.26l67.44,19.03c0,4.21.58,14.57,7.37,25.17,6.31,9.86,14.63,14.68,18.42,16.57,2.07,14.51,2.69,33.6-2.61,54.76-16.92,67.52-79.71,98.72-91.31,104.24-10.46-4.48-69.5-30.94-89.36-94.42-8.19-26.17-6.87-49.53-4.56-64.57Z"
						style={{ fill: "#fff", stroke: "#1d1d1b", strokeMiterlimit: 10 }}
					/>
					<g>
						<text fontSize={25} y={60} x="50%" textAnchor="middle" style={{ textTransform: "uppercase", fontWeight: "bolder" }}>
							{name}
						</text>
						<text fontSize={105} y={180} x="50%" textAnchor="middle">
							{value}
						</text>
					</g>
				</svg>
			</div>
		</div>
	);
}
