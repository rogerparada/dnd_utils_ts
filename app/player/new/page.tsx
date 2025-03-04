import NewPlayer from "@/src/components/player/NewPLayer";
import PlayerSheet from "@/src/components/player/PlayerSheet";
import PlayerBar from "@/src/components/player/ui/PlayerBar";
import { AuthTokenSchema } from "@/src/schema";
import { checkLogin } from "@/src/utils/auth";

export default async function PlayerPage() {
	const result = AuthTokenSchema.safeParse(checkLogin());
	if (!result.success) {
		result.error.issues.forEach((issue) => console.log("Edit: Player", { issue }));
	}
	const userInfo = {
		username: result.data?.username,
		userId: result.data?.id,
	};

	return (
		<>
			<NewPlayer>
				<PlayerSheet userInfo={userInfo} />
			</NewPlayer>
			<PlayerBar userInfo={userInfo} />
		</>
	);
}
