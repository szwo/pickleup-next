import { Title } from '@mantine/core';
import GameCard from 'components/GameCard';
import type { FC } from 'react';
import type { Game } from 'types';

type Props = {
    games: Array<Game>;
};

const GamesList: FC<Props> = ({ games }) => {
    return (
        <>
            <Title order={2}>Upcoming Games</Title>
            <div className="flex flex-wrap justify-center gap-4 my-6 mx-4">
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </>
    );
};

export default GamesList;
