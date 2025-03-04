"use client";

import { useAppStore } from "@/src/store/useAppStore";
import { useEffect } from "react";

export default function NewPlayer({ children }: { children: React.ReactNode }) {
	const playerId = useAppStore((state) => state.player.id);
	const reset = useAppStore((state) => state.resetPlayer);

	useEffect(() => {
		if (playerId) reset();
	}, [playerId]);

	return (
		<div id="player" className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20">
			{children}
		</div>
	);
}
