import { sampleData } from 'lib/sampleGameData';
import { NextApiRequest, NextApiResponse } from 'next';
import type { Game } from 'types';
import fs from 'fs';

const simulateAsync = async <T>(result: T) => {
    return new Promise<T>(resolve => {
        setTimeout(() => resolve(result), 0);
    });
};

const SAMPLE_FILE_LOCATION = 'src/lib/sampleData/gamesList.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(400).json({ error: 'Bad request' });
    }

    console.log({ dir: __dirname });

    const data = await simulateAsync<Array<Game>>(sampleData);

    if (fs.readFileSync(SAMPLE_FILE_LOCATION)) {
        const file = fs.readFileSync(SAMPLE_FILE_LOCATION, { encoding: 'utf8' });
        const gameData = JSON.parse(file);
        console.log(gameData);
    }

    return res.status(200).json(data);
};

export default handler;
