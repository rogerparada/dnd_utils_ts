import PlayerSheet from "@/src/components/player/PlayerSheet";
import PlayerBar from "@/src/components/player/ui/PlayerBar";
import { AuthTokenSchema } from "@/src/schema";
import { checkLogin } from "@/src/utils/auth";

export default async function PlayerPage() {
	const result = AuthTokenSchema.safeParse(checkLogin());

	if (!result.success) {
		result.error.issues.forEach((issue) => console.log({ issue }));
	}

	const username = result.data?.username;

	return (
		<>
			<div id="player" className="z-10 w-full xl:container mx-auto lg:pt-5 lg:px-0 mb-20">
				<PlayerSheet />;
			</div>
			{<PlayerBar username={username} />}
		</>
	);
}
