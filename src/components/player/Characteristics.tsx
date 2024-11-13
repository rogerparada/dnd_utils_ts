import { useAppStore } from "@/src/store/useAppStore";
import Card from "./Card";

export const Characteristics = () => {
	const attributes = useAppStore((state) => state.attributes);
	const changeAttributes = useAppStore((state) => state.changeAttributes);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		changeAttributes(name, +value);
	};

	return (
		<div className="flex gap-10 lg:gap-3 flex-wrap lg:flex-col mx-auto">
			<div className="grid text-center w-28 md:w-32 h-32 md:h-36 gap-1 mx-auto relative">
				<div id="Recuadro" className="m-auto z-0">
					<Card name="Fuerza" value={attributes.Strength.value} />
				</div>
				<div className="z-1 absolute -bottom-2 w-32 lg:w-32 mx-auto">
					<input
						type="text"
						inputMode="numeric"
						pattern="[0-9]*"
						name={"Strength"}
						className="text-lg md:text-xl relative -bottom-2 md:bottom-2 modifier"
						onChange={handleChange}
						value={attributes.Strength.raw}
					/>
				</div>
			</div>
			<div className="grid text-center w-28 md:w-32 h-32 md:h-36 gap-1 mx-auto relative">
				<div id="Recuadro" className="m-auto z-0">
					<Card name="Destreza" value={attributes.Dexterity.value} />
				</div>
				<div className="z-1 absolute -bottom-2 w-32 lg:w-32 mx-auto">
					<input
						type="text"
						inputMode="numeric"
						pattern="[0-9]*"
						name="Dexterity"
						className="text-lg md:text-xl relative -bottom-2 md:bottom-2 modifier"
						onChange={handleChange}
						value={attributes.Dexterity.raw}
					/>
				</div>
			</div>
			<div className="grid text-center w-28 md:w-32 h-32 md:h-36 gap-1 mx-auto relative">
				<div id="Recuadro" className="m-auto z-0">
					<Card name={"Constitución"} value={attributes.Constitution.value} />
				</div>
				<div className="z-1 absolute -bottom-2 w-32 lg:w-32 mx-auto">
					<input
						type="text"
						inputMode="numeric"
						pattern="[0-9]*"
						name="Constitution"
						className="text-lg md:text-xl relative -bottom-2 md:bottom-2 modifier"
						onChange={handleChange}
						value={attributes.Constitution.raw}
					/>
				</div>
			</div>
			<div className="grid text-center w-28 md:w-32 h-32 md:h-36 gap-1 mx-auto relative">
				<div id="Recuadro" className="m-auto z-0">
					<Card name={"Inteligencia"} value={attributes.Intelligence.value} />
				</div>
				<div className="z-1 absolute -bottom-2 w-32 lg:w-32 mx-auto">
					<input
						type="text"
						inputMode="numeric"
						pattern="[0-9]*"
						name="Intelligence"
						className="text-lg md:text-xl relative -bottom-2 md:bottom-2 modifier"
						onChange={handleChange}
						value={attributes.Intelligence.raw}
					/>
				</div>
			</div>
			<div className="grid text-center w-28 md:w-32 h-32 md:h-36 gap-1 mx-auto relative">
				<div id="Recuadro" className="m-auto z-0">
					<Card name={"Sabiduría"} value={attributes.Wisdom.value} />
				</div>
				<div className="z-1 absolute -bottom-2 w-32 lg:w-32 mx-auto">
					<input
						type="text"
						inputMode="numeric"
						pattern="[0-9]*"
						name="Wisdom"
						className="text-lg md:text-xl relative -bottom-2 md:bottom-2 modifier"
						onChange={handleChange}
						value={attributes.Wisdom.raw}
					/>
				</div>
			</div>
			<div className="grid text-center w-28 md:w-32 h-32 md:h-36 gap-1 mx-auto relative">
				<div id="Recuadro" className="m-auto z-0">
					<Card name={"Carisma"} value={attributes.Charisma.value} />
				</div>
				<div className="z-1 absolute -bottom-2 w-32 lg:w-32 mx-auto">
					<input
						type="text"
						inputMode="numeric"
						pattern="[0-9]*"
						name="Charisma"
						className="text-lg md:text-xl relative -bottom-2 md:bottom-2 modifier"
						onChange={handleChange}
						value={attributes.Charisma.raw}
					/>
				</div>
			</div>
		</div>
	);
};
