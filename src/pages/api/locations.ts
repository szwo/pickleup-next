import { getLocations } from 'lib/file.helper';
import { NextApiRequest, NextApiResponse } from 'next';

const simulateAsync = async <T>(result: T) => {
    return new Promise<T>(resolve => {
        setTimeout(() => resolve(result), 0);
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(400).json({ error: 'Bad request' });
    }

    const locations = getLocations();
    const data = await simulateAsync(locations);

    return res.status(200).json(data);
};

export default handler;
