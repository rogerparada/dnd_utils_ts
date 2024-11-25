import React from "react";
import LogOutButton from "../../ui/LogOutButton";

export default function PlayerBar() {
	return (
		<div className="sticky top-0 z-50 bg-red-600 w-full h-14 p-2">
			<div className="container mx-auto flex">
				<span className="flex-1"></span>
				<LogOutButton />
			</div>
		</div>
	);
}
