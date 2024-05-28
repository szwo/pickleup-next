import type { NextApiRequest, NextApiResponse } from 'next';
import type { Game, RsvpResponse } from 'types';
import fs from 'fs';

export type RsvpRequest = {
    gameId: string;
    playerId: string;
    response: RsvpResponse;
};

const SAMPLE_FILE_LOCATION = 'src/lib/sampleData/gamesList.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(400).json({ error: 'Bad request' });
    }

    const { gameId, playerId, response } = req.body as RsvpRequest;

    if (fs.readFileSync(SAMPLE_FILE_LOCATION)) {
        const file = fs.readFileSync(SAMPLE_FILE_LOCATION, { encoding: 'utf8' });
        const gamesList = JSON.parse(file) as Array<Game>;

        const newGamesList = structuredClone(gamesList);

        const game = newGamesList.find(game => game.id === gameId);

        if (!game) {
            return res.status(404);
        }

        game.players[playerId] = response;

        fs.writeFileSync(SAMPLE_FILE_LOCATION, JSON.stringify(newGamesList, null, 2), 'utf8');
        return res.status(201).json(newGamesList);
    }

    return res.status(200);
};

export default handler;
