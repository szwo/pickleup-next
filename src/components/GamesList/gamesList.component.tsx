import GameCard from 'components/GameCard';
import type { FC } from 'react';
import { Game } from 'types';

type Props = {
    games: Array<Game>;
};

const GamesList: FC<Props> = ({ games }) => {
    return (
        <div className="flex flex-col gap-4 my-6">
            {games.map(game => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
};

export default GamesList;
