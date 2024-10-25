import { Character } from "@/src/schema";
import PlayerListItem from "./PlayerListItem";

type PlayerListProps = {
	players: Character[];
};

export default function PlayerList({ players }: PlayerListProps) {
	return (
		<div>
			{players.map((player, index) => (
				<PlayerListItem player={player} key={`playerItem-${index}}`} />
			))}
		</div>
	);
}
