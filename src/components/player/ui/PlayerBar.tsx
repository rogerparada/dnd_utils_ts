import React from "react";
import LogOutButton from "../../ui/LogOutButton";
import Language from "../../ui/Language";

export default function PlayerBar() {
	return (
		<div className="sticky top-0 z-30 bg-red-600 dark:bg-black w-full h-14 p-2">
			<div className="container mx-auto flex gap-2">
				<span className="flex-1"></span>
				<Language />
				<LogOutButton />
			</div>
		</div>
	);
}
