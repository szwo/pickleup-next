import { NextApiRequest, NextApiResponse } from 'next';
import { getGamesList } from 'lib/file.helper';

const simulateAsync = async <T>(result: T) => {
    return new Promise<T>(resolve => {
        setTimeout(() => resolve(result), 0);
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(400).json({ error: 'Bad request' });
    }

    const gamesList = getGamesList();
    const data = await simulateAsync(gamesList);

    return res.status(200).json(data);
};

export default handler;
