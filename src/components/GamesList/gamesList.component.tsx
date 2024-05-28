import { Loader, Title } from '@mantine/core';
import GameCard from 'components/GameCard';
import { fetcher } from 'lib/fetch';
import { API_ROUTES } from 'lib/routes';
import { useEffect, useState, type FC } from 'react';
import useSWR from 'swr';
import type { Game } from 'types';

const GamesList: FC = () => {
    const { data, isLoading, mutate } = useSWR<Array<Game>>(API_ROUTES.games, fetcher);
    const [gamesList, setGamesList] = useState<Array<Game>>([]);

    useEffect(() => {
        if (!isLoading && data) {
            setGamesList(data);
        }
    }, [isLoading, data]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Title order={2}>Upcoming Games</Title>
            <div className="flex flex-wrap justify-center gap-4 my-6 mx-4">
                {gamesList.map(game => (
                    <GameCard key={game.id} game={game} isLoading={isLoading} mutate={mutate} />
                ))}
            </div>
        </>
    );
};

export default GamesList;
