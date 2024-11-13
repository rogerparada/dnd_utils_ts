"use client";
import LevelCalculator from "@/src/components/player/LevelCalculator";
import { ExperienceInput } from "@/src/components/player/ExperienceInput";
import { SelectorPlayer } from "@/src/components/player/SelectorPlayer";
import { SimpleTextbox } from "@/src/components/player/SimpleTextbox";
import { alineamiento, clases, races, trasfondo } from "@/src/Global";
import { useAppStore } from "@/src/store/useAppStore";
import { Characteristics } from "@/src/components/player/Characteristics";
import RoundAttributeBox from "@/src/components/player/RoundAttributeBox";
import AttributeBox from "@/src/components/player/AttributeBox";
import SalvationBox from "@/src/components/player/SalvationBox";
import SkillsBox from "@/src/components/player/SkillsBox";
import DescriptionBox from "@/src/components/player/DescriptionBox";
import ShieldBox from "@/src/components/player/Shields/ShieldBox";
import SquareShieldBox from "@/src/components/player/Shields/SquareShieldBox";
import MultipleBox from "@/src/components/player/MultipleBox";

export default function PlayerPage() {
	const player = useAppStore((state) => state.player);

	return (
		<div className="lg:container m-auto overflow-visible bg-white rounded-lg text-black">
			<div id="header" className="my-5 md:flex w-full border-black border-2 rounded-lg gap-2 p-3">
				<div id="playerName" className="playerName p-5 md:w-1/3 w-full">
					<SimpleTextbox name="name" label="Nombre del Personaje" value={player.name} />
					<LevelCalculator />
				</div>
				<div id="character" className="border-solid border-2 border-black p-5 w-full md:w-2/3 grid md:grid-cols-3 rounded-lg gap-3">
					<div className="">
						<SelectorPlayer items={clases} label="Clase" name="playerClass" value={player.playerClass} />
						<SelectorPlayer items={races} label="Raza" name="race" value={player.race} />
					</div>
					<div className="">
						<SelectorPlayer items={trasfondo} label="Trasfondo" name="background" value={player.background} />
						<SelectorPlayer items={alineamiento} label="Alineamiento" name="alignment" value={player.alignment} />
					</div>

					<div className="w-full">
						<SimpleTextbox name="realName" label="Nombre del jugador" value={player.realName} />
						<ExperienceInput name="Experience" label="Puntos de experiencia" value={player.experiencePoints} />
					</div>
				</div>
			</div>
			<div id="columnas" className="grid md:grid-cols-3 border-black w-full border-2 my-5 rounded-lg min-h-96 gap-5 p-5">
				<div id="col1" className="w-full">
					<div className="flex gap-3 flex-col md:flex-row">
						<Characteristics />
						<div className="w-full ">
							<AttributeBox name="inspiración" label="Inspiración" />
							<RoundAttributeBox name="bonificador" label="Bonificador por competencia" />
							<SalvationBox name="Tiradas de salvación" />
							<SkillsBox name="Habilidades" />
						</div>
					</div>
					<div className="w-full">
						<RoundAttributeBox name="spp" label="Sabiduría Percepción Pasiva" />
						<DescriptionBox name="oce" label="Otras competencias e idiomas" big />
					</div>
				</div>
				<div id="col2" className="">
					<div className="bg-gray-300 w-full rounded-xl p-3 flex flex-col md:gap-3">
						<div className="flex justify-center gap-3">
							<ShieldBox name="ca" />
							<SquareShieldBox name="iniciativa" value={2} />
							<SquareShieldBox name="velocidad" />
						</div>
						<MultipleBox name="puntos" labels={["Puntos de golpe actuales", "Puntos de golpe temporales"]} />
						{/*<div className="hits w-full border-2 flex gap-4">
							<HitDices />
							<Salvations />*/}
					</div>
				</div>
				{/*
					<EnchantsWeapon values={armasHechizos} add={onAddArmorEnchant} del={onDeleteArmorEnchant} mod={onModifyArmorEnchant} />
					<PlatesBox name="mne" label="Dinero y equipo" />*/}

				<div id="col3" className="">
					<div className="bg-gray-300 w-full p-5 rounded-xl">
						<MultipleBox name="puntos" labels={["Rasgos de personalidad", "Ideales", "Vínculos", "Defectos"]} />
					</div>
					<DescriptionBox name="rya" label="Rasgos y Atributos" max />
				</div>
			</div>
		</div>
	);
}
