import { sampleData } from 'lib/sampleGameData';
import { NextApiRequest, NextApiResponse } from 'next';
import type { Game } from 'types';

const simulateAsync = async <T>(result: T) => {
    return new Promise<T>(resolve => {
        setTimeout(() => resolve(result), 3000);
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(400).json({ error: 'Bad request' });
    }

    const data = await simulateAsync<Array<Game>>(sampleData);

    return res.status(200).json(data);
};

export default handler;
