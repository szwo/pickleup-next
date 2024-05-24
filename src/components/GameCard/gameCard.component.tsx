import type { FC } from 'react';
import { Game } from 'types';

type Props = {
    game: Game;
};

const GameCard: FC<Props> = ({ game }) => {
    const { id, start, durationInMinutes, location, confirmedPlayers } = game;

    return (
        <div
            id={id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
            <div>
                <p>
                    <span className="font-bold">{location.name}</span>
                </p>
                <p>Start: {start}</p>
                <p>Duration: {durationInMinutes} minutes</p>
                <p>Address: {location.address}</p>
                <p>Confirmed Players: {confirmedPlayers.length}</p>
            </div>
        </div>
    );
};

export default GameCard;
