import { useTranslations } from "next-intl";

import Placa1 from "@/src/assets/images/plates/Placa_1.svg";
import Placa2 from "@/src/assets/images/plates/Placa_2.svg";
import Placa3 from "@/src/assets/images/plates/Placa_3.svg";
import Placa4 from "@/src/assets/images/plates/Placa_4.svg";
import Placa5 from "@/src/assets/images/plates/Placa_5.svg";
import Image from "next/image";

type Props = {
	label: string;
	index: number;
};

export default function Plates({ label, index }: Props) {
	const t = useTranslations("money");
	const plates = [Placa1, Placa2, Placa3, Placa4, Placa5];

	return (
		<div className="plate h-12">
			<Image src={plates[index]} alt={label} className=" w-32" />
			<div className="content flex items-center relative bottom-9">
				<span className=" ml-2 font-bold" style={{ fontSize: "0.6rem" }}>
					{t(label)}&nbsp;
				</span>
				<input type="text" className={`text-xs h-6 w-16 ${index < 4 ? "ml-6" : "ml-4"} border-0 p-0 text-center`} />
			</div>
		</div>
	);
}
