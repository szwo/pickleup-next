import { SocialPost, sampleData } from 'lib/sampleData';
import { NextApiRequest, NextApiResponse } from 'next';

const simulateAsync = async <T>(result: T) => {
    return new Promise<T>(resolve => {
        setTimeout(() => resolve(result), 3000);
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(400).json({ error: 'Bad request' });
    }

    const data = await simulateAsync<Array<SocialPost>>(sampleData);

    return res.status(200).json({ data });
};

export default handler;
