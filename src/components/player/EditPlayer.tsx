"use client";
import { useAppStore } from "@/src/store/useAppStore";
import { FullPlayer, UserInfo } from "@/src/types";
import { useEffect } from "react";
import PlayerSheet from "./PlayerSheet";

type EditPlayerProps = {
	newPlayer: FullPlayer;

	children: React.ReactNode;
};

export default function EditPlayer({ newPlayer, children }: EditPlayerProps) {
	const setPlayer = useAppStore((state) => state.setPlayer);

	useEffect(() => {
		setPlayer(newPlayer);
	}, [newPlayer]);

	return (
		<div id="player" className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20">
			{children}
		</div>
	);
}
