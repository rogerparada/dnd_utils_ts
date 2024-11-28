import { useTranslations } from "next-intl";
import { useAppStore } from "@/src/store/useAppStore";
import { attributes } from "@/src/Global";
import Card from "./Card";

export default function Characteristics() {
	const t = useTranslations("common");

	const attributesStore = useAppStore((state) => state.attributes);
	const changeAttributes = useAppStore((state) => state.changeAttributes);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		changeAttributes(name, +value);
	};

	return (
		<div className="flex gap-10 lg:gap-3 flex-wrap xl:flex-col mx-auto">
			{attributes.map((attribute) => (
				<div className="grid text-center w-28 md:w-32 h-32 md:h-36 gap-1 mx-auto relative" key={`${attribute}Box`}>
					<div id="Recuadro" className="m-auto z-0">
						<Card name={t(attribute)} value={attributesStore[attribute].value} />
					</div>
					<div className="z-1 absolute -bottom-2 w-32 lg:w-32 mx-auto">
						<input
							type="text"
							inputMode="numeric"
							pattern="[0-9]*"
							name={attribute}
							className="text-lg md:text-xl relative -bottom-2 md:bottom-2 modifier"
							onChange={handleChange}
							value={attributesStore[attribute].value}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
