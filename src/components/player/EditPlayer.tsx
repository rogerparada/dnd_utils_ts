"use client";
import { useAppStore } from "@/src/store/useAppStore";
import { FullPlayer } from "@/src/types";
import { useEffect } from "react";

type EditPlayerProps = {
	newPlayer: FullPlayer;
	children: React.ReactNode;
};

export default function EditPlayer({ newPlayer, children }: EditPlayerProps) {
	const setPlayer = useAppStore((state) => state.setPlayer);

	useEffect(() => {
		setPlayer(newPlayer);
	}, [newPlayer, setPlayer]);

	return (
		<div id="player" className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20">
			{children}
		</div>
	);
}
