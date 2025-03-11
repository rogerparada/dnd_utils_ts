type PlateProps = {
	level: number;
};

export default function Plate({ level }: PlateProps) {
	return (
		<svg id="Plate" data-name="Plate 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238 53" className="w-full h-full">
			<g>
				<polygon
					fill="#FFF"
					stroke="#1d1d1d"
					className="cls-4"
					points="227.14 9.05 234.41 16.32 234.41 36.81 226.98 44.25 14.38 44.25 14.38 9.05 227.14 9.05"
				/>
				<g>
					<line stroke="#1d1d1d" className="cls-3" x1="222.35" y1="44.25" x2="234.41" y2="32.5" />
					<line stroke="#1d1d1d" className="cls-3" x1="222.35" y1="9.05" x2="234.41" y2="21.59" />
					<line stroke="#1d1d1d" className="cls-3" x1="17.06" y1="13.03" x2="226.18" y2="13.03" />
					<line stroke="#1d1d1d" className="cls-3" x1="14.38" y1="40.79" x2="225.71" y2="40.79" />
				</g>
				<g>
					<polygon fill="#FFF" stroke="#1d1d1d" points="92.61 44.25 103.69 30.28 103.69 21.19 91.54 9.05 16.1 9.05 16.1 44.25 92.61 44.25" />
					<g>
						<line stroke="#1d1d1d" className="cls-3" x1="81.64" y1="44.51" x2="92.88" y2="31.11" />
						<line stroke="#1d1d1d" className="cls-3" x1="81.64" y1="9.31" x2="93.33" y2="21.46" />
						<path fill="none" stroke="#1d1d1d" className="cls-3" d="M96.48,13.29c-1.3,2.26-3.53,6.85-3.8,13.05-.31,7.07,2.08,12.37,3.31,14.71" />
					</g>
				</g>
				<g>
					<polygon
						fill="#FFF"
						stroke="#1d1d1d"
						strokeWidth={2}
						points="3.56 8.88 10.67 2.77 27.36 17.31 27.36 35.49 10.83 50.36 3.56 44.25 3.56 8.88"
					/>
					<text className="text-xl font-bold" transform="translate(9 32.06)">
						<tspan x="0" y="0">
							{level}
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	);
}
