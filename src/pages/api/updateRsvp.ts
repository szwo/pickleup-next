import type { NextApiRequest, NextApiResponse } from 'next';
import type { RsvpResponse } from 'types';
import { getGamesList, saveGamesList } from 'lib/file.helper';

export type RsvpRequest = {
    gameId: string;
    playerId: string;
    response: RsvpResponse;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(400).json({ error: 'Bad request' });
    }

    const { gameId, playerId, response } = req.body as RsvpRequest;

    const gamesList = getGamesList();
    const newGamesList = structuredClone(gamesList);
    const gameToBeUpdated = newGamesList.find(game => game.id === gameId);

    if (!gameToBeUpdated) {
        return res.status(404);
    }

    gameToBeUpdated.players[playerId] = response;
    saveGamesList(newGamesList);
    return res.status(201).json(newGamesList);
};

export default handler;
